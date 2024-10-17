import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs',
  themeConfig: {
    name: 'react',
    nav: [{ title: '组件库', link: '/components' }],
    docDirs: 'md',
    base: '/react-components',
  },
});
