# 周期图
```tsx
/**
 * title: 周期图
 * */
import {QkDrawPeriodicChartPro} from 'react-components';
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
      size: 16
    },
    background: 'red',
    id: '1'
  },
  {
    name: '222测试风力发电电站2测试风力发电电站2',
    start: '2021-04-01',
    end: '2021-07-01',
    font: {
      color: '#fff',
      size: 16
    },
    background: 'blue',
    id: '2'
  }
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
      <Typography>
        <Title>QkDrawPeriodicChartPro</Title>
        <Paragraph>
          <ul>
            <li>以时间为维度的时间周期图表</li>
          </ul>
        </Paragraph>
      </Typography>
      <QkDrawPeriodicChartPro
        data={data}
        options={{
          width: 1190
        }}
      />
    </div>
  );
};
export default Example;
```
