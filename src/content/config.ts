import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
          image: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    // 基础信息
    publishDate: z.union([z.date(), z.string()]).optional(),
    updateDate: z.union([z.date(), z.string()]).optional(),
    draft: z.boolean().optional(),

    // 内容
    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    // 分类
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    // SEO 增强字段
    keywords: z.array(z.string()).optional(), // 目标关键词
    readingTime: z.number().optional(), // 阅读时间（分钟）

    // 社交分享优化
    twitterImage: z.string().optional(), // Twitter 专用图片
    ogImage: z.string().optional(), // OpenGraph 专用图片

    // 流量增长字段
    featured: z.boolean().optional(), // 是否精选文章
    trending: z.boolean().optional(), // 是否 trending
    priority: z.number().min(0).max(1).optional(), // URL 优先级 (0-1)

    // 内部链接
    relatedPosts: z.array(z.string()).optional(), // 相关文章 slug

    metadata: metadataDefinition(),
  }),
});

export const collections = {
  post: postCollection,
};
