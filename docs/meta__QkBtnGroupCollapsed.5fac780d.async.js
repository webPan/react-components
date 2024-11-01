"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[250],{6820:function(D,t,e){var c;e.r(t),e.d(t,{demos:function(){return f}});var u=e(43953),s=e.n(u),v=e(91184),E=e.n(v),p=e(38497),b=e(31170),y=e(50451),f={"qkbtngroupcollapsed-demo-0":{component:p.memo(p.lazy(E()(s()().mark(function m(){var d,a,r,n,_;return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return d=l.sent,a=d.QkBtnGroupCollapsed,l.next=6,Promise.resolve().then(e.t.bind(e,38497,19));case 6:return r=l.sent,n=r.default,_=function(){return n.createElement("div",null,n.createElement("div",null,n.createElement(a,{onClick:function(i){console.log(i)},data:[{label:"\u65B0\u589E",collapsed:!1,key:"ADD"},{label:"\u5220\u9664",collapsed:!1,key:"DELETE"},{label:"\u7F16\u8F91",collapsed:!1,key:"EDIT"}]})),n.createElement("div",null,n.createElement(a,{onClick:function(i){console.log(i)},data:[{label:"\u65B0\u589E",collapsed:!1,key:"ADD"},{label:"\u5220\u9664",collapsed:!0,key:"DELETE"},{label:"\u7F16\u8F91",collapsed:!0,key:"EDIT"}]})))},l.abrupt("return",{default:_});case 10:case"end":return l.stop()}},m)})))),asset:{type:"BLOCK",id:"qkbtngroupcollapsed-demo-0",refAtomIds:["QkBtnGroupCollapsed"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkBtnGroupCollapsed } from 'react-components';
import React from 'react';

const Example = () => {
  return (
    <div>
      <div>
        <QkBtnGroupCollapsed
          onClick={(key) => {
            console.log(key);
          }}
          data={[
            { label: '\u65B0\u589E', collapsed: false, key: 'ADD' },
            { label: '\u5220\u9664', collapsed: false, key: 'DELETE' },
            { label: '\u7F16\u8F91', collapsed: false, key: 'EDIT' },
          ]}
        />
      </div>
      <div>
        <QkBtnGroupCollapsed
          onClick={(key) => {
            console.log(key);
          }}
          data={[
            { label: '\u65B0\u589E', collapsed: false, key: 'ADD' },
            { label: '\u5220\u9664', collapsed: true, key: 'DELETE' },
            { label: '\u7F16\u8F91', collapsed: true, key: 'EDIT' },
          ]}
        />
      </div>
    </div>
  );
};

export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":y,react:c||(c=e.t(p,2))},renderOpts:{compile:function(){var m=E()(s()().mark(function a(){var r,n=arguments;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(440).then(e.bind(e,86440));case 2:return o.abrupt("return",(r=o.sent).default.apply(r,n));case 3:case"end":return o.stop()}},a)}));function d(){return m.apply(this,arguments)}return d}()}}}},78749:function(D,t,e){e.r(t),e.d(t,{texts:function(){return u}});var c=e(31170);const u=[{value:"\u5F53\u6309\u94AE\u8FC7\u591A\u65F6\uFF0C\u53EF\u80FD\u9700\u8981\u9009\u62E9\u6027\u7684\u9700\u8981\u6536\u8D77\u67D0\u4E9B\u6309\u94AE\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u53EF\u4EE5\u7528\u5230\u8FD9\u4E2A\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u6309\u94AE\u8FC7\u591A\uFF0C\u53EF\u4EE5\u9009\u62E9\u6027\u5C06\u6309\u94AE\u653E\u5165\u5230\u66F4\u591A\u4E2D",paraId:1,tocIndex:0},{value:`/** \u6309\u94AE\u5C55\u5F00 \u6536\u8D77 */
type QkBtnGroupCollapsedType = {
  /** \u6570\u636E\u6E90 */
  data: {
    label: string; //\u6309\u94AE\u6587\u5B57
    key: string | number; //key
    collapsed?: boolean; //\u77F3\u4F5B\u6298\u53E0
    show?: boolean; //\u662F\u5426\u663E\u793A
    disabled?: boolean; //\u662F\u5426\u7981\u7528
  }[];
  onClick?: (value: string) => void; //\u70B9\u51FB\u4E8B\u4EF6
};
`,paraId:2,tocIndex:2}]}}]);
