# LocalAI Agent — Blog Typography & Layout Specifications

> Professional typography standards for enterprise AI technical content

---

## 📐 Typography System

### Font Families

```css
/* Primary Font Stack - Optimized for readability */
--font-sans: 'Inter Variable', ui-sans-serif, system-ui, sans-serif
--font-heading: 'Inter Variable', ui-sans-serif, system-ui, sans-serif
--font-mono: 'JetBrains Mono', 'Fira Code', ui-monospace, monospace
```

### Font Sizes

| Element | Size | Line Height | Weight |
|---------|------|-------------|--------|
| **H1 (Title)** | 2.25rem (36px) | 1.2 | 700 |
| **H2 (Section)** | 1.875rem (30px) | 1.3 | 700 |
| **H3 (Subsection)** | 1.5rem (24px) | 1.4 | 600 |
| **H4** | 1.25rem (20px) | 1.4 | 600 |
| **Body** | 1.125rem (18px) | 1.75 | 400 |
| **Small** | 0.875rem (14px) | 1.5 | 400 |
| **Code** | 0.875rem (14px) | 1.6 | 400 |

### Line Length & Spacing

```
Optimal Line Length: 65-75 characters
Paragraph Spacing: 1.5em (24px)
Section Spacing: 2.5rem (40px)
```

---

## 📝 Content Layout

### Article Container

```css
max-width: 4xl (896px)
padding: 2rem 1rem (mobile)
padding: 4rem 1.5rem (desktop)
background: var(--bg-card)
```

### Text Hierarchy

```
H1: Title (centered, large)
│
├─ Meta Info (date, author, reading time)
│
├─ Introduction (150-200 words)
│
├─ H2: Main Section
│   ├─ H3: Subsection
│   ├─ Paragraphs (2-4 sentences)
│   ├─ Bullet points
│   └─ Code blocks
│
├─ H2: Main Section
│   └─ ...
│
├─ Conclusion
│
└─ FAQ
```

---

## 🎨 Color System

### Light Mode

```css
--bg-page: #ffffff
--bg-card: #ffffff
--text-primary: #1a202c
--text-secondary: #4a5568
--text-muted: #718096
--accent: #3b82f6
--code-bg: #f7fafc
--border: #e2e8f0
```

### Dark Mode

```css
--bg-page: #0d1117
--bg-card: #161b22
--text-primary: #f0f6fc
--text-secondary: #8b949e
--text-muted: #6e7681
--accent: #58a6ff
--code-bg: #21262d
--border: #30363d
```

---

## 📦 Component Styles

### Headings

```css
h1 {
  font-size: 2.25rem;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

h2 {
  font-size: 1.875rem;
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

h3 {
  font-size: 1.5rem;
  line-height: 1.4;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}
```

### Body Text

```css
p {
  font-size: 1.125rem;
  line-height: 1.75;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

/* Optimal reading experience */
prose {
  max-width: 65ch;
  margin: 0 auto;
}
```

### Lists

```css
ul, ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
  line-height: 1.75;
}

/* Nested lists */
li > ul, li > ol {
  margin-top: 0.5rem;
  margin-bottom: 0;
}
```

### Blockquotes

```css
blockquote {
  border-left: 4px solid var(--accent);
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  color: var(--text-secondary);
}

/* Special quote variants */
blockquote.pro-tip {
  border-left-color: #10b981; /* Green */
}

blockquote.warning {
  border-left-color: #f59e0b; /* Amber */
}
```

### Code Blocks

```css
pre {
  background: var(--code-bg);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 2rem 0;
  overflow-x: auto;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.6;
}

code {
  font-family: var(--font-mono);
  font-size: 0.875em;
  background: var(--code-bg);
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
}

pre code {
  background: transparent;
  padding: 0;
}
```

### Tables

```css
table {
  width: 100%;
  margin: 2rem 0;
  border-collapse: collapse;
  font-size: 1rem;
}

th {
  background: var(--code-bg);
  font-weight: 600;
  text-align: left;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
}

td {
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
}

tr:nth-child(even) {
  background: var(--code-bg);
}
```

### Links

```css
a {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.2s;
}

a:hover {
  color: var(--accent-dark);
}

/* Internal links */
a.internal {
  color: var(--accent);
}

/* External links */
a.external::after {
  content: '↗';
  font-size: 0.75em;
  margin-left: 0.25em;
}
```

### Images

```css
img {
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
  max-width: 100%;
  height: auto;
}

/* Featured image */
img.featured {
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

/* Inline images */
img.inline {
  max-width: 800px;
  margin: 1.5rem auto;
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Font Adjustments |
|------------|-------|------------------|
| **Mobile** | < 640px | H1: 1.75rem, Body: 1rem |
| **Tablet** | 640-1024px | H1: 2rem, Body: 1.0625rem |
| **Desktop** | > 1024px | Full sizes |

---

## ♿ Accessibility

### Requirements

- **Minimum font size:** 16px (1rem)
- **Line height:** 1.5+ for body text
- **Color contrast:** WCAG AA (4.5:1 minimum)
- **Focus states:** Visible outlines on interactive elements
- **Skip links:** For keyboard navigation

### Testing

```
✓ Test with browser zoom at 200%
✓ Verify color contrast with tools
✓ Test keyboard navigation
✓ Check screen reader compatibility
```

---

## 🎯 Performance

### Font Loading

```css
/* Use variable fonts when possible */
@font-face {
  font-family: 'Inter Variable';
  src: url('/fonts/inter-var.woff2') format('woff2');
  font-weight: 100 900;
  font-display: swap;
}

/* Preload critical fonts */
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
```

### CSS Optimization

```
✓ Minify CSS in production
✓ Use CSS custom properties for theming
✓ Avoid !important declarations
✓ Keep specificity low
```

---

## 📊 Content Templates

### Blog Post Structure

```markdown
# TITLE (H1 - 36px, Bold)

**Date** | **Author** | **Reading Time** (14px, Muted)

---

## INTRODUCTION (H2 - 30px, Bold)

Opening paragraph (18px, 1.75 line height)

## MAIN SECTION 1 (H2 - 30px, Bold)

### Subsection (H3 - 24px, Semibold)

Content with:
- Bullet points
- Code blocks
- Tables

## MAIN SECTION 2 (H2 - 30px, Bold)

More content...

## CONCLUSION (H2 - 30px, Bold)

Summary and CTA

## FAQ (H2 - 30px, Bold)

### Q1? (H3 - 24px, Semibold)

Answer...
```

---

## 🛠️ Implementation Checklist

### CSS Setup

- [ ] Define CSS custom properties for colors
- [ ] Set up font families with fallbacks
- [ ] Configure Tailwind typography plugin
- [ ] Create dark mode variants
- [ ] Add responsive breakpoints

### Content Guidelines

- [ ] Use semantic HTML (h1-h6, p, ul, ol)
- [ ] Keep paragraphs short (2-4 sentences)
- [ ] Use lists for scannability
- [ ] Add alt text to images
- [ ] Include code examples where relevant

### Quality Assurance

- [ ] Test on mobile, tablet, desktop
- [ ] Verify dark mode rendering
- [ ] Check color contrast ratios
- [ ] Test with screen readers
- [ ] Validate HTML structure

---

## 📚 References

- [Tailwind Typography Plugin](https://github.com/tailwindlabs/tailwindcss-typography)
- [Inter Font](https://rsms.me/inter/)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

*Version: 1.0 | Created: March 15, 2026*
