"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[696],{49071:function(v,r,n){var l;n.r(r),n.d(r,{demos:function(){return b}});var p=n(43953),o=n.n(p),M=n(91184),_=n.n(M),s=n(38497),D=n(32151),y=n(91167),b={"qksketchmap-demo-0":{component:s.memo(s.lazy(_()(o()().mark(function c(){var u,m,a,i,d,e,E,h;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.t.bind(n,38497,19));case 2:return u=t.sent,m=u.default,t.next=6,Promise.resolve().then(n.bind(n,91167));case 6:return a=t.sent,i=a.QkSketchMap,d=[{name:"\u9879\u76EE\u603B\u8868",equipment:"summaryTable",type:"summaryTable",children:[{name:"\u7535\u8868G1",equipment:"wattHourMeter",type:"wattHourMeter",children:[{name:"\u533A\u57DF1",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]},{name:"\u533A\u57DF2",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]}]},{name:"\u7535\u8868G2",equipment:"wattHourMeter",type:"wattHourMeter",children:[{name:"\u533A\u57DF1",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]}]}]}],e=[{name:"\u9879\u76EE\u603B\u8868",equipment:"summaryTable",type:"summaryTable",children:[{name:"\u533A\u57DF1",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]},{name:"\u533A\u57DF2",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]}]}],E=[{name:"\u533A\u57DF1",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]},{name:"\u533A\u57DF2",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]}],h=function(){return m.createElement("div",null,m.createElement(i,{dataSource:d}))},t.abrupt("return",{default:h});case 13:case"end":return t.stop()}},c)})))),asset:{type:"BLOCK",id:"qksketchmap-demo-0",refAtomIds:["QkSketchMap"],dependencies:{"index.tsx":{type:"FILE",value:`/**
 * title: \u5149\u4F0F\u793A\u610F\u56FE
 * */
import React from 'react';
import {QkSketchMap} from 'react-components';

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
                equipment: 'inverter'
              },
              {
                name: '\u5149\u4F0F\u7EC4\u4EF6',
                number: 1000,
                equipment: 'photovoltaicModules'
              }
            ]
          },
          {
            name: '\u533A\u57DF2',
            type: 'region',
            children: [
              {
                name: '\u9006\u53D8\u5668',
                number: 5,
                equipment: 'inverter'
              },
              {
                name: '\u5149\u4F0F\u7EC4\u4EF6',
                number: 1000,
                equipment: 'photovoltaicModules'
              }
            ]
          }
        ]
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
                equipment: 'inverter'
              },
              {
                name: '\u5149\u4F0F\u7EC4\u4EF6',
                number: 1000,
                equipment: 'photovoltaicModules'
              }
            ]
          }
        ]
      }
    ]
  }
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
            equipment: 'inverter'
          },
          {
            name: '\u5149\u4F0F\u7EC4\u4EF6',
            number: 1000,
            equipment: 'photovoltaicModules'
          }
        ]
      },
      {
        name: '\u533A\u57DF2',
        type: 'region',
        children: [
          {
            name: '\u9006\u53D8\u5668',
            number: 5,
            equipment: 'inverter'
          },
          {
            name: '\u5149\u4F0F\u7EC4\u4EF6',
            number: 1000,
            equipment: 'photovoltaicModules'
          }
        ]
      }
    ]
  }
];

const data3 = [
  {
    name: '\u533A\u57DF1',
    type: 'region',
    children: [
      {
        name: '\u9006\u53D8\u5668',
        number: 5,
        equipment: 'inverter'
      },
      {
        name: '\u5149\u4F0F\u7EC4\u4EF6',
        number: 1000,
        equipment: 'photovoltaicModules'
      }
    ]
  },
  {
    name: '\u533A\u57DF2',
    type: 'region',
    children: [
      {
        name: '\u9006\u53D8\u5668',
        number: 5,
        equipment: 'inverter'
      },
      {
        name: '\u5149\u4F0F\u7EC4\u4EF6',
        number: 1000,
        equipment: 'photovoltaicModules'
      }
    ]
  }
];

const Example = () => {
  return (
    <div>
      <QkSketchMap dataSource={data} />
    </div>
  );
};

export default Example;`},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:l||(l=n.t(s,2)),"react-components":y},renderOpts:{compile:function(){var c=_()(o()().mark(function m(){var a,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(440).then(n.bind(n,86440));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,i));case 3:case"end":return e.stop()}},m)}));function u(){return c.apply(this,arguments)}return u}()}}}},80007:function(v,r,n){n.r(r),n.d(r,{texts:function(){return p}});var l=n(32151);const p=[]}}]);
