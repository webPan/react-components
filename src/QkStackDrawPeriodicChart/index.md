# 堆叠周期图
```tsx
/**
 * title: 堆叠周期图
 * */
import {QkStackDrawPeriodicChart} from 'react-components';
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
      { title: 'H', value: 0, background: '#99C5EE', color: '#1973CB' }
    ],
    font: {
      color: '#fff',
      size: 14
    }
  },
  {
    name: '2',
    start: '2022-07-01',
    end: '2022-08-08',
    columns: [
      { title: 'W', value: 2, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 7, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' }
    ],
    font: {
      color: '#fff',
      size: 14
    }
  },
  {
    name: '3',
    start: '2021-01-10',
    end: '2022-01-01',
    font: {
      color: '#fff',
      size: 14
    },
    columns: [
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 5, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' }
    ]
  },
  {
    name: '4',
    start: '2021-01-10',
    end: '2023-01-01',
    font: {
      color: '#fff',
      size: 14
    },
    columns: [
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 5, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' }
    ]
  },
  {
    name: '5',
    start: '2021-03-10',
    end: '2021-06-01',
    font: {
      color: '#fff',
      size: 14
    },
    columns: [
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 3, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' }
    ]
  },
  {
    name: '5',
    start: '2022-10-10',
    end: '2023-01-01',
    font: {
      color: '#fff',
      size: 14
    },
    columns: [
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 3, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' }
    ]
  }
];

const test = [
  {
    start: '2023-02-01',
    end: '2023-02-05',
    columns: [
      { title: 'W', value: 0, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 1, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 0, background: '#99C5EE', color: '#1973CB' }
    ]
  },
  {
    start: '2023-01-01',
    end: '2023-01-31',
    columns: [
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 0, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 0, background: '#99C5EE', color: '#1973CB' }
    ]
  }
];

const Example = () => {
  return (
    <div>
      <Typography>
        <Title>QkStackDrawPeriodicChart 时间周期图表</Title>
        <Paragraph>
          <ul>
            <li>以时间周期为维度的周期图表</li>
          </ul>
        </Paragraph>
      </Typography>
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
            }
          }
        }}
      />
    </div>
  );
};

export default Example;

```
