import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        // Blog typography colors
        'text-primary': 'var(--aw-color-text-primary)',
        'text-secondary': 'var(--aw-color-text-secondary)',
        'code-bg': 'var(--aw-color-code-bg)',
        border: 'var(--aw-color-border)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--aw-font-mono, ui-monospace)', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        // Blog typography sizes
        'blog-body': ['1.125rem', { lineHeight: '1.75' }], // 18px
        'blog-small': ['0.875rem', { lineHeight: '1.5' }], // 14px
        'blog-code': ['0.875rem', { lineHeight: '1.6' }], // 14px
      },
      maxWidth: {
        'blog-content': '65ch', // Optimal reading length
        'blog-prose': '4xl', // 896px
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },

      // Blog typography spacing
      spacing: {
        'section': '3rem', // 48px between sections
        'paragraph': '1.5rem', // 24px between paragraphs
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant, addUtilities, theme }) => {
      addVariant('intersect', '&:not([no-intersect])');
      
      // Blog typography utilities
      addUtilities({
        '.prose-blog': {
          '&': {
            maxWidth: theme('maxWidth.blog-prose'),
            margin: '0 auto',
          },
          '& h1': {
            fontSize: theme('fontSize.4xl')[0],
            lineHeight: '1.2',
            fontWeight: '700',
            letterSpacing: '-0.025em',
            marginBottom: theme('spacing.6'),
          },
          '& h2': {
            fontSize: theme('fontSize.3xl')[0],
            lineHeight: '1.3',
            fontWeight: '700',
            letterSpacing: '-0.025em',
            marginTop: theme('spacing.12'),
            marginBottom: theme('spacing.4'),
          },
          '& h3': {
            fontSize: theme('fontSize.2xl')[0],
            lineHeight: '1.4',
            fontWeight: '600',
            marginTop: theme('spacing.8'),
            marginBottom: theme('spacing.3'),
          },
          '& p': {
            fontSize: theme('fontSize.blog-body')[0],
            lineHeight: '1.75',
            marginBottom: theme('spacing.paragraph'),
          },
          '& ul, & ol': {
            marginBottom: theme('spacing.paragraph'),
            paddingLeft: theme('spacing.6'),
          },
          '& li': {
            marginBottom: theme('spacing.2'),
            lineHeight: '1.75',
          },
          '& blockquote': {
            borderLeftWidth: '4px',
            borderLeftColor: theme('colors.accent'),
            paddingLeft: theme('spacing.6'),
            margin: `${theme('spacing.8')} 0`,
            fontStyle: 'italic',
          },
          '& pre': {
            backgroundColor: theme('colors.code-bg'),
            borderRadius: theme('borderRadius.lg'),
            padding: theme('spacing.6'),
            margin: `${theme('spacing.8')} 0`,
            fontFamily: theme('fontFamily.mono'),
            fontSize: theme('fontSize.blog-code')[0],
            lineHeight: '1.6',
          },
          '& code': {
            fontFamily: theme('fontFamily.mono'),
            fontSize: '0.875em',
            backgroundColor: theme('colors.code-bg'),
            padding: '0.2em 0.4em',
            borderRadius: theme('borderRadius.md'),
          },
          '& pre code': {
            backgroundColor: 'transparent',
            padding: '0',
          },
          '& table': {
            width: '100%',
            margin: `${theme('spacing.8')} 0`,
            borderCollapse: 'collapse',
            fontSize: theme('fontSize.base')[0],
          },
          '& th': {
            backgroundColor: theme('colors.code-bg'),
            fontWeight: '600',
            textAlign: 'left',
            padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
            borderWidth: '1px',
            borderColor: theme('colors.border'),
          },
          '& td': {
            padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
            borderWidth: '1px',
            borderColor: theme('colors.border'),
          },
          '& tr:nth-child(even)': {
            backgroundColor: theme('colors.code-bg'),
          },
          '& img': {
            borderRadius: theme('borderRadius.lg'),
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            margin: `${theme('spacing.8')} 0`,
            maxWidth: '100%',
            height: 'auto',
          },
          '& a': {
            color: theme('colors.accent'),
            textDecoration: 'underline',
            textUnderlineOffset: '2px',
            transition: 'color 0.2s',
          },
          '& a:hover': {
            color: theme('colors.primary'),
          },
        },
      });
    }),
  ],
  darkMode: 'class',
};
