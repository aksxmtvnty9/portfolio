import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '@consts';

export async function GET(context: { site: string }) {
  const posts = await getCollection('blog');
  
  return rss({
    title: `${SITE.NAME} - Blog`,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: posts
      .filter(post => !post.data.draft)
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/blog/${post.slug}/`,
      })),
  });
}
