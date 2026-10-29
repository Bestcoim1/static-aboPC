import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { versionCss } from "./version-css.mjs";

test("A changed imported stylesheet invalidates every CSS entry point", async () => {
  const parent = await fs.realpath(os.tmpdir());
  const root = await fs.mkdtemp(path.join(parent, "abopc-css-version-"));
  try {
    await fs.mkdir(path.join(root, "assets/css"), { recursive: true });
    await fs.mkdir(path.join(root, "products"));
    await fs.writeFile(path.join(root, "pages.json"), JSON.stringify([{ file: "index.html" }, { file: "products/index.html" }]));
    await fs.writeFile(path.join(root, "index.html"), '<link rel="stylesheet" href="./assets/css/main.css"><a href="./products/index.html">Products</a>');
    await fs.writeFile(path.join(root, "products/index.html"), '<link rel="stylesheet" href="../assets/css/main.css"><link rel="stylesheet" href="../assets/css/page.css">');
    await fs.writeFile(path.join(root, "assets/css/main.css"), '@import url("./layout.css");\nbody { color: black; }');
    await fs.writeFile(path.join(root, "assets/css/layout.css"), '.nav { display: flex; }');
    await fs.writeFile(path.join(root, "assets/css/page.css"), '.card { padding: 16px; }');
    const first = await versionCss(root);
    assert.match(first, /^[0-9a-f]{12}$/);
    assert.equal(await versionCss(root), first, "Packaging unchanged styles must be stable");
    // Only an imported dependency changes; the main stylesheet itself is unchanged.
    await fs.writeFile(path.join(root, "assets/css/layout.css"), '.nav { display: grid; }');
    const second = await versionCss(root);
    assert.notEqual(second, first, "Changing layout must invalidate the HTML's main.css URL");
    for (const file of ["index.html", "products/index.html", "assets/css/main.css"]) {
      const content = await fs.readFile(path.join(root, file), "utf8");
      const versions = [...content.matchAll(/\.css\?v=([0-9a-f]{12})/g)].map((m) => m[1]);
      assert.ok(versions.length, file);
      assert.ok(versions.every((v) => v === second), "Every linked/imported CSS must use the same version: " + file);
      assert.ok(!content.includes("?v=" + first), "No old CSS URL may survive");
    }
    assert.ok((await fs.readFile(path.join(root, "index.html"), "utf8")).includes('href="./products/index.html"'), "Navigation URLs must not change");
  } finally {
    // Only remove the exact temporary directory created above, within the resolved temp parent.
    assert.equal(path.dirname(path.resolve(root)), parent);
    assert.ok(path.basename(root).startsWith("abopc-css-version-"));
    await fs.rm(root, { recursive: true, force: true });
  }
});
