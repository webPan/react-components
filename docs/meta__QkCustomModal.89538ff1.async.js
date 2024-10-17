"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[119],{6890:function(y,s,e){var m;e.r(s),e.d(s,{demos:function(){return R}});var u=e(43953),d=e.n(u),O=e(9083),B=e.n(O),I=e(91184),v=e.n(I),c=e(38497),w=e(63669),b=e(91167),L=e(56690),R={"qkcustommodal-demo-0":{component:c.memo(c.lazy(v()(d()().mark(function i(){var _,l,a,o,p,n,E,M,r,A,K,S,g,C;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,91167));case 2:return _=t.sent,l=_.QkCustomModal,t.next=6,Promise.resolve().then(e.t.bind(e,38497,19));case 6:return a=t.sent,o=a.default,p=a.useState,t.next=11,Promise.resolve().then(e.bind(e,56690));case 11:return n=t.sent,E=n.Button,M=n.Space,r=n.Typography,A=r.Title,K=r.Paragraph,S=r.Text,g=r.Link,C=function(){var U=p(!1),h=B()(U,2),f=h[0],P=h[1];return o.createElement("div",null,o.createElement(M,null,o.createElement(E,{onClick:function(){P(!f)}},"\u7EC4\u4EF6\u5F39\u6846"),o.createElement(E,{onClick:function(){var T=l.Create({title:"\u54C8\u554A\u54C8",children:"\u8FD9\u91CC\u53EF\u4EE5\u662F\u7EC4\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5176\u4ED6\u4E1C\u897F",onOk:function(){T.destroy()},onCancel:function(){T.destroy()}})}},"js\u8C03\u7528\u5F39\u6846")),o.createElement(l,{visible:f,onCancel:function(){P(!1)}},"TEST"))},t.abrupt("return",{default:C});case 18:case"end":return t.stop()}},i)})))),asset:{type:"BLOCK",id:"qkcustommodal-demo-0",refAtomIds:["QkCustomModal"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkCustomModal } from 'react-components';
import React, { useState } from 'react';
import { Button, Space, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Space>
        <Button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          \u7EC4\u4EF6\u5F39\u6846
        </Button>
        <Button
          onClick={() => {
            const handleModal = QkCustomModal.Create({
              title: '\u54C8\u554A\u54C8',
              children: '\u8FD9\u91CC\u53EF\u4EE5\u662F\u7EC4\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5176\u4ED6\u4E1C\u897F',
              onOk: () => {
                handleModal.destroy();
              },
              onCancel: () => {
                handleModal.destroy();
              },
            });
          }}
        >
          js\u8C03\u7528\u5F39\u6846
        </Button>
      </Space>

      <QkCustomModal
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      >
        TEST
      </QkCustomModal>
    </div>
  );
};

export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx"},context:{"react-components":b,react:m||(m=e.t(c,2)),antd:L},renderOpts:{compile:function(){var i=v()(d()().mark(function l(){var a,o=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(440).then(e.bind(e,86440));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},l)}));function _(){return i.apply(this,arguments)}return _}()}}}},81307:function(y,s,e){e.r(s),e.d(s,{texts:function(){return u}});var m=e(63669);const u=[{value:"\u81EA\u5B9A\u4E49\u5F39\u6846\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u53EF\u5F53\u4F5C\u7EC4\u4EF6\u7528",paraId:0,tocIndex:0},{value:"\u4E5F\u53EF\u901A\u8FC7 js \u5728\u4EFB\u610F\u4F4D\u7F6E\u8C03\u7528\u6539\u7EC4\u4EF6",paraId:0,tocIndex:0}]}}]);
