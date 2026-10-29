// Sao chép website để chạy độc lập hoặc đưa lên hosting; không biên dịch và không deploy.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { check } from "./check.mjs";
const root = fileURLToPath(new URL("../", import.meta.url));
const destination = path.resolve(process.argv[2] || path.join(root, "_site"));
const base = process.env.PAGE_BASE || "";
if (base && !/^\/[a-zA-Z0-9_/-]*$/.test(base))
  throw Error("PAGE_BASE phải là đường dẫn như /ABOPC-static");
if (destination === path.resolve(root) || path.resolve(root).startsWith(destination + path.sep))
  throw Error("Không ghi đè thư mục nguồn hoặc thư mục cha");
if (await fs.stat(destination).catch(() => null))
  throw Error("Thư mục đích đã tồn tại. Chọn thư mục mới để bảo toàn dữ liệu.");
console.log(await check(root));
await fs.mkdir(destination, { recursive: true });
const pages = JSON.parse(await fs.readFile(path.join(root, "pages.json"), "utf8"));
const rootFiles = [
  "README.md",
  "pages.json",
  "export-manifest.json",
  ".static-study.json",
  "serve.mjs",
  "http-file.mjs",
  ".nojekyll",
];
for (const file of [
  ...pages.map((p) => p.file),
  ...rootFiles,
  ...(await fs.readdir(root)).filter((f) => f.endsWith("-LICENSE.txt")),
]) {
  const source = path.join(root, file);
  if (file === ".nojekyll") {
    await fs.writeFile(path.join(destination, file), "");
    continue;
  }
  await fs.mkdir(path.dirname(path.join(destination, file)), { recursive: true });
  await fs.copyFile(source, path.join(destination, file));
}
for (const dir of ["assets", "images", "tools", "docs"])
  await fs.cp(path.join(root, dir), path.join(destination, dir), { recursive: true });
// Chạy kiểm tra trước khi đổi URL 404: URL tuyệt đối là cần thiết khi hosting phục vụ 404 tại đường dẫn sâu.
console.log(await check(destination));
const prefix = base.replace(/\/$/, "") + "/";
const file = path.join(destination, "404.html");
let html = await fs.readFile(file, "utf8");
html = html.replaceAll('="./', `="${prefix}`);
await fs.writeFile(file, html);
const metadataFile = path.join(destination, "export-manifest.json");
const metadata = JSON.parse(await fs.readFile(metadataFile, "utf8"));
metadata.hostingBase = prefix;
await fs.writeFile(metadataFile, JSON.stringify(metadata, null, 2) + "\n");
console.log(await check(destination));
console.log(
  JSON.stringify({ destination, pageBase: prefix, pages: pages.length, published: false }, null, 2),
);
