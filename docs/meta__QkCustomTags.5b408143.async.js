"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[609],{65758:function(A,x,e){var m;e.r(x),e.d(x,{demos:function(){return W}});var M=e(2927),N=e.n(M),Q=e(9083),C=e.n(Q),$=e(43953),c=e.n($),k=e(91184),v=e.n(k),i=e(38497),U=e(43234),R=e(50451),P=e(69620),W={"qkcustomtags-demo-0":{component:i.memo(i.lazy(v()(c()().mark(function p(){var d,r,t,n,u;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return d=l.sent,r=d.QkCustomTags,l.next=6,Promise.resolve().then(e.t.bind(e,38497,19));case 6:return t=l.sent,n=t.default,u=function(){var o=["React","Vue","Angular","TypeScript","JavaScript","HTML","CSS","Node.js","Webpack","Vite","Redux","MobX","GraphQL","REST API"];return n.createElement("div",{className:"p-4"},n.createElement("h4",null,"\u9ED8\u8BA4\u5C55\u793A:"),n.createElement(r,{data:o}),n.createElement("h4",{className:"mt-4"},"\u6307\u5B9A\u95F4\u8DDD:"),n.createElement(r,{data:o,gap:16}))},l.abrupt("return",{default:u});case 10:case"end":return l.stop()}},p)})))),asset:{type:"BLOCK",id:"qkcustomtags-demo-0",refAtomIds:["QkCustomTags"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkCustomTags } from 'react-components';
import React from 'react';

const BasicExample = () => {
  const tags = [
    'React',
    'Vue',
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Node.js',
    'Webpack',
    'Vite',
    'Redux',
    'MobX',
    'GraphQL',
    'REST API',
  ];

  return (
    <div className="p-4">
      <h4>\u9ED8\u8BA4\u5C55\u793A:</h4>
      <QkCustomTags data={tags} />

      <h4 className="mt-4">\u6307\u5B9A\u95F4\u8DDD:</h4>
      <QkCustomTags data={tags} gap={16} />
    </div>
  );
};

export default BasicExample;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":R,react:m||(m=e.t(i,2))},renderOpts:{compile:function(){var p=v()(c()().mark(function r(){var t,n=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(440).then(e.bind(e,86440));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,n));case 3:case"end":return a.stop()}},r)}));function d(){return p.apply(this,arguments)}return d}()}},"qkcustomtags-demo-1":{component:i.memo(i.lazy(v()(c()().mark(function p(){var d,r,t,n,u,a,l,I,o,f;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return d=s.sent,r=d.QkCustomTags,s.next=6,Promise.resolve().then(e.t.bind(e,38497,19));case 6:return t=s.sent,n=t.default,u=t.useState,s.next=11,Promise.resolve().then(e.bind(e,69620));case 11:return a=s.sent,l=a.Space,I=a.Button,o=a.Radio,f=function(){var S=u(2),y=C()(S,2),T=y[0],O=y[1],w=u(["\u524D\u7AEF\u5F00\u53D1","React","Vue","Angular","TypeScript","JavaScript","HTML","CSS","Webpack","Node.js","Git","Docker","\u5FAE\u524D\u7AEF","\u7EC4\u4EF6\u5E93","\u5355\u5143\u6D4B\u8BD5","\u6027\u80FD\u4F18\u5316","\u54CD\u5E94\u5F0F\u8BBE\u8BA1","\u72B6\u6001\u7BA1\u7406","\u8DEF\u7531\u7BA1\u7406","\u6784\u5EFA\u5DE5\u5177","\u5305\u7BA1\u7406\u5668","\u4EE3\u7801\u89C4\u8303","\u81EA\u52A8\u5316\u6D4B\u8BD5","\u6301\u7EED\u96C6\u6210","\u9879\u76EE\u811A\u624B\u67B6"]),h=C()(w,2),g=h[0],b=h[1];return n.createElement(l,{direction:"vertical",size:"large",className:"w-full"},n.createElement("div",{className:"border p-4 rounded"},n.createElement(r,{data:g,rows:T,gap:8,itemStyle:{background:"#f0f0f0",padding:"4px 8px",borderRadius:"4px"}})),n.createElement(l,null,n.createElement(o.Group,{value:T,onChange:function(B){return O(B.target.value)}},n.createElement(o,{value:1},"\u5355\u884C"),n.createElement(o,{value:2},"\u4E24\u884C"),n.createElement(o,{value:3},"\u4E09\u884C")),n.createElement(I,{onClick:function(){return b([].concat(N()(g),["\u65B0\u6807\u7B7E".concat(g.length+1)]))}},"\u6DFB\u52A0\u6807\u7B7E"),n.createElement(I,{onClick:function(){return b(g.slice(0,-1))}},"\u5220\u9664\u6807\u7B7E")))},s.abrupt("return",{default:f});case 17:case"end":return s.stop()}},p)})))),asset:{type:"BLOCK",id:"qkcustomtags-demo-1",refAtomIds:["QkCustomTags"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkCustomTags } from 'react-components';
import React, { useState } from 'react';
import { Space, Button, Radio } from 'antd';

const MultiRowExample = () => {
  const [rows, setRows] = useState(2);
  const [tags, setTags] = useState([
    '\u524D\u7AEF\u5F00\u53D1',
    'React',
    'Vue',
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Webpack',
    'Node.js',
    'Git',
    'Docker',
    '\u5FAE\u524D\u7AEF',
    '\u7EC4\u4EF6\u5E93',
    '\u5355\u5143\u6D4B\u8BD5',
    '\u6027\u80FD\u4F18\u5316',
    '\u54CD\u5E94\u5F0F\u8BBE\u8BA1',
    '\u72B6\u6001\u7BA1\u7406',
    '\u8DEF\u7531\u7BA1\u7406',
    '\u6784\u5EFA\u5DE5\u5177',
    '\u5305\u7BA1\u7406\u5668',
    '\u4EE3\u7801\u89C4\u8303',
    '\u81EA\u52A8\u5316\u6D4B\u8BD5',
    '\u6301\u7EED\u96C6\u6210',
    '\u9879\u76EE\u811A\u624B\u67B6',
  ]);

  return (
    <Space direction="vertical" size="large" className="w-full">
      <div className="border p-4 rounded">
        <QkCustomTags
          data={tags}
          rows={rows}
          gap={8}
          itemStyle={{
            background: '#f0f0f0',
            padding: '4px 8px',
            borderRadius: '4px',
          }}
        />
      </div>

      <Space>
        <Radio.Group value={rows} onChange={(e) => setRows(e.target.value)}>
          <Radio value={1}>\u5355\u884C</Radio>
          <Radio value={2}>\u4E24\u884C</Radio>
          <Radio value={3}>\u4E09\u884C</Radio>
        </Radio.Group>

        <Button onClick={() => setTags([...tags, \`\u65B0\u6807\u7B7E\${tags.length + 1}\`])}>
          \u6DFB\u52A0\u6807\u7B7E
        </Button>

        <Button onClick={() => setTags(tags.slice(0, -1))}>\u5220\u9664\u6807\u7B7E</Button>
      </Space>
    </Space>
  );
};

export default MultiRowExample;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx"},context:{"react-components":R,react:m||(m=e.t(i,2)),antd:P},renderOpts:{compile:function(){var p=v()(c()().mark(function r(){var t,n=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(440).then(e.bind(e,86440));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,n));case 3:case"end":return a.stop()}},r)}));function d(){return p.apply(this,arguments)}return d}()}},"qkcustomtags-demo-2":{component:i.memo(i.lazy(v()(c()().mark(function p(){var d,r,t,n,u,a,l;return c()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return d=o.sent,r=d.QkCustomTags,o.next=6,Promise.resolve().then(e.t.bind(e,38497,19));case 6:return t=o.sent,n=t.default,o.next=10,Promise.resolve().then(e.bind(e,69620));case 10:return u=o.sent,a=u.Space,l=function(){var E=["\u{1F3A8} UI\u8BBE\u8BA1","\u{1F4BB} \u5F00\u53D1","\u{1F4F1} \u79FB\u52A8\u7AEF","\u{1F310} \u7F51\u9875","\u{1F4CA} \u6570\u636E\u5206\u6790","\u{1F50D} SEO\u4F18\u5316","\u{1F4C8} \u6027\u80FD\u76D1\u63A7","\u{1F6E0}\uFE0F \u5DE5\u5177\u5F00\u53D1","\u{1F4E6} \u7EC4\u4EF6\u5C01\u88C5","\u{1F512} \u5B89\u5168\u6D4B\u8BD5"];return n.createElement(a,{direction:"vertical",size:"large",className:"w-full"},n.createElement("div",null,n.createElement("h4",null,"\u6E10\u53D8\u98CE\u683C:"),n.createElement(r,{data:E,rows:2,itemStyle:{background:"linear-gradient(45deg, #ff6b6b, #ff8e8e)",color:"#fff",padding:"6px 12px",borderRadius:"16px",fontSize:"14px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",border:"none"},moreText:"\u5C55\u5F00\u66F4\u591A"})),n.createElement("div",null,n.createElement("h4",null,"\u63CF\u8FB9\u98CE\u683C:"),n.createElement(r,{data:E,rows:2,gap:12,itemStyle:{border:"1px solid #1677ff",color:"#1677ff",padding:"5px 12px",borderRadius:"4px",fontSize:"14px",transition:"all 0.3s",cursor:"pointer",":hover":{background:"#1677ff",color:"#fff"}},moreRender:function(D){var S=D.onClick;return n.createElement("span",{onClick:S,style:{color:"#1677ff",cursor:"pointer",textDecoration:"underline"}},"\u67E5\u770B\u5168\u90E8\u6807\u7B7E \u2192")}})),n.createElement("div",null,n.createElement("h4",null,"\u7ACB\u4F53\u98CE\u683C:"),n.createElement(r,{data:E,rows:2,itemStyle:{background:"#fff",padding:"8px 16px",borderRadius:"8px",fontSize:"14px",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",border:"1px solid #eee",margin:"4px"}})))},o.abrupt("return",{default:l});case 14:case"end":return o.stop()}},p)})))),asset:{type:"BLOCK",id:"qkcustomtags-demo-2",refAtomIds:["QkCustomTags"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkCustomTags } from 'react-components';
import React from 'react';
import { Space } from 'antd';

const StyleExample = () => {
  const tags = [
    '\u{1F3A8} UI\u8BBE\u8BA1',
    '\u{1F4BB} \u5F00\u53D1',
    '\u{1F4F1} \u79FB\u52A8\u7AEF',
    '\u{1F310} \u7F51\u9875',
    '\u{1F4CA} \u6570\u636E\u5206\u6790',
    '\u{1F50D} SEO\u4F18\u5316',
    '\u{1F4C8} \u6027\u80FD\u76D1\u63A7',
    '\u{1F6E0}\uFE0F \u5DE5\u5177\u5F00\u53D1',
    '\u{1F4E6} \u7EC4\u4EF6\u5C01\u88C5',
    '\u{1F512} \u5B89\u5168\u6D4B\u8BD5',
  ];

  return (
    <Space direction="vertical" size="large" className="w-full">
      {/* \u6E10\u53D8\u80CC\u666F\u98CE\u683C */}
      <div>
        <h4>\u6E10\u53D8\u98CE\u683C:</h4>
        <QkCustomTags
          data={tags}
          rows={2}
          itemStyle={{
            background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
            color: '#fff',
            padding: '6px 12px',
            borderRadius: '16px',
            fontSize: '14px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            border: 'none',
          }}
          moreText="\u5C55\u5F00\u66F4\u591A"
        />
      </div>

      {/* \u63CF\u8FB9\u98CE\u683C */}
      <div>
        <h4>\u63CF\u8FB9\u98CE\u683C:</h4>
        <QkCustomTags
          data={tags}
          rows={2}
          gap={12}
          itemStyle={{
            border: '1px solid #1677ff',
            color: '#1677ff',
            padding: '5px 12px',
            borderRadius: '4px',
            fontSize: '14px',
            transition: 'all 0.3s',
            cursor: 'pointer',
            ':hover': {
              background: '#1677ff',
              color: '#fff',
            },
          }}
          moreRender={({ onClick }) => (
            <span
              onClick={onClick}
              style={{
                color: '#1677ff',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              \u67E5\u770B\u5168\u90E8\u6807\u7B7E \u2192
            </span>
          )}
        />
      </div>

      {/* \u7ACB\u4F53\u98CE\u683C */}
      <div>
        <h4>\u7ACB\u4F53\u98CE\u683C:</h4>
        <QkCustomTags
          data={tags}
          rows={2}
          itemStyle={{
            background: '#fff',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '14px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: '1px solid #eee',
            margin: '4px',
          }}
        />
      </div>
    </Space>
  );
};

export default StyleExample;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx"},context:{"react-components":R,react:m||(m=e.t(i,2)),antd:P},renderOpts:{compile:function(){var p=v()(c()().mark(function r(){var t,n=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(440).then(e.bind(e,86440));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,n));case 3:case"end":return a.stop()}},r)}));function d(){return p.apply(this,arguments)}return d}()}},"qkcustomtags-demo-3":{component:i.memo(i.lazy(v()(c()().mark(function p(){var d,r,t,n,u,a,l,I,o,f;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return d=s.sent,r=d.QkCustomTags,s.next=6,Promise.resolve().then(e.t.bind(e,38497,19));case 6:return t=s.sent,n=t.default,u=t.useState,a=t.useEffect,s.next=12,Promise.resolve().then(e.bind(e,69620));case 12:return l=s.sent,I=l.Spin,o=l.message,f=function(){var S=u(!0),y=C()(S,2),T=y[0],O=y[1],w=u([]),h=C()(w,2),g=h[0],b=h[1];return a(function(){setTimeout(function(){b(["\u70ED\u95E8\u63A8\u8350","\u6700\u65B0\u53D1\u5E03","\u8D8B\u52BF\u8BDD\u9898","\u6280\u672F\u524D\u6CBF","AI\u7814\u7A76","\u4E91\u8BA1\u7B97","\u5927\u6570\u636E","\u533A\u5757\u94FE","\u7269\u8054\u7F51","5G\u6280\u672F","\u8FB9\u7F18\u8BA1\u7B97","\u5B89\u5168\u9632\u62A4"]),O(!1)},1500)},[]),n.createElement("div",{className:"border p-4 rounded"},T?n.createElement(I,{tip:"\u52A0\u8F7D\u4E2D..."},n.createElement("div",{className:"h-[100px]"})):n.createElement(r,{data:g,rows:2,itemStyle:{background:"#f0f0f0",padding:"6px 12px",borderRadius:"4px",cursor:"pointer",transition:"all 0.3s"},onLoadingCompleted:function(B){var K=B.isMore;o.info("\u52A0\u8F7D\u5B8C\u6210\uFF0C".concat(K?"\u8FD8\u6709\u66F4\u591A":"\u5DF2\u663E\u793A\u5168\u90E8"))}}))},s.abrupt("return",{default:f});case 17:case"end":return s.stop()}},p)})))),asset:{type:"BLOCK",id:"qkcustomtags-demo-3",refAtomIds:["QkCustomTags"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkCustomTags } from 'react-components';
import React, { useState, useEffect } from 'react';
import { Spin, message } from 'antd';

const DynamicExample = () => {
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState([]);

  // \u6A21\u62DF\u5F02\u6B65\u52A0\u8F7D\u6570\u636E
  useEffect(() => {
    setTimeout(() => {
      setTags([
        '\u70ED\u95E8\u63A8\u8350',
        '\u6700\u65B0\u53D1\u5E03',
        '\u8D8B\u52BF\u8BDD\u9898',
        '\u6280\u672F\u524D\u6CBF',
        'AI\u7814\u7A76',
        '\u4E91\u8BA1\u7B97',
        '\u5927\u6570\u636E',
        '\u533A\u5757\u94FE',
        '\u7269\u8054\u7F51',
        '5G\u6280\u672F',
        '\u8FB9\u7F18\u8BA1\u7B97',
        '\u5B89\u5168\u9632\u62A4',
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="border p-4 rounded">
      {loading ? (
        <Spin tip="\u52A0\u8F7D\u4E2D...">
          <div className="h-[100px]" />
        </Spin>
      ) : (
        <QkCustomTags
          data={tags}
          rows={2}
          itemStyle={{
            background: '#f0f0f0',
            padding: '6px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s',
          }}
          onLoadingCompleted={({ isMore }) => {
            message.info(\`\u52A0\u8F7D\u5B8C\u6210\uFF0C\${isMore ? '\u8FD8\u6709\u66F4\u591A' : '\u5DF2\u663E\u793A\u5168\u90E8'}\`);
          }}
        />
      )}
    </div>
  );
};

export default DynamicExample;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx"},context:{"react-components":R,react:m||(m=e.t(i,2)),antd:P},renderOpts:{compile:function(){var p=v()(c()().mark(function r(){var t,n=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(440).then(e.bind(e,86440));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,n));case 3:case"end":return a.stop()}},r)}));function d(){return p.apply(this,arguments)}return d}()}}}},15691:function(A,x,e){e.r(x),e.d(x,{texts:function(){return M}});var m=e(43234);const M=[{value:"\u4E00\u4E2A\u7075\u6D3B\u7684\u81EA\u5B9A\u4E49\u6807\u7B7E\u7EC4\u4EF6\uFF0C\u652F\u6301\u591A\u884C\u5C55\u793A\u3001\u81EA\u52A8\u7701\u7565\u3001\u81EA\u5B9A\u4E49\u6837\u5F0F\u7B49\u7279\u6027 \u2728",paraId:0,tocIndex:0},{value:"\u9700\u8981\u5C55\u793A\u5927\u91CF\u6807\u7B7E\uFF0C\u4F46\u7A7A\u95F4\u6709\u9650\u65F6",paraId:1,tocIndex:1},{value:"\u9700\u8981\u63A7\u5236\u6807\u7B7E\u5C55\u793A\u884C\u6570\u65F6",paraId:1,tocIndex:1},{value:"\u9700\u8981\u81EA\u5B9A\u4E49\u6807\u7B7E\u6837\u5F0F\u548C\u95F4\u8DDD\u65F6",paraId:1,tocIndex:1},{value:'\u9700\u8981"\u66F4\u591A"\u4EA4\u4E92\u529F\u80FD\u65F6',paraId:1,tocIndex:1},{value:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u5C55\u793A\u4E00\u7EC4\u6807\u7B7E\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7",paraId:3,tocIndex:4},{value:"rows",paraId:3,tocIndex:4},{value:'\u5C5E\u6027\u63A7\u5236\u5C55\u793A\u884C\u6570\uFF0C\u8D85\u51FA\u90E8\u5206\u663E\u793A"\u66F4\u591A"\u3002',paraId:3,tocIndex:4},{value:"\u5C55\u793A\u4E0D\u540C\u98CE\u683C\u7684\u6807\u7B7E\u6837\u5F0F\u548C\u66F4\u591A\u6309\u94AE\u3002",paraId:4,tocIndex:5},{value:"\u5C55\u793A\u6807\u7B7E\u7684\u52A8\u6001\u52A0\u8F7D\u548C\u4EA4\u4E92\u6548\u679C\u3002",paraId:5,tocIndex:6},{value:"\u53C2\u6570",paraId:6,tocIndex:8},{value:"\u8BF4\u660E",paraId:6,tocIndex:8},{value:"\u7C7B\u578B",paraId:6,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:8},{value:"\u5FC5\u586B",paraId:6,tocIndex:8},{value:"data",paraId:6,tocIndex:8},{value:"\u6807\u7B7E\u6570\u636E\u6E90",paraId:6,tocIndex:8},{value:"string[]",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"\u2705",paraId:6,tocIndex:8},{value:"gap",paraId:6,tocIndex:8},{value:"\u6807\u7B7E\u4E4B\u95F4\u7684\u95F4\u8DDD\uFF08\u50CF\u7D20\uFF09",paraId:6,tocIndex:8},{value:"number",paraId:6,tocIndex:8},{value:"8",paraId:6,tocIndex:8},{value:"\u274C",paraId:6,tocIndex:8},{value:"rows",paraId:6,tocIndex:8},{value:"\u6700\u5927\u663E\u793A\u884C\u6570",paraId:6,tocIndex:8},{value:"number",paraId:6,tocIndex:8},{value:"1",paraId:6,tocIndex:8},{value:"\u274C",paraId:6,tocIndex:8},{value:"reservedWidth",paraId:6,tocIndex:8},{value:'\u9884\u7559\u5BBD\u5EA6\uFF0C\u7528\u4E8E"\u66F4\u591A"\u6309\u94AE',paraId:6,tocIndex:8},{value:"number",paraId:6,tocIndex:8},{value:"60",paraId:6,tocIndex:8},{value:"\u274C",paraId:6,tocIndex:8},{value:"itemStyle",paraId:6,tocIndex:8},{value:"\u6807\u7B7E\u9879\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:6,tocIndex:8},{value:"CSSProperties",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"\u274C",paraId:6,tocIndex:8},{value:"moreText",paraId:6,tocIndex:8},{value:'"\u66F4\u591A"\u6309\u94AE\u7684\u6587\u672C',paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"'\u66F4\u591A'",paraId:6,tocIndex:8},{value:"\u274C",paraId:6,tocIndex:8},{value:"moreRender",paraId:6,tocIndex:8},{value:'\u81EA\u5B9A\u4E49"\u66F4\u591A"\u6309\u94AE\u7684\u6E32\u67D3\u51FD\u6570',paraId:6,tocIndex:8},{value:"({ onClick: () => void }) => ReactNode",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"\u274C",paraId:6,tocIndex:8},{value:"onLoadingCompleted",paraId:6,tocIndex:8},{value:"\u6807\u7B7E\u6E32\u67D3\u5B8C\u6210\u7684\u56DE\u8C03\u51FD\u6570",paraId:6,tocIndex:8},{value:"({ isMore: boolean }) => void",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"\u274C",paraId:6,tocIndex:8},{value:"\u7EC4\u4EF6\u652F\u6301\u901A\u8FC7 ",paraId:7,tocIndex:9},{value:"itemStyle",paraId:7,tocIndex:9},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u6807\u7B7E\u6837\u5F0F\uFF0C\u5E38\u7528\u7684\u6837\u5F0F\u5C5E\u6027\u5305\u62EC\uFF1A",paraId:7,tocIndex:9},{value:`{
  background: string; // \u80CC\u666F\u8272
  color: string; // \u6587\u5B57\u989C\u8272
  padding: string; // \u5185\u8FB9\u8DDD
  borderRadius: string; // \u5706\u89D2
  border: string; // \u8FB9\u6846
  fontSize: string; // \u5B57\u4F53\u5927\u5C0F
  // ... \u5176\u4ED6 CSS \u5C5E\u6027
}
`,paraId:8,tocIndex:9},{value:"\u81EA\u9002\u5E94\u5E03\u5C40",paraId:9,tocIndex:10},{value:"\uFF1A\u7EC4\u4EF6\u4F1A\u6839\u636E\u5BB9\u5668\u5BBD\u5EA6\u81EA\u52A8\u8BA1\u7B97\u6BCF\u884C\u53EF\u4EE5\u653E\u7F6E\u7684\u6807\u7B7E\u6570\u91CF",paraId:9,tocIndex:10},{value:"\u6027\u80FD\u4F18\u5316",paraId:9,tocIndex:10},{value:"\uFF1A\u91C7\u7528\u865A\u62DF\u6EDA\u52A8\u6280\u672F\uFF0C\u5373\u4F7F\u6709\u5927\u91CF\u6807\u7B7E\u4E5F\u80FD\u4FDD\u6301\u6D41\u7545",paraId:9,tocIndex:10},{value:"\u7075\u6D3B\u5B9A\u5236",paraId:9,tocIndex:10},{value:"\uFF1A\u652F\u6301\u81EA\u5B9A\u4E49\u6807\u7B7E\u6837\u5F0F\u3001\u95F4\u8DDD\u3001\u884C\u6570\u7B49\u591A\u4E2A\u7EF4\u5EA6\u7684\u5B9A\u5236",paraId:9,tocIndex:10},{value:"\u4EA4\u4E92\u53CB\u597D",paraId:9,tocIndex:10},{value:'\uFF1A\u63D0\u4F9B"\u66F4\u591A"\u529F\u80FD\uFF0C\u8BA9\u7528\u6237\u53EF\u4EE5\u67E5\u770B\u5B8C\u6574\u7684\u6807\u7B7E\u5217\u8868',paraId:9,tocIndex:10},{value:"\u6B22\u8FCE\u63D0\u4EA4 Issue \u6216 Pull Request \u6765\u5E2E\u52A9\u6539\u8FDB\u8FD9\u4E2A\u7EC4\u4EF6\uFF01",paraId:10,tocIndex:11}]}}]);
