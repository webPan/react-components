import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'react',
    nav: [{ title: '组件库', link: '/components' }],
  },
});
