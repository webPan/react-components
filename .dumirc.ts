import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs',
  base: '/react-components/', // 基础路径
  publicPath: '/react-components/', // 静态资源的公共路径
  resolve: {
    docDirs: ['markdowns'],
  },
  themeConfig: {
    name: 'react',
    nav: [
      { title: '组件库', link: '/components/intro' },
      { title: '博客', link: 'https://www.cnblogs.com/yz-blog' },
      { title: 'Gitee', link: 'https://gitee.com/qing_321' },
    ],
    sidebar: {
      '/components': [
        { title: '介绍', link: '/intro', children: [] },
        {
          title: '图表类',
          children: [
            {
              title: '堆叠周期图',
              link: '/components/qk-stack-draw-periodic-chart',
            },
            {
              title: '面积周期图',
              link: '/components/qk-area-draw-periodic-chart',
            },
            {
              title: '简单的周期图',
              link: '/components/qk-draw-periodic-chart-pro',
            },
            {
              title: '高德地图',
              link: '/components/qk-gao-de-map',
            },
            {
              title: '高德地图Echat版本',
              link: '/components/qk-gao-de-echart-map',
            },
          ],
        },
        {
          title: '基础组件',
          children: [
            {
              title: '模态框',
              link: '/components/qk-custom-modal',
            },
            {
              title: '步骤组件',
              link: '/components/qk-custom-steps',
            },
            {
              title: '自定义标签',
              link: '/components/qk-custom-tags',
            },
            {
              title: '按钮折叠',
              link: '/components/qk-qr-code',
            },
          ],
        },
        {
          title: 'Antd 二次封装',
          children: [
            {
              title: 'Table',
              link: '/components/qk-pro-table',
            },
            {
              title: '图片预览',
              link: '/components/qk-image-preview',
            },
            {
              title: '文件上传',
              link: '/components/qk-upload',
            },
          ],
        },
        {
          title: '其他组件',
          children: [
            {
              title: '二维码',
              link: '/components/qk-qr-code',
            },
            {
              title: '光伏示意图',
              link: '/components/qk-sketch-map',
            },
            {
              title: '组件懒加载',
              link: '/components/use-qk-scroll-load',
            },
            {
              title: '数学公式',
              link: '/components/qk-generate-math-formula',
            },
            {
              title: '树型卡片',
              link: '/components/qk-tree-card',
            },
          ],
        },
      ],
    },
  },
});
