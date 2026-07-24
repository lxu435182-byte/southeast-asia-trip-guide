import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const serverDir = path.join(dist, "server");
const hostingDir = path.join(dist, ".openai");

const files = {
  "/": {
    source: "index.html",
    type: "text/html; charset=utf-8",
  },
  "/index.html": {
    source: "index.html",
    type: "text/html; charset=utf-8",
  },
  "/styles.css": {
    source: "styles.css",
    type: "text/css; charset=utf-8",
  },
  "/script.js": {
    source: "script.js",
    type: "application/javascript; charset=utf-8",
  },
};

const assets = {};

for (const [route, file] of Object.entries(files)) {
  assets[route] = {
    body: await readFile(path.join(root, file.source), "utf8"),
    type: file.type,
  };
}

await mkdir(serverDir, { recursive: true });
await mkdir(hostingDir, { recursive: true });

await writeFile(
  path.join(hostingDir, "hosting.json"),
  await readFile(path.join(root, ".openai", "hosting.json"), "utf8"),
);

await writeFile(
  path.join(serverDir, "index.js"),
  `const assets = ${JSON.stringify(assets)};\n\nexport default {\n  async fetch(request) {\n    const url = new URL(request.url);\n    const pathname = url.pathname.endsWith("/") && url.pathname !== "/" ? url.pathname.slice(0, -1) : url.pathname;\n    const asset = assets[pathname] || assets["/"];\n    return new Response(asset.body, {\n      headers: {\n        "content-type": asset.type,\n        "cache-control": "public, max-age=60"\n      }\n    });\n  }\n};\n`,
);
