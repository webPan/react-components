"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[735],{29077:function(_,m,e){var f;e.r(m),e.d(m,{demos:function(){return M}});var E=e(9083),P=e.n(E),Q=e(43953),s=e.n(Q),w=e(91184),I=e.n(w),d=e(38497),B=e(3568),C=e(50451),D=e(69620),M={"qkqrcode-demo-0":{component:d.memo(d.lazy(I()(s()().mark(function c(){var t,o;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return t=n.sent,o=t.QkQRCode,n.abrupt("return",{default:function(){return d.createElement(o,{content:"https://example.com",width:200,title:"\u793A\u4F8B\u4E8C\u7EF4\u7801"})}});case 5:case"end":return n.stop()}},c)})))),asset:{type:"BLOCK",id:"qkqrcode-demo-0",refAtomIds:["QkQRCode"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkQRCode } from 'react-components';

export default () => (
  <QkQRCode content="https://example.com" width={200} title="\u793A\u4F8B\u4E8C\u7EF4\u7801" />
);`},"react-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"react-components":C},renderOpts:{compile:function(){var c=I()(s()().mark(function o(){var r,n=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(440).then(e.bind(e,86440));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,n));case 3:case"end":return a.stop()}},o)}));function t(){return c.apply(this,arguments)}return t}()}},"qkqrcode-demo-1":{component:d.memo(d.lazy(I()(s()().mark(function c(){var t,o,r,n,u,a;return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return t=l.sent,o=t.QkQRCode,l.next=6,Promise.resolve().then(e.bind(e,69620));case 6:return r=l.sent,n=r.message,l.next=10,Promise.resolve().then(e.t.bind(e,38497,19));case 10:return u=l.sent,a=u.useState,l.abrupt("return",{default:function(){var p=a("\u53EF\u7F16\u8F91\u7684\u4E8C\u7EF4\u7801"),y=P()(p,2),i=y[0],v=y[1];return d.createElement(o,{content:"https://example.com",width:200,edit:!0,title:i,onChange:function(h){v(h),console.log("\u65B0\u5185\u5BB9\uFF1A",h)},finish:function(h){n.success("\u7F16\u8F91\u5B8C\u6210\uFF01")}})}});case 13:case"end":return l.stop()}},c)})))),asset:{type:"BLOCK",id:"qkqrcode-demo-1",refAtomIds:["QkQRCode"],dependencies:{"index.tsx":{type:"FILE",value:`import {QkQRCode} from 'react-components';
import {message} from 'antd';
import {useState} from "react";

export default () => {
  const [title, setTitle] = useState<string>('\u53EF\u7F16\u8F91\u7684\u4E8C\u7EF4\u7801');
  return <QkQRCode
    content="https://example.com"
    width={200}
    edit={true}
    title={title}
    onChange={(value) => {
      setTitle(value)
      console.log('\u65B0\u5185\u5BB9\uFF1A', value);
    }}
    finish={(data) => {
      message.success('\u7F16\u8F91\u5B8C\u6210\uFF01');
    }}
  />
}`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":C,antd:D,react:f||(f=e.t(d,2))},renderOpts:{compile:function(){var c=I()(s()().mark(function o(){var r,n=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(440).then(e.bind(e,86440));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,n));case 3:case"end":return a.stop()}},o)}));function t(){return c.apply(this,arguments)}return t}()}},"qkqrcode-demo-2":{component:d.memo(d.lazy(I()(s()().mark(function c(){var t,o,r,n,u,a,g,l;return s()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,69620));case 2:return t=p.sent,o=t.Button,r=t.Space,n=t.message,p.next=8,Promise.resolve().then(e.bind(e,50451));case 8:return u=p.sent,a=u.QkQRCode,g=u.downloadFile,l=function(){var i=function(x){var h=a.screenshot({content:"https://example.com",width:x,margin:Math.floor(x/20),title:"\u81EA\u5B9A\u4E49\u5C3A\u5BF8\u4E8C\u7EF4\u7801",success:function(O){g({url:O,name:"\u4E8C\u7EF4\u7801_".concat(x,"px")}),h.destroy(),n.success("\u4E0B\u8F7D\u6210\u529F\uFF01")}})};return d.createElement("div",null,d.createElement(a,{content:"https://example.com",width:200,title:"\u9884\u89C8\u6548\u679C"}),d.createElement(r,{className:"mt-4"},d.createElement(o,{onClick:function(){return i(200)}},"\u5C0F\u5C3A\u5BF8 (200px)"),d.createElement(o,{onClick:function(){return i(500)}},"\u4E2D\u5C3A\u5BF8 (500px)"),d.createElement(o,{onClick:function(){return i(1e3)}},"\u5927\u5C3A\u5BF8 (1000px)")))},p.abrupt("return",{default:l});case 13:case"end":return p.stop()}},c)})))),asset:{type:"BLOCK",id:"qkqrcode-demo-2",refAtomIds:["QkQRCode"],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Space, message } from 'antd';
import { QkQRCode, downloadFile } from 'react-components';

const Example = () => {
  const handleDownload = (width: number) => {
    const screenshot = QkQRCode.screenshot({
      content: 'https://example.com',
      width,
      margin: Math.floor(width / 20),
      title: '\u81EA\u5B9A\u4E49\u5C3A\u5BF8\u4E8C\u7EF4\u7801',
      success: (data) => {
        downloadFile({ url: data, name: \`\u4E8C\u7EF4\u7801_\${width}px\` });
        screenshot.destroy();
        message.success('\u4E0B\u8F7D\u6210\u529F\uFF01');
      },
    });
  };

  return (
    <div>
      <QkQRCode content="https://example.com" width={200} title="\u9884\u89C8\u6548\u679C" />
      <Space className="mt-4">
        <Button onClick={() => handleDownload(200)}>\u5C0F\u5C3A\u5BF8 (200px)</Button>
        <Button onClick={() => handleDownload(500)}>\u4E2D\u5C3A\u5BF8 (500px)</Button>
        <Button onClick={() => handleDownload(1000)}>\u5927\u5C3A\u5BF8 (1000px)</Button>
      </Space>
    </div>
  );
};

export default Example;`},antd:{type:"NPM",value:"5.20.2"},"react-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{antd:D,"react-components":C},renderOpts:{compile:function(){var c=I()(s()().mark(function o(){var r,n=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(440).then(e.bind(e,86440));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,n));case 3:case"end":return a.stop()}},o)}));function t(){return c.apply(this,arguments)}return t}()}}}},33531:function(_,m,e){e.r(m),e.d(m,{texts:function(){return E}});var f=e(3568);const E=[{value:"\u4E00\u4E2A\u529F\u80FD\u5F3A\u5927\u4E14\u6613\u7528\u7684\u4E8C\u7EF4\u7801\u751F\u6210\u548C\u4E0B\u8F7D\u7EC4\u4EF6\uFF0C\u57FA\u4E8E qrcode.react \u548C html2canvas \u6784\u5EFA\u3002",paraId:0,tocIndex:0},{value:"\u{1F3AF} \u652F\u6301\u751F\u6210\u5E26\u6807\u9898\u7684\u4E8C\u7EF4\u7801",paraId:1,tocIndex:1},{value:"\u{1F4CF} \u652F\u6301\u81EA\u5B9A\u4E49\u5C3A\u5BF8\u7684\u4E8C\u7EF4\u7801\u751F\u6210",paraId:1,tocIndex:1},{value:"\u{1F4BE} \u4E00\u952E\u4E0B\u8F7D\u4E8C\u7EF4\u7801\u56FE\u7247",paraId:1,tocIndex:1},{value:"\u270F\uFE0F \u652F\u6301\u5B9E\u65F6\u7F16\u8F91\u4E8C\u7EF4\u7801\u5185\u5BB9",paraId:1,tocIndex:1},{value:"\u{1F3A8} \u53EF\u81EA\u5B9A\u4E49\u4E8C\u7EF4\u7801\u8FB9\u8DDD\u548C\u6837\u5F0F",paraId:1,tocIndex:1},{value:"\u6700\u7B80\u5355\u7684\u4E8C\u7EF4\u7801\u751F\u6210\u65B9\u5F0F\u3002",paraId:2,tocIndex:3},{value:"\u652F\u6301\u5B9E\u65F6\u7F16\u8F91\u4E8C\u7EF4\u7801\u5185\u5BB9\u548C\u6807\u9898\u3002",paraId:3,tocIndex:4},{value:"\u652F\u6301\u4E0D\u540C\u5C3A\u5BF8\u7684\u4E8C\u7EF4\u7801\u4E0B\u8F7D\u3002",paraId:4,tocIndex:5},{value:"\u53C2\u6570",paraId:5,tocIndex:7},{value:"\u8BF4\u660E",paraId:5,tocIndex:7},{value:"\u7C7B\u578B",paraId:5,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:7},{value:"content",paraId:5,tocIndex:7},{value:"\u4E8C\u7EF4\u7801\u5185\u5BB9",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"width",paraId:5,tocIndex:7},{value:"\u4E8C\u7EF4\u7801\u5BBD\u5EA6",paraId:5,tocIndex:7},{value:"number",paraId:5,tocIndex:7},{value:"200",paraId:5,tocIndex:7},{value:"title",paraId:5,tocIndex:7},{value:"\u4E8C\u7EF4\u7801\u6807\u9898",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"edit",paraId:5,tocIndex:7},{value:"\u4E8C\u7EF4\u7801\u5185\u5BB9\u662F\u5426\u53EF\u7F16\u8F91",paraId:5,tocIndex:7},{value:"boolean",paraId:5,tocIndex:7},{value:"false",paraId:5,tocIndex:7},{value:"value",paraId:5,tocIndex:7},{value:"\u9700\u8981\u7F16\u8F91\u7684\u5185\u5BB9",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"margin",paraId:5,tocIndex:7},{value:"\u4E8C\u7EF4\u7801\u5916\u8FB9\u8DDD",paraId:5,tocIndex:7},{value:"number",paraId:5,tocIndex:7},{value:"10",paraId:5,tocIndex:7},{value:"screenshot",paraId:5,tocIndex:7},{value:"\u662F\u5426\u9ED8\u8BA4\u5F00\u542F\u622A\u56FE",paraId:5,tocIndex:7},{value:"boolean",paraId:5,tocIndex:7},{value:"false",paraId:5,tocIndex:7},{value:"titleLen",paraId:5,tocIndex:7},{value:"\u8F93\u5165\u6587\u5B57\u957F\u5EA6\u9650\u5236",paraId:5,tocIndex:7},{value:"number",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"finish",paraId:5,tocIndex:7},{value:"\u7F16\u8F91\u5B8C\u6210\u4E8B\u4EF6",paraId:5,tocIndex:7},{value:"(data: string) => void",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"download",paraId:5,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u4E8C\u7EF4\u7801\u4E0B\u8F7D\u65B9\u6CD5",paraId:5,tocIndex:7},{value:"() => void",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"onChange",paraId:5,tocIndex:7},{value:"\u4E8C\u7EF4\u7801\u6807\u9898\u7F16\u8F91\u6846 onChange \u4E8B\u4EF6",paraId:5,tocIndex:7},{value:"(value: string) => void",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"success",paraId:5,tocIndex:7},{value:"\u622A\u56FE\u5B8C\u6210\u56DE\u8C03",paraId:5,tocIndex:7},{value:"(data: string) => void",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"\u7528\u4E8E\u751F\u6210\u5E76\u4E0B\u8F7D\u4E8C\u7EF4\u7801\u56FE\u7247\u3002",paraId:6,tocIndex:8},{value:"\u53C2\u6570",paraId:7,tocIndex:8},{value:"\u8BF4\u660E",paraId:7,tocIndex:8},{value:"\u7C7B\u578B",paraId:7,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:8},{value:"content",paraId:7,tocIndex:8},{value:"\u4E8C\u7EF4\u7801\u5185\u5BB9",paraId:7,tocIndex:8},{value:"string",paraId:7,tocIndex:8},{value:"-",paraId:7,tocIndex:8},{value:"width",paraId:7,tocIndex:8},{value:"\u4E8C\u7EF4\u7801\u5BBD\u5EA6",paraId:7,tocIndex:8},{value:"number",paraId:7,tocIndex:8},{value:"200",paraId:7,tocIndex:8},{value:"margin",paraId:7,tocIndex:8},{value:"\u4E8C\u7EF4\u7801\u5916\u8FB9\u8DDD",paraId:7,tocIndex:8},{value:"number",paraId:7,tocIndex:8},{value:"10",paraId:7,tocIndex:8},{value:"title",paraId:7,tocIndex:8},{value:"\u4E8C\u7EF4\u7801\u6807\u9898",paraId:7,tocIndex:8},{value:"string",paraId:7,tocIndex:8},{value:"-",paraId:7,tocIndex:8},{value:"success",paraId:7,tocIndex:8},{value:"\u622A\u56FE\u5B8C\u6210\u56DE\u8C03",paraId:7,tocIndex:8},{value:"(data: string) => void",paraId:7,tocIndex:8},{value:"-",paraId:7,tocIndex:8},{value:"\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49 CSS \u7C7B\u540D\u6765\u4FEE\u6539\u4E8C\u7EF4\u7801\u5BB9\u5668\u7684\u6837\u5F0F\uFF1A",paraId:8,tocIndex:10},{value:`.qk-qrcode-container {
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
}
`,paraId:9,tocIndex:10},{value:"\u5EFA\u8BAE\u4E0B\u8F7D\u66F4\u5927\u5C3A\u5BF8\u7684\u4E8C\u7EF4\u7801\u56FE\u7247\uFF08\u5982 500px \u6216 1000px\uFF09\uFF0C\u4EE5\u83B7\u5F97\u66F4\u6E05\u6670\u7684\u6548\u679C\u3002\u8F83\u5C0F\u5C3A\u5BF8\u7684\u4E8C\u7EF4\u7801\u5728\u653E\u5927\u67E5\u770B\u65F6\u53EF\u80FD\u4F1A\u51FA\u73B0\u6A21\u7CCA\u3002",paraId:10,tocIndex:11}]}}]);
