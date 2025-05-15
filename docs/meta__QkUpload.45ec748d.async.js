"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[873],{86054:function(R,m,e){var i;e.r(m),e.d(m,{demos:function(){return T}});var E=e(43953),l=e.n(E),M=e(91184),I=e.n(M),s=e(38497),B=e(79542),f=e(50451),h=e(69620),O=e(44196),T={"qkupload-demo-0":{component:s.memo(s.lazy(I()(l()().mark(function u(){var d,n,o,r,p,a;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return d=t.sent,n=d.default,t.next=6,Promise.resolve().then(e.bind(e,50451));case 6:return o=t.sent,r=o.QkUpload,t.next=10,Promise.resolve().then(e.bind(e,69620));case 10:return p=t.sent,a=p.message,t.abrupt("return",{default:function(){var c=function(P){var U=P.onSuccess,x=P.file;if((x==null?void 0:x.size)/1024/1024>10){a.error("\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC710M");return}setTimeout(function(){U({url:"https://example.com/file.pdf"})},1e3)};return n.createElement(r,{title:"\u57FA\u7840\u4E0A\u4F20",placeholder:"\u8BF7\u4E0A\u4F20\u6587\u4EF6",customRequest:c})}});case 13:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"qkupload-demo-0",refAtomIds:["QkUpload"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { QkUpload } from 'react-components';
import { message } from 'antd';

export default () => {
  const customRequest = (options) => {
    const { onSuccess, file } = options;

    if (file?.size / 1024 / 1024 > 10) {
      message.error('\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC710M');
      return;
    }

    // \u6A21\u62DF\u4E0A\u4F20
    setTimeout(() => {
      onSuccess({ url: 'https://example.com/file.pdf' });
    }, 1000);
  };

  return (
    <QkUpload
      title="\u57FA\u7840\u4E0A\u4F20"
      placeholder="\u8BF7\u4E0A\u4F20\u6587\u4EF6"
      customRequest={customRequest}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx"},context:{react:i||(i=e.t(s,2)),"react-components":f,antd:h},renderOpts:{compile:function(){var u=I()(l()().mark(function n(){var o,r=arguments;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(440).then(e.bind(e,86440));case 2:return a.abrupt("return",(o=a.sent).default.apply(o,r));case 3:case"end":return a.stop()}},n)}));function d(){return u.apply(this,arguments)}return d}()}},"qkupload-demo-1":{component:s.memo(s.lazy(I()(l()().mark(function u(){var d,n,o,r,p,a;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return d=t.sent,n=d.default,t.next=6,Promise.resolve().then(e.bind(e,50451));case 6:return o=t.sent,r=o.QkUpload,t.next=10,Promise.resolve().then(e.bind(e,69620));case 10:return p=t.sent,a=p.Space,t.abrupt("return",{default:function(){return n.createElement(a,{direction:"vertical",style:{width:"100%"}},n.createElement(r,{title:"\u96C6\u5408\u4E3B\u9898",theme:"collection"}),n.createElement(r,{title:"\u64CD\u4F5C\u4E3B\u9898",theme:"operation"}),n.createElement(r,{title:"\u8BA4\u8BC1\u4E3B\u9898",theme:"certified"}),n.createElement(r,{title:"\u57FA\u91D1\u4E3B\u9898",theme:"fund"}))}});case 13:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"qkupload-demo-1",refAtomIds:["QkUpload"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { QkUpload } from 'react-components';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <QkUpload title="\u96C6\u5408\u4E3B\u9898" theme="collection" />
    <QkUpload title="\u64CD\u4F5C\u4E3B\u9898" theme="operation" />
    <QkUpload title="\u8BA4\u8BC1\u4E3B\u9898" theme="certified" />
    <QkUpload title="\u57FA\u91D1\u4E3B\u9898" theme="fund" />
  </Space>
);`},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx"},context:{react:i||(i=e.t(s,2)),"react-components":f,antd:h},renderOpts:{compile:function(){var u=I()(l()().mark(function n(){var o,r=arguments;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(440).then(e.bind(e,86440));case 2:return a.abrupt("return",(o=a.sent).default.apply(o,r));case 3:case"end":return a.stop()}},n)}));function d(){return u.apply(this,arguments)}return d}()}},"qkupload-demo-2":{component:s.memo(s.lazy(I()(l()().mark(function u(){var d,n,o,r,p,a,v,t;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return d=c.sent,n=d.default,c.next=6,Promise.resolve().then(e.bind(e,50451));case 6:return o=c.sent,r=o.QkUpload,c.next=10,Promise.resolve().then(e.bind(e,69620));case 10:return p=c.sent,a=p.Button,c.next=14,Promise.resolve().then(e.bind(e,44196));case 14:return v=c.sent,t=v.UploadOutlined,c.abrupt("return",{default:function(){return n.createElement(r,{title:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6309\u94AE",uploadButtonRender:function(U){var x=U.onTriggerUpload;return n.createElement(a,{icon:n.createElement(t,null),onClick:x},"\u70B9\u51FB\u4E0A\u4F20\u6587\u4EF6")}})}});case 17:case"end":return c.stop()}},u)})))),asset:{type:"BLOCK",id:"qkupload-demo-2",refAtomIds:["QkUpload"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { QkUpload } from 'react-components';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export default () => (
  <QkUpload
    title="\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6309\u94AE"
    uploadButtonRender={({ onTriggerUpload }) => (
      <Button icon={<UploadOutlined />} onClick={onTriggerUpload}>
        \u70B9\u51FB\u4E0A\u4F20\u6587\u4EF6
      </Button>
    )}
  />
);`},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},"@ant-design/icons":{type:"NPM",value:"5.4.0"}},entry:"index.tsx"},context:{react:i||(i=e.t(s,2)),"react-components":f,antd:h,"@ant-design/icons":O},renderOpts:{compile:function(){var u=I()(l()().mark(function n(){var o,r=arguments;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(440).then(e.bind(e,86440));case 2:return a.abrupt("return",(o=a.sent).default.apply(o,r));case 3:case"end":return a.stop()}},n)}));function d(){return u.apply(this,arguments)}return d}()}},"qkupload-demo-3":{component:s.memo(s.lazy(I()(l()().mark(function u(){var d,n,o,r,p,a;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return d=t.sent,n=d.default,t.next=6,Promise.resolve().then(e.bind(e,50451));case 6:return o=t.sent,r=o.QkUpload,t.next=10,Promise.resolve().then(e.bind(e,69620));case 10:return p=t.sent,a=p.Tag,t.abrupt("return",{default:function(){return n.createElement(r,{title:"\u5E26\u6709\u989D\u5916\u4FE1\u606F\u7684\u4E0A\u4F20",attachmentListItemFooterExtendRender:function(y){return n.createElement("div",{style:{marginTop:8}},n.createElement(a,{color:"blue"},"\u4E0A\u4F20\u65F6\u95F4: ",y.time||"2024-03-20"),n.createElement(a,{color:"green"},"\u6587\u4EF6\u5927\u5C0F: ",(y.size/1024/1024).toFixed(2),"MB"))}})}});case 13:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"qkupload-demo-3",refAtomIds:["QkUpload"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { QkUpload } from 'react-components';
import { Tag } from 'antd';

export default () => (
  <QkUpload
    title="\u5E26\u6709\u989D\u5916\u4FE1\u606F\u7684\u4E0A\u4F20"
    attachmentListItemFooterExtendRender={(file) => (
      <div style={{ marginTop: 8 }}>
        <Tag color="blue">\u4E0A\u4F20\u65F6\u95F4: {file.time || '2024-03-20'}</Tag>
        <Tag color="green">
          \u6587\u4EF6\u5927\u5C0F: {(file.size / 1024 / 1024).toFixed(2)}MB
        </Tag>
      </div>
    )}
  />
);`},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx"},context:{react:i||(i=e.t(s,2)),"react-components":f,antd:h},renderOpts:{compile:function(){var u=I()(l()().mark(function n(){var o,r=arguments;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(440).then(e.bind(e,86440));case 2:return a.abrupt("return",(o=a.sent).default.apply(o,r));case 3:case"end":return a.stop()}},n)}));function d(){return u.apply(this,arguments)}return d}()}}}},6258:function(R,m,e){e.r(m),e.d(m,{texts:function(){return E}});var i=e(79542);const E=[{value:"\u4E00\u4E2A\u57FA\u4E8E antd Upload \u7EC4\u4EF6\u5C01\u88C5\u7684\u5F3A\u5927\u6587\u4EF6\u4E0A\u4F20\u7EC4\u4EF6\uFF0C\u8BA9\u6587\u4EF6\u4E0A\u4F20\u66F4\u7B80\u5355\u3001\u66F4\u4F18\u96C5",paraId:0,tocIndex:0},{value:"\u{1F4DD} \u652F\u6301\u81EA\u5B9A\u4E49\u6A21\u5757\u4E0A\u4F20\u6807\u9898",paraId:1,tocIndex:1},{value:"\u{1F3A8} \u652F\u6301\u6587\u4EF6\u4E0A\u4F20\u6309\u94AE\u81EA\u5B9A\u4E49",paraId:1,tocIndex:1},{value:"\u{1F4AC} \u652F\u6301\u6587\u4EF6\u4E0A\u4F20\u6587\u5B57\u81EA\u5B9A\u4E49",paraId:1,tocIndex:1},{value:"\u{1F50D} \u652F\u6301\u6587\u4EF6\u5360\u4F4D\u63D0\u793A",paraId:1,tocIndex:1},{value:"\u{1F4C2} \u9644\u4EF6\u5217\u8868\u652F\u6301\u6536\u8D77\u5C55\u5F00",paraId:1,tocIndex:1},{value:"\u2795 \u9644\u4EF6\u5217\u8868\u5E95\u90E8\u53EF\u589E\u52A0\u81EA\u5B9A\u4E49\u989D\u5916\u5185\u5BB9",paraId:1,tocIndex:1},{value:"\u{1F504} \u5934\u90E8\u6309\u94AE\u53EF\u91CD\u65B0\u6E32\u67D3",paraId:1,tocIndex:1},{value:"\u{1F4A1} \u81EA\u5B9A\u4E49\u6807\u9898\u65C1\u8FB9\u7684 tip \u63D0\u793A",paraId:1,tocIndex:1},{value:"\u{1F3AD} \u652F\u6301\u4E3B\u9898\u5207\u6362\uFF0C\u5185\u7F6E 4 \u79CD\u4E3B\u9898\uFF1A'collection' | 'operation' | 'certified' | 'fund'",paraId:1,tocIndex:1},{value:"\u2705 \u652F\u6301\u4E0A\u4F20\u6821\u9A8C",paraId:1,tocIndex:1},{value:"\u{1F30D} \u652F\u6301\u591A\u8BED\u8A00\uFF08\u4E2D\u82F1\u6587\uFF09",paraId:1,tocIndex:1},{value:"\u{1F4F1} \u54CD\u5E94\u5F0F\u8BBE\u8BA1\uFF0C\u652F\u6301\u6A2A\u5411\u548C\u7EB5\u5411\u5E03\u5C40",paraId:1,tocIndex:1},{value:"\u{1F512} \u652F\u6301\u5FC5\u586B\u6821\u9A8C",paraId:1,tocIndex:1},{value:"\u{1F3AF} \u652F\u6301\u81EA\u5B9A\u4E49\u4E0A\u4F20\u8BF7\u6C42",paraId:1,tocIndex:1},{value:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002",paraId:2,tocIndex:3},{value:"\u5C55\u793A\u4E0D\u540C\u4E3B\u9898\u6837\u5F0F\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"uploadButtonRender",paraId:4,tocIndex:5},{value:" \u81EA\u5B9A\u4E49\u4E0A\u4F20\u6309\u94AE\u3002",paraId:4,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:6},{value:"attachmentListItemFooterExtendRender",paraId:5,tocIndex:6},{value:" \u5728\u6587\u4EF6\u5217\u8868\u9879\u6DFB\u52A0\u989D\u5916\u4FE1\u606F\u3002",paraId:5,tocIndex:6},{value:"\u53C2\u6570",paraId:6,tocIndex:8},{value:"\u8BF4\u660E",paraId:6,tocIndex:8},{value:"\u7C7B\u578B",paraId:6,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:8},{value:"title",paraId:6,tocIndex:8},{value:"\u4E0A\u4F20\u7EC4\u4EF6\u6807\u9898",paraId:6,tocIndex:8},{value:"string | ReactElement",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"uploadButtonRender",paraId:6,tocIndex:8},{value:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6309\u94AE\u6E32\u67D3\u51FD\u6570",paraId:6,tocIndex:8},{value:"({ onTriggerUpload: () => void }) => ReactNode | null",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"uploadButtonText",paraId:6,tocIndex:8},{value:"\u4E0A\u4F20\u6309\u94AE\u6587\u5B57",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"'\u4E0A\u4F20\u6587\u4EF6'",paraId:6,tocIndex:8},{value:"placeholder",paraId:6,tocIndex:8},{value:"\u6587\u4EF6\u5360\u4F4D\u63D0\u793A\u6587\u5B57",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"retractionEnable",paraId:6,tocIndex:8},{value:"\u662F\u5426\u542F\u7528\u6587\u4EF6\u5217\u8868\u6536\u8D77\u5C55\u5F00\u529F\u80FD",paraId:6,tocIndex:8},{value:"boolean",paraId:6,tocIndex:8},{value:"false",paraId:6,tocIndex:8},{value:"attachmentListItemFooterExtendRender",paraId:6,tocIndex:8},{value:"\u6587\u4EF6\u5217\u8868\u9879\u5E95\u90E8\u989D\u5916\u5185\u5BB9\u6E32\u67D3\u51FD\u6570",paraId:6,tocIndex:8},{value:"(file: UploadFilePlus) => ReactNode | null",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"headerButtonRender",paraId:6,tocIndex:8},{value:"\u81EA\u5B9A\u4E49\u5934\u90E8\u6309\u94AE\u5185\u5BB9",paraId:6,tocIndex:8},{value:"ReactNode",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"tooltip",paraId:6,tocIndex:8},{value:"\u6807\u9898\u65C1\u63D0\u793A\u6587\u5B57",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"layout",paraId:6,tocIndex:8},{value:"\u5E03\u5C40\u65B9\u5F0F",paraId:6,tocIndex:8},{value:"'horizontal' | 'vertical'",paraId:6,tocIndex:8},{value:"'horizontal'",paraId:6,tocIndex:8},{value:"theme",paraId:6,tocIndex:8},{value:"\u4E3B\u9898\u6837\u5F0F",paraId:6,tocIndex:8},{value:"'collection' | 'operation' | 'certified' | 'fund'",paraId:6,tocIndex:8},{value:"'collection'",paraId:6,tocIndex:8},{value:"required",paraId:6,tocIndex:8},{value:"\u662F\u5426\u5FC5\u586B",paraId:6,tocIndex:8},{value:"boolean",paraId:6,tocIndex:8},{value:"false",paraId:6,tocIndex:8},{value:"uploadClassName",paraId:6,tocIndex:8},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"language",paraId:6,tocIndex:8},{value:"\u8BED\u8A00",paraId:6,tocIndex:8},{value:"'en' | 'cn'",paraId:6,tocIndex:8},{value:"'cn'",paraId:6,tocIndex:8},{value:"\u53C2\u6570",paraId:7,tocIndex:9},{value:"\u8BF4\u660E",paraId:7,tocIndex:9},{value:"\u7C7B\u578B",paraId:7,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:9},{value:"time",paraId:7,tocIndex:9},{value:"\u4E0A\u4F20\u65F6\u95F4",paraId:7,tocIndex:9},{value:"string",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"downloadRender",paraId:7,tocIndex:9},{value:"\u662F\u5426\u6E32\u67D3\u4E0B\u8F7D\u6309\u94AE",paraId:7,tocIndex:9},{value:"boolean | null",paraId:7,tocIndex:9},{value:"true",paraId:7,tocIndex:9},{value:"deleteRender",paraId:7,tocIndex:9},{value:"\u662F\u5426\u6E32\u67D3\u5220\u9664\u6309\u94AE",paraId:7,tocIndex:9},{value:"boolean | null",paraId:7,tocIndex:9},{value:"true",paraId:7,tocIndex:9},{value:"\u9664\u4E86\u4EE5\u4E0A\u53C2\u6570\uFF0C\u7EC4\u4EF6\u8FD8\u7EE7\u627F\u4E86 antd Upload \u7EC4\u4EF6\u7684\u6240\u6709\u5C5E\u6027\u3002",paraId:8,tocIndex:9},{value:"\u53EF\u4EE5\u5728 ",paraId:9,tocIndex:11},{value:"customRequest",paraId:9,tocIndex:11},{value:" \u4E2D\u8FDB\u884C\u6587\u4EF6\u5927\u5C0F\u6821\u9A8C\uFF1A",paraId:9,tocIndex:11},{value:`const customRequest = (options) => {
  const { file, onError } = options;
  if (file.size > 10 * 1024 * 1024) {
    message.error('\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC710M');
    onError(new Error('\u6587\u4EF6\u8FC7\u5927'));
    return;
  }
  // \u7EE7\u7EED\u4E0A\u4F20\u903B\u8F91
};
`,paraId:10,tocIndex:11},{value:"\u901A\u8FC7 Upload \u7EC4\u4EF6\u7684 ",paraId:11,tocIndex:12},{value:"accept",paraId:11,tocIndex:12},{value:" \u5C5E\u6027\u6307\u5B9A\uFF1A",paraId:11,tocIndex:12},{value:`<QkUpload
  accept=".pdf,.doc,.docx"
  title="\u4EC5\u652F\u6301PDF\u548CWord\u6587\u6863"
/>
`,paraId:12,tocIndex:12}]}}]);
