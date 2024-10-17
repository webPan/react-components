import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs',
  base: '/react-components/', // 基础路径
  publicPath: '/react-components/', // 静态资源的公共路径
  themeConfig: {
    name: 'react',
    nav: [
      { title: '组件库', link: '/components/qk-btn-group-collapsed' },
      { title: '博客', link: 'https://www.cnblogs.com/yz-blog' },
      { title: 'Giee', link: 'https://gitee.com/qing_321' },
    ],
  },
  resolve: {
    docDirs: ['markdowns'],
  },
});
