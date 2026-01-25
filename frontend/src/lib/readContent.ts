import fs from 'fs';
import path from 'path';

export function readContent<T>(file: string): T {
  const fullPath = path.join(process.cwd(), 'src/content', file);
  const raw = fs.readFileSync(fullPath, 'utf-8');
  return JSON.parse(raw) as T;
}