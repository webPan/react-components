"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[119],{6890:function(B,r,e){var _;e.r(r),e.d(r,{demos:function(){return I}});var d=e(43953),m=e.n(d),b=e(9083),L=e.n(b),g=e(91184),M=e.n(g),i=e(38497),w=e(63669),R=e(91167),A=e(56690),I={"qkcustommodal-demo-0":{component:i.memo(i.lazy(M()(m()().mark(function c(){var u,s,l,n,p,t,E,C,a,h,v,K,S,P;return m()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,91167));case 2:return u=o.sent,s=u.QkCustomModal,o.next=6,Promise.resolve().then(e.t.bind(e,38497,19));case 6:return l=o.sent,n=l.default,p=l.useState,o.next=11,Promise.resolve().then(e.bind(e,56690));case 11:return t=o.sent,E=t.Button,C=t.Space,a=t.Typography,h=a.Title,v=a.Paragraph,K=a.Text,S=a.Link,P=function(){var U=p(!1),T=L()(U,2),f=T[0],y=T[1];return n.createElement("div",null,n.createElement(a,null,n.createElement(h,null,"QkCustomModal \u7EC4\u4EF6"),n.createElement(v,null,n.createElement("ul",null,n.createElement("li",null,"\u81EA\u5B9A\u4E49\u5F39\u6846\u7EC4\u4EF6"),n.createElement("li",null,"\u53EF\u5F53\u4F5C\u7EC4\u4EF6\u7528"),n.createElement("li",null,"\u4E5F\u53EF\u901A\u8FC7js\u5728\u4EFB\u610F\u4F4D\u7F6E\u8C03\u7528\u6539\u7EC4\u4EF6")))),n.createElement(C,null,n.createElement(E,{onClick:function(){y(!f)}},"\u7EC4\u4EF6\u5F39\u6846"),n.createElement(E,{onClick:function(){var O=s.Create({title:"\u54C8\u554A\u54C8",children:"\u8FD9\u91CC\u53EF\u4EE5\u662F\u7EC4\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5176\u4ED6\u4E1C\u897F",onOk:function(){O.destroy()},onCancel:function(){O.destroy()}})}},"js\u8C03\u7528\u5F39\u6846")),n.createElement(s,{visible:f,onCancel:function(){y(!1)}},"TEST"))},o.abrupt("return",{default:P});case 18:case"end":return o.stop()}},c)})))),asset:{type:"BLOCK",id:"qkcustommodal-demo-0",refAtomIds:["QkCustomModal"],dependencies:{"index.tsx":{type:"FILE",value:`import {QkCustomModal} from 'react-components';
import React, { useState } from 'react';
import { Button, Space, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Typography>
        <Title>QkCustomModal \u7EC4\u4EF6</Title>
        <Paragraph>
          <ul>
            <li>\u81EA\u5B9A\u4E49\u5F39\u6846\u7EC4\u4EF6</li>
            <li>\u53EF\u5F53\u4F5C\u7EC4\u4EF6\u7528</li>
            <li>\u4E5F\u53EF\u901A\u8FC7js\u5728\u4EFB\u610F\u4F4D\u7F6E\u8C03\u7528\u6539\u7EC4\u4EF6</li>
          </ul>
        </Paragraph>
      </Typography>
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
              }
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

export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx"},context:{"react-components":R,react:_||(_=e.t(i,2)),antd:A},renderOpts:{compile:function(){var c=M()(m()().mark(function s(){var l,n=arguments;return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(440).then(e.bind(e,86440));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,n));case 3:case"end":return t.stop()}},s)}));function u(){return c.apply(this,arguments)}return u}()}}}},81307:function(B,r,e){e.r(r),e.d(r,{texts:function(){return d}});var _=e(63669);const d=[]}}]);
