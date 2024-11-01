"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[696],{49071:function(v,r,n){var l;n.r(r),n.d(r,{demos:function(){return b}});var p=n(43953),o=n.n(p),M=n(91184),h=n.n(M),d=n(38497),g=n(32151),y=n(50451),b={"qksketchmap-demo-0":{component:d.memo(d.lazy(h()(o()().mark(function c(){var u,a,m,i,s,e,E,_;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.t.bind(n,38497,19));case 2:return u=t.sent,a=u.default,t.next=6,Promise.resolve().then(n.bind(n,50451));case 6:return m=t.sent,i=m.QkSketchMap,s=[{name:"\u9879\u76EE\u603B\u8868",equipment:"summaryTable",type:"summaryTable",children:[{name:"\u7535\u8868G1",equipment:"wattHourMeter",type:"wattHourMeter",children:[{name:"\u533A\u57DF1",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]},{name:"\u533A\u57DF2",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]}]},{name:"\u7535\u8868G2",equipment:"wattHourMeter",type:"wattHourMeter",children:[{name:"\u533A\u57DF1",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]}]}]}],e=[{name:"\u9879\u76EE\u603B\u8868",equipment:"summaryTable",type:"summaryTable",children:[{name:"\u533A\u57DF1",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]},{name:"\u533A\u57DF2",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]}]}],E=[{name:"\u533A\u57DF1",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]},{name:"\u533A\u57DF2",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]}],_=function(){return a.createElement("div",null,a.createElement(i,{dataSource:s}))},t.abrupt("return",{default:_});case 13:case"end":return t.stop()}},c)})))),asset:{type:"BLOCK",id:"qksketchmap-demo-0",refAtomIds:["QkSketchMap"],dependencies:{"index.tsx":{type:"FILE",value:`/**
 * title: \u5149\u4F0F\u793A\u610F\u56FE
 * */
import React from 'react';
import { QkSketchMap } from 'react-components';

const data = [
  {
    name: '\u9879\u76EE\u603B\u8868',
    equipment: 'summaryTable',
    type: 'summaryTable',
    children: [
      {
        name: '\u7535\u8868G1',
        equipment: 'wattHourMeter',
        type: 'wattHourMeter',
        children: [
          {
            name: '\u533A\u57DF1',
            type: 'region',
            children: [
              {
                name: '\u9006\u53D8\u5668',
                number: 5,
                equipment: 'inverter',
              },
              {
                name: '\u5149\u4F0F\u7EC4\u4EF6',
                number: 1000,
                equipment: 'photovoltaicModules',
              },
            ],
          },
          {
            name: '\u533A\u57DF2',
            type: 'region',
            children: [
              {
                name: '\u9006\u53D8\u5668',
                number: 5,
                equipment: 'inverter',
              },
              {
                name: '\u5149\u4F0F\u7EC4\u4EF6',
                number: 1000,
                equipment: 'photovoltaicModules',
              },
            ],
          },
        ],
      },
      {
        name: '\u7535\u8868G2',
        equipment: 'wattHourMeter',
        type: 'wattHourMeter',
        children: [
          {
            name: '\u533A\u57DF1',
            type: 'region',
            children: [
              {
                name: '\u9006\u53D8\u5668',
                number: 5,
                equipment: 'inverter',
              },
              {
                name: '\u5149\u4F0F\u7EC4\u4EF6',
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
    name: '\u9879\u76EE\u603B\u8868',
    equipment: 'summaryTable',
    type: 'summaryTable',
    children: [
      {
        name: '\u533A\u57DF1',
        type: 'region',
        children: [
          {
            name: '\u9006\u53D8\u5668',
            number: 5,
            equipment: 'inverter',
          },
          {
            name: '\u5149\u4F0F\u7EC4\u4EF6',
            number: 1000,
            equipment: 'photovoltaicModules',
          },
        ],
      },
      {
        name: '\u533A\u57DF2',
        type: 'region',
        children: [
          {
            name: '\u9006\u53D8\u5668',
            number: 5,
            equipment: 'inverter',
          },
          {
            name: '\u5149\u4F0F\u7EC4\u4EF6',
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
    name: '\u533A\u57DF1',
    type: 'region',
    children: [
      {
        name: '\u9006\u53D8\u5668',
        number: 5,
        equipment: 'inverter',
      },
      {
        name: '\u5149\u4F0F\u7EC4\u4EF6',
        number: 1000,
        equipment: 'photovoltaicModules',
      },
    ],
  },
  {
    name: '\u533A\u57DF2',
    type: 'region',
    children: [
      {
        name: '\u9006\u53D8\u5668',
        number: 5,
        equipment: 'inverter',
      },
      {
        name: '\u5149\u4F0F\u7EC4\u4EF6',
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

export default Example;`},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:l||(l=n.t(d,2)),"react-components":y},renderOpts:{compile:function(){var c=h()(o()().mark(function a(){var m,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(440).then(n.bind(n,86440));case 2:return e.abrupt("return",(m=e.sent).default.apply(m,i));case 3:case"end":return e.stop()}},a)}));function u(){return c.apply(this,arguments)}return u}()}}}},80007:function(v,r,n){n.r(r),n.d(r,{texts:function(){return p}});var l=n(32151);const p=[{value:"\u652F\u6301\u6CA1\u6709\u9879\u76EE\u603B\u8868\u7684\u60C5\u51B5",paraId:0,tocIndex:0},{value:"\u652F\u6301\u6CA1\u6709\u7535\u8868\u53EA\u6709\u603B\u8868\u7684\u60C5\u51B5",paraId:0,tocIndex:0},{value:"\u652F\u6301\u53EA\u5C55\u793A\u5149\u4F0F\u533A\u57DF",paraId:0,tocIndex:0},{value:"\u652F\u6301\u53EA\u5C55\u793A\u9879\u76EE\u603B\u8868",paraId:0,tocIndex:0},{value:`interface dataSourceItem {
  name: string; // \u8BBE\u5907\u4E2D\u6587\u540D\u79F0
  equipment?: string; // \u8BBE\u5907\u7C7B\u578B \u5982 \u603B\u8868 \u7535\u8868 \u9006\u53D8\u5668 \u5149\u4F0F\u7EC4\u4EF6
  type?: string; // \u7C7B\u578B \u5982\u603B\u8868 \u7535\u8868 \u533A\u57DF
  children?: dataSourceItem[]; // \u5B50\u96C6
  number?: number; // \u6570\u91CF
}
interface SketchMapType {
  /** \u6570\u636E\u6E90 */
  dataSource: dataSourceItem[];
  options?: {
    /** \u8BED\u8A00 */
    language?: 'en' | 'cn';
    height?: string;
  };
}
`,paraId:1,tocIndex:2}]}}]);
