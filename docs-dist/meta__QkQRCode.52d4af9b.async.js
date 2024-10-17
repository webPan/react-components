"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[735],{29077:function(T,s,n){var p;n.r(s),n.d(s,{demos:function(){return O}});var h=n(43953),m=n.n(h),g=n(91184),C=n.n(g),_=n(38497),L=n(3568),Q=n(56690),M=n(91167),O={"qkqrcode-demo-0":{component:_.memo(_.lazy(C()(m()().mark(function E(){var a,r,l,o,w,e,v,c,u,y,P,B,x,f;return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.bind(n,56690));case 2:return a=t.sent,r=a.Button,l=a.Space,o=a.Typography,t.next=8,Promise.resolve().then(n.t.bind(n,38497,19));case 8:return w=t.sent,e=w.default,t.next=12,Promise.resolve().then(n.bind(n,91167));case 12:return v=t.sent,c=v.QkQRCode,u=v.downloadFile,y=o.Title,P=o.Paragraph,B=o.Text,x=o.Link,f=function(){return e.createElement("div",null,e.createElement(o,null,e.createElement(y,null,"QkQRCode"),e.createElement(P,null,e.createElement("ul",null,e.createElement("li",null,"\u4E8C\u7EF4\u7801\u751F\u6210\u5E26\u6807\u9898"),e.createElement("li",null,"\u652F\u6301\u81EA\u5B9A\u4E49\u5C3A\u5BF8\u7684\u4E8C\u7EF4\u7801\u4E0B\u8F7D")))),e.createElement("div",null,e.createElement(c,{content:"http://www.baidu.com",width:200,margin:10,title:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053"})),e.createElement("div",{className:"mt-[10px]"},e.createElement(l,null,e.createElement(r,{onClick:function(){var d=c.screenshot({content:"http://www.baidu.com",width:200,margin:10,title:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053",success:function(i){u({url:i,name:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053"}),d.destroy()}})}},"200px"),e.createElement(r,{onClick:function(){var d=c.screenshot({content:"http://www.baidu.com",width:500,margin:20,title:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053",success:function(i){u({url:i,name:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053"}),d.destroy()}})}},"500px"),e.createElement(r,{onClick:function(){var d=c.screenshot({content:"http://www.baidu.com",width:1e3,margin:50,title:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053",success:function(i){u({url:i,name:"\u767E\u5EA6\u4E00\u4E0B\uFF0C\u4F60\u5C31\u77E5\u9053"}),d.destroy()}})}},"1000px"))))},t.abrupt("return",{default:f});case 18:case"end":return t.stop()}},E)})))),asset:{type:"BLOCK",id:"qkqrcode-demo-0",refAtomIds:["QkQRCode"],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Space, Typography } from 'antd';
import React from 'react';
import { QkQRCode, downloadFile } from 'react-components';
const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  return (
    <div>
      <Typography>
        <Title>QkQRCode</Title>
        <Paragraph>
          <ul>
            <li>\u4E8C\u7EF4\u7801\u751F\u6210\u5E26\u6807\u9898</li>
            <li>\u652F\u6301\u81EA\u5B9A\u4E49\u5C3A\u5BF8\u7684\u4E8C\u7EF4\u7801\u4E0B\u8F7D</li>
          </ul>
        </Paragraph>
      </Typography>
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

export default Example;`},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{antd:Q,react:p||(p=n.t(_,2)),"react-components":M},renderOpts:{compile:function(){var E=C()(m()().mark(function r(){var l,o=arguments;return m()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(440).then(n.bind(n,86440));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,o));case 3:case"end":return e.stop()}},r)}));function a(){return E.apply(this,arguments)}return a}()}}}},33531:function(T,s,n){n.r(s),n.d(s,{texts:function(){return h}});var p=n(3568);const h=[]}}]);
