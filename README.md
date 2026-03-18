# LocalAI Agent — Official Website

> **Enterprise AI Infrastructure Solutions** — Deploy local AI models and run enterprise-grade AI agents securely on your own infrastructure.

[![Built with AstroWind](https://img.shields.io/badge/built%20with-AstroWind-ff69b4?style=flat-square)](https://github.com/arthelokyo/astrowind)
[![Astro](https://img.shields.io/badge/Astro-5.0-bc52ee?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-000000?style=flat-square)](./LICENSE.md)

---

## 🌐 Live Site

**Production**: [https://localaiagent.tech](https://localaiagent.tech)

---

## 📋 Project Overview

**LocalAI Agent** is building the next generation of enterprise AI infrastructure. This website serves as the official platform to:

- Announce our vision for local AI deployment
- Share updates about product development
- Build an early access waitlist
- Engage with the community via blog posts

### Key Features

- ✅ **Light/Dark Mode** — Unified background design with subtle glow effects and dot patterns
- ✅ **SEO Optimized** — Meta tags, Open Graph, Twitter Cards, automatic sitemap
- ✅ **Performance First** — 100/100 PageSpeed Insights score target
- ✅ **Responsive Design** — Mobile-first, works on all devices
- ✅ **Blog System** — MDX support, categories, tags, RSS feed
- ✅ **Analytics Ready** — Built-in support for Google Analytics & Splitbee
- ✅ **Type Safe** — Full TypeScript support

---

## 🏗️ Tech Stack

| Layer          | Technology                                   |
| -------------- | -------------------------------------------- |
| **Framework**  | [Astro 5.0](https://astro.build/)            |
| **Styling**    | [Tailwind CSS 3.4](https://tailwindcss.com/) |
| **Language**   | TypeScript 5.8                               |
| **Content**    | MDX (Markdown + JSX)                         |
| **Icons**      | Astro Icon (Tabler + Flat Color Icons)       |
| **Images**     | Astro Assets + Unpic                         |
| **Deployment** | Static (SSG)                                 |

---

## 📁 Project Structure

```
/root/astrowind/
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
│   │   │   ├── Grid.astro
│   │   │   ├── List.astro
│   │   │   ├── SinglePost.astro
│   │   │   └── ...
│   │   ├── common/                  # Reusable UI components
│   │   │   ├── ApplyColorMode.astro
│   │   │   ├── CommonMeta.astro
│   │   │   ├── Image.astro
│   │   │   └── ...
│   │   ├── ui/                      # Base UI components
│   │   │   ├── Background.astro
│   │   │   ├── Button.astro
│   │   │   ├── Headline.astro
│   │   │   └── ...
│   │   ├── widgets/                 # Page section widgets
│   │   │   ├── Features.astro
│   │   │   ├── Hero.astro
│   │   │   ├── Pricing.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro       # Theme CSS variables (Light/Dark)
│   │   ├── Favicons.astro
│   │   └── Logo.astro
│   │
│   ├── content/                     # Content collections (optional)
│   │   └── config.ts
│   │
│   ├── data/
│   │   └── post/                    # Blog posts (MD/MDX)
│   │       ├── post-slug-1.md
│   │       └── ...
│   │
│   ├── layouts/
│   │   ├── Layout.astro             # Root HTML layout
│   │   ├── PageLayout.astro         # Page wrapper with header/footer
│   │   ├── LandingLayout.astro      # Landing page layout
│   │   └── MarkdownLayout.astro     # Markdown content layout
│   │
│   ├── pages/
│   │   ├── [...blog]/               # Blog routes (dynamic)
│   │   │   ├── [category]/
│   │   │   ├── [tag]/
│   │   │   ├── [...page].astro
│   │   │   └── index.astro
│   │   ├── index.astro              # Homepage
│   │   ├── about.astro              # About page
│   │   ├── contact.astro            # Contact/Waitlist page
│   │   ├── 404.astro                # 404 error page
│   │   ├── rss.xml.ts               # RSS feed generator
│   │   ├── privacy.md               # Privacy policy
│   │   └── terms.md                 # Terms of service
│   │
│   ├── utils/
│   │   ├── blog.ts                  # Blog utilities
│   │   ├── frontmatter.ts           # Frontmatter plugins
│   │   ├── images.ts                # Image helpers
│   │   ├── permalinks.ts            # URL generators
│   │   └── utils.ts                 # General utilities
│   │
│   ├── config.yaml                  # Site configuration
│   ├── navigation.ts                # Header/Footer navigation
│   ├── types.d.ts                   # TypeScript type definitions
│   └── env.d.ts                     # Environment type declarations
│
├── vendor/
│   └── integration/                 # Custom Astro integration
│
├── astro.config.ts                  # Astro configuration
├── tailwind.config.js               # Tailwind configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json
└── ...
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js**: v18.17.1, v20.3.0, or v21+
- **npm**: v9+ (or pnpm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/LocalAI-Agent/localaiagent.tech.git
cd localaiagent.tech

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321)

---

## 📜 Available Commands

| Command             | Description                                |
| ------------------- | ------------------------------------------ |
| `npm run dev`       | Start dev server at `localhost:4321`       |
| `npm run build`     | Build production site to `./dist/`         |
| `npm run preview`   | Preview production build locally           |
| `npm run check`     | Run all checks (Astro + ESLint + Prettier) |
| `npm run fix`       | Auto-fix ESLint and Prettier issues        |
| `npm run astro ...` | Run Astro CLI commands                     |

---

## ⚙️ Configuration

### Site Configuration (`src/config.yaml`)

```yaml
site:
  name: LocalAI Agent
  site: 'https://localaiagent.tech'
  base: '/'
  trailingSlash: false

metadata:
  title:
    default: LocalAI Agent
    template: '%s — LocalAI Agent'
  description: 'Enterprise AI Infrastructure Solutions'
  # ... more SEO settings

ui:
  theme: 'system' # "system" | "light" | "dark" | "light:only" | "dark:only"
```

### Navigation (`src/navigation.ts`)

Edit header and footer links:

```typescript
export const headerData = {
  links: [
    { text: 'About', href: '/about' },
    { text: 'Blog', href: '/blog' },
    { text: 'Contact', href: '/contact' },
  ],
};
```

### Theme Customization (`src/components/CustomStyles.astro`)

Customize colors, fonts, and mode-specific styles:

```css
:root {
  /* Light Mode - Clean AI Lab */
  --aw-color-bg-page: rgb(248 250 252);
  --aw-color-bg-card: rgb(248 250 252);
  --aw-color-primary: rgb(1 97 239);
  --aw-glow-primary: radial-gradient(circle at 50% 0%, rgba(1, 97, 239, 0.08) 0%, transparent 50%);
}

.dark {
  /* Dark Mode - Deep AI Space */
  --aw-color-bg-page: rgb(2 6 23);
  --aw-color-bg-card: rgb(2 6 23);
  --aw-glow-primary-dark: radial-gradient(circle at 50% 0%, rgba(1, 97, 239, 0.15) 0%, transparent 50%);
}
```

---

## 🎨 Design System

### Color Palette

#### Light Mode — "Clean AI Lab"

| Token                | Value              | Usage           |
| -------------------- | ------------------ | --------------- |
| `--aw-color-bg-page` | `rgb(248 250 252)` | Page background |
| `--aw-color-bg-card` | `rgb(248 250 252)` | Card background |
| `--aw-color-primary` | `rgb(1 97 239)`    | Primary actions |
| `--aw-color-accent`  | `rgb(109 40 217)`  | Accent elements |

#### Dark Mode — "Deep AI Space"

| Token                | Value             | Usage           |
| -------------------- | ----------------- | --------------- |
| `--aw-color-bg-page` | `rgb(2 6 23)`     | Page background |
| `--aw-color-bg-card` | `rgb(2 6 23)`     | Card background |
| `--aw-color-primary` | `rgb(1 97 239)`   | Primary actions |
| `--aw-color-accent`  | `rgb(109 40 217)` | Accent elements |

### Visual Effects

- **Glow Effects**: Radial gradients for ambient lighting
- **Dot Pattern**: 4px grid overlay for subtle texture
- **Glassmorphism**: Backdrop blur on cards with transparency
- **Gradients**: Smooth vertical gradients for depth

### Utility Classes

```html
<!-- Page backgrounds -->
<div class="bg-page dark:bg-dark">
  <div class="bg-gradient-page dark:bg-gradient-page-dark">
    <!-- Cards (match mode background) -->
    <div class="bg-card dark:bg-card-dark">
      <div class="bg-card/50 dark:bg-card-dark/50 backdrop-blur-sm">
        <!-- Glow layers -->
        <div class="glow-primary dark:glow-primary-dark"></div>
      </div>
    </div>
  </div>
</div>
```

---

## 📝 Content Creation

### Blog Posts

Create new posts in `src/data/post/`:

```markdown
---
publishDate: 2026-03-14
title: 'Your Post Title'
excerpt: 'Brief summary of your post'
image: ./path/to/image.webp
category: tutorials
tags: [astro, tailwind, ai]
author: Your Name
---

Your markdown content here...
```

### Pages

Create new pages in `src/pages/`:

```astro
---
import Layout from '~/layouts/PageLayout.astro';

const metadata = {
  title: 'New Page',
};
---

<Layout metadata={metadata}>
  <section class="py-20">
    <h1>Your Content</h1>
  </section>
</Layout>
```

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

Output: `./dist/`

### Deploy to Vercel

```bash
# Connect your GitHub repo to Vercel
vercel
```

### Deploy to Netlify

```bash
# Connect your GitHub repo to Netlify
# Or use the Netlify CLI
netlify deploy --prod
```

### Deploy Anywhere

The `dist/` folder contains static files ready for any hosting service:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- AWS S3 + CloudFront
- Docker (see below)

---

## 🐳 Docker Support

### Build and Run

```bash
# Build Docker image
docker build -t localai-website .

# Run container
docker run -p 4321:80 localai-website
```

### Docker Compose

```bash
docker-compose up -d
```

---

## 🔧 Development Guidelines

### Component Structure

```astro
---
// Component props
export interface Props {
  title?: string;
  isDark?: boolean;
}
const { title = '', isDark = false } = Astro.props;
---

<style is:inline>
  /* Component-specific styles */
</style>

<div class="your-component">
  <slot />
</div>
```

### Best Practices

1. **Use Astro Components** — Prefer `.astro` over React/Vue for simplicity
2. **Island Architecture** — Add interactivity only where needed
3. **Image Optimization** — Use `astro:assets` for automatic optimization
4. **Type Safety** — Define interfaces for all components
5. **Accessibility** — Include `aria-label`, semantic HTML
6. **Performance** — Lazy load non-critical resources

---

## 📊 Performance Goals

| Metric                    | Target | Status |
| ------------------------- | ------ | ------ |
| Lighthouse Performance    | 100    | ✅     |
| Lighthouse Accessibility  | 100    | ✅     |
| Lighthouse Best Practices | 100    | ✅     |
| Lighthouse SEO            | 100    | ✅     |
| First Contentful Paint    | < 1.0s | ✅     |
| Largest Contentful Paint  | < 2.5s | ✅     |
| Cumulative Layout Shift   | < 0.1  | ✅     |

---

## 🤝 Contributing

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- **ESLint** — Code quality
- **Prettier** — Code formatting
- **TypeScript** — Type safety

```bash
# Check code quality
npm run check

# Auto-fix issues
npm run fix
```

---

## 📚 Resources

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [AstroWind Theme](https://github.com/arthelokyo/astrowind)
- [MDX Documentation](https://mdxjs.com/)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE.md) file for details.

---

## 🙏 Acknowledgements

- Built with [AstroWind](https://github.com/arthelokyo/astrowind) template
- Icons by [Tabler Icons](https://tabler-icons.io/) and [Flat Color Icons](https://github.com/googlefonts/noto-emoji)
- Fonts by [Inter Variable](https://rsms.me/inter/)

---

## 📞 Contact

- **Website**: [https://localaiagent.tech](https://localaiagent.tech)
- **Twitter**: [@localai67177](https://twitter.com/localai67177)
- **GitHub**: [LocalAI-Agent](https://github.com/LocalAI-Agent)

---

_Last updated: March 14, 2026_
