"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[609],{65758:function(g,s,e){var _;e.r(s),e.d(s,{demos:function(){return x}});var u=e(43953),l=e.n(u),h=e(9083),y=e.n(h),f=e(91184),D=e.n(f),c=e(38497),S=e(43234),O=e(91167),B=e(56690),x={"qkcustomtags-demo-0":{component:c.memo(c.lazy(D()(l()().mark(function p(){var d,m,a,o,i,n,E,v,r,L,I,A,R,C;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,91167));case 2:return d=t.sent,m=d.QkCustomTags,t.next=6,Promise.resolve().then(e.t.bind(e,38497,19));case 6:return a=t.sent,o=a.default,i=a.useState,t.next=11,Promise.resolve().then(e.bind(e,56690));case 11:return n=t.sent,E=n.Button,v=n.Space,r=n.Typography,L=r.Title,I=r.Paragraph,A=r.Text,R=r.Link,C=function(){var b=i(["\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B99","\u65F6\u5C1A\u5927\u65B910","\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B911","\u65F6\u5C1A\u5927\u65B912","\u5927\u65B913","\u65F6\u5C1A\u5927\u65B914","\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B915","\u65F6\u5C1A\u5927\u65B916","\u65F6\u5C1A\u5927\u65B917"]),P=y()(b,2),w=P[0],T=P[1];return o.createElement("div",null,o.createElement(v,{className:"mb-[10px]"},o.createElement(E,{onClick:function(){T(["\u65F6\u5C1A\u5927\u65B91","\u65F6\u5C1A\u65B92","\u65F6\u5C1A\u65B93","\u65F6\u5C1A\u65B94","\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B95","\u65F6\u5C1A\u65B96","\u5927\u65B977777","\u65F6\u5927\u65B98","\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B99","\u65F6\u5C1A\u5927\u65B910","\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B911","\u65F6\u5C1A\u5927\u65B912","\u5927\u65B913","\u65F6\u5C1A\u5927\u65B914","\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B915","\u65F6\u5C1A\u5927\u65B916","\u65F6\u5C1A\u5927\u65B917"])}},"\u521D\u59CB\u5316\u6570\u636E-\u6570\u636E\u8F83\u591A"),o.createElement(E,{onClick:function(){T(["A\u65F6\u5C1A\u5927\u65B91","B\u65F6\u5C1A\u65B92","C\u65F6\u5C1A\u65B93","D\u65F6\u5C1A\u65B94"])}},"\u521D\u59CB\u5316\u6570\u636E-\u6570\u636E\u8F83\u5C11")),o.createElement("div",{style:{border:"1px solid red"},className:"w-1/2 p-[10px]"},o.createElement(m,{itemStyle:{border:"1px dashed red",padding:"5px 10px"},rows:2,data:w,onLoadingCompleted:function(K){var N=K.isMore}})))},t.abrupt("return",{default:C});case 18:case"end":return t.stop()}},p)})))),asset:{type:"BLOCK",id:"qkcustomtags-demo-0",refAtomIds:["QkCustomTags"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkCustomTags } from 'react-components';
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
    '\u65F6\u5C1A\u5927\u65B917',
  ]);
  return (
    <div>
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
              '\u65F6\u5C1A\u5927\u65B917',
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

export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx"},context:{"react-components":O,react:_||(_=e.t(c,2)),antd:B},renderOpts:{compile:function(){var p=D()(l()().mark(function m(){var a,o=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(440).then(e.bind(e,86440));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},m)}));function d(){return p.apply(this,arguments)}return d}()}}}},15691:function(g,s,e){e.r(s),e.d(s,{texts:function(){return u}});var _=e(43234);const u=[{value:"\u81EA\u52A8\u83B7\u53D6 tag \u7684\u5BBD\u5EA6\uFF0C\u5B9E\u73B0\u81EA\u9002\u5E94",paraId:0,tocIndex:0},{value:"\u53EF\u63A7\u5236 tag \u884C\u6570",paraId:0,tocIndex:0}]}}]);
