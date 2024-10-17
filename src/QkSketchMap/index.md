# 光伏示意图

- 支持没有项目总表的情况
- 支持没有电表只有总表的情况
- 支持只展示光伏区域
- 支持只展示项目总表

```tsx
/**
 * title: 光伏示意图
 * */
import React from 'react';
import { QkSketchMap } from 'react-components';

const data = [
  {
    name: '项目总表',
    equipment: 'summaryTable',
    type: 'summaryTable',
    children: [
      {
        name: '电表G1',
        equipment: 'wattHourMeter',
        type: 'wattHourMeter',
        children: [
          {
            name: '区域1',
            type: 'region',
            children: [
              {
                name: '逆变器',
                number: 5,
                equipment: 'inverter',
              },
              {
                name: '光伏组件',
                number: 1000,
                equipment: 'photovoltaicModules',
              },
            ],
          },
          {
            name: '区域2',
            type: 'region',
            children: [
              {
                name: '逆变器',
                number: 5,
                equipment: 'inverter',
              },
              {
                name: '光伏组件',
                number: 1000,
                equipment: 'photovoltaicModules',
              },
            ],
          },
        ],
      },
      {
        name: '电表G2',
        equipment: 'wattHourMeter',
        type: 'wattHourMeter',
        children: [
          {
            name: '区域1',
            type: 'region',
            children: [
              {
                name: '逆变器',
                number: 5,
                equipment: 'inverter',
              },
              {
                name: '光伏组件',
                number: 1000,
                equipment: 'photovoltaicModules',
              },
            ],
          },
        ],
      },
    ],
  },
];

const data2 = [
  {
    name: '项目总表',
    equipment: 'summaryTable',
    type: 'summaryTable',
    children: [
      {
        name: '区域1',
        type: 'region',
        children: [
          {
            name: '逆变器',
            number: 5,
            equipment: 'inverter',
          },
          {
            name: '光伏组件',
            number: 1000,
            equipment: 'photovoltaicModules',
          },
        ],
      },
      {
        name: '区域2',
        type: 'region',
        children: [
          {
            name: '逆变器',
            number: 5,
            equipment: 'inverter',
          },
          {
            name: '光伏组件',
            number: 1000,
            equipment: 'photovoltaicModules',
          },
        ],
      },
    ],
  },
];

const data3 = [
  {
    name: '区域1',
    type: 'region',
    children: [
      {
        name: '逆变器',
        number: 5,
        equipment: 'inverter',
      },
      {
        name: '光伏组件',
        number: 1000,
        equipment: 'photovoltaicModules',
      },
    ],
  },
  {
    name: '区域2',
    type: 'region',
    children: [
      {
        name: '逆变器',
        number: 5,
        equipment: 'inverter',
      },
      {
        name: '光伏组件',
        number: 1000,
        equipment: 'photovoltaicModules',
      },
    ],
  },
];

const Example = () => {
  return (
    <div>
      <QkSketchMap dataSource={data} />
    </div>
  );
};

export default Example;
```
