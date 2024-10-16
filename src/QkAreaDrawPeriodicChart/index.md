# 面积周期图

```tsx
/**
 * title: 面积周期图
 * */
import {QkAreaDrawPeriodicChart} from 'react-components';
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
        list: [{ title: 'W1', value: 1350.0 }]
      },
      s: {
        background: '#C7D0D9',
        color: '#2F383D',
        list: [{ title: 'S1', value: 11.0 }]
      },
      h: {
        background: '#99C5EE',
        color: '#1973CB',
        list: [
          { title: 'H1', value: 12345.0 },
          { title: 'H2', value: 4569.022122 }
        ]
      }
    },
    period: ['2023-01-01', '2023-01-31'],
    total: 18275.02
  },
  {
    start: '2023-03-10',
    end: '2023-03-20',
    columns: {
      s: {
        background: '#C7D0D9',
        color: '#2F383D',
        list: [{ title: 'S2', value: 4000.0 }]
      }
    },
    total: 4000
  }
];

const Example = () => {
  return (
    <div>
      <Typography>
        <Title>QkAreaDrawPeriodicChart 组件</Title>
        <Paragraph>
          <ul>
            <li>以时间为维度的时间周期图</li>
          </ul>
        </Paragraph>
      </Typography>
      <QkAreaDrawPeriodicChart
        data={data}
        options={{ height: 400, yAxios: { width: 60 } }}
      />
    </div>
  );
};

export default Example;

```
