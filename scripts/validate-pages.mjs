import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "out");
const basePath = "/QML4CyberSecurity";

const requiredPages = [
  "index.html",
  "modules/index.html",
  ...Array.from({ length: 10 }, (_, index) =>
    `modules/m${index + 1}/index.html`,
  ),
  ...Array.from({ length: 10 }, (_, index) => {
    const moduleId = `m${index + 1}`;
    return ["pre-lab", "hands-on-lab", "post-lab"].map(
      (phase) => `modules/${moduleId}/${phase}/index.html`,
    );
  }).flat(),
];

for (const relativePath of requiredPages) {
  await access(path.join(output, relativePath));
}

await access(
  path.join(output, "downloads", "QSVM_Malware_Family_Classification.ipynb"),
);

for (const relativePath of requiredPages) {
  const html = await readFile(path.join(output, relativePath), "utf8");
  assert.doesNotMatch(
    html,
    /(?:href|src)=["']\/(?!QML4CyberSecurity(?:\/|["'#]))/,
    `${relativePath} contains an application URL without the GitHub Pages base path`,
  );
}

const home = await readFile(path.join(output, "index.html"), "utf8");
assert.match(home, new RegExp(`${basePath}/_next/`));
assert.match(home, new RegExp(`${basePath}/modules/m1`));

console.log(
  `Validated ${requiredPages.length} static pages, their base paths, and the Module 1 notebook.`,
);
