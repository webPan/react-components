"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[721],{45167:function(v,a,n){var d;n.r(a),n.d(a,{demos:function(){return y}});var u=n(43953),l=n.n(u),g=n(91184),h=n.n(g),m=n(38497),w=n(14881),E=n(50451),P=n(56690),y={"qkareadrawperiodicchart-demo-0":{component:m.memo(m.lazy(h()(l()().mark(function c(){var s,i,o,r,p,e,C,f,b,I,_,D;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.bind(n,50451));case 2:return s=t.sent,i=s.QkAreaDrawPeriodicChart,t.next=6,Promise.resolve().then(n.bind(n,56690));case 6:return o=t.sent,r=o.Typography,t.next=10,Promise.resolve().then(n.t.bind(n,38497,19));case 10:return p=t.sent,e=p.default,C=r.Title,f=r.Paragraph,b=r.Text,I=r.Link,_=[{start:"2023-01-01",end:"2023-01-31",columns:{w:{background:"#A6E9F5",color:"#017297",list:[{title:"W1",value:1350}]},s:{background:"#C7D0D9",color:"#2F383D",list:[{title:"S1",value:11}]},h:{background:"#99C5EE",color:"#1973CB",list:[{title:"H1",value:12345},{title:"H2",value:4569.022122}]}},period:["2023-01-01","2023-01-31"],total:18275.02},{start:"2023-03-10",end:"2023-03-20",columns:{s:{background:"#C7D0D9",color:"#2F383D",list:[{title:"S2",value:4e3}]}},total:4e3}],D=function(){return e.createElement("div",null,e.createElement(i,{data:_,options:{height:400,yAxios:{width:60}}}))},t.abrupt("return",{default:D});case 16:case"end":return t.stop()}},c)})))),asset:{type:"BLOCK",id:"qkareadrawperiodicchart-demo-0",refAtomIds:["QkAreaDrawPeriodicChart"],dependencies:{"index.tsx":{type:"FILE",value:`/**
 * title: \u9762\u79EF\u5468\u671F\u56FE
 * */
import { QkAreaDrawPeriodicChart } from 'react-components';
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
        list: [{ title: 'W1', value: 1350.0 }],
      },
      s: {
        background: '#C7D0D9',
        color: '#2F383D',
        list: [{ title: 'S1', value: 11.0 }],
      },
      h: {
        background: '#99C5EE',
        color: '#1973CB',
        list: [
          { title: 'H1', value: 12345.0 },
          { title: 'H2', value: 4569.022122 },
        ],
      },
    },
    period: ['2023-01-01', '2023-01-31'],
    total: 18275.02,
  },
  {
    start: '2023-03-10',
    end: '2023-03-20',
    columns: {
      s: {
        background: '#C7D0D9',
        color: '#2F383D',
        list: [{ title: 'S2', value: 4000.0 }],
      },
    },
    total: 4000,
  },
];

const Example = () => {
  return (
    <div>
      <QkAreaDrawPeriodicChart
        data={data}
        options={{ height: 400, yAxios: { width: 60 } }}
      />
    </div>
  );
};

export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":E,antd:P,react:d||(d=n.t(m,2))},renderOpts:{compile:function(){var c=h()(l()().mark(function i(){var o,r=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(440).then(n.bind(n,86440));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,r));case 3:case"end":return e.stop()}},i)}));function s(){return c.apply(this,arguments)}return s}()}}}},40485:function(v,a,n){n.r(a),n.d(a,{texts:function(){return u}});var d=n(14881);const u=[{value:"\u57FA\u4E8E fabric.js \u65F6\u95F4\u5468\u671F\u56FE\u8868",paraId:0,tocIndex:0},{value:"\u652F\u6301\u5BBD\u5EA6\u81EA\u9002\u5E94",paraId:1,tocIndex:0},{value:"W \u98CE\u529B\u53D1\u7535",paraId:1,tocIndex:0},{value:"S \u5149\u4F0F\u53D1\u7535",paraId:1,tocIndex:0},{value:"H \u6C34\u529B\u53D1\u7535",paraId:1,tocIndex:0},{value:"X \u8F74 \u65F6\u95F4",paraId:1,tocIndex:0},{value:"Y \u8F74 \u53D1\u7535\u91CF",paraId:1,tocIndex:0},{value:`
interface Column {
  background: string; //\u80CC\u666F\u989C\u8272
  color: string; //\u6587\u5B57\u989C\u8272
  list: { title: string; value: number }[];
}

interface DataItem {
  name?: string; //\u540D\u5B57
  start: string; //\u8D77\u59CB\u65F6\u95F4
  end: string; //\u7ED3\u675F\u65F6\u95F4
  //\u5404\u884C\u6570\u636E
  columns: {
    w?: Column;
    s?: Column;
    h?: Column;
    [key: string]: Column | undefined; // \u6DFB\u52A0\u989D\u5916\u7684\u7D22\u5F15\u7B7E\u540D
  };
  [key: string]: any;
}

interface QkAreaDrawPeriodicChartType {
  /** \u6570\u636E */
  data: DataItem[]; //\u6570\u636E\u6E90
  options?: {
    width?: number; //\u5BBD\u5EA6
    height?: number; //\u9AD8\u5EA6
    background?: string; //\u80CC\u666F\u8272
    //\u4E0A\u4E0B\u5DE6\u53F3\u95F4\u9699
    margin?:
      | {
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
        }
      | number; //\u95F4\u8DDD
    //\u957F\u6761\u4FE1\u606F
    strip?: {
      width?: number; //\u5BBD\u5EA6
      margin?: number; //\u95F4\u8DDD
      radius?: number; //\u5706\u89D2
      minHeight?: number; // \u6700\u5C0F\u9AD8\u5EA6
    };
    //X\u8F74\u914D\u7F6E
    xAxios?: {
      show?: boolean; //\u662F\u5426\u663E\u793AX\u8F74
      //X\u8F74\u6587\u5B57\u6837\u5F0F
      nameTextStyle?: {
        color?: string; //\u6587\u5B57\u989C\u8272
        fontSize?: number; //\u6587\u5B57\u5927\u5C0F
      };
      //\u81EA\u5B9A\u4E49X\u8F74\u5185\u5BB9
      nameRender?: (date: Date, index: number) => string | null;
    };
    //Y\u8F74\u914D\u7F6E
    yAxios?: {
      height?: number; //\u523B\u5EA6\u9AD8\u5EA6
      show?: boolean; //\u662F\u5426\u663E\u793AY\u8F74
      width?: number; //Y\u8F74\u5C55\u793A\u7684\u5BBD\u5EA6
      //Y\u8F74\u6587\u5B57\u6837\u5F0F
      nameTextStyle?: {
        color?: string; //\u6587\u5B57\u989C\u8272
        fontSize?: number; //\u5B57\u4F53\u5927\u5C0F
      };
    };
    [key: string]: any;
  };
}
`,paraId:2,tocIndex:2}]}}]);
