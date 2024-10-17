"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[795],{24147:function(p,a,n){var d;n.r(a),n.d(a,{demos:function(){return h}});var s=n(43953),l=n.n(s),_=n(91184),v=n.n(_),i=n(38497),S=n(34506),b=n(91167),k=n(56690),h={"qkstackdrawperiodicchart-demo-0":{component:i.memo(i.lazy(v()(l()().mark(function m(){var c,u,r,o,E,e,P,A,B,W,f,I,g;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.bind(n,91167));case 2:return c=t.sent,u=c.QkStackDrawPeriodicChart,t.next=6,Promise.resolve().then(n.bind(n,56690));case 6:return r=t.sent,o=r.Typography,t.next=10,Promise.resolve().then(n.t.bind(n,38497,19));case 10:return E=t.sent,e=E.default,P=o.Title,A=o.Paragraph,B=o.Text,W=o.Link,f=[{name:"1",start:"2022-02-01",end:"2022-02-12",columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:8,background:"#C7D0D9",color:"#00000"},{title:"H",value:0,background:"#99C5EE",color:"#1973CB"}],font:{color:"#fff",size:14}},{name:"2",start:"2022-07-01",end:"2022-08-08",columns:[{title:"W",value:2,background:"#A6E9F5",color:"#017297"},{title:"S",value:7,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}],font:{color:"#fff",size:14}},{name:"3",start:"2021-01-10",end:"2022-01-01",font:{color:"#fff",size:14},columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:5,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}]},{name:"4",start:"2021-01-10",end:"2023-01-01",font:{color:"#fff",size:14},columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:5,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}]},{name:"5",start:"2021-03-10",end:"2021-06-01",font:{color:"#fff",size:14},columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:3,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}]},{name:"5",start:"2022-10-10",end:"2023-01-01",font:{color:"#fff",size:14},columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:3,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}]}],I=[{start:"2023-02-01",end:"2023-02-05",columns:[{title:"W",value:0,background:"#A6E9F5",color:"#017297"},{title:"S",value:1,background:"#C7D0D9",color:"#00000"},{title:"H",value:0,background:"#99C5EE",color:"#1973CB"}]},{start:"2023-01-01",end:"2023-01-31",columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:0,background:"#C7D0D9",color:"#00000"},{title:"H",value:0,background:"#99C5EE",color:"#1973CB"}]}],g=function(){return e.createElement("div",null,e.createElement(u,{data:f,options:{width:1190,height:300,xAxios:{nameRender:function(C,D){return D%2===0||D===0?C.replace(/-/g,"/"):C.substring(5).replace(/-/g,"/")}}}}))},t.abrupt("return",{default:g});case 17:case"end":return t.stop()}},m)})))),asset:{type:"BLOCK",id:"qkstackdrawperiodicchart-demo-0",refAtomIds:["QkStackDrawPeriodicChart"],dependencies:{"index.tsx":{type:"FILE",value:`/**
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

export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":b,antd:k,react:d||(d=n.t(i,2))},renderOpts:{compile:function(){var m=v()(l()().mark(function u(){var r,o=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(440).then(n.bind(n,86440));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,o));case 3:case"end":return e.stop()}},u)}));function c(){return m.apply(this,arguments)}return c}()}}}},45650:function(p,a,n){n.r(a),n.d(a,{texts:function(){return s}});var d=n(34506);const s=[{value:"\u57FA\u4E8E fabric.js \u65F6\u95F4\u5468\u671F\u56FE\u8868",paraId:0,tocIndex:0},{value:"\u652F\u6301\u5BBD\u5EA6\u81EA\u9002\u5E94",paraId:1,tocIndex:0},{value:"W \u98CE\u529B\u53D1\u7535",paraId:1,tocIndex:0},{value:"S \u5149\u4F0F\u53D1\u7535",paraId:1,tocIndex:0},{value:"H \u6C34\u529B\u53D1\u7535",paraId:1,tocIndex:0},{value:"X \u8F74 \u65F6\u95F4",paraId:1,tocIndex:0},{value:"Y \u8F74 \u53D1\u7535\u91CF",paraId:1,tocIndex:0}]}}]);
