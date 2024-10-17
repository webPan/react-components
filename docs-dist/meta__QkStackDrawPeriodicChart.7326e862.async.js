"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[795],{24147:function(b,r,n){var d;n.r(r),n.d(r,{demos:function(){return A}});var i=n(43953),l=n.n(i),_=n(91184),v=n.n(_),s=n(38497),W=n(34506),h=n(91167),P=n(56690),A={"qkstackdrawperiodicchart-demo-0":{component:s.memo(s.lazy(v()(l()().mark(function m(){var c,u,a,o,E,e,f,g,y,B,C,T,D;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.bind(n,91167));case 2:return c=t.sent,u=c.QkStackDrawPeriodicChart,t.next=6,Promise.resolve().then(n.bind(n,56690));case 6:return a=t.sent,o=a.Typography,t.next=10,Promise.resolve().then(n.t.bind(n,38497,19));case 10:return E=t.sent,e=E.default,f=o.Title,g=o.Paragraph,y=o.Text,B=o.Link,C=[{name:"1",start:"2022-02-01",end:"2022-02-12",columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:8,background:"#C7D0D9",color:"#00000"},{title:"H",value:0,background:"#99C5EE",color:"#1973CB"}],font:{color:"#fff",size:14}},{name:"2",start:"2022-07-01",end:"2022-08-08",columns:[{title:"W",value:2,background:"#A6E9F5",color:"#017297"},{title:"S",value:7,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}],font:{color:"#fff",size:14}},{name:"3",start:"2021-01-10",end:"2022-01-01",font:{color:"#fff",size:14},columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:5,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}]},{name:"4",start:"2021-01-10",end:"2023-01-01",font:{color:"#fff",size:14},columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:5,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}]},{name:"5",start:"2021-03-10",end:"2021-06-01",font:{color:"#fff",size:14},columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:3,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}]},{name:"5",start:"2022-10-10",end:"2023-01-01",font:{color:"#fff",size:14},columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:3,background:"#C7D0D9",color:"#00000"},{title:"H",value:3,background:"#99C5EE",color:"#1973CB"}]}],T=[{start:"2023-02-01",end:"2023-02-05",columns:[{title:"W",value:0,background:"#A6E9F5",color:"#017297"},{title:"S",value:1,background:"#C7D0D9",color:"#00000"},{title:"H",value:0,background:"#99C5EE",color:"#1973CB"}]},{start:"2023-01-01",end:"2023-01-31",columns:[{title:"W",value:1,background:"#A6E9F5",color:"#017297"},{title:"S",value:0,background:"#C7D0D9",color:"#00000"},{title:"H",value:0,background:"#99C5EE",color:"#1973CB"}]}],D=function(){return e.createElement("div",null,e.createElement(o,null,e.createElement(f,null,"QkStackDrawPeriodicChart \u65F6\u95F4\u5468\u671F\u56FE\u8868"),e.createElement(g,null,e.createElement("ul",null,e.createElement("li",null,"\u57FA\u4E8Efabric.js\u4EE5\u65F6\u95F4\u5468\u671F\u4E3A\u7EF4\u5EA6\u7684\u5468\u671F\u56FE\u8868"),e.createElement("li",null,"\u652F\u6301\u5BBD\u5EA6\u81EA\u9002\u5E94")))),e.createElement(u,{data:C,options:{width:1190,height:300,xAxios:{nameRender:function(p,k){return k%2===0||k===0?p.replace(/-/g,"/"):p.substring(5).replace(/-/g,"/")}}}}))},t.abrupt("return",{default:D});case 17:case"end":return t.stop()}},m)})))),asset:{type:"BLOCK",id:"qkstackdrawperiodicchart-demo-0",refAtomIds:["QkStackDrawPeriodicChart"],dependencies:{"index.tsx":{type:"FILE",value:`/**
 * title: \u5806\u53E0\u5468\u671F\u56FE
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
        <Title>QkStackDrawPeriodicChart \u65F6\u95F4\u5468\u671F\u56FE\u8868</Title>
        <Paragraph>
          <ul>
            <li>\u57FA\u4E8Efabric.js\u4EE5\u65F6\u95F4\u5468\u671F\u4E3A\u7EF4\u5EA6\u7684\u5468\u671F\u56FE\u8868</li>
            <li>\u652F\u6301\u5BBD\u5EA6\u81EA\u9002\u5E94</li>
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

export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":h,antd:P,react:d||(d=n.t(s,2))},renderOpts:{compile:function(){var m=v()(l()().mark(function u(){var a,o=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(440).then(n.bind(n,86440));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,o));case 3:case"end":return e.stop()}},u)}));function c(){return m.apply(this,arguments)}return c}()}}}},45650:function(b,r,n){n.r(r),n.d(r,{texts:function(){return i}});var d=n(34506);const i=[]}}]);
