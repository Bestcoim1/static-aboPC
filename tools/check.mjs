// Kiểm tra gói HTML/CSS bằng Node.js, không cài npm và không chạy trong trình duyệt.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";
const defaultRoot = fileURLToPath(new URL("../", import.meta.url));
export async function check(root = defaultRoot) {
  root = path.resolve(root);
  const manifest = JSON.parse(await fs.readFile(path.join(root, "export-manifest.json"), "utf8"));
  const hostingBase = (manifest.hostingBase || "").replace(/\/$/, "");
  const pages = JSON.parse(await fs.readFile(path.join(root, "pages.json"), "utf8"));
  const files = [];
  async function walk(dir, prefix = "") {
    for (const e of await fs.readdir(dir, { withFileTypes: true })) {
      if ([".git", "node_modules", "_site"].includes(e.name)) continue;
      const name = prefix + e.name;
      if (e.isDirectory()) await walk(path.join(dir, e.name), name + "/");
      else files.push(name);
    }
  }
  await walk(root);
  assert.deepEqual(
    files.filter((f) => f.endsWith(".html")).sort(),
    pages.map((p) => p.file).sort(),
    "pages.json phải liệt kê đủ HTML, không trùng",
  );
  assert.equal(
    files.filter((f) => /\.(js|cjs|gz|br)$/.test(f)).length,
    0,
    "Không bàn giao runtime hoặc bản nén cũ",
  );
  const html = new Map(),
    ids = new Map();
  let references = 0;
  for (const p of pages) {
    const source = await fs.readFile(path.join(root, p.file), "utf8");
    html.set(p.file, source);
    assert.match(source, /<!doctype html>/i, p.file);
    assert.match(source, /<html\b[^>]*lang="vi"/i, p.file);
    assert.equal((source.match(/<main\b/gi) || []).length, 1, p.file);
    assert.equal((source.match(/<h1\b/gi) || []).length, 1, p.file);
    assert.ok(
      !/<script\b|<[^>]+\son\w+\s*=|(?:href|src)\s*=\s*["']\s*javascript:|rel=["']modulepreload/i.test(
        source,
      ),
      "Runtime trong " + p.file,
    );
    const all = [...source.matchAll(/<[^>]+\sid="([^"]+)"/g)].map((m) => m[1]);
    assert.equal(all.length, new Set(all).size, "ID trùng " + p.file);
    ids.set(p.file, new Set(all));
  }
  async function reference(value, file) {
    value = value.replaceAll("&amp;", "&");
    if (/^(data:|https?:|mailto:|tel:|#?$)/.test(value)) return;
    const url = new URL(value, "https://local.test/" + file);
    if (url.pathname.endsWith(".css") && url.search) {
      assert.match(url.search, /^\?v=[0-9a-f]{12}$/, "CSS version không hợp lệ: " + file);
    } else {
      assert.equal(url.search, "", "Không dùng query động: " + file);
    }
    if (url.pathname.endsWith(".css") && manifest.stylesheetVersion) {
      assert.equal(url.search, "?v=" + manifest.stylesheetVersion, "CSS khác phiên bản gói: " + file);
    }
    let pathname = url.pathname;
    if (value.startsWith("/") && hostingBase && pathname.startsWith(hostingBase + "/"))
      pathname = pathname.slice(hostingBase.length);
    const relative = decodeURIComponent(pathname.slice(1));
    let dest = path.resolve(root, relative);
    assert.ok(dest.startsWith(root + path.sep) || dest === root, "Đường dẫn ra ngoài gói");
    let stat = await fs.stat(dest).catch(() => null);
    assert.ok(stat, `Thiếu ${value} trong ${file}`);
    if (stat.isDirectory()) dest = path.join(dest, "index.html");
    await fs.access(dest);
    const key = path.relative(root, dest).split(path.sep).join("/");
    if (url.hash)
      assert.ok(
        ids.get(key)?.has(decodeURIComponent(url.hash.slice(1))),
        `Anchor không tồn tại: ${value} trong ${file}`,
      );
    references++;
  }
  for (const [file, source] of html) {
    for (const tag of source.matchAll(/<(?:a|link|img|source)\b[^>]*>/g)) {
      for (const a of tag[0].matchAll(/\s(?:href|src)="([^"]+)"/g)) await reference(a[1], file);
      for (const a of tag[0].matchAll(/\ssrcset="([^"]+)"/g))
        for (const candidate of a[1].split(","))
          await reference(candidate.trim().split(/\s+/)[0], file);
    }
  }
  for (const file of files.filter((f) => f.endsWith(".css"))) {
    const css = await fs.readFile(path.join(root, file), "utf8");
    for (const m of css.matchAll(/url\(\s*["']?([^)'"\s]+)["']?\s*\)/g))
      await reference(m[1], file);
  }
  const productIds = [];
  for (const [i, file] of [
    "products/index.html",
    "products/page-2.html",
    "products/page-3.html",
  ].entries()) {
    const source = html.get(file);
    const ids = [...source.matchAll(/data-product-id="([^"]+)"/g)].map((m) => m[1]);
    assert.equal(ids.length, [9, 9, 8][i], file);
    productIds.push(...ids);
    const pagination = source.match(/<nav\b[^>]*class="pagination"[\s\S]*?<\/nav>/)?.[0] || "";
    assert.equal((pagination.match(/aria-current="page"/g) || []).length, 1, file);
  }
  assert.equal(new Set(productIds).size, 26, "Không thiếu hoặc lặp sản phẩm");
  return {
    ok: true,
    pages: pages.length,
    products: productIds.length,
    cssFiles: files.filter((f) => f.endsWith(".css")).length,
    references,
    browserJavaScriptFiles: 0,
  };
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url))
  console.log(JSON.stringify(await check(process.argv[2]), null, 2));
