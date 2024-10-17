"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[696],{41598:function(v,t,n){var p;n.r(t),n.d(t,{demos:function(){return b}});var l=n(43953),o=n.n(l),M=n(91184),h=n.n(M),c=n(38497),g=n(70091),y=n(25749),b={"qksketchmap-demo-0":{component:c.memo(c.lazy(h()(o()().mark(function d(){var u,a,m,i,s,e,E,_;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(n.t.bind(n,38497,19));case 2:return u=r.sent,a=u.default,r.next=6,Promise.resolve().then(n.bind(n,25749));case 6:return m=r.sent,i=m.QkSketchMap,s=[{name:"\u9879\u76EE\u603B\u8868",equipment:"summaryTable",type:"summaryTable",children:[{name:"\u7535\u8868G1",equipment:"wattHourMeter",type:"wattHourMeter",children:[{name:"\u533A\u57DF1",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]},{name:"\u533A\u57DF2",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]}]},{name:"\u7535\u8868G2",equipment:"wattHourMeter",type:"wattHourMeter",children:[{name:"\u533A\u57DF1",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]}]}]}],e=[{name:"\u9879\u76EE\u603B\u8868",equipment:"summaryTable",type:"summaryTable",children:[{name:"\u533A\u57DF1",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]},{name:"\u533A\u57DF2",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]}]}],E=[{name:"\u533A\u57DF1",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]},{name:"\u533A\u57DF2",type:"region",children:[{name:"\u9006\u53D8\u5668",number:5,equipment:"inverter"},{name:"\u5149\u4F0F\u7EC4\u4EF6",number:1e3,equipment:"photovoltaicModules"}]}],_=function(){return a.createElement("div",null,a.createElement(i,{dataSource:s}))},r.abrupt("return",{default:_});case 13:case"end":return r.stop()}},d)})))),asset:{type:"BLOCK",id:"qksketchmap-demo-0",refAtomIds:["QkSketchMap"],dependencies:{"index.tsx":{type:"FILE",value:`/**\r
 * title: \u5149\u4F0F\u793A\u610F\u56FE\r
 * */\r
import React from 'react';\r
import { QkSketchMap } from 'react-components';\r
\r
const data = [\r
  {\r
    name: '\u9879\u76EE\u603B\u8868',\r
    equipment: 'summaryTable',\r
    type: 'summaryTable',\r
    children: [\r
      {\r
        name: '\u7535\u8868G1',\r
        equipment: 'wattHourMeter',\r
        type: 'wattHourMeter',\r
        children: [\r
          {\r
            name: '\u533A\u57DF1',\r
            type: 'region',\r
            children: [\r
              {\r
                name: '\u9006\u53D8\u5668',\r
                number: 5,\r
                equipment: 'inverter',\r
              },\r
              {\r
                name: '\u5149\u4F0F\u7EC4\u4EF6',\r
                number: 1000,\r
                equipment: 'photovoltaicModules',\r
              },\r
            ],\r
          },\r
          {\r
            name: '\u533A\u57DF2',\r
            type: 'region',\r
            children: [\r
              {\r
                name: '\u9006\u53D8\u5668',\r
                number: 5,\r
                equipment: 'inverter',\r
              },\r
              {\r
                name: '\u5149\u4F0F\u7EC4\u4EF6',\r
                number: 1000,\r
                equipment: 'photovoltaicModules',\r
              },\r
            ],\r
          },\r
        ],\r
      },\r
      {\r
        name: '\u7535\u8868G2',\r
        equipment: 'wattHourMeter',\r
        type: 'wattHourMeter',\r
        children: [\r
          {\r
            name: '\u533A\u57DF1',\r
            type: 'region',\r
            children: [\r
              {\r
                name: '\u9006\u53D8\u5668',\r
                number: 5,\r
                equipment: 'inverter',\r
              },\r
              {\r
                name: '\u5149\u4F0F\u7EC4\u4EF6',\r
                number: 1000,\r
                equipment: 'photovoltaicModules',\r
              },\r
            ],\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
];\r
\r
const data2 = [\r
  {\r
    name: '\u9879\u76EE\u603B\u8868',\r
    equipment: 'summaryTable',\r
    type: 'summaryTable',\r
    children: [\r
      {\r
        name: '\u533A\u57DF1',\r
        type: 'region',\r
        children: [\r
          {\r
            name: '\u9006\u53D8\u5668',\r
            number: 5,\r
            equipment: 'inverter',\r
          },\r
          {\r
            name: '\u5149\u4F0F\u7EC4\u4EF6',\r
            number: 1000,\r
            equipment: 'photovoltaicModules',\r
          },\r
        ],\r
      },\r
      {\r
        name: '\u533A\u57DF2',\r
        type: 'region',\r
        children: [\r
          {\r
            name: '\u9006\u53D8\u5668',\r
            number: 5,\r
            equipment: 'inverter',\r
          },\r
          {\r
            name: '\u5149\u4F0F\u7EC4\u4EF6',\r
            number: 1000,\r
            equipment: 'photovoltaicModules',\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
];\r
\r
const data3 = [\r
  {\r
    name: '\u533A\u57DF1',\r
    type: 'region',\r
    children: [\r
      {\r
        name: '\u9006\u53D8\u5668',\r
        number: 5,\r
        equipment: 'inverter',\r
      },\r
      {\r
        name: '\u5149\u4F0F\u7EC4\u4EF6',\r
        number: 1000,\r
        equipment: 'photovoltaicModules',\r
      },\r
    ],\r
  },\r
  {\r
    name: '\u533A\u57DF2',\r
    type: 'region',\r
    children: [\r
      {\r
        name: '\u9006\u53D8\u5668',\r
        number: 5,\r
        equipment: 'inverter',\r
      },\r
      {\r
        name: '\u5149\u4F0F\u7EC4\u4EF6',\r
        number: 1000,\r
        equipment: 'photovoltaicModules',\r
      },\r
    ],\r
  },\r
];\r
\r
const Example = () => {\r
  return (\r
    <div>\r
      <QkSketchMap dataSource={data} />\r
    </div>\r
  );\r
};\r
\r
export default Example;`},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:p||(p=n.t(c,2)),"react-components":y},renderOpts:{compile:function(){var d=h()(o()().mark(function a(){var m,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(350).then(n.bind(n,48350));case 2:return e.abrupt("return",(m=e.sent).default.apply(m,i));case 3:case"end":return e.stop()}},a)}));function u(){return d.apply(this,arguments)}return u}()}}}},31839:function(v,t,n){n.r(t),n.d(t,{texts:function(){return l}});var p=n(70091);const l=[{value:"\u652F\u6301\u6CA1\u6709\u9879\u76EE\u603B\u8868\u7684\u60C5\u51B5",paraId:0,tocIndex:0},{value:"\u652F\u6301\u6CA1\u6709\u7535\u8868\u53EA\u6709\u603B\u8868\u7684\u60C5\u51B5",paraId:0,tocIndex:0},{value:"\u652F\u6301\u53EA\u5C55\u793A\u5149\u4F0F\u533A\u57DF",paraId:0,tocIndex:0},{value:"\u652F\u6301\u53EA\u5C55\u793A\u9879\u76EE\u603B\u8868",paraId:0,tocIndex:0},{value:`interface dataSourceItem {\r
  name: string; // \u8BBE\u5907\u4E2D\u6587\u540D\u79F0\r
  equipment?: string; // \u8BBE\u5907\u7C7B\u578B \u5982 \u603B\u8868 \u7535\u8868 \u9006\u53D8\u5668 \u5149\u4F0F\u7EC4\u4EF6\r
  type?: string; // \u7C7B\u578B \u5982\u603B\u8868 \u7535\u8868 \u533A\u57DF\r
  children?: dataSourceItem[]; // \u5B50\u96C6\r
  number?: number; // \u6570\u91CF\r
}\r
interface SketchMapType {\r
  /** \u6570\u636E\u6E90 */\r
  dataSource: dataSourceItem[];\r
  options?: {\r
    /** \u8BED\u8A00 */\r
    language?: 'en' | 'cn';\r
    height?: string;\r
  };\r
}
`,paraId:1,tocIndex:2}]}}]);
