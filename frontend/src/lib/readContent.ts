import fs from "fs";
import path from "path";

export function readContent(relativePath: string) {
  const fullPath = path.join(process.cwd(), "src/content", relativePath);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Content file not found: ${relativePath}`);
  }

  const file = fs.readFileSync(fullPath, "utf-8");
  return JSON.parse(file);
}