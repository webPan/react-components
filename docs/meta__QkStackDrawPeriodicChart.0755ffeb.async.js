"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[795],{24147:function(D,r,n){var d;n.r(r),n.d(r,{demos:function(){return h}});var i=n(43953),l=n.n(i),p=n(91184),E=n.n(p),s=n(38497),x=n(34506),k=n(50451),_=n(56690),h={"qkstackdrawperiodicchart-demo-0":{component:s.memo(s.lazy(E()(l()().mark(function m(){var c,u,a,o,g,e,P,y,A,I,v,S,f;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.bind(n,50451));case 2:return c=t.sent,u=c.QkStackDrawPeriodicChart,t.next=6,Promise.resolve().then(n.bind(n,56690));case 6:return a=t.sent,o=a.Typography,t.next=10,Promise.resolve().then(n.t.bind(n,38497,19));case 10:return g=t.sent,e=g.default,P=o.Title,y=o.Paragraph,A=o.Text,I=o.Link,v=[{name:"1",start:"2022-02-01",end:"2022-02-12",columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:8,background:"#C7D0D9",color:"#00000"},{title:"H",value:0,background:"#99C5EE",color:"#1973CB"}],font:{color:"#fff",size:14}},{name:"2",start:"2022-07-01",end:"2022-08-08",columns:[{title:"W",value:2,background:"#A6E9F5",color:"#017297"},{title:"S",value:7,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}],font:{color:"#fff",size:14}},{name:"3",start:"2021-01-10",end:"2022-01-01",font:{color:"#fff",size:14},columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:5,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}]},{name:"4",start:"2021-01-10",end:"2023-01-01",font:{color:"#fff",size:14},columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:5,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}]},{name:"5",start:"2021-03-10",end:"2021-06-01",font:{color:"#fff",size:14},columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:3,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}]},{name:"5",start:"2022-10-10",end:"2023-01-01",font:{color:"#fff",size:14},columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:3,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}]}],S=[{start:"2023-02-01",end:"2023-02-05",columns:[{title:"W",value:0,background:"#A6E9F5",color:"#017297"},{title:"S",value:1,background:"#C7D0D9",color:"#00000"},{title:"H",value:0,background:"#99C5EE",color:"#1973CB"}]},{start:"2023-01-01",end:"2023-01-31",columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:0,background:"#C7D0D9",color:"#00000"},{title:"H",value:0,background:"#99C5EE",color:"#1973CB"}]}],f=function(){return e.createElement("div",null,e.createElement(u,{data:v,options:{width:1190,height:300,xAxios:{nameRender:function(b,C){return C%2===0||C===0?b.replace(/-/g,"/"):b.substring(5).replace(/-/g,"/")}}}}))},t.abrupt("return",{default:f});case 17:case"end":return t.stop()}},m)})))),asset:{type:"BLOCK",id:"qkstackdrawperiodicchart-demo-0",refAtomIds:["QkStackDrawPeriodicChart"],dependencies:{"index.tsx":{type:"FILE",value:`/**
 * title: \u5806\u53E0\u5468\u671F\u56FE
 * */
import { QkStackDrawPeriodicChart } from 'react-components';
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
      { title: 'H', value: 0, background: '#99C5EE', color: '#1973CB' },
    ],
    font: {
      color: '#fff',
      size: 14,
    },
  },
  {
    name: '2',
    start: '2022-07-01',
    end: '2022-08-08',
    columns: [
      { title: 'W', value: 2, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 7, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' },
    ],
    font: {
      color: '#fff',
      size: 14,
    },
  },
  {
    name: '3',
    start: '2021-01-10',
    end: '2022-01-01',
    font: {
      color: '#fff',
      size: 14,
    },
    columns: [
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 5, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' },
    ],
  },
  {
    name: '4',
    start: '2021-01-10',
    end: '2023-01-01',
    font: {
      color: '#fff',
      size: 14,
    },
    columns: [
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 5, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' },
    ],
  },
  {
    name: '5',
    start: '2021-03-10',
    end: '2021-06-01',
    font: {
      color: '#fff',
      size: 14,
    },
    columns: [
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 3, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' },
    ],
  },
  {
    name: '5',
    start: '2022-10-10',
    end: '2023-01-01',
    font: {
      color: '#fff',
      size: 14,
    },
    columns: [
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 3, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 3, background: '#99C5EE', color: '#1973CB' },
    ],
  },
];

const test = [
  {
    start: '2023-02-01',
    end: '2023-02-05',
    columns: [
      { title: 'W', value: 0, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 1, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 0, background: '#99C5EE', color: '#1973CB' },
    ],
  },
  {
    start: '2023-01-01',
    end: '2023-01-31',
    columns: [
      { title: 'W', value: 1, background: '#A6E9F5', color: '#017297' },
      { title: 'S', value: 0, background: '#C7D0D9', color: '#00000' },
      { title: 'H', value: 0, background: '#99C5EE', color: '#1973CB' },
    ],
  },
];

const Example = () => {
  return (
    <div>
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
            },
          },
        }}
      />
    </div>
  );
};

export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":k,antd:_,react:d||(d=n.t(s,2))},renderOpts:{compile:function(){var m=E()(l()().mark(function u(){var a,o=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(440).then(n.bind(n,86440));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,o));case 3:case"end":return e.stop()}},u)}));function c(){return m.apply(this,arguments)}return c}()}}}},45650:function(D,r,n){n.r(r),n.d(r,{texts:function(){return i}});var d=n(34506);const i=[{value:"\u57FA\u4E8E fabric.js \u65F6\u95F4\u5468\u671F\u56FE\u8868",paraId:0,tocIndex:0},{value:"\u652F\u6301\u5BBD\u5EA6\u81EA\u9002\u5E94",paraId:1,tocIndex:0},{value:"W \u98CE\u529B\u53D1\u7535",paraId:1,tocIndex:0},{value:"S \u5149\u4F0F\u53D1\u7535",paraId:1,tocIndex:0},{value:"H \u6C34\u529B\u53D1\u7535",paraId:1,tocIndex:0},{value:"X \u8F74 \u65F6\u95F4",paraId:1,tocIndex:0},{value:"Y \u8F74 \u53D1\u7535\u91CF",paraId:1,tocIndex:0},{value:`export type DataItem = {
  name?: string;
  start: string;
  end: string;
  columns: {
    title: string;
    value: number;
    color: string;
    background: string;
  }[];
  font?: { color?: string; size?: number };
  color?: string;
  [key: string]: any;
};

interface QkStackDrawPeriodicChartType {
  /** \u6570\u636E */
  data: DataItem[];
  options?: {
    width?: number;
    height?: number;
    background?: string; //\u80CC\u666F\u8272
    margin?:
      | {
          left?: number;
          top?: number;
          right?: number;
          bottom?: number;
        }
      | number; //\u95F4\u8DDD
    //\u957F\u6761\u4FE1\u606F
    strip?: {
      height?: number; //\u9AD8\u5EA6
      margin?: number;
    };
    tickLineWidth?: number; //\u523B\u5EA6\u957F\u5EA6
    xAxios?: {
      show?: boolean;
      nameTextStyle?: {
        color?: string;
        fontSize?: number;
      };
      nameRender?: ((date: string, index: number) => string) | null | undefined;
    };
    yAxios?: {
      show?: boolean;
      width?: number; //Y\u8F74\u5C55\u793A\u7684\u5BBD\u5EA6
      nameTextStyle?: {
        color?: string;
        fontSize?: number;
      };
    };
    [key: string]: any;
  };
}
`,paraId:2,tocIndex:2}]}}]);
