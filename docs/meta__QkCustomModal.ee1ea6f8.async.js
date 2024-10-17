"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[119],{33:function(y,a,e){var m;e.r(a),e.d(a,{demos:function(){return j}});var _=e(43953),d=e.n(_),O=e(9083),b=e.n(O),R=e(91184),v=e.n(R),u=e(38497),U=e(66630),I=e(25749),B=e(79021),j={"qkcustommodal-demo-0":{component:u.memo(u.lazy(v()(d()().mark(function i(){var c,l,o,r,p,n,E,C,s,L,A,g,x,M;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,25749));case 2:return c=t.sent,l=c.QkCustomModal,t.next=6,Promise.resolve().then(e.t.bind(e,38497,19));case 6:return o=t.sent,r=o.default,p=o.useState,t.next=11,Promise.resolve().then(e.bind(e,79021));case 11:return n=t.sent,E=n.Button,C=n.Space,s=n.Typography,L=s.Title,A=s.Paragraph,g=s.Text,x=s.Link,M=function(){var K=p(!1),h=b()(K,2),P=h[0],f=h[1];return r.createElement("div",null,r.createElement(C,null,r.createElement(E,{onClick:function(){f(!P)}},"\u7EC4\u4EF6\u5F39\u6846"),r.createElement(E,{onClick:function(){var D=l.Create({title:"\u54C8\u554A\u54C8",children:"\u8FD9\u91CC\u53EF\u4EE5\u662F\u7EC4\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5176\u4ED6\u4E1C\u897F",onOk:function(){D.destroy()},onCancel:function(){D.destroy()}})}},"js\u8C03\u7528\u5F39\u6846")),r.createElement(l,{visible:P,onCancel:function(){f(!1)}},"TEST"))},t.abrupt("return",{default:M});case 18:case"end":return t.stop()}},i)})))),asset:{type:"BLOCK",id:"qkcustommodal-demo-0",refAtomIds:["QkCustomModal"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkCustomModal } from 'react-components';\r
import React, { useState } from 'react';\r
import { Button, Space, Typography } from 'antd';\r
const { Title, Paragraph, Text, Link } = Typography;\r
\r
const Example = () => {\r
  const [visible, setVisible] = useState(false);\r
  return (\r
    <div>\r
      <Space>\r
        <Button\r
          onClick={() => {\r
            setVisible(!visible);\r
          }}\r
        >\r
          \u7EC4\u4EF6\u5F39\u6846\r
        </Button>\r
        <Button\r
          onClick={() => {\r
            const handleModal = QkCustomModal.Create({\r
              title: '\u54C8\u554A\u54C8',\r
              children: '\u8FD9\u91CC\u53EF\u4EE5\u662F\u7EC4\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5176\u4ED6\u4E1C\u897F',\r
              onOk: () => {\r
                handleModal.destroy();\r
              },\r
              onCancel: () => {\r
                handleModal.destroy();\r
              },\r
            });\r
          }}\r
        >\r
          js\u8C03\u7528\u5F39\u6846\r
        </Button>\r
      </Space>\r
\r
      <QkCustomModal\r
        visible={visible}\r
        onCancel={() => {\r
          setVisible(false);\r
        }}\r
      >\r
        TEST\r
      </QkCustomModal>\r
    </div>\r
  );\r
};\r
\r
export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.4"}},entry:"index.tsx"},context:{"react-components":I,react:m||(m=e.t(u,2)),antd:B},renderOpts:{compile:function(){var i=v()(d()().mark(function l(){var o,r=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(350).then(e.bind(e,48350));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,r));case 3:case"end":return n.stop()}},l)}));function c(){return i.apply(this,arguments)}return c}()}}}},34645:function(y,a,e){e.r(a),e.d(a,{texts:function(){return _}});var m=e(66630);const _=[{value:"\u81EA\u5B9A\u4E49\u5F39\u6846\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u53EF\u5F53\u4F5C\u7EC4\u4EF6\u7528",paraId:0,tocIndex:0},{value:"\u4E5F\u53EF\u901A\u8FC7 js \u5728\u4EFB\u610F\u4F4D\u7F6E\u8C03\u7528\u6539\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:`\r
type CustomModalType = {\r
  /** \u6807\u9898 */\r
  title?: string;\r
  /** \u5F39\u6846\u5185\u5BB9 */\r
  children?: React.ReactNode;\r
  /** \u5F39\u6846\u5BBD\u5EA6 */\r
  width?: number;\r
  /** \u786E\u5B9A\u6587\u6848 */\r
  okText?: string;\r
  /** \u53D6\u6D88\u6587\u6848 */\r
  cancelText?: string;\r
  /** \u53D6\u6D88\u4E8B\u4EF6\u56DE\u8C03 */\r
  onCancel?: () => void;\r
  /** \u786E\u5B9A\u4E8B\u4EF6\u56DE\u8C03 */\r
  onOk?: () => void;\r
  /** \u662F\u5426\u663E\u793A  */\r
  visible?: boolean;\r
  /** \u5E95\u90E8\u6309\u94AE\u81EA\u5B9A\u4E49\u6E32\u67D3 */\r
  footerRender?: boolean;\r
  /** \u4E3B\u9898 */\r
  theme?: 'APP' | 'PC';\r
  /** \u662F\u5426\u9700\u8981\u5173\u95ED\u6309\u94AE */\r
  closable?: boolean;\r
  /** \u786E\u5B9A\u6309\u94AE\u81EA\u5B9A\u4E49\u6E32\u67D3 */\r
  okRender?: (() => React.ReactNode) | boolean;\r
  /** \u5173\u95ED\u6309\u94AE\u81EA\u5B9A\u4E49\u6E32\u67D3 */\r
  cancelRender?: (() => React.ReactNode) | boolean;\r
  /** \u5F39\u6846\u5C42\u7EA7 */\r
  zIndex?: number;\r
};
`,paraId:1,tocIndex:2}]}}]);
