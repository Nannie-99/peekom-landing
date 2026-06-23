import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import pngToIco from "png-to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
async function writeIcoFromPng(pngPath, icoPath, label) {
  if (!fs.existsSync(pngPath)) {
    console.error(`[icons] ${label} source not found: ${pngPath}`);
    process.exit(1);
  }
  const buf = await pngToIco(pngPath);
  fs.writeFileSync(icoPath, buf);
  console.log(`[icons] ${path.relative(root, icoPath)} ← ${path.relative(root, pngPath)}`);
}

await writeIcoFromPng(
  path.join(root, "build", "index.png"),
  path.join(root, "build", "icon.ico"),
  "Peekom"
);

const plusPng = path.join(root, "build", "plus.png");
if (fs.existsSync(plusPng)) {
  await writeIcoFromPng(plusPng, path.join(root, "build", "plus.ico"), "Peekom Plus");
}
