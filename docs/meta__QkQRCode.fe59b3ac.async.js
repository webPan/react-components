"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[735],{29077:function(P,s,n){var p;n.r(s),n.d(s,{demos:function(){return T}});var h=n(43953),m=n.n(h),D=n(91184),C=n.n(D),_=n(38497),x=n(3568),R=n(56690),M=n(50451),T={"qkqrcode-demo-0":{component:_.memo(_.lazy(C()(m()().mark(function v(){var a,r,c,o,w,e,E,d,u,O,Q,B,I,y;return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.bind(n,56690));case 2:return a=t.sent,r=a.Button,c=a.Space,o=a.Typography,t.next=8,Promise.resolve().then(n.t.bind(n,38497,19));case 8:return w=t.sent,e=w.default,t.next=12,Promise.resolve().then(n.bind(n,50451));case 12:return E=t.sent,d=E.QkQRCode,u=E.downloadFile,O=o.Title,Q=o.Paragraph,B=o.Text,I=o.Link,y=function(){return e.createElement("div",null,e.createElement("div",null,e.createElement(d,{content:"http://www.baidu.com",width:200,margin:10,title:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053"})),e.createElement("div",{className:"mt-[10px]"},e.createElement(c,null,e.createElement(r,{onClick:function(){var l=d.screenshot({content:"http://www.baidu.com",width:200,margin:10,title:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053",success:function(i){u({url:i,name:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053"}),l.destroy()}})}},"200px"),e.createElement(r,{onClick:function(){var l=d.screenshot({content:"http://www.baidu.com",width:500,margin:20,title:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053",success:function(i){u({url:i,name:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053"}),l.destroy()}})}},"500px"),e.createElement(r,{onClick:function(){var l=d.screenshot({content:"http://www.baidu.com",width:1e3,margin:50,title:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053",success:function(i){u({url:i,name:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053"}),l.destroy()}})}},"1000px"))))},t.abrupt("return",{default:y});case 18:case"end":return t.stop()}},v)})))),asset:{type:"BLOCK",id:"qkqrcode-demo-0",refAtomIds:["QkQRCode"],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Space, Typography } from 'antd';
import React from 'react';
import { QkQRCode, downloadFile } from 'react-components';
const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  return (
    <div>
      <div>
        <QkQRCode
          content="http://www.baidu.com"
          width={200}
          margin={10}
          title="\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053"
        />
      </div>
      <div className="mt-[10px]">
        <Space>
          <Button
            onClick={() => {
              const screenshot = QkQRCode.screenshot({
                content: 'http://www.baidu.com',
                width: 200,
                margin: 10,
                title: '\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053',
                success: (data) => {
                  downloadFile({ url: data, name: '\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053' });
                  screenshot.destroy();
                },
              });
            }}
          >
            200px
          </Button>
          <Button
            onClick={() => {
              const screenshot = QkQRCode.screenshot({
                content: 'http://www.baidu.com',
                width: 500,
                margin: 20,
                title: '\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053',
                success: (data) => {
                  downloadFile({ url: data, name: '\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053' });
                  screenshot.destroy();
                },
              });
            }}
          >
            500px
          </Button>
          <Button
            onClick={() => {
              const screenshot = QkQRCode.screenshot({
                content: 'http://www.baidu.com',
                width: 1000,
                margin: 50,
                title: '\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053',
                success: (data) => {
                  downloadFile({ url: data, name: '\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053' });
                  screenshot.destroy();
                },
              });
            }}
          >
            1000px
          </Button>
        </Space>
      </div>
    </div>
  );
};
export default Example;`},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{antd:R,react:p||(p=n.t(_,2)),"react-components":M},renderOpts:{compile:function(){var v=C()(m()().mark(function r(){var c,o=arguments;return m()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(440).then(n.bind(n,86440));case 2:return e.abrupt("return",(c=e.sent).default.apply(c,o));case 3:case"end":return e.stop()}},r)}));function a(){return v.apply(this,arguments)}return a}()}}}},33531:function(P,s,n){n.r(s),n.d(s,{texts:function(){return h}});var p=n(3568);const h=[{value:"\u57FA\u4E8E qrcode.react \u3001html2canvas \u751F\u6210\u7684\u4E8C\u7EF4\u7801\u548C\u4E8C\u7EF4\u7801\u4E0B\u8F7D",paraId:0,tocIndex:0},{value:"\u4E8C\u7EF4\u7801\u751F\u6210\u5E26\u6807\u9898",paraId:1,tocIndex:0},{value:"\u652F\u6301\u81EA\u5B9A\u4E49\u5C3A\u5BF8\u7684\u4E8C\u7EF4\u7801\u4E0B\u8F7D",paraId:1,tocIndex:0},{value:`type QkQRCodeType = {
  /** \u4E8C\u7EF4\u7801\u5185\u5BB9 */
  content: string;
  /** \u4E8C\u7EF4\u7801\u5BBD\u5EA6 */
  width?: number;
  /** \u4E8C\u7EF4\u7801\u6807\u9898 */
  title?: string;
  /** \u4E8C\u7EF4\u7801\u5185\u5BB9\u662F\u5426\u53EF\u7F16\u8F91 */
  edit?: boolean;
  /** \u9700\u8981\u7F16\u8F91\u7684\u5185\u5BB9 */
  value?: string;
  /** \u4E8C\u7EF4\u7801\u5916\u8FB9\u8DDD */
  margin?: number;
  /** \u662F\u5426\u9ED8\u8BA4\u5F00\u542F\u622A\u56FE */
  screenshot?: boolean;
  /** \u8F93\u5165\u6587\u5B57\u957F\u5EA6\u9650\u5236 */
  titleLen?: number;
  /** \u7F16\u8F91\u5B8C\u6210\u4E8B\u4EF6 */
  finish?: (data: string) => void;
  /** \u662F\u5426\u652F\u6301\u4E8C\u7EF4\u7801\u4E0B\u8F7D */
  download?: (() => void) | null;
  /** \u4E8C\u7EF4\u7801\u6807\u9898\u7F16\u8F91\u6846onChange\u4E8B\u4EF6 */
  onChange?: ((value: string) => void) | null;
  /** \u622A\u56FE\u5B8C\u6210\u56DE\u8C03 */
  success?: (data: string) => void;
};
`,paraId:2,tocIndex:2}]}}]);
