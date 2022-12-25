import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";
export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: "https://demetrey.ru",
  });
  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: "weekly",
    });
  }
  sitemap.end();
  return streamToPromise(sitemap);
});
