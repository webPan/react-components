"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[119],{6890:function(D,P,e){var I;e.r(P),e.d(P,{demos:function(){return A}});var R=e(43953),d=e.n(R),Q=e(9083),b=e.n(Q),k=e(91184),E=e.n(k),p=e(38497),S=e(63669),h=e(50451),B=e(69620),A={"qkcustommodal-demo-0":{component:p.memo(p.lazy(E()(d()().mark(function s(){var r,l,a,n,u,t,i,f;return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return r=o.sent,l=r.QkCustomModal,o.next=6,Promise.resolve().then(e.t.bind(e,38497,19));case 6:return a=o.sent,n=a.default,u=a.useState,o.next=11,Promise.resolve().then(e.bind(e,69620));case 11:return t=o.sent,i=t.Button,f=function(){var y=u(!1),v=b()(y,2),M=v[0],C=v[1];return n.createElement("div",null,n.createElement(i,{onClick:function(){return C(!0)}},"\u6253\u5F00\u57FA\u7840\u5F39\u7A97"),n.createElement(l,{visible:M,title:"\u57FA\u7840\u5F39\u7A97",onCancel:function(){return C(!1)},onOk:function(){return C(!1)}},"\u8FD9\u662F\u4E00\u4E2A\u57FA\u7840\u7684\u5F39\u7A97\u793A\u4F8B"))},o.abrupt("return",{default:f});case 15:case"end":return o.stop()}},s)})))),asset:{type:"BLOCK",id:"qkcustommodal-demo-0",refAtomIds:["QkCustomModal"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkCustomModal } from 'react-components';
import React, { useState } from 'react';
import { Button, Space } from 'antd';

const BasicExample = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>\u6253\u5F00\u57FA\u7840\u5F39\u7A97</Button>

      <QkCustomModal
        visible={visible}
        title="\u57FA\u7840\u5F39\u7A97"
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        \u8FD9\u662F\u4E00\u4E2A\u57FA\u7840\u7684\u5F39\u7A97\u793A\u4F8B
      </QkCustomModal>
    </div>
  );
};

export default BasicExample;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx"},context:{"react-components":h,react:I||(I=e.t(p,2)),antd:B},renderOpts:{compile:function(){var s=E()(d()().mark(function l(){var a,n=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(440).then(e.bind(e,86440));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},l)}));function r(){return s.apply(this,arguments)}return r}()}},"qkcustommodal-demo-1":{component:p.memo(p.lazy(E()(d()().mark(function s(){var r,l,a,n,u,t,i;return d()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return r=c.sent,l=r.QkCustomModal,c.next=6,Promise.resolve().then(e.t.bind(e,38497,19));case 6:return a=c.sent,n=a.default,c.next=10,Promise.resolve().then(e.bind(e,69620));case 10:return u=c.sent,t=u.Button,i=function(){var m=function(){var v=l.Create({title:"\u547D\u4EE4\u5F0F\u8C03\u7528",children:n.createElement("div",null,n.createElement("p",null,"\u65E0\u9700\u5B9A\u4E49\u72B6\u6001\u5373\u53EF\u8C03\u7528\u7684\u5F39\u7A97"),n.createElement("p",null,"\u9002\u7528\u4E8E\u4E34\u65F6\u6027\u7684\u4FE1\u606F\u5C55\u793A")),onOk:function(){return v.destroy()},onCancel:function(){return v.destroy()}})};return n.createElement(t,{onClick:m},"\u547D\u4EE4\u5F0F\u6253\u5F00")},c.abrupt("return",{default:i});case 14:case"end":return c.stop()}},s)})))),asset:{type:"BLOCK",id:"qkcustommodal-demo-1",refAtomIds:["QkCustomModal"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkCustomModal } from 'react-components';
import React from 'react';
import { Button, Space } from 'antd';

const CommandExample = () => {
  const showModal = () => {
    const modal = QkCustomModal.Create({
      title: '\u547D\u4EE4\u5F0F\u8C03\u7528',
      children: (
        <div>
          <p>\u65E0\u9700\u5B9A\u4E49\u72B6\u6001\u5373\u53EF\u8C03\u7528\u7684\u5F39\u7A97</p>
          <p>\u9002\u7528\u4E8E\u4E34\u65F6\u6027\u7684\u4FE1\u606F\u5C55\u793A</p>
        </div>
      ),
      onOk: () => modal.destroy(),
      onCancel: () => modal.destroy(),
    });
  };

  return <Button onClick={showModal}>\u547D\u4EE4\u5F0F\u6253\u5F00</Button>;
};

export default CommandExample;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx"},context:{"react-components":h,react:I||(I=e.t(p,2)),antd:B},renderOpts:{compile:function(){var s=E()(d()().mark(function l(){var a,n=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(440).then(e.bind(e,86440));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},l)}));function r(){return s.apply(this,arguments)}return r}()}},"qkcustommodal-demo-2":{component:p.memo(p.lazy(E()(d()().mark(function s(){var r,l,a,n,u,t,i,f,c;return d()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return r=m.sent,l=r.QkCustomModal,m.next=6,Promise.resolve().then(e.t.bind(e,38497,19));case 6:return a=m.sent,n=a.default,u=a.useState,m.next=11,Promise.resolve().then(e.bind(e,69620));case 11:return t=m.sent,i=t.Button,f=t.Space,c=function(){var v=u(!1),M=b()(v,2),C=M[0],x=M[1];return n.createElement(f,null,n.createElement(i,{onClick:function(){return x(!0)}},"APP\u98CE\u683C\u5F39\u7A97"),n.createElement(l,{visible:C,title:"APP\u4E3B\u9898",theme:"APP",width:300,onCancel:function(){return x(!1)},onOk:function(){return x(!1)}},"\u9002\u914D\u79FB\u52A8\u7AEF\u7684\u5F39\u7A97\u6837\u5F0F"))},m.abrupt("return",{default:c});case 16:case"end":return m.stop()}},s)})))),asset:{type:"BLOCK",id:"qkcustommodal-demo-2",refAtomIds:["QkCustomModal"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkCustomModal } from 'react-components';
import React, { useState } from 'react';
import { Button, Space } from 'antd';

const ThemeExample = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Space>
      <Button onClick={() => setVisible(true)}>APP\u98CE\u683C\u5F39\u7A97</Button>

      <QkCustomModal
        visible={visible}
        title="APP\u4E3B\u9898"
        theme="APP"
        width={300}
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        \u9002\u914D\u79FB\u52A8\u7AEF\u7684\u5F39\u7A97\u6837\u5F0F
      </QkCustomModal>
    </Space>
  );
};

export default ThemeExample;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx"},context:{"react-components":h,react:I||(I=e.t(p,2)),antd:B},renderOpts:{compile:function(){var s=E()(d()().mark(function l(){var a,n=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(440).then(e.bind(e,86440));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},l)}));function r(){return s.apply(this,arguments)}return r}()}},"qkcustommodal-demo-3":{component:p.memo(p.lazy(E()(d()().mark(function s(){var r,l,a,n,u,t,i,f;return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return r=o.sent,l=r.QkCustomModal,o.next=6,Promise.resolve().then(e.t.bind(e,38497,19));case 6:return a=o.sent,n=a.default,u=a.useState,o.next=11,Promise.resolve().then(e.bind(e,69620));case 11:return t=o.sent,i=t.Button,f=function(){var y=u(!1),v=b()(y,2),M=v[0],C=v[1];return n.createElement("div",null,n.createElement(i,{onClick:function(){return C(!0)}},"\u81EA\u5B9A\u4E49\u5E95\u90E8"),n.createElement(l,{visible:M,title:"\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE",okRender:function(){return n.createElement(i,{type:"primary",danger:!0,onClick:function(){return C(!1)}},"\u5220\u9664")},cancelRender:function(){return n.createElement(i,{onClick:function(){return C(!1)}},"\u8FD4\u56DE")}},"\u81EA\u5B9A\u4E49\u6309\u94AE\u6837\u5F0F\u548C\u6587\u6848"))},o.abrupt("return",{default:f});case 15:case"end":return o.stop()}},s)})))),asset:{type:"BLOCK",id:"qkcustommodal-demo-3",refAtomIds:["QkCustomModal"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkCustomModal } from 'react-components';
import React, { useState } from 'react';
import { Button, Space } from 'antd';

const CustomFooterExample = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>\u81EA\u5B9A\u4E49\u5E95\u90E8</Button>

      <QkCustomModal
        visible={visible}
        title="\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE"
        okRender={() => (
          <Button type="primary" danger onClick={() => setVisible(false)}>
            \u5220\u9664
          </Button>
        )}
        cancelRender={() => (
          <Button onClick={() => setVisible(false)}>\u8FD4\u56DE</Button>
        )}
      >
        \u81EA\u5B9A\u4E49\u6309\u94AE\u6837\u5F0F\u548C\u6587\u6848
      </QkCustomModal>
    </div>
  );
};

export default CustomFooterExample;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx"},context:{"react-components":h,react:I||(I=e.t(p,2)),antd:B},renderOpts:{compile:function(){var s=E()(d()().mark(function l(){var a,n=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(440).then(e.bind(e,86440));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},l)}));function r(){return s.apply(this,arguments)}return r}()}}}},81307:function(D,P,e){e.r(P),e.d(P,{texts:function(){return R}});var I=e(63669);const R=[{value:"\u{1F3AF} \u81EA\u5B9A\u4E49\u5F39\u6846\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u7075\u6D3B\u7684\u5F39\u7A97\u89E3\u51B3\u65B9\u6848\u3002",paraId:0},{value:"\u2728 \u7279\u6027\uFF1A",paraId:1},{value:"\u{1F50C} \u652F\u6301\u7EC4\u4EF6\u5F0F\u8C03\u7528\u548C\u547D\u4EE4\u5F0F\u8C03\u7528",paraId:2},{value:"\u{1F3A8} \u53EF\u81EA\u5B9A\u4E49\u4E3B\u9898\u6837\u5F0F\uFF08PC/APP\uFF09",paraId:2},{value:"\u{1F6E0}\uFE0F \u7075\u6D3B\u7684\u5E95\u90E8\u6309\u94AE\u914D\u7F6E",paraId:2},{value:"\u{1F4F1} \u652F\u6301\u81EA\u5B9A\u4E49\u5BBD\u5EA6\u548C\u5C42\u7EA7",paraId:2},{value:"\u{1F504} \u4E30\u5BCC\u7684\u56DE\u8C03\u4E8B\u4EF6",paraId:2},{value:"\u{1F3AD} \u652F\u6301\u591A\u79CD\u5C55\u793A\u65B9\u5F0F",paraId:2},{value:"\u26A1\uFE0F \u9AD8\u6027\u80FD\uFF0C\u96F6\u4F9D\u8D56",paraId:2},{value:"\u53C2\u6570",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u7C7B\u578B",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"title",paraId:3,tocIndex:5},{value:"\u5F39\u7A97\u6807\u9898",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"children",paraId:3,tocIndex:5},{value:"\u5F39\u7A97\u5185\u5BB9",paraId:3,tocIndex:5},{value:"React.ReactNode",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"width",paraId:3,tocIndex:5},{value:"\u5F39\u7A97\u5BBD\u5EA6",paraId:3,tocIndex:5},{value:"number",paraId:3,tocIndex:5},{value:"520",paraId:3,tocIndex:5},{value:"visible",paraId:3,tocIndex:5},{value:"\u662F\u5426\u663E\u793A\u5F39\u7A97",paraId:3,tocIndex:5},{value:"boolean",paraId:3,tocIndex:5},{value:"false",paraId:3,tocIndex:5},{value:"theme",paraId:3,tocIndex:5},{value:"\u5F39\u7A97\u4E3B\u9898",paraId:3,tocIndex:5},{value:"'APP' | 'PC'",paraId:3,tocIndex:5},{value:"'PC'",paraId:3,tocIndex:5},{value:"okText",paraId:3,tocIndex:5},{value:"\u786E\u8BA4\u6309\u94AE\u6587\u5B57",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"'\u786E\u5B9A'",paraId:3,tocIndex:5},{value:"cancelText",paraId:3,tocIndex:5},{value:"\u53D6\u6D88\u6309\u94AE\u6587\u5B57",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"'\u53D6\u6D88'",paraId:3,tocIndex:5},{value:"closable",paraId:3,tocIndex:5},{value:"\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE",paraId:3,tocIndex:5},{value:"boolean",paraId:3,tocIndex:5},{value:"true",paraId:3,tocIndex:5},{value:"zIndex",paraId:3,tocIndex:5},{value:"\u5F39\u7A97\u5C42\u7EA7",paraId:3,tocIndex:5},{value:"number",paraId:3,tocIndex:5},{value:"1000",paraId:3,tocIndex:5},{value:"onOk",paraId:3,tocIndex:5},{value:"\u70B9\u51FB\u786E\u5B9A\u56DE\u8C03",paraId:3,tocIndex:5},{value:"() => void",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"onCancel",paraId:3,tocIndex:5},{value:"\u70B9\u51FB\u53D6\u6D88\u56DE\u8C03",paraId:3,tocIndex:5},{value:"() => void",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"footerRender",paraId:3,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u5E95\u90E8\u533A\u57DF",paraId:3,tocIndex:5},{value:"boolean",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"okRender",paraId:3,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u786E\u5B9A\u6309\u94AE",paraId:3,tocIndex:5},{value:"(() => React.ReactNode) | boolean",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"cancelRender",paraId:3,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u53D6\u6D88\u6309\u94AE",paraId:3,tocIndex:5},{value:"(() => React.ReactNode) | boolean",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"\u65B9\u6CD5\u540D",paraId:4,tocIndex:6},{value:"\u8BF4\u660E",paraId:4,tocIndex:6},{value:"\u53C2\u6570\u7C7B\u578B",paraId:4,tocIndex:6},{value:"QkCustomModal.Create",paraId:4,tocIndex:6},{value:"\u521B\u5EFA\u5E76\u663E\u793A\u5F39\u7A97",paraId:4,tocIndex:6},{value:"CustomModalType",paraId:4,tocIndex:6},{value:"QkCustomModal.destroy",paraId:4,tocIndex:6},{value:"\u9500\u6BC1\u5F39\u7A97",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6}]}}]);
