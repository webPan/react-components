"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[203],{94399:function(h,l,u){var s;u.r(l),u.d(l,{demos:function(){return f}});var F=u(43953),m=u.n(F),M=u(63027),i=u.n(M),T=u(91184),C=u.n(T),d=u(38497),L=u(85187),O=u(50451),P=u(56690),c,A,f={"qkgeneratemathformula-demo-0":{component:d.memo(d.lazy(C()(m()().mark(function B(){var _,E,r,a,o,t,e,g,y,I,R,D;return m()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(u.bind(u,50451));case 2:return _=n.sent,E=_.QkGenerateMathFormula,n.next=6,Promise.resolve().then(u.bind(u,56690));case 6:return r=n.sent,a=r.Divider,o=r.Typography,n.next=11,Promise.resolve().then(u.t.bind(u,38497,19));case 11:return t=n.sent,e=t.default,g=o.Title,y=o.Paragraph,I=o.Text,R=o.Link,D=function(){var p=String.raw(c||(c=i()([void 0],["\u4E0B\u6807 CO_{2^{22}} \u4E0A\u6807CO^{2} \u4E0B\u5212\u7EBF \\underline{AB} \u4E0A\u5212\u7EBF \\overline{ABC DEFG} \u590D\u6742\u7684 \\sum{^{1000}_{n = 100}} A/R CDM\u9879\u76EE\u6D3B\u52A8\u751F\u7269\u8D28\u71C3\u70E7\u9020\u6210\u975ECO[[2]]\u6E29\u5BA4\u6C14\u4F53\u6392\u653E\u589E\u52A0\u7684\u4F30\u7B97\u5DE5\u5177\uFF08V4.0.0\uFF0CEB65\uFF09 \u9879\u76EE\u91C7\u7528\u65B9\u6CD5\u5B66HB-AR-CM-001-V01\u6CB3\u5317\u627F\u5FB7\u68EE\u6797\u56FA\u78B3\u751F\u6001\u4EA7\u54C1\u9879\u76EE\u65B9\u6CD5\u5B66V01"]))),v=String.raw(A||(A=i()(["\u9879\u76EE\u6D3B\u52A8\u7684\u56FA\u78B3\u91CF\u7531\u516C\u5F0F\u8BA1\u7B97\uFF1A\u2206C_{NET}=sum{_{t = 1}^{t}} ABC \u2206C_{NET,t} \u5BA1\u5B9A sum{_{t=1}^{T}}"],["\u9879\u76EE\u6D3B\u52A8\u7684\u56FA\u78B3\u91CF\u7531\u516C\u5F0F\u8BA1\u7B97\uFF1A\u2206C_{NET}=\\sum{_{t = 1}^{t}} ABC \u2206C_{NET,t} \u5BA1\u5B9A \\sum{_{t=1}^{T}}"])));return e.createElement("div",null,e.createElement("p",null,"\u539F\u59CB\u683C\u5F0F\uFF1A",p),e.createElement(a,null),e.createElement("div",null,"\u8F93\u51FA\u683C\u5F0F\uFF1A",e.createElement(E,{content:p})),e.createElement(a,null),e.createElement("p",null,"\u539F\u59CB\u683C\u5F0F\uFF1A",v),e.createElement(a,null),e.createElement("div",null,"\u8F93\u51FA\u683C\u5F0F\uFF1A",e.createElement(E,{content:v})))},n.abrupt("return",{default:D});case 16:case"end":return n.stop()}},B)})))),asset:{type:"BLOCK",id:"qkgeneratemathformula-demo-0",refAtomIds:["QkGenerateMathFormula"],dependencies:{"index.tsx":{type:"FILE",value:`/**
 * title: \u6570\u5B66\u516C\u5F0F-\u624B\u5199
 * */
import {QkGenerateMathFormula} from 'react-components';
import { Divider, Typography } from "antd";
import React from "react";
const { Title, Paragraph, Text, Link } = Typography;

/**
 * \u6807\u7B7E\u961F\u5217
 * 1.  \u5F80\u6807\u7B7E\u961F\u5217\u91CC\u5199\u5165\u5185\u5BB9
 *  1.1 \u5982\u679C\u662F\u975E\u95ED\u5408\u5B57\u7B26\uFF0C\u5219push\u5230\u961F\u5217\u4E2D\uFF0C\u5E76\u628A\u5B83\u5F53\u6210\u8D77\u59CB\u6807\u7B7E
 *  1.2 \u5982\u679C\u662F\u95ED\u5408\u5B57\u7B26\uFF0C\u5219\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\u6807\u7B7E\uFF0C\u5E76\u5220\u9664\u6807\u7B7E\u961F\u5217\u6700\u540E\u4E00\u4E2A\u6807\u7B7E\uFF0C\u5F62\u6210\u4E00\u95ED\u4E00\u5408
 * */

const Example = ()=>{
  const html = String.raw\`\u4E0B\u6807 CO_{2^{22}} \u4E0A\u6807CO^{2} \u4E0B\u5212\u7EBF \\underline{AB} \u4E0A\u5212\u7EBF \\overline{ABC DEFG} \u590D\u6742\u7684 \\sum{^{1000}_{n = 100}} A/R CDM\u9879\u76EE\u6D3B\u52A8\u751F\u7269\u8D28\u71C3\u70E7\u9020\u6210\u975ECO[[2]]\u6E29\u5BA4\u6C14\u4F53\u6392\u653E\u589E\u52A0\u7684\u4F30\u7B97\u5DE5\u5177\uFF08V4.0.0\uFF0CEB65\uFF09 \u9879\u76EE\u91C7\u7528\u65B9\u6CD5\u5B66HB-AR-CM-001-V01\u6CB3\u5317\u627F\u5FB7\u68EE\u6797\u56FA\u78B3\u751F\u6001\u4EA7\u54C1\u9879\u76EE\u65B9\u6CD5\u5B66V01\`;
  const html2 = String.raw\`\u9879\u76EE\u6D3B\u52A8\u7684\u56FA\u78B3\u91CF\u7531\u516C\u5F0F\u8BA1\u7B97\uFF1A\u2206C_{NET}=\\sum{_{t = 1}^{t}} ABC \u2206C_{NET,t} \u5BA1\u5B9A \\sum{_{t=1}^{T}}\`
  return <div>
    <p>\u539F\u59CB\u683C\u5F0F\uFF1A{html}</p>
    <Divider/>
    <div>
      \u8F93\u51FA\u683C\u5F0F\uFF1A<QkGenerateMathFormula content={html}/>
    </div>
    <Divider/>
    <p>\u539F\u59CB\u683C\u5F0F\uFF1A{html2}</p>
    <Divider/>
    <div>
      \u8F93\u51FA\u683C\u5F0F\uFF1A<QkGenerateMathFormula content={html2}/>
    </div>
  </div>
}

export default Example`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":O,antd:P,react:s||(s=u.t(d,2))},renderOpts:{compile:function(){var B=C()(m()().mark(function E(){var r,a=arguments;return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.e(440).then(u.bind(u,86440));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},E)}));function _(){return B.apply(this,arguments)}return _}()}}}},77333:function(h,l,u){u.r(l),u.d(l,{texts:function(){return F}});var s=u(85187);const F=[{value:"\u624B\u5199\u6570\u5B66\u516C\u5F0F\u7684\u5B9E\u73B0",paraId:0,tocIndex:0},{value:"\u652F\u6301\u65E0\u6781\u4E0A\u6807 \u65E0\u6781\u4E0B\u6807\u3001\u4E0A\u5212\u7EBF\u3001\u4E0B\u5212\u7EBF\u3001\u6C42\u548C",paraId:0,tocIndex:0},{value:`enum Tags {
  "_" = "sub",
  "^" = "sup",
  "\\\\underline" = "underline",
  "\\\\overline" = "overline",
  "\\\\sum" = "sum"
}
`,paraId:1,tocIndex:2}]}}]);
