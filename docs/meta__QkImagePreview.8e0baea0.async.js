"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[660],{14601:function(P,o,e){var u;e.r(o),e.d(o,{demos:function(){return g}});var c=e(43953),s=e.n(c),f=e(91184),v=e.n(f),p=e(38497),O=e(4697),h=e(25749),I=e(79021),g={"qkimagepreview-demo-0":{component:p.memo(p.lazy(v()(s()().mark(function _(){var m,l,r,d,a,t,i,D,y,M,T,E;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,25749));case 2:return m=n.sent,l=m.QkImagePreview,n.next=6,Promise.resolve().then(e.bind(e,79021));case 6:return r=n.sent,d=r.Button,a=r.Typography,n.next=11,Promise.resolve().then(e.t.bind(e,38497,19));case 11:return t=n.sent,i=t.default,D=a.Title,y=a.Paragraph,M=a.Text,T=a.Link,E=function(){return i.createElement("div",null,i.createElement("div",null,i.createElement(d,{onClick:function(){l.Create({src:"https://img0.baidu.com/it/u=3569066416,3506148795&fm=253&fmt=auto&app=138&f=JPEG?w=875&h=500"})}},"JS\u8C03\u7528\u65B9\u5F0F\u9884\u89C8\u56FE\u7247")))},n.abrupt("return",{default:E});case 16:case"end":return n.stop()}},_)})))),asset:{type:"BLOCK",id:"qkimagepreview-demo-0",refAtomIds:["QkImagePreview"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkImagePreview } from 'react-components';\r
import { Button, Typography } from 'antd';\r
import React from 'react';\r
const { Title, Paragraph, Text, Link } = Typography;\r
\r
const Example = () => {\r
  return (\r
    <div>\r
      <div>\r
        <Button\r
          onClick={() => {\r
            QkImagePreview.Create({\r
              src: 'https://img0.baidu.com/it/u=3569066416,3506148795&fm=253&fmt=auto&app=138&f=JPEG?w=875&h=500',\r
            });\r
          }}\r
        >\r
          JS\u8C03\u7528\u65B9\u5F0F\u9884\u89C8\u56FE\u7247\r
        </Button>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":h,antd:I,react:u||(u=e.t(p,2))},renderOpts:{compile:function(){var _=v()(s()().mark(function l(){var r,d=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(350).then(e.bind(e,48350));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,d));case 3:case"end":return t.stop()}},l)}));function m(){return _.apply(this,arguments)}return m}()}}}},5872:function(P,o,e){e.r(o),e.d(o,{texts:function(){return c}});var u=e(4697);const c=[{value:"\u57FA\u4E8E antd Image \u4E8C\u6B21\u5C01\u88C5",paraId:0,tocIndex:0},{value:"\u652F\u6301\u4EE5 JS \u65B9\u5F0F\u5728\u4EFB\u610F\u4F4D\u7F6E\u8C03\u7528",paraId:0,tocIndex:0},{value:`type QkImagePreviewType = {\r
  src: string; //\u56FE\u7247\u5730\u5740\r
  onCancel?: () => void; //\u5173\u95ED\u9884\u89C8\u56DE\u8C03\r
};
`,paraId:1,tocIndex:2}]}}]);
