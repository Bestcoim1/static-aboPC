// Mỗi bộ CSS có một URL phiên bản để HTML mới không dùng nhầm cache CSS cũ.
// Chỉ chạy khi đóng gói trên Node.js; trình duyệt vẫn chỉ tải HTML và CSS.
import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";

export async function versionCss(root) {
  const directory = path.join(root, "assets/css");
  const files = (await fs.readdir(directory)).filter((file) => file.endsWith(".css")).sort();
  const sources = new Map();
  const hash = createHash("sha256");
  for (const file of files) {
    const source = (await fs.readFile(path.join(directory, file), "utf8"))
      .replaceAll("\r\n", "\n")
      .replace(/\.css\?v=[0-9a-f]{12}/g, ".css");
    sources.set(file, source);
    hash.update(file + "\0" + source + "\0");
  }
  const version = hash.digest("hex").slice(0, 12);
  for (const [file, source] of sources) {
    // Version cả CSS được @import; chỉ version main.css là chưa đủ.
    const output = source.replace(
      /(url\(\s*["']?)([^\s"')]+\.css)(?:\?v=[0-9a-f]{12})?(["']?\s*\))/g,
      `$1$2?v=${version}$3`,
    );
    await fs.writeFile(path.join(directory, file), output);
  }
  const pages = JSON.parse(await fs.readFile(path.join(root, "pages.json"), "utf8"));
  for (const page of pages) {
    const file = path.join(root, page.file);
    const html = await fs.readFile(file, "utf8");
    const output = html.replace(/<(?:link|a)\b[^>]*>/g, (tag) =>
      tag.replace(/(\bhref="[^"?]+\.css)(?:\?v=[0-9a-f]{12})?"/g, `$1?v=${version}"`),
    );
    await fs.writeFile(file, output);
  }
  return version;
}
