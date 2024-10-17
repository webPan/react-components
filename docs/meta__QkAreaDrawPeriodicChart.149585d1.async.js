"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[721],{61958:function(v,a,r){var d;r.r(a),r.d(a,{demos:function(){return y}});var u=r(43953),l=r.n(u),g=r(91184),h=r.n(g),c=r(38497),A=r(13899),E=r(25749),P=r(79021),y={"qkareadrawperiodicchart-demo-0":{component:c.memo(c.lazy(h()(l()().mark(function m(){var s,i,o,t,p,n,C,f,b,I,_,D;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(r.bind(r,25749));case 2:return s=e.sent,i=s.QkAreaDrawPeriodicChart,e.next=6,Promise.resolve().then(r.bind(r,79021));case 6:return o=e.sent,t=o.Typography,e.next=10,Promise.resolve().then(r.t.bind(r,38497,19));case 10:return p=e.sent,n=p.default,C=t.Title,f=t.Paragraph,b=t.Text,I=t.Link,_=[{start:"2023-01-01",end:"2023-01-31",columns:{w:{background:"#A6E9F5",color:"#017297",list:[{title:"W1",value:1350}]},s:{background:"#C7D0D9",color:"#2F383D",list:[{title:"S1",value:11}]},h:{background:"#99C5EE",color:"#1973CB",list:[{title:"H1",value:12345},{title:"H2",value:4569.022122}]}},period:["2023-01-01","2023-01-31"],total:18275.02},{start:"2023-03-10",end:"2023-03-20",columns:{s:{background:"#C7D0D9",color:"#2F383D",list:[{title:"S2",value:4e3}]}},total:4e3}],D=function(){return n.createElement("div",null,n.createElement(i,{data:_,options:{height:400,yAxios:{width:60}}}))},e.abrupt("return",{default:D});case 16:case"end":return e.stop()}},m)})))),asset:{type:"BLOCK",id:"qkareadrawperiodicchart-demo-0",refAtomIds:["QkAreaDrawPeriodicChart"],dependencies:{"index.tsx":{type:"FILE",value:`/**\r
 * title: \u9762\u79EF\u5468\u671F\u56FE\r
 * */\r
import { QkAreaDrawPeriodicChart } from 'react-components';\r
import { Typography } from 'antd';\r
import React from 'react';\r
const { Title, Paragraph, Text, Link } = Typography;\r
const data = [\r
  {\r
    start: '2023-01-01',\r
    end: '2023-01-31',\r
    columns: {\r
      w: {\r
        background: '#A6E9F5',\r
        color: '#017297',\r
        list: [{ title: 'W1', value: 1350.0 }],\r
      },\r
      s: {\r
        background: '#C7D0D9',\r
        color: '#2F383D',\r
        list: [{ title: 'S1', value: 11.0 }],\r
      },\r
      h: {\r
        background: '#99C5EE',\r
        color: '#1973CB',\r
        list: [\r
          { title: 'H1', value: 12345.0 },\r
          { title: 'H2', value: 4569.022122 },\r
        ],\r
      },\r
    },\r
    period: ['2023-01-01', '2023-01-31'],\r
    total: 18275.02,\r
  },\r
  {\r
    start: '2023-03-10',\r
    end: '2023-03-20',\r
    columns: {\r
      s: {\r
        background: '#C7D0D9',\r
        color: '#2F383D',\r
        list: [{ title: 'S2', value: 4000.0 }],\r
      },\r
    },\r
    total: 4000,\r
  },\r
];\r
\r
const Example = () => {\r
  return (\r
    <div>\r
      <QkAreaDrawPeriodicChart\r
        data={data}\r
        options={{ height: 400, yAxios: { width: 60 } }}\r
      />\r
    </div>\r
  );\r
};\r
\r
export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":E,antd:P,react:d||(d=r.t(c,2))},renderOpts:{compile:function(){var m=h()(l()().mark(function i(){var o,t=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.e(350).then(r.bind(r,48350));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},i)}));function s(){return m.apply(this,arguments)}return s}()}}}},18202:function(v,a,r){r.r(a),r.d(a,{texts:function(){return u}});var d=r(13899);const u=[{value:"\u57FA\u4E8E fabric.js \u65F6\u95F4\u5468\u671F\u56FE\u8868",paraId:0,tocIndex:0},{value:"\u652F\u6301\u5BBD\u5EA6\u81EA\u9002\u5E94",paraId:1,tocIndex:0},{value:"W \u98CE\u529B\u53D1\u7535",paraId:1,tocIndex:0},{value:"S \u5149\u4F0F\u53D1\u7535",paraId:1,tocIndex:0},{value:"H \u6C34\u529B\u53D1\u7535",paraId:1,tocIndex:0},{value:"X \u8F74 \u65F6\u95F4",paraId:1,tocIndex:0},{value:"Y \u8F74 \u53D1\u7535\u91CF",paraId:1,tocIndex:0},{value:`\r
interface Column {\r
  background: string; //\u80CC\u666F\u989C\u8272\r
  color: string; //\u6587\u5B57\u989C\u8272\r
  list: { title: string; value: number }[];\r
}\r
\r
interface DataItem {\r
  name?: string; //\u540D\u5B57\r
  start: string; //\u8D77\u59CB\u65F6\u95F4\r
  end: string; //\u7ED3\u675F\u65F6\u95F4\r
  //\u5404\u884C\u6570\u636E\r
  columns: {\r
    w?: Column;\r
    s?: Column;\r
    h?: Column;\r
    [key: string]: Column | undefined; // \u6DFB\u52A0\u989D\u5916\u7684\u7D22\u5F15\u7B7E\u540D\r
  };\r
  [key: string]: any;\r
}\r
\r
interface QkAreaDrawPeriodicChartType {\r
  /** \u6570\u636E */\r
  data: DataItem[]; //\u6570\u636E\u6E90\r
  options?: {\r
    width?: number; //\u5BBD\u5EA6\r
    height?: number; //\u9AD8\u5EA6\r
    background?: string; //\u80CC\u666F\u8272\r
    //\u4E0A\u4E0B\u5DE6\u53F3\u95F4\u9699\r
    margin?:\r
      | {\r
          left: 0;\r
          top: 0;\r
          right: 0;\r
          bottom: 0;\r
        }\r
      | number; //\u95F4\u8DDD\r
    //\u957F\u6761\u4FE1\u606F\r
    strip?: {\r
      width?: number; //\u5BBD\u5EA6\r
      margin?: number; //\u95F4\u8DDD\r
      radius?: number; //\u5706\u89D2\r
      minHeight?: number; // \u6700\u5C0F\u9AD8\u5EA6\r
    };\r
    //X\u8F74\u914D\u7F6E\r
    xAxios?: {\r
      show?: boolean; //\u662F\u5426\u663E\u793AX\u8F74\r
      //X\u8F74\u6587\u5B57\u6837\u5F0F\r
      nameTextStyle?: {\r
        color?: string; //\u6587\u5B57\u989C\u8272\r
        fontSize?: number; //\u6587\u5B57\u5927\u5C0F\r
      };\r
      //\u81EA\u5B9A\u4E49X\u8F74\u5185\u5BB9\r
      nameRender?: (date: Date, index: number) => string | null;\r
    };\r
    //Y\u8F74\u914D\u7F6E\r
    yAxios?: {\r
      height?: number; //\u523B\u5EA6\u9AD8\u5EA6\r
      show?: boolean; //\u662F\u5426\u663E\u793AY\u8F74\r
      width?: number; //Y\u8F74\u5C55\u793A\u7684\u5BBD\u5EA6\r
      //Y\u8F74\u6587\u5B57\u6837\u5F0F\r
      nameTextStyle?: {\r
        color?: string; //\u6587\u5B57\u989C\u8272\r
        fontSize?: number; //\u5B57\u4F53\u5927\u5C0F\r
      };\r
    };\r
    [key: string]: any;\r
  };\r
}
`,paraId:2,tocIndex:2}]}}]);
