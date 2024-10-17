"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[609],{65758:function(M,s,e){var _;e.r(s),e.d(s,{demos:function(){return A}});var u=e(43953),l=e.n(u),f=e(9083),O=e.n(f),B=e(91184),T=e.n(B),c=e(38497),S=e(43234),L=e(91167),x=e(56690),A={"qkcustomtags-demo-0":{component:c.memo(c.lazy(T()(l()().mark(function i(){var m,d,a,n,p,t,E,g,r,D,C,R,b,P;return l()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,91167));case 2:return m=o.sent,d=m.QkCustomTags,o.next=6,Promise.resolve().then(e.t.bind(e,38497,19));case 6:return a=o.sent,n=a.default,p=a.useState,o.next=11,Promise.resolve().then(e.bind(e,56690));case 11:return t=o.sent,E=t.Button,g=t.Space,r=t.Typography,D=r.Title,C=r.Paragraph,R=r.Text,b=r.Link,P=function(){var w=p(["\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B99","\u65F6\u5C1A\u5927\u65B910","\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B911","\u65F6\u5C1A\u5927\u65B912","\u5927\u65B913","\u65F6\u5C1A\u5927\u65B914","\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B915","\u65F6\u5C1A\u5927\u65B916","\u65F6\u5C1A\u5927\u65B917"]),h=O()(w,2),I=h[0],v=h[1];return n.createElement("div",null,n.createElement(r,null,n.createElement(D,null,"QkCustomTags \u7EC4\u4EF6"),n.createElement(C,null,n.createElement("ul",null,n.createElement("li",null,"\u81EA\u52A8\u83B7\u53D6tag\u7684\u5BBD\u5EA6\uFF0C\u5B9E\u73B0\u81EA\u9002\u5E94"),n.createElement("li",null,"\u53EF\u63A7\u5236tag\u884C\u6570")))),n.createElement(g,{className:"mb-[10px]"},n.createElement(E,{onClick:function(){v(["\u65F6\u5C1A\u5927\u65B91","\u65F6\u5C1A\u65B92","\u65F6\u5C1A\u65B93","\u65F6\u5C1A\u65B94","\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B95","\u65F6\u5C1A\u65B96","\u5927\u65B977777","\u65F6\u5927\u65B98","\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B99","\u65F6\u5C1A\u5927\u65B910","\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B911","\u65F6\u5C1A\u5927\u65B912","\u5927\u65B913","\u65F6\u5C1A\u5927\u65B914","\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B915","\u65F6\u5C1A\u5927\u65B916","\u65F6\u5C1A\u5927\u65B917"])}},"\u521D\u59CB\u5316\u6570\u636E-\u6570\u636E\u8F83\u591A"),n.createElement(E,{onClick:function(){v(["A\u65F6\u5C1A\u5927\u65B91","B\u65F6\u5C1A\u65B92","C\u65F6\u5C1A\u65B93","D\u65F6\u5C1A\u65B94"])}},"\u521D\u59CB\u5316\u6570\u636E-\u6570\u636E\u8F83\u5C11")),n.createElement("div",{style:{border:"1px solid red"},className:"w-1/2 p-[10px]"},n.createElement(d,{itemStyle:{border:"1px dashed red",padding:"5px 10px"},rows:2,data:I,onLoadingCompleted:function(K){var Q=K.isMore}})))},o.abrupt("return",{default:P});case 18:case"end":return o.stop()}},i)})))),asset:{type:"BLOCK",id:"qkcustomtags-demo-0",refAtomIds:["QkCustomTags"],dependencies:{"index.tsx":{type:"FILE",value:`import {QkCustomTags} from 'react-components';
import React, { useState } from 'react';
import { Button, Space, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  const [d, setD] = useState<string[]>([
    '\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B99',
    '\u65F6\u5C1A\u5927\u65B910',
    '\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B911',
    '\u65F6\u5C1A\u5927\u65B912',
    '\u5927\u65B913',
    '\u65F6\u5C1A\u5927\u65B914',
    '\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B915',
    '\u65F6\u5C1A\u5927\u65B916',
    '\u65F6\u5C1A\u5927\u65B917'
  ]);
  return (
    <div>
      <Typography>
        <Title>QkCustomTags \u7EC4\u4EF6</Title>
        <Paragraph>
          <ul>
            <li>\u81EA\u52A8\u83B7\u53D6tag\u7684\u5BBD\u5EA6\uFF0C\u5B9E\u73B0\u81EA\u9002\u5E94</li>
            <li>\u53EF\u63A7\u5236tag\u884C\u6570</li>
          </ul>
        </Paragraph>
      </Typography>
      <Space className="mb-[10px]">
        <Button
          onClick={() => {
            setD([
              '\u65F6\u5C1A\u5927\u65B91',
              '\u65F6\u5C1A\u65B92',
              '\u65F6\u5C1A\u65B93',
              '\u65F6\u5C1A\u65B94',
              '\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B95',
              '\u65F6\u5C1A\u65B96',
              '\u5927\u65B977777',
              '\u65F6\u5927\u65B98',
              '\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B99',
              '\u65F6\u5C1A\u5927\u65B910',
              '\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B911',
              '\u65F6\u5C1A\u5927\u65B912',
              '\u5927\u65B913',
              '\u65F6\u5C1A\u5927\u65B914',
              '\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B915',
              '\u65F6\u5C1A\u5927\u65B916',
              '\u65F6\u5C1A\u5927\u65B917'
            ]);
          }}
        >
          \u521D\u59CB\u5316\u6570\u636E-\u6570\u636E\u8F83\u591A
        </Button>
        <Button
          onClick={() => {
            setD(['A\u65F6\u5C1A\u5927\u65B91', 'B\u65F6\u5C1A\u65B92', 'C\u65F6\u5C1A\u65B93', 'D\u65F6\u5C1A\u65B94']);
          }}
        >
          \u521D\u59CB\u5316\u6570\u636E-\u6570\u636E\u8F83\u5C11
        </Button>
      </Space>

      <div style={{ border: '1px solid red' }} className="w-1/2 p-[10px]">
        <QkCustomTags
          itemStyle={{ border: '1px dashed red', padding: '5px 10px' }}
          rows={2}
          data={d}
          onLoadingCompleted={({ isMore }) => {
            // console.log(isMore);
          }}
        />
      </div>
    </div>
  );
};

export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx"},context:{"react-components":L,react:_||(_=e.t(c,2)),antd:x},renderOpts:{compile:function(){var i=T()(l()().mark(function d(){var a,n=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(440).then(e.bind(e,86440));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function m(){return i.apply(this,arguments)}return m}()}}}},15691:function(M,s,e){e.r(s),e.d(s,{texts:function(){return u}});var _=e(43234);const u=[]}}]);
