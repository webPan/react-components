"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[735],{47635:function(P,s,n){var p;n.r(s),n.d(s,{demos:function(){return T}});var h=n(43953),m=n.n(h),D=n(91184),y=n.n(D),_=n(38497),x=n(38409),R=n(79021),M=n(25749),T={"qkqrcode-demo-0":{component:_.memo(_.lazy(y()(m()().mark(function v(){var o,a,c,r,E,e,C,d,u,O,Q,B,I,f;return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.bind(n,79021));case 2:return o=t.sent,a=o.Button,c=o.Space,r=o.Typography,t.next=8,Promise.resolve().then(n.t.bind(n,38497,19));case 8:return E=t.sent,e=E.default,t.next=12,Promise.resolve().then(n.bind(n,25749));case 12:return C=t.sent,d=C.QkQRCode,u=C.downloadFile,O=r.Title,Q=r.Paragraph,B=r.Text,I=r.Link,f=function(){return e.createElement("div",null,e.createElement("div",null,e.createElement(d,{content:"http://www.baidu.com",width:200,margin:10,title:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053"})),e.createElement("div",{className:"mt-[10px]"},e.createElement(c,null,e.createElement(a,{onClick:function(){var l=d.screenshot({content:"http://www.baidu.com",width:200,margin:10,title:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053",success:function(i){u({url:i,name:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053"}),l.destroy()}})}},"200px"),e.createElement(a,{onClick:function(){var l=d.screenshot({content:"http://www.baidu.com",width:500,margin:20,title:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053",success:function(i){u({url:i,name:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053"}),l.destroy()}})}},"500px"),e.createElement(a,{onClick:function(){var l=d.screenshot({content:"http://www.baidu.com",width:1e3,margin:50,title:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053",success:function(i){u({url:i,name:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053"}),l.destroy()}})}},"1000px"))))},t.abrupt("return",{default:f});case 18:case"end":return t.stop()}},v)})))),asset:{type:"BLOCK",id:"qkqrcode-demo-0",refAtomIds:["QkQRCode"],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Space, Typography } from 'antd';\r
import React from 'react';\r
import { QkQRCode, downloadFile } from 'react-components';\r
const { Title, Paragraph, Text, Link } = Typography;\r
\r
const Example = () => {\r
  return (\r
    <div>\r
      <div>\r
        <QkQRCode\r
          content="http://www.baidu.com"\r
          width={200}\r
          margin={10}\r
          title="\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053"\r
        />\r
      </div>\r
      <div className="mt-[10px]">\r
        <Space>\r
          <Button\r
            onClick={() => {\r
              const screenshot = QkQRCode.screenshot({\r
                content: 'http://www.baidu.com',\r
                width: 200,\r
                margin: 10,\r
                title: '\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053',\r
                success: (data) => {\r
                  downloadFile({ url: data, name: '\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053' });\r
                  screenshot.destroy();\r
                },\r
              });\r
            }}\r
          >\r
            200px\r
          </Button>\r
          <Button\r
            onClick={() => {\r
              const screenshot = QkQRCode.screenshot({\r
                content: 'http://www.baidu.com',\r
                width: 500,\r
                margin: 20,\r
                title: '\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053',\r
                success: (data) => {\r
                  downloadFile({ url: data, name: '\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053' });\r
                  screenshot.destroy();\r
                },\r
              });\r
            }}\r
          >\r
            500px\r
          </Button>\r
          <Button\r
            onClick={() => {\r
              const screenshot = QkQRCode.screenshot({\r
                content: 'http://www.baidu.com',\r
                width: 1000,\r
                margin: 50,\r
                title: '\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053',\r
                success: (data) => {\r
                  downloadFile({ url: data, name: '\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053' });\r
                  screenshot.destroy();\r
                },\r
              });\r
            }}\r
          >\r
            1000px\r
          </Button>\r
        </Space>\r
      </div>\r
    </div>\r
  );\r
};\r
export default Example;`},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{antd:R,react:p||(p=n.t(_,2)),"react-components":M},renderOpts:{compile:function(){var v=y()(m()().mark(function a(){var c,r=arguments;return m()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(350).then(n.bind(n,48350));case 2:return e.abrupt("return",(c=e.sent).default.apply(c,r));case 3:case"end":return e.stop()}},a)}));function o(){return v.apply(this,arguments)}return o}()}}}},41482:function(P,s,n){n.r(s),n.d(s,{texts:function(){return h}});var p=n(38409);const h=[{value:"\u57FA\u4E8E qrcode.react \u3001html2canvas \u751F\u6210\u7684\u4E8C\u7EF4\u7801\u548C\u4E8C\u7EF4\u7801\u4E0B\u8F7D",paraId:0,tocIndex:0},{value:"\u4E8C\u7EF4\u7801\u751F\u6210\u5E26\u6807\u9898",paraId:1,tocIndex:0},{value:"\u652F\u6301\u81EA\u5B9A\u4E49\u5C3A\u5BF8\u7684\u4E8C\u7EF4\u7801\u4E0B\u8F7D",paraId:1,tocIndex:0},{value:`type QkQRCodeType = {\r
  /** \u4E8C\u7EF4\u7801\u5185\u5BB9 */\r
  content: string;\r
  /** \u4E8C\u7EF4\u7801\u5BBD\u5EA6 */\r
  width?: number;\r
  /** \u4E8C\u7EF4\u7801\u6807\u9898 */\r
  title?: string;\r
  /** \u4E8C\u7EF4\u7801\u5185\u5BB9\u662F\u5426\u53EF\u7F16\u8F91 */\r
  edit?: boolean;\r
  /** \u9700\u8981\u7F16\u8F91\u7684\u5185\u5BB9 */\r
  value?: string;\r
  /** \u4E8C\u7EF4\u7801\u5916\u8FB9\u8DDD */\r
  margin?: number;\r
  /** \u662F\u5426\u9ED8\u8BA4\u5F00\u542F\u622A\u56FE */\r
  screenshot?: boolean;\r
  /** \u8F93\u5165\u6587\u5B57\u957F\u5EA6\u9650\u5236 */\r
  titleLen?: number;\r
  /** \u7F16\u8F91\u5B8C\u6210\u4E8B\u4EF6 */\r
  finish?: (data: string) => void;\r
  /** \u662F\u5426\u652F\u6301\u4E8C\u7EF4\u7801\u4E0B\u8F7D */\r
  download?: (() => void) | null;\r
  /** \u4E8C\u7EF4\u7801\u6807\u9898\u7F16\u8F91\u6846onChange\u4E8B\u4EF6 */\r
  onChange?: ((value: string) => void) | null;\r
  /** \u622A\u56FE\u5B8C\u6210\u56DE\u8C03 */\r
  success?: (data: string) => void;\r
};
`,paraId:2,tocIndex:2}]}}]);
