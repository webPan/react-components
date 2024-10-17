# 周期图

- 基于 fabric.js 写的图表
- 以时间为维度的时间周期图表

## 示例
```tsx
/**
 * title: 周期图
 * */
import { QkDrawPeriodicChartPro } from 'react-components';
import { Typography } from 'antd';
import React from 'react';
const { Title, Paragraph, Text, Link } = Typography;

const data = [
  {
    name: '1111测试风力发电电站1',
    start: '2021-01-01',
    end: '2021-03-07',
    font: {
      color: '#fff',
      size: 16,
    },
    background: 'red',
    id: '1',
  },
  {
    name: '222测试风力发电电站2测试风力发电电站2',
    start: '2021-04-01',
    end: '2021-07-01',
    font: {
      color: '#fff',
      size: 16,
    },
    background: 'blue',
    id: '2',
  },
  // {
  //   name: "333测试光伏发电电站1",
  //   start: "2022/06/01",
  //   end: "2022/09/01",
  //   font: {
  //     color: "#fff",
  //     size: 16
  //   },
  //   background: "red",
  //   id: "3"
  // },
  // {
  //   name: "444测试光伏发电电站2",
  //   start: "2021/12/31",
  //   end: "2022/12/01",
  //   font: {
  //     color: "#fff",
  //     size: 16
  //   },
  //   background: "red",
  //   id: "4"
  // },
  // {
  //   name: "555测试光伏发电电站2",
  //   start: "2020/12/31",
  //   end: "2022/10/10",
  //   font: {
  //     color: "#fff",
  //     size: 16
  //   },
  //   background: "green",
  //   id: "5"
  // }
];

const Example = () => {
  return (
    <div>
      <QkDrawPeriodicChartPro
        data={data}
        options={{
          width: 1190,
        }}
      />
    </div>
  );
};
export default Example;
```

## API
```ts

interface DataItem {
  id: string;
  name: string;
  start: string;
  end: string;
  font?: {
    color?: string;
    size?: number;
  };
  background?: string;
}
interface DrawPeriodicChartType {
  /** 数据 */
  data: DataItem[];
  options?: {
    diyDrawXaxios?: boolean;
    width?: number;
    height?: number;
    background?: string; // 背景色
    margin?:
      | number
      | {
          top?: number;
          right?: number;
          bottom?: number;
          left?: number;
        }; // 间距
    // 长条信息
    strip?: {
      height?: number; // 高度
      margin?: number; // 间距
      onMouseout?: (stripCanvas: any) => any; // 鼠标经过
      onMouseover?: (stripCanvas: any) => any; // 鼠标离开
    };
    xAxios?: {
      show?: boolean;
      width?: number;
      nameTextStyle?: {
        color?: string;
        fontSize?: number;
      };
      nameRender?: (date: string, index: number) => string;
    };
    yAxios?: {
      onMouseout?: (stripCanvas: any) => any; // 鼠标经过
      onMouseover?: (stripCanvas: any) => any; // 鼠标离开
      onClick?: (data: DataItem[]) => any;
      labelWidth?: number;
      height?: number; // 刻度高度
      show?: boolean;
      width?: number; // Y轴展示的宽度
      nameTextStyle?: {
        color?: string;
        fontSize?: number;
        underline?: boolean;
      };
      showToolTip?: boolean; // 是否显示tooltip
    };
    [key: string]: any;
  };
}
```
