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
export function getSiteUrl(): URL {
  return new URL(process.env.SITE_URL || getGlobalContent().seo.siteUrl);
}

export function getPageMetadata(page: string): Metadata {
  const content = getPageContent(page);
  const { seo } = getGlobalContent();
  const title = content.seo?.title ?? content.hero.title;
  const description = content.seo?.description ?? content.hero.subtitle;
  const shareTitle = page === "home" ? title : `${title} | ${seo.title}`;
  const url = new URL(page === "home" ? "/" : `/${page}`, getSiteUrl());
  const image = { url: new URL(seo.shareImage.src, getSiteUrl()).href,
    width: seo.shareImage.width, height: seo.shareImage.height,
    alt: seo.shareImage.alt, type: "image/jpeg" };
  return {
    title: page === "home" ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website", locale: "pt_BR", siteName: seo.title,
      title: shareTitle, description, url, images: [image],
    },
    twitter: { card: "summary_large_image", title: shareTitle, description, images: [image] },
  };
}
