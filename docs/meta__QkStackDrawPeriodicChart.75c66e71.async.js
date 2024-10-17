"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[795],{90898:function(C,o,r){var d;r.r(o),r.d(o,{demos:function(){return h}});var i=r(43953),l=r.n(i),D=r(91184),E=r.n(D),s=r(38497),x=r(9195),k=r(25749),_=r(79021),h={"qkstackdrawperiodicchart-demo-0":{component:s.memo(s.lazy(E()(l()().mark(function m(){var c,u,a,t,g,n,P,y,A,I,v,S,f;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(r.bind(r,25749));case 2:return c=e.sent,u=c.QkStackDrawPeriodicChart,e.next=6,Promise.resolve().then(r.bind(r,79021));case 6:return a=e.sent,t=a.Typography,e.next=10,Promise.resolve().then(r.t.bind(r,38497,19));case 10:return g=e.sent,n=g.default,P=t.Title,y=t.Paragraph,A=t.Text,I=t.Link,v=[{name:"1",start:"2022-02-01",end:"2022-02-12",columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:8,background:"#C7D0D9",color:"#00000"},{title:"H",value:0,background:"#99C5EE",color:"#1973CB"}],font:{color:"#fff",size:14}},{name:"2",start:"2022-07-01",end:"2022-08-08",columns:[{title:"W",value:2,background:"#A6E9F5",color:"#017297"},{title:"S",value:7,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}],font:{color:"#fff",size:14}},{name:"3",start:"2021-01-10",end:"2022-01-01",font:{color:"#fff",size:14},columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:5,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}]},{name:"4",start:"2021-01-10",end:"2023-01-01",font:{color:"#fff",size:14},columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:5,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}]},{name:"5",start:"2021-03-10",end:"2021-06-01",font:{color:"#fff",size:14},columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:3,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}]},{name:"5",start:"2022-10-10",end:"2023-01-01",font:{color:"#fff",size:14},columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:3,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}]}],S=[{start:"2023-02-01",end:"2023-02-05",columns:[{title:"W",value:0,background:"#A6E9F5",color:"#017297"},{title:"S",value:1,background:"#C7D0D9",color:"#00000"},{title:"H",value:0,background:"#99C5EE",color:"#1973CB"}]},{start:"2023-01-01",end:"2023-01-31",columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:0,background:"#C7D0D9",color:"#00000"},{title:"H",value:0,background:"#99C5EE",color:"#1973CB"}]}],f=function(){return n.createElement("div",null,n.createElement(u,{data:v,options:{width:1190,height:300,xAxios:{nameRender:function(b,p){return p%2===0||p===0?b.replace(/-/g,"/"):b.substring(5).replace(/-/g,"/")}}}}))},e.abrupt("return",{default:f});case 17:case"end":return e.stop()}},m)})))),asset:{type:"BLOCK",id:"qkstackdrawperiodicchart-demo-0",refAtomIds:["QkStackDrawPeriodicChart"],dependencies:{"index.tsx":{type:"FILE",value:`/**\r
 * title: \u5806\u53E0\u5468\u671F\u56FE\r
 * */\r
import { QkStackDrawPeriodicChart } from 'react-components';\r
import { Typography } from 'antd';\r
import React from 'react';\r
const { Title, Paragraph, Text, Link } = Typography;\r
\r
const data = [\r
  {\r
    name: '1',\r
    start: '2022-02-01',\r
    end: '2022-02-12',\r
    columns: [\r
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },\r
      { title: 'S', value: 8, background: '#C7D0D9', color: '#00000' },\r
      { title: 'H', value: 0, background: '#99C5EE', color: '#1973CB' },\r
    ],\r
    font: {\r
      color: '#fff',\r
      size: 14,\r
    },\r
  },\r
  {\r
    name: '2',\r
    start: '2022-07-01',\r
    end: '2022-08-08',\r
    columns: [\r
      { title: 'W', value: 2, background: '#A6E9F5', color: '#017297' },\r
      { title: 'S', value: 7, background: '#C7D0D9', color: '#00000' },\r
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' },\r
    ],\r
    font: {\r
      color: '#fff',\r
      size: 14,\r
    },\r
  },\r
  {\r
    name: '3',\r
    start: '2021-01-10',\r
    end: '2022-01-01',\r
    font: {\r
      color: '#fff',\r
      size: 14,\r
    },\r
    columns: [\r
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },\r
      { title: 'S', value: 5, background: '#C7D0D9', color: '#00000' },\r
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' },\r
    ],\r
  },\r
  {\r
    name: '4',\r
    start: '2021-01-10',\r
    end: '2023-01-01',\r
    font: {\r
      color: '#fff',\r
      size: 14,\r
    },\r
    columns: [\r
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },\r
      { title: 'S', value: 5, background: '#C7D0D9', color: '#00000' },\r
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' },\r
    ],\r
  },\r
  {\r
    name: '5',\r
    start: '2021-03-10',\r
    end: '2021-06-01',\r
    font: {\r
      color: '#fff',\r
      size: 14,\r
    },\r
    columns: [\r
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },\r
      { title: 'S', value: 3, background: '#C7D0D9', color: '#00000' },\r
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' },\r
    ],\r
  },\r
  {\r
    name: '5',\r
    start: '2022-10-10',\r
    end: '2023-01-01',\r
    font: {\r
      color: '#fff',\r
      size: 14,\r
    },\r
    columns: [\r
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },\r
      { title: 'S', value: 3, background: '#C7D0D9', color: '#00000' },\r
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' },\r
    ],\r
  },\r
];\r
\r
const test = [\r
  {\r
    start: '2023-02-01',\r
    end: '2023-02-05',\r
    columns: [\r
      { title: 'W', value: 0, background: '#A6E9F5', color: '#017297' },\r
      { title: 'S', value: 1, background: '#C7D0D9', color: '#00000' },\r
      { title: 'H', value: 0, background: '#99C5EE', color: '#1973CB' },\r
    ],\r
  },\r
  {\r
    start: '2023-01-01',\r
    end: '2023-01-31',\r
    columns: [\r
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },\r
      { title: 'S', value: 0, background: '#C7D0D9', color: '#00000' },\r
      { title: 'H', value: 0, background: '#99C5EE', color: '#1973CB' },\r
    ],\r
  },\r
];\r
\r
const Example = () => {\r
  return (\r
    <div>\r
      <QkStackDrawPeriodicChart\r
        data={data}\r
        options={{\r
          width: 1190,\r
          height: 300,\r
          xAxios: {\r
            nameRender: (date: string, index: number) => {\r
              return index % 2 === 0 || index === 0\r
                ? date.replace(/-/g, '/')\r
                : date.substring(5).replace(/-/g, '/');\r
            },\r
          },\r
        }}\r
      />\r
    </div>\r
  );\r
};\r
\r
export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":k,antd:_,react:d||(d=r.t(s,2))},renderOpts:{compile:function(){var m=E()(l()().mark(function u(){var a,t=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.e(350).then(r.bind(r,48350));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,t));case 3:case"end":return n.stop()}},u)}));function c(){return m.apply(this,arguments)}return c}()}}}},31405:function(C,o,r){r.r(o),r.d(o,{texts:function(){return i}});var d=r(9195);const i=[{value:"\u57FA\u4E8E fabric.js \u65F6\u95F4\u5468\u671F\u56FE\u8868",paraId:0,tocIndex:0},{value:"\u652F\u6301\u5BBD\u5EA6\u81EA\u9002\u5E94",paraId:1,tocIndex:0},{value:"W \u98CE\u529B\u53D1\u7535",paraId:1,tocIndex:0},{value:"S \u5149\u4F0F\u53D1\u7535",paraId:1,tocIndex:0},{value:"H \u6C34\u529B\u53D1\u7535",paraId:1,tocIndex:0},{value:"X \u8F74 \u65F6\u95F4",paraId:1,tocIndex:0},{value:"Y \u8F74 \u53D1\u7535\u91CF",paraId:1,tocIndex:0},{value:`export type DataItem = {\r
  name?: string;\r
  start: string;\r
  end: string;\r
  columns: {\r
    title: string;\r
    value: number;\r
    color: string;\r
    background: string;\r
  }[];\r
  font?: { color?: string; size?: number };\r
  color?: string;\r
  [key: string]: any;\r
};\r
\r
interface QkStackDrawPeriodicChartType {\r
  /** \u6570\u636E */\r
  data: DataItem[];\r
  options?: {\r
    width?: number;\r
    height?: number;\r
    background?: string; //\u80CC\u666F\u8272\r
    margin?:\r
      | {\r
          left?: number;\r
          top?: number;\r
          right?: number;\r
          bottom?: number;\r
        }\r
      | number; //\u95F4\u8DDD\r
    //\u957F\u6761\u4FE1\u606F\r
    strip?: {\r
      height?: number; //\u9AD8\u5EA6\r
      margin?: number;\r
    };\r
    tickLineWidth?: number; //\u523B\u5EA6\u957F\u5EA6\r
    xAxios?: {\r
      show?: boolean;\r
      nameTextStyle?: {\r
        color?: string;\r
        fontSize?: number;\r
      };\r
      nameRender?: ((date: string, index: number) => string) | null | undefined;\r
    };\r
    yAxios?: {\r
      show?: boolean;\r
      width?: number; //Y\u8F74\u5C55\u793A\u7684\u5BBD\u5EA6\r
      nameTextStyle?: {\r
        color?: string;\r
        fontSize?: number;\r
      };\r
    };\r
    [key: string]: any;\r
  };\r
}
`,paraId:2,tocIndex:2}]}}]);
