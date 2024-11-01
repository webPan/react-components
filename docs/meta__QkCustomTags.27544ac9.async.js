"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[609],{65758:function(P,r,e){var c;e.r(r),e.d(r,{demos:function(){return O}});var m=e(43953),s=e.n(m),g=e(9083),M=e.n(g),h=e(91184),v=e.n(h),p=e(38497),K=e(43234),y=e(50451),f=e(56690),O={"qkcustomtags-demo-0":{component:p.memo(p.lazy(v()(s()().mark(function _(){var l,u,o,t,I,n,i,x,d,B,L,b,A,E;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return l=a.sent,u=l.QkCustomTags,a.next=6,Promise.resolve().then(e.t.bind(e,38497,19));case 6:return o=a.sent,t=o.default,I=o.useState,a.next=11,Promise.resolve().then(e.bind(e,56690));case 11:return n=a.sent,i=n.Button,x=n.Space,d=n.Typography,B=d.Title,L=d.Paragraph,b=d.Text,A=d.Link,E=function(){var R=I(["\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B99","\u65F6\u5C1A\u5927\u65B910","\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B911","\u65F6\u5C1A\u5927\u65B912","\u5927\u65B913","\u65F6\u5C1A\u5927\u65B914","\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B915","\u65F6\u5C1A\u5927\u65B916","\u65F6\u5C1A\u5927\u65B917"]),D=M()(R,2),w=D[0],C=D[1];return t.createElement("div",null,t.createElement(x,{className:"mb-[10px]"},t.createElement(i,{onClick:function(){C(["\u65F6\u5C1A\u5927\u65B91","\u65F6\u5C1A\u65B92","\u65F6\u5C1A\u65B93","\u65F6\u5C1A\u65B94","\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B95","\u65F6\u5C1A\u65B96","\u5927\u65B977777","\u65F6\u5927\u65B98","\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B99","\u65F6\u5C1A\u5927\u65B910","\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B911","\u65F6\u5C1A\u5927\u65B912","\u5927\u65B913","\u65F6\u5C1A\u5927\u65B914","\u65F6\u5C1A\u5927\u65B9\u65F6\u5C1A\u5927\u65B915","\u65F6\u5C1A\u5927\u65B916","\u65F6\u5C1A\u5927\u65B917"])}},"\u521D\u59CB\u5316\u6570\u636E-\u6570\u636E\u8F83\u591A"),t.createElement(i,{onClick:function(){C(["A\u65F6\u5C1A\u5927\u65B91","B\u65F6\u5C1A\u65B92","C\u65F6\u5C1A\u65B93","D\u65F6\u5C1A\u65B94"])}},"\u521D\u59CB\u5316\u6570\u636E-\u6570\u636E\u8F83\u5C11")),t.createElement("div",{style:{border:"1px solid red"},className:"w-1/2 p-[10px]"},t.createElement(u,{itemStyle:{border:"1px dashed red",padding:"5px 10px"},rows:2,data:w,onLoadingCompleted:function(S){var N=S.isMore}})))},a.abrupt("return",{default:E});case 18:case"end":return a.stop()}},_)})))),asset:{type:"BLOCK",id:"qkcustomtags-demo-0",refAtomIds:["QkCustomTags"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkCustomTags } from 'react-components';
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

export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx"},context:{"react-components":y,react:c||(c=e.t(p,2)),antd:f},renderOpts:{compile:function(){var _=v()(s()().mark(function u(){var o,t=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(440).then(e.bind(e,86440));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},u)}));function l(){return _.apply(this,arguments)}return l}()}}}},15691:function(P,r,e){e.r(r),e.d(r,{texts:function(){return m}});var c=e(43234);const m=[{value:"\u591A\u4E2A\u81EA\u5B9A\u4E49\u6807\u7B7ETag\u5E73\u94FA\uFF0C\u53EF\u63A7\u5236\u884C\u6570",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u63CF\u8FF0",paraId:1,tocIndex:2},{value:"data",paraId:1,tocIndex:2},{value:"string[]",paraId:1,tocIndex:2},{value:"\u6570\u636E\u6E90",paraId:1,tocIndex:2},{value:"gap",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:" (\u53EF\u9009)",paraId:1,tocIndex:2},{value:"\u6807\u7B7E\u4E4B\u95F4\u7684\u5BBD\u5EA6",paraId:1,tocIndex:2},{value:"reservedWidth",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:" (\u53EF\u9009)",paraId:1,tocIndex:2},{value:"\u9884\u7559\u5BBD\u5EA6",paraId:1,tocIndex:2},{value:"itemStyle",paraId:1,tocIndex:2},{value:"CSSProperties",paraId:1,tocIndex:2},{value:" (\u53EF\u9009)",paraId:1,tocIndex:2},{value:"\u6807\u7B7E\u7684\u6837\u5F0F\u63A7\u5236",paraId:1,tocIndex:2},{value:"rows",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:" (\u53EF\u9009)",paraId:1,tocIndex:2},{value:"\u884C\u6570",paraId:1,tocIndex:2},{value:"moreRender",paraId:1,tocIndex:2},{value:"(\u53EF\u9009)",paraId:1,tocIndex:2},{value:"\u66F4\u591A\u81EA\u5B9A\u4E49\u6E32\u67D3",paraId:1,tocIndex:2},{value:"moreText",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:" (\u53EF\u9009)",paraId:1,tocIndex:2},{value:"\u7B49\u591A\u6587\u6848\u4FEE\u6539",paraId:1,tocIndex:2},{value:"onLoadingCompleted",paraId:1,tocIndex:2},{value:"({ isMore }: { isMore: boolean }) => void",paraId:1,tocIndex:2},{value:" (\u53EF\u9009)",paraId:1,tocIndex:2},{value:"\u52A0\u8F7D\u5B8C\u6210\u4E8B\u4EF6",paraId:1,tocIndex:2}]}}]);
