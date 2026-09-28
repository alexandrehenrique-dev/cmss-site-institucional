import type { Metadata } from "next";
import { readContent } from '@/lib/readContent';
import { GlobalContent, PageContent } from '@/types/content';

export function getGlobalContent(): GlobalContent {
  return readContent<GlobalContent>('global.json');
}

export function getPageContent(page: string): PageContent {
  return readContent<PageContent>(`${page}.json`);
}
/*
FUTURO (V2):

export async function getHomeContent() {
  const res = await fetch("https://api.cmss.com/home");
  return res.json();
}
*/
export function getPageMetadata(page: string): Metadata {
  const content = getPageContent(page);
  const title = content.seo?.title ?? content.hero.title;
  return {
    title: page === "home" ? { absolute: title } : title,
    description: content.seo?.description ?? content.hero.subtitle,
  };
}
