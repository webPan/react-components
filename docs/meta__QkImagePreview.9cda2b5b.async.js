"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[660],{349:function(P,o,e){var u;e.r(o),e.d(o,{demos:function(){return g}});var c=e(43953),s=e.n(c),f=e(91184),v=e.n(f),p=e(38497),O=e(47210),h=e(50451),I=e(56690),g={"qkimagepreview-demo-0":{component:p.memo(p.lazy(v()(s()().mark(function _(){var m,l,a,d,r,t,i,D,y,M,T,E;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return m=n.sent,l=m.QkImagePreview,n.next=6,Promise.resolve().then(e.bind(e,56690));case 6:return a=n.sent,d=a.Button,r=a.Typography,n.next=11,Promise.resolve().then(e.t.bind(e,38497,19));case 11:return t=n.sent,i=t.default,D=r.Title,y=r.Paragraph,M=r.Text,T=r.Link,E=function(){return i.createElement("div",null,i.createElement("div",null,i.createElement(d,{onClick:function(){l.Create({src:"https://img0.baidu.com/it/u=3569066416,3506148795&fm=253&fmt=auto&app=138&f=JPEG?w=875&h=500"})}},"JS\u8C03\u7528\u65B9\u5F0F\u9884\u89C8\u56FE\u7247")))},n.abrupt("return",{default:E});case 16:case"end":return n.stop()}},_)})))),asset:{type:"BLOCK",id:"qkimagepreview-demo-0",refAtomIds:["QkImagePreview"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkImagePreview } from 'react-components';
import { Button, Typography } from 'antd';
import React from 'react';
const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  return (
    <div>
      <div>
        <Button
          onClick={() => {
            QkImagePreview.Create({
              src: 'https://img0.baidu.com/it/u=3569066416,3506148795&fm=253&fmt=auto&app=138&f=JPEG?w=875&h=500',
            });
          }}
        >
          JS\u8C03\u7528\u65B9\u5F0F\u9884\u89C8\u56FE\u7247
        </Button>
      </div>
    </div>
  );
};

export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":h,antd:I,react:u||(u=e.t(p,2))},renderOpts:{compile:function(){var _=v()(s()().mark(function l(){var a,d=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(440).then(e.bind(e,86440));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,d));case 3:case"end":return t.stop()}},l)}));function m(){return _.apply(this,arguments)}return m}()}}}},77731:function(P,o,e){e.r(o),e.d(o,{texts:function(){return c}});var u=e(47210);const c=[{value:"\u57FA\u4E8E antd Image \u4E8C\u6B21\u5C01\u88C5",paraId:0,tocIndex:0},{value:"\u652F\u6301\u4EE5 JS \u65B9\u5F0F\u5728\u4EFB\u610F\u4F4D\u7F6E\u8C03\u7528",paraId:0,tocIndex:0},{value:`type QkImagePreviewType = {
  src: string; //\u56FE\u7247\u5730\u5740
  onCancel?: () => void; //\u5173\u95ED\u9884\u89C8\u56DE\u8C03
};
`,paraId:1,tocIndex:2}]}}]);
