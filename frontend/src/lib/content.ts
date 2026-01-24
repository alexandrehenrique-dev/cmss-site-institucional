import fs from "fs";
import path from "path";

export function getHomeContent() {
  const filePath = path.join(process.cwd(), "src/content/home.json");
  const file = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(file);
}