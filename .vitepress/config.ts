import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ts-learn',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Note', link: '/docs/day01' },
    ],

    sidebar: [
      {
        text: 'Note',
        items: [
          { text: 'Day01', link: '/docs/day01' },
          { text: 'Day02', link: '/docs/day02' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/jason11q/ts-learn' }],
  },
});
