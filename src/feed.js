import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "./consts";

/**
 * Shared feed builder. Served at /rss.xml and, for subscribers carried over
 * from the Hugo site, at the legacy /index.xml.
 */
export async function feed(context) {
  const posts = (await getCollection("posts")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? post.data.summary,
      pubDate: post.data.date,
      link: `/blog/${post.id}`,
    })),
  });
}
