import { readContent } from "@/lib/readContent";

export function getHomeContent() {
  return readContent("home.json");
}

export function getExampleContent() {
  return readContent("example.json");
}

/*
FUTURO (V2):

export async function getHomeContent() {
  const res = await fetch("https://api.cmss.com/home");
  return res.json();
}
*/