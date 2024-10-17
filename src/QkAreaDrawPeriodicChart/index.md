# 面积周期图

> 基于 fabric.js 时间周期图表

- 支持宽度自适应
- W 风力发电
- S 光伏发电
- H 水力发电
- X 轴 时间
- Y 轴 发电量
## 示例
```tsx
/**
 * title: 面积周期图
 * */
import { QkAreaDrawPeriodicChart } from 'react-components';
import { Typography } from 'antd';
import React from 'react';
const { Title, Paragraph, Text, Link } = Typography;
const data = [
  {
    start: '2023-01-01',
    end: '2023-01-31',
    columns: {
      w: {
        background: '#A6E9F5',
        color: '#017297',
        list: [{ title: 'W1', value: 1350.0 }],
      },
      s: {
        background: '#C7D0D9',
        color: '#2F383D',
        list: [{ title: 'S1', value: 11.0 }],
      },
      h: {
        background: '#99C5EE',
        color: '#1973CB',
        list: [
          { title: 'H1', value: 12345.0 },
          { title: 'H2', value: 4569.022122 },
        ],
      },
    },
    period: ['2023-01-01', '2023-01-31'],
    total: 18275.02,
  },
  {
    start: '2023-03-10',
    end: '2023-03-20',
    columns: {
      s: {
        background: '#C7D0D9',
        color: '#2F383D',
        list: [{ title: 'S2', value: 4000.0 }],
      },
    },
    total: 4000,
  },
];

const Example = () => {
  return (
    <div>
      <QkAreaDrawPeriodicChart
        data={data}
        options={{ height: 400, yAxios: { width: 60 } }}
      />
    </div>
  );
};

export default Example;
```

## API

```ts

interface Column {
  background: string; //背景颜色
  color: string; //文字颜色
  list: { title: string; value: number }[];
}

interface DataItem {
  name?: string; //名字
  start: string; //起始时间
  end: string; //结束时间
  //各行数据
  columns: {
    w?: Column;
    s?: Column;
    h?: Column;
    [key: string]: Column | undefined; // 添加额外的索引签名
  };
  [key: string]: any;
}

interface QkAreaDrawPeriodicChartType {
  /** 数据 */
  data: DataItem[]; //数据源
  options?: {
    width?: number; //宽度
    height?: number; //高度
    background?: string; //背景色
    //上下左右间隙
    margin?:
      | {
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
        }
      | number; //间距
    //长条信息
    strip?: {
      width?: number; //宽度
      margin?: number; //间距
      radius?: number; //圆角
      minHeight?: number; // 最小高度
    };
    //X轴配置
    xAxios?: {
      show?: boolean; //是否显示X轴
      //X轴文字样式
      nameTextStyle?: {
        color?: string; //文字颜色
        fontSize?: number; //文字大小
      };
      //自定义X轴内容
      nameRender?: (date: Date, index: number) => string | null;
    };
    //Y轴配置
    yAxios?: {
      height?: number; //刻度高度
      show?: boolean; //是否显示Y轴
      width?: number; //Y轴展示的宽度
      //Y轴文字样式
      nameTextStyle?: {
        color?: string; //文字颜色
        fontSize?: number; //字体大小
      };
    };
    [key: string]: any;
  };
}
```
