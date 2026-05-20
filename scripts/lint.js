import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const checkedDirs = ["src", "test", "scripts"];
const errors = [];

function collectJsFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    return statSync(path).isDirectory() ? collectJsFiles(path) : [path];
  }).filter((path) => path.endsWith(".js"));
}

for (const dir of checkedDirs) {
  for (const file of collectJsFiles(dir)) {
    const content = readFileSync(file, "utf8");

    if (content.includes("\t")) {
      errors.push(`${file}: tabs are not allowed`);
    }

    if (content.split("\n").some((line) => line.length > 100)) {
      errors.push(`${file}: line is longer than 100 characters`);
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Lint checks passed");
