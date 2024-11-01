"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[119],{6890:function(y,l,n){var _;n.r(l),n.d(l,{demos:function(){return L}});var c=n(43953),d=n.n(c),O=n(9083),b=n.n(O),R=n(91184),v=n.n(R),u=n(38497),U=n(63669),I=n(50451),B=n(56690),L={"qkcustommodal-demo-0":{component:u.memo(u.lazy(v()(d()().mark(function i(){var m,r,a,o,p,e,E,C,s,A,g,x,K,M;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.bind(n,50451));case 2:return m=t.sent,r=m.QkCustomModal,t.next=6,Promise.resolve().then(n.t.bind(n,38497,19));case 6:return a=t.sent,o=a.default,p=a.useState,t.next=11,Promise.resolve().then(n.bind(n,56690));case 11:return e=t.sent,E=e.Button,C=e.Space,s=e.Typography,A=s.Title,g=s.Paragraph,x=s.Text,K=s.Link,M=function(){var S=p(!1),h=b()(S,2),P=h[0],f=h[1];return o.createElement("div",null,o.createElement(C,null,o.createElement(E,{onClick:function(){f(!P)}},"\u7EC4\u4EF6\u5F39\u6846"),o.createElement(E,{onClick:function(){var D=r.Create({title:"\u54C8\u554A\u54C8",children:"\u8FD9\u91CC\u53EF\u4EE5\u662F\u7EC4\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5176\u4ED6\u4E1C\u897F",onOk:function(){D.destroy()},onCancel:function(){D.destroy()}})}},"js\u8C03\u7528\u5F39\u6846")),o.createElement(r,{visible:P,onCancel:function(){f(!1)}},"TEST"))},t.abrupt("return",{default:M});case 18:case"end":return t.stop()}},i)})))),asset:{type:"BLOCK",id:"qkcustommodal-demo-0",refAtomIds:["QkCustomModal"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkCustomModal } from 'react-components';
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

export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx"},context:{"react-components":I,react:_||(_=n.t(u,2)),antd:B},renderOpts:{compile:function(){var i=v()(d()().mark(function r(){var a,o=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(440).then(n.bind(n,86440));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,o));case 3:case"end":return e.stop()}},r)}));function m(){return i.apply(this,arguments)}return m}()}}}},81307:function(y,l,n){n.r(l),n.d(l,{texts:function(){return c}});var _=n(63669);const c=[{value:"\u81EA\u5B9A\u4E49\u5F39\u6846\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u53EF\u5F53\u4F5C\u7EC4\u4EF6\u7528",paraId:0,tocIndex:0},{value:"\u4E5F\u53EF\u901A\u8FC7 js \u5728\u4EFB\u610F\u4F4D\u7F6E\u8C03\u7528\u6539\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:`
type CustomModalType = {
  /** \u6807\u9898 */
  title?: string;
  /** \u5F39\u6846\u5185\u5BB9 */
  children?: React.ReactNode;
  /** \u5F39\u6846\u5BBD\u5EA6 */
  width?: number;
  /** \u786E\u5B9A\u6587\u6848 */
  okText?: string;
  /** \u53D6\u6D88\u6587\u6848 */
  cancelText?: string;
  /** \u53D6\u6D88\u4E8B\u4EF6\u56DE\u8C03 */
  onCancel?: () => void;
  /** \u786E\u5B9A\u4E8B\u4EF6\u56DE\u8C03 */
  onOk?: () => void;
  /** \u662F\u5426\u663E\u793A  */
  visible?: boolean;
  /** \u5E95\u90E8\u6309\u94AE\u81EA\u5B9A\u4E49\u6E32\u67D3 */
  footerRender?: boolean;
  /** \u4E3B\u9898 */
  theme?: 'APP' | 'PC';
  /** \u662F\u5426\u9700\u8981\u5173\u95ED\u6309\u94AE */
  closable?: boolean;
  /** \u786E\u5B9A\u6309\u94AE\u81EA\u5B9A\u4E49\u6E32\u67D3 */
  okRender?: (() => React.ReactNode) | boolean;
  /** \u5173\u95ED\u6309\u94AE\u81EA\u5B9A\u4E49\u6E32\u67D3 */
  cancelRender?: (() => React.ReactNode) | boolean;
  /** \u5F39\u6846\u5C42\u7EA7 */
  zIndex?: number;
};
`,paraId:1,tocIndex:2}]}}]);
