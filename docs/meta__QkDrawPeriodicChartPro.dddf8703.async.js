"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[255],{31910:function(P,a,n){var m;n.r(a),n.d(a,{demos:function(){return D}});var l=n(43953),s=n.n(l),g=n(91184),f=n.n(g),u=n(38497),w=n(78754),b=n(50451),y=n(56690),D={"qkdrawperiodicchartpro-demo-0":{component:u.memo(u.lazy(f()(s()().mark(function c(){var d,i,o,r,p,e,E,v,M,T,_,h;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.bind(n,50451));case 2:return d=t.sent,i=d.QkDrawPeriodicChartPro,t.next=6,Promise.resolve().then(n.bind(n,56690));case 6:return o=t.sent,r=o.Typography,t.next=10,Promise.resolve().then(n.t.bind(n,38497,19));case 10:return p=t.sent,e=p.default,E=r.Title,v=r.Paragraph,M=r.Text,T=r.Link,_=[{name:"1111\u6D4B\u8BD5\u98CE\u529B\u53D1\u7535\u7535\u7AD91",start:"2021-01-01",end:"2021-03-07",font:{color:"#fff",size:16},background:"red",id:"1"},{name:"222\u6D4B\u8BD5\u98CE\u529B\u53D1\u7535\u7535\u7AD92\u6D4B\u8BD5\u98CE\u529B\u53D1\u7535\u7535\u7AD92",start:"2021-04-01",end:"2021-07-01",font:{color:"#fff",size:16},background:"blue",id:"2"}],h=function(){return e.createElement("div",null,e.createElement(i,{data:_,options:{width:1190}}))},t.abrupt("return",{default:h});case 16:case"end":return t.stop()}},c)})))),asset:{type:"BLOCK",id:"qkdrawperiodicchartpro-demo-0",refAtomIds:["QkDrawPeriodicChartPro"],dependencies:{"index.tsx":{type:"FILE",value:`/**
 * title: \u5468\u671F\u56FE
 * */
import { QkDrawPeriodicChartPro } from 'react-components';
import { Typography } from 'antd';
import React from 'react';
const { Title, Paragraph, Text, Link } = Typography;

const data = [
  {
    name: '1111\u6D4B\u8BD5\u98CE\u529B\u53D1\u7535\u7535\u7AD91',
    start: '2021-01-01',
    end: '2021-03-07',
    font: {
      color: '#fff',
      size: 16,
    },
    background: 'red',
    id: '1',
  },
  {
    name: '222\u6D4B\u8BD5\u98CE\u529B\u53D1\u7535\u7535\u7AD92\u6D4B\u8BD5\u98CE\u529B\u53D1\u7535\u7535\u7AD92',
    start: '2021-04-01',
    end: '2021-07-01',
    font: {
      color: '#fff',
      size: 16,
    },
    background: 'blue',
    id: '2',
  },
  // {
  //   name: "333\u6D4B\u8BD5\u5149\u4F0F\u53D1\u7535\u7535\u7AD91",
  //   start: "2022/06/01",
  //   end: "2022/09/01",
  //   font: {
  //     color: "#fff",
  //     size: 16
  //   },
  //   background: "red",
  //   id: "3"
  // },
  // {
  //   name: "444\u6D4B\u8BD5\u5149\u4F0F\u53D1\u7535\u7535\u7AD92",
  //   start: "2021/12/31",
  //   end: "2022/12/01",
  //   font: {
  //     color: "#fff",
  //     size: 16
  //   },
  //   background: "red",
  //   id: "4"
  // },
  // {
  //   name: "555\u6D4B\u8BD5\u5149\u4F0F\u53D1\u7535\u7535\u7AD92",
  //   start: "2020/12/31",
  //   end: "2022/10/10",
  //   font: {
  //     color: "#fff",
  //     size: 16
  //   },
  //   background: "green",
  //   id: "5"
  // }
];

const Example = () => {
  return (
    <div>
      <QkDrawPeriodicChartPro
        data={data}
        options={{
          width: 1190,
        }}
      />
    </div>
  );
};
export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":b,antd:y,react:m||(m=n.t(u,2))},renderOpts:{compile:function(){var c=f()(s()().mark(function i(){var o,r=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(440).then(n.bind(n,86440));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,r));case 3:case"end":return e.stop()}},i)}));function d(){return c.apply(this,arguments)}return d}()}}}},55403:function(P,a,n){n.r(a),n.d(a,{texts:function(){return l}});var m=n(78754);const l=[{value:"\u57FA\u4E8E fabric.js \u5199\u7684\u56FE\u8868",paraId:0,tocIndex:0},{value:"\u4EE5\u65F6\u95F4\u4E3A\u7EF4\u5EA6\u7684\u65F6\u95F4\u5468\u671F\u56FE\u8868",paraId:0,tocIndex:0},{value:`
interface DataItem {
  id: string;
  name: string;
  start: string;
  end: string;
  font?: {
    color?: string;
    size?: number;
  };
  background?: string;
}
interface DrawPeriodicChartType {
  /** \u6570\u636E */
  data: DataItem[];
  options?: {
    diyDrawXaxios?: boolean;
    width?: number;
    height?: number;
    background?: string; // \u80CC\u666F\u8272
    margin?:
      | number
      | {
          top?: number;
          right?: number;
          bottom?: number;
          left?: number;
        }; // \u95F4\u8DDD
    // \u957F\u6761\u4FE1\u606F
    strip?: {
      height?: number; // \u9AD8\u5EA6
      margin?: number; // \u95F4\u8DDD
      onMouseout?: (stripCanvas: any) => any; // \u9F20\u6807\u7ECF\u8FC7
      onMouseover?: (stripCanvas: any) => any; // \u9F20\u6807\u79BB\u5F00
    };
    xAxios?: {
      show?: boolean;
      width?: number;
      nameTextStyle?: {
        color?: string;
        fontSize?: number;
      };
      nameRender?: (date: string, index: number) => string;
    };
    yAxios?: {
      onMouseout?: (stripCanvas: any) => any; // \u9F20\u6807\u7ECF\u8FC7
      onMouseover?: (stripCanvas: any) => any; // \u9F20\u6807\u79BB\u5F00
      onClick?: (data: DataItem[]) => any;
      labelWidth?: number;
      height?: number; // \u523B\u5EA6\u9AD8\u5EA6
      show?: boolean;
      width?: number; // Y\u8F74\u5C55\u793A\u7684\u5BBD\u5EA6
      nameTextStyle?: {
        color?: string;
        fontSize?: number;
        underline?: boolean;
      };
      showToolTip?: boolean; // \u662F\u5426\u663E\u793Atooltip
    };
    [key: string]: any;
  };
}
`,paraId:1,tocIndex:2}]}}]);
