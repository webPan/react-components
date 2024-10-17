"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[721],{45167:function(v,a,e){var d;e.r(a),e.d(a,{demos:function(){return T}});var c=e(43953),l=e.n(c),C=e(91184),_=e.n(C),u=e(38497),M=e(14881),y=e(91167),g=e(56690),T={"qkareadrawperiodicchart-demo-0":{component:u.memo(u.lazy(_()(l()().mark(function m(){var s,i,o,r,p,n,h,E,A,f,D,P;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,91167));case 2:return s=t.sent,i=s.QkAreaDrawPeriodicChart,t.next=6,Promise.resolve().then(e.bind(e,56690));case 6:return o=t.sent,r=o.Typography,t.next=10,Promise.resolve().then(e.t.bind(e,38497,19));case 10:return p=t.sent,n=p.default,h=r.Title,E=r.Paragraph,A=r.Text,f=r.Link,D=[{start:"2023-01-01",end:"2023-01-31",columns:{w:{background:"#A6E9F5",color:"#017297",list:[{title:"W1",value:1350}]},s:{background:"#C7D0D9",color:"#2F383D",list:[{title:"S1",value:11}]},h:{background:"#99C5EE",color:"#1973CB",list:[{title:"H1",value:12345},{title:"H2",value:4569.022122}]}},period:["2023-01-01","2023-01-31"],total:18275.02},{start:"2023-03-10",end:"2023-03-20",columns:{s:{background:"#C7D0D9",color:"#2F383D",list:[{title:"S2",value:4e3}]}},total:4e3}],P=function(){return n.createElement("div",null,n.createElement(r,null,n.createElement(h,null,"QkAreaDrawPeriodicChart \u7EC4\u4EF6"),n.createElement(E,null,n.createElement("ul",null,n.createElement("li",null,"\u4EE5\u65F6\u95F4\u4E3A\u7EF4\u5EA6\u7684\u65F6\u95F4\u5468\u671F\u56FE")))),n.createElement(i,{data:D,options:{height:400,yAxios:{width:60}}}))},t.abrupt("return",{default:P});case 16:case"end":return t.stop()}},m)})))),asset:{type:"BLOCK",id:"qkareadrawperiodicchart-demo-0",refAtomIds:["QkAreaDrawPeriodicChart"],dependencies:{"index.tsx":{type:"FILE",value:`/**
 * title: \u9762\u79EF\u5468\u671F\u56FE
 * */
import {QkAreaDrawPeriodicChart} from 'react-components';
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
        list: [{ title: 'W1', value: 1350.0 }]
      },
      s: {
        background: '#C7D0D9',
        color: '#2F383D',
        list: [{ title: 'S1', value: 11.0 }]
      },
      h: {
        background: '#99C5EE',
        color: '#1973CB',
        list: [
          { title: 'H1', value: 12345.0 },
          { title: 'H2', value: 4569.022122 }
        ]
      }
    },
    period: ['2023-01-01', '2023-01-31'],
    total: 18275.02
  },
  {
    start: '2023-03-10',
    end: '2023-03-20',
    columns: {
      s: {
        background: '#C7D0D9',
        color: '#2F383D',
        list: [{ title: 'S2', value: 4000.0 }]
      }
    },
    total: 4000
  }
];

const Example = () => {
  return (
    <div>
      <Typography>
        <Title>QkAreaDrawPeriodicChart \u7EC4\u4EF6</Title>
        <Paragraph>
          <ul>
            <li>\u4EE5\u65F6\u95F4\u4E3A\u7EF4\u5EA6\u7684\u65F6\u95F4\u5468\u671F\u56FE</li>
          </ul>
        </Paragraph>
      </Typography>
      <QkAreaDrawPeriodicChart
        data={data}
        options={{ height: 400, yAxios: { width: 60 } }}
      />
    </div>
  );
};

export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":y,antd:g,react:d||(d=e.t(u,2))},renderOpts:{compile:function(){var m=_()(l()().mark(function i(){var o,r=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(440).then(e.bind(e,86440));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,r));case 3:case"end":return n.stop()}},i)}));function s(){return m.apply(this,arguments)}return s}()}}}},40485:function(v,a,e){e.r(a),e.d(a,{texts:function(){return c}});var d=e(14881);const c=[]}}]);
