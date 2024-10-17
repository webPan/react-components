# 高德地图

- 基于 高德地图 二次封装，将高频使用的功能都写进了组件
- 支持开启卫星地图
- 支持开启标注点加载省名称
- 支持开启各个省的边界线
- 支持某个点的详细地址标注 tip
- 支持海量点标注及动画效果
- 支持海量点点击，自定义窗体
- 支持按 ctrl+滚轮缩放地图
- 支持某个区域绘制边界线
- 支持定位并自动缩放级别
- 支持多语言

## 示例
```tsx
import { QkGaoDeMap } from 'react-components';
import { Typography } from 'antd';
import React from 'react';
const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  return (
    <div>
      <div style={{ height: '500px', position: 'relative' }}>
        <QkGaoDeMap
          dataSource={[
            {
              // name: '项目地址',
              name: '上海市静安区东方明珠',
              lngLat: [121.499427, 31.239772],
              id: 1,
              color: 'red',
              address: '上海市静安区东方明珠',
              size: 12,
            },
          ]}
          tileLayerOptions={{}}
          districtLayerOptions={{}}
          AMapOptions={{
            center: [106.258754, 38.471317],
            zoomEnable: true, // 是否缩放
            dragEnable: true, // 是否拖动
            showLabel: false,
          }}
          strokeOptions={{
            strokeWeight: 2,
            fillColor: '#002322',
            fillOpacity: 0.62,
            name: '中国',
          }}
          mapZoomShortcut="ctrl+mousewheel"
          autoLocateScaleLevels={true}
          completed={(gdMap) => {
            // console.log(assetsInfo.province)
            //   console.log('地图加载完成')
          }}
        />
      </div>
    </div>
  );
};

export default Example;
```

## API
```ts

export interface PointType {
  id: string | number; // 辅助作用
  lngLat: [number, number] | null; // 经纬度
  color?: string; // 点颜色 默认红色
  animation?: 'DIFFUSION'; // 动画 点扩散
  size?: number; // 点大小 无需带单位 默认8px
  hasInfoWindow?: boolean; //是否有窗体
  [key: string]: any;
}

interface InfoWindowOptions {
  title?: string;
  // 需要展示的字段 label 文案 dataIndex 向dataSource 需要取的值
  columns: Array<{ title: string; dataIndex: string; unit?: string }>;
  // 右上角按钮
  more?: {
    text?: string; // 超链接文字 默认详情
    url?: string; // 链接url  向dataSource 需要取的值
  };
  pointerEvents?: string; // 默认none
}

interface QkGaoDeMapType {
  /** AMap配置 */
  AMapOptions?: Record<string, any>;
  /** load 配置 */
  options?: Record<string, any>;
  /** 描边配置
   *  不写该属性不会进行描边
   *  启用描边 strokeOptions:{}
   * */
  strokeOptions?: {
    name?: string; // 绘制边界名称 例如：中国 湖南
    strokeWeight?: number; // 描边宽度
    fillColor?: string; // 填充颜色
    fillOpacity?: number; // 填充透明度
    [key: string]: any;
  };
  /** 加载卫星地图配置  */
  tileLayerOptions?: Record<string, any>;
  /** 加载行政区配置  */
  districtLayerOptions?: Record<string, any>;
  /** 数据源 */
  dataSource?: PointType[];
  /** 地图加载完成 */
  completed?: (gdMap: { AMap: null; map: null }) => void;
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: CSSProperties;
  /**
   * 自定义窗体
   * 默认不启用
   * 启用 infoWindow:{}
   * */
  infoWindow?: {
    options?: InfoWindowOptions;
    // 如果render存在，则会覆盖上面的配置
    render?: (data: PointType) => React.ReactNode;
  };
  /** 地图缩放快捷键 默认mousewheel */
  mapZoomShortcut?: 'mousewheel' | 'ctrl+mousewheel';
  /**  自动定位并缩放级别 */
  autoLocateScaleLevels?: boolean;
  /** 是否叠加省名称 默认true */
  isAddProvinceNamesLayer?: boolean;
  /** 语言 */
  language?: 'en' | 'cn';
}
```
