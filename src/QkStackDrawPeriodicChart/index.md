# 堆叠周期图

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
 * title: 堆叠周期图
 * */
import { QkStackDrawPeriodicChart } from 'react-components';
import { Typography } from 'antd';
import React from 'react';
const { Title, Paragraph, Text, Link } = Typography;

const data = [
  {
    name: '1',
    start: '2022-02-01',
    end: '2022-02-12',
    columns: [
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 8, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 0, background: '#99C5EE', color: '#1973CB' },
    ],
    font: {
      color: '#fff',
      size: 14,
    },
  },
  {
    name: '2',
    start: '2022-07-01',
    end: '2022-08-08',
    columns: [
      { title: 'W', value: 2, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 7, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' },
    ],
    font: {
      color: '#fff',
      size: 14,
    },
  },
  {
    name: '3',
    start: '2021-01-10',
    end: '2022-01-01',
    font: {
      color: '#fff',
      size: 14,
    },
    columns: [
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 5, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' },
    ],
  },
  {
    name: '4',
    start: '2021-01-10',
    end: '2023-01-01',
    font: {
      color: '#fff',
      size: 14,
    },
    columns: [
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 5, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' },
    ],
  },
  {
    name: '5',
    start: '2021-03-10',
    end: '2021-06-01',
    font: {
      color: '#fff',
      size: 14,
    },
    columns: [
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 3, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' },
    ],
  },
  {
    name: '5',
    start: '2022-10-10',
    end: '2023-01-01',
    font: {
      color: '#fff',
      size: 14,
    },
    columns: [
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 3, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' },
    ],
  },
];

const test = [
  {
    start: '2023-02-01',
    end: '2023-02-05',
    columns: [
      { title: 'W', value: 0, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 1, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 0, background: '#99C5EE', color: '#1973CB' },
    ],
  },
  {
    start: '2023-01-01',
    end: '2023-01-31',
    columns: [
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 0, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 0, background: '#99C5EE', color: '#1973CB' },
    ],
  },
];

const Example = () => {
  return (
    <div>
      <QkStackDrawPeriodicChart
        data={data}
        options={{
          width: 1190,
          height: 300,
          xAxios: {
            nameRender: (date: string, index: number) => {
              return index % 2 === 0 || index === 0
                ? date.replace(/-/g, '/')
                : date.substring(5).replace(/-/g, '/');
            },
          },
        }}
      />
    </div>
  );
};

export default Example;
```

## API

```ts
export type DataItem = {
  name?: string;
  start: string;
  end: string;
  columns: {
    title: string;
    value: number;
    color: string;
    background: string;
  }[];
  font?: { color?: string; size?: number };
  color?: string;
  [key: string]: any;
};

interface QkStackDrawPeriodicChartType {
  /** 数据 */
  data: DataItem[];
  options?: {
    width?: number;
    height?: number;
    background?: string; //背景色
    margin?:
      | {
          left?: number;
          top?: number;
          right?: number;
          bottom?: number;
        }
      | number; //间距
    //长条信息
    strip?: {
      height?: number; //高度
      margin?: number;
    };
    tickLineWidth?: number; //刻度长度
    xAxios?: {
      show?: boolean;
      nameTextStyle?: {
        color?: string;
        fontSize?: number;
      };
      nameRender?: ((date: string, index: number) => string) | null | undefined;
    };
    yAxios?: {
      show?: boolean;
      width?: number; //Y轴展示的宽度
      nameTextStyle?: {
        color?: string;
        fontSize?: number;
      };
    };
    [key: string]: any;
  };
}
```
