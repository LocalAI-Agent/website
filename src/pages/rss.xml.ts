import { getRssString } from '@astrojs/rss';

import { SITE, METADATA, APP_BLOG } from 'astrowind:config';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

export const GET = async () => {
  if (!APP_BLOG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  const posts = await fetchPosts();

  const rss = await getRssString({
    title: `${SITE.name} Blog`,
    subtitle: METADATA?.description || 'Enterprise Local AI Infrastructure & AI Agents',
    description: METADATA?.description || '',
    site: import.meta.env.SITE,

    items: posts.map((post) => ({
      link: getPermalink(post.permalink, 'post'),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate,
      categories: post.tags?.map((tag) => tag.title) || [],
      // Don't include enclosure without proper length - causes validation errors
      // Don't include author without email - causes validation errors
    })),

    trailingSlash: SITE.trailingSlash,
    
    // Add atom:self link for RSS validation
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
    customData: `<atom:link href="${import.meta.env.SITE}/rss.xml" rel="self" type="application/rss+xml" />`,
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
