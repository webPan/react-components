import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs',
  base: '/react-components/', // 基础路径
  publicPath: '/react-components/', // 静态资源的公共路径
  themeConfig: {
    name: 'react',
    nav: [{ title: '组件库', link: '/components' }],
    docDirs: 'md',
  },
});
