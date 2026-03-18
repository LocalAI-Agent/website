# LocalAI Agent Website — Project Context

## Project Overview

**LocalAI Agent** is an enterprise AI infrastructure solutions website built with Astro 5.0 and Tailwind CSS. The site serves as the official platform for:

- Announcing the vision for local AI deployment
- Sharing product development updates
- Building an early access waitlist
- Publishing technical blog posts about AI infrastructure

**Live Site**: [https://localaiagent.tech](https://localaiagent.tech)

### Tech Stack

| Layer          | Technology                   | Version                           |
| -------------- | ---------------------------- | --------------------------------- |
| **Framework**  | Astro                        | 5.12.9                            |
| **Styling**    | Tailwind CSS                 | 3.4.17                            |
| **Language**   | TypeScript                   | 5.8.3                             |
| **Content**    | MDX (Markdown + JSX)         | 4.3.3                             |
| **Icons**      | Astro Icon                   | 1.1.5 (Tabler + Flat Color Icons) |
| **Images**     | Astro Assets + Unpic         | -                                 |
| **Deployment** | Static Site Generation (SSG) | -                                 |

### Key Features

- ✅ **Light/Dark Mode** — System preference detection with manual toggle
- ✅ **SEO Optimized** — Meta tags, Open Graph, Twitter Cards, automatic sitemap
- ✅ **Performance First** — CLS prevention, font optimization, critical CSS
- ✅ **Responsive Design** — Mobile-first approach
- ✅ **Blog System** — Categories, tags, RSS feed, reading time
- ✅ **Type Safe** — Full TypeScript support with strict null checks

---

## Building and Running

### Prerequisites

- **Node.js**: v18.17.1, v20.3.0, or v21+
- **npm**: v9+ (or compatible package manager)

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server at localhost:4321
npm run dev
```

### Production Build

```bash
# Build production site to ./dist/
npm run build

# Preview production build locally
npm run preview
```

### Code Quality

```bash
# Run all checks (Astro + ESLint + Prettier)
npm run check

# Auto-fix ESLint and Prettier issues
npm run fix
```

### Available Commands

| Command                  | Description                                |
| ------------------------ | ------------------------------------------ |
| `npm run dev`            | Start dev server at `localhost:4321`       |
| `npm run start`          | Alias for `npm run dev`                    |
| `npm run build`          | Build production site to `./dist/`         |
| `npm run preview`        | Preview production build locally           |
| `npm run check`          | Run all checks (Astro + ESLint + Prettier) |
| `npm run check:astro`    | Run Astro type checking                    |
| `npm run check:eslint`   | Run ESLint                                 |
| `npm run check:prettier` | Run Prettier format check                  |
| `npm run fix:eslint`     | Auto-fix ESLint issues                     |
| `npm run fix:prettier`   | Auto-fix Prettier formatting               |
| `npm run astro ...`      | Run Astro CLI commands                     |

### Docker Deployment

```bash
# Build Docker image
docker build -t localai-website .

# Run container on port 8080
docker run -p 8080:80 localai-website

# Or use Docker Compose
docker-compose up -d
```

---

## Project Structure

```
/root/website/
├── public/                          # Static assets (no transformation)
│   ├── _headers                     # Netlify/Vercel headers
│   └── robots.txt                   # SEO robots file
│
├── src/
│   ├── assets/
│   │   ├── favicons/                # Site favicons
│   │   ├── images/                  # Optimized images
│   │   └── styles/
│   │       └── tailwind.css         # Tailwind + custom utilities
│   │
│   ├── components/
│   │   ├── blog/                    # Blog-specific components
│   │   ├── common/                  # Reusable UI components
│   │   ├── ui/                      # Base UI components
│   │   └── widgets/                 # Page section widgets
│   │
│   ├── data/
│   │   └── post/                    # Blog posts (MD/MDX)
│   │
│   ├── layouts/
│   │   ├── Layout.astro             # Root HTML layout
│   │   ├── PageLayout.astro         # Page wrapper with header/footer
│   │   ├── LandingLayout.astro      # Landing page layout
│   │   └── MarkdownLayout.astro     # Markdown content layout
│   │
│   ├── pages/
│   │   ├── [...blog]/               # Blog routes (dynamic)
│   │   ├── index.astro              # Homepage
│   │   ├── about.astro              # About page
│   │   ├── contact.astro            # Contact/Waitlist page
│   │   └── 404.astro                # 404 error page
│   │
│   ├── utils/
│   │   ├── blog.ts                  # Blog utilities
│   │   ├── frontmatter.ts           # Frontmatter plugins
│   │   ├── images.ts                # Image helpers
│   │   └── permalinks.ts            # URL generators
│   │
│   ├── config.yaml                  # Site configuration
│   ├── navigation.ts                # Header/Footer navigation
│   └── types.d.ts                   # TypeScript type definitions
│
├── vendor/
│   └── integration/                 # Custom Astro integration
│
├── astro.config.ts                  # Astro configuration
├── tailwind.config.js               # Tailwind configuration
├── tsconfig.json                    # TypeScript configuration
└── package.json
```

---

## Configuration

### Site Configuration (`src/config.yaml`)

```yaml
site:
  name: LocalAI Agent
  site: 'https://localaiagent.tech'
  base: '/'
  trailingSlash: false

metadata:
  title:
    default: LocalAI Agent - Enterprise AI Infrastructure & Agents
  description: 'LocalAI Agent helps enterprises deploy AI models locally'
  twitter:
    handle: '@localai67177'
    site: '@localai67177'

ui:
  theme: 'system' # "system" | "light" | "dark" | "light:only" | "dark:only"
```

### Navigation (`src/navigation.ts`)

Edit header and footer links:

```typescript
export const headerData = {
  links: [
    { text: 'About', href: getPermalink('/about') },
    { text: 'Blog', href: getBlogPermalink() },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
};
```

### Path Aliases

TypeScript path alias configured in `tsconfig.json`:

```json
{
  "paths": {
    "~/*": ["src/*"]
  }
}
```

Usage in components:

```typescript
import Image from '~/components/common/Image.astro';
import { findImage } from '~/utils/images';
```

---

## Development Conventions

### Component Structure

```astro
---
// Component props with TypeScript interface
export interface Props {
  title?: string;
  isDark?: boolean;
}
const { title = '', isDark = false } = Astro.props;
---

<div class="your-component">
  <slot />
</div>
```

### Blog Post Frontmatter

```markdown
---
publishDate: 2026-03-14
author: Your Name
title: 'Your Post Title'
excerpt: 'Brief summary of your post'
description: 'SEO description'
image: '~/assets/images/blog/image.webp'
category: tutorials
tags: [astro, tailwind, ai]
readingTime: 8
featured: true
metadata:
  canonical: https://localaiagent.tech/blog/your-post
---

Your markdown content here...
```

### Coding Style

- **TypeScript** — Strict null checks enabled
- **ESLint** — Code quality enforcement
- **Prettier** — Code formatting (auto-fix on `npm run fix`)
- **EditorConfig** — Consistent editor settings

### Testing Practices

- Type checking via `astro check`
- Linting via ESLint
- Format validation via Prettier

### Performance Optimizations

#### CLS Prevention (Cumulative Layout Shift)

The project includes comprehensive CLS prevention measures:

1. **Image Dimensions** — All images have explicit `width`, `height`, and `aspectRatio`
2. **Font Loading** — `font-display: swap` prevents FOIT/FOUT
3. **Critical CSS** — Inline critical CSS for above-the-fold content
4. **Layout Containment** — `contain: layout` on Header, Main, Sections
5. **Min-Height Constraints** — Prevent content jumping during load
6. **Aspect Ratio Containers** — Markdown images wrapped in ratio containers

Key CSS in `src/assets/styles/tailwind.css`:

```css
/* Reserve space for images */
img {
  aspect-ratio: attr(width) / attr(height);
  content-visibility: auto;
}

/* Prevent layout shift */
[no-intersect] {
  opacity: 1 !important;
}

/* Header stability */
header {
  min-height: 64px;
  contain: layout;
}
```

#### Image Optimization

```astro
---
import Image from '~/components/common/Image.astro';
---

<Image
  src={image}
  width={1200}
  height={675}
  aspectRatio="16/9"
  loading="lazy"
  decoding="async"
  fetchpriority="high"
  *
  For
  above-the-fold
  images
  *
/>
```

---

## Content Creation

### Creating a New Blog Post

1. Create file in `src/data/post/your-post-slug.md`
2. Add frontmatter with required fields
3. Write content in Markdown/MDX
4. Build and preview

### Creating a New Page

1. Create file in `src/pages/your-page.astro`
2. Import appropriate layout
3. Add metadata and content

```astro
---
import Layout from '~/layouts/PageLayout.astro';

const metadata = {
  title: 'New Page',
  description: 'Page description',
};
---

<Layout metadata={metadata}>
  <section class="py-20">
    <h1>Your Content</h1>
  </section>
</Layout>
```

---

## Deployment

### Build Output

```bash
npm run build
# Output: ./dist/
```

### Supported Platforms

The `dist/` folder contains static files ready for:

- **Vercel** — Automatic deployment from Git
- **Netlify** — Connect Git repo or drag-and-drop `dist/`
- **Cloudflare Pages** — Git integration or CLI
- **GitHub Pages** — Push `dist/` to `gh-pages` branch
- **Docker** — Use provided Dockerfile
- **AWS S3 + CloudFront** — Upload `dist/` to S3 bucket

### Environment Variables

Configure in your hosting platform:

- `GOOGLE_ANALYTICS_ID` — Google Analytics tracking ID
- `SITE_URL` — Production site URL

---

## Key Files Reference

| File                                | Purpose                                             |
| ----------------------------------- | --------------------------------------------------- |
| `astro.config.ts`                   | Astro configuration, integrations, markdown plugins |
| `tailwind.config.js`                | Tailwind theme, colors, fonts, custom utilities     |
| `tsconfig.json`                     | TypeScript configuration, path aliases              |
| `src/config.yaml`                   | Site metadata, SEO, blog settings                   |
| `src/navigation.ts`                 | Header/footer links, social links                   |
| `src/types.d.ts`                    | TypeScript type definitions for components          |
| `src/utils/frontmatter.ts`          | Markdown plugins (reading time, image aspect ratio) |
| `src/components/common/Image.astro` | Optimized image component with CLS prevention       |
| `src/layouts/Layout.astro`          | Root HTML layout with SEO, fonts, analytics         |

---

## Performance Goals

| Metric                    | Target |
| ------------------------- | ------ |
| Lighthouse Performance    | 100    |
| Lighthouse Accessibility  | 100    |
| Lighthouse Best Practices | 100    |
| Lighthouse SEO            | 100    |
| First Contentful Paint    | < 1.0s |
| Largest Contentful Paint  | < 2.5s |
| Cumulative Layout Shift   | < 0.1  |

---

## Resources

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [AstroWind Theme](https://github.com/arthelokyo/astrowind)
- [MDX Documentation](https://mdxjs.com/)

---

_Last updated: March 18, 2026_
