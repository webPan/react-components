"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[272],{52594:function(g,x,a){a.r(x),a.d(x,{demos:function(){return E}});var y=a(43953),r=a.n(y),w=a(91184),c=a.n(w),t=a(38497),T=a(49310),h=a(50451),k=a(69620),E={"qktreecard-demo-0":{component:t.memo(t.lazy(c()(r()().mark(function p(){var d,o;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(a.bind(a,50451));case 2:return d=n.sent,o=d.QkTreeCard,n.abrupt("return",{default:function(){var e=function(){var s=c()(r()().mark(function I(){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",[{title:"\u8282\u70B91",key:"1"},{title:"\u8282\u70B92",key:"2"}]);case 1:case"end":return u.stop()}},I)}));return function(){return s.apply(this,arguments)}}();return t.createElement("div",{style:{width:"100%",height:"500px",overflow:"auto"}},t.createElement(o,{width:400,height:200,request:e,cardStyle:{background:"linear-gradient(145deg, #f6f7f9, #ffffff)",boxShadow:"5px 5px 10px #d1d9e6, -5px -5px 10px #ffffff",borderRadius:"8px",padding:"16px"}},function(s){return t.createElement("div",null,s.title)}))}});case 5:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"qktreecard-demo-0",refAtomIds:["QkTreeCard"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkTreeCard } from 'react-components';

export default () => {
  const request = async () => {
    return [
      { title: '\u8282\u70B91', key: '1' },
      { title: '\u8282\u70B92', key: '2' },
    ];
  };

  return (
    <div style={{ width: '100%', height: '500px', overflow: 'auto' }}>
      <QkTreeCard
        width={400}
        height={200}
        request={request}
        cardStyle={{
          background: 'linear-gradient(145deg, #f6f7f9, #ffffff)',
          boxShadow: '5px 5px 10px #d1d9e6, -5px -5px 10px #ffffff',
          borderRadius: '8px',
          padding: '16px',
        }}
      >
        {(data) => <div>{data.title}</div>}
      </QkTreeCard>
    </div>
  );
};`},"react-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"react-components":h},renderOpts:{compile:function(){var p=c()(r()().mark(function o(){var l,n=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(440).then(a.bind(a,86440));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,n));case 3:case"end":return e.stop()}},o)}));function d(){return p.apply(this,arguments)}return d}()}},"qktreecard-demo-1":{component:t.memo(t.lazy(c()(r()().mark(function p(){var d,o,l,n;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(a.bind(a,50451));case 2:return d=e.sent,o=d.QkTreeCard,e.next=6,Promise.resolve().then(a.bind(a,69620));case 6:return l=e.sent,n=l.Spin,e.abrupt("return",{default:function(){var I=function(){var v=c()(r()().mark(function u(i){return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,new Promise(function(C){return setTimeout(C,1e3)});case 2:if(i!=null&&i.key){f.next=4;break}return f.abrupt("return",[{title:"\u70B9\u51FB\u52A0\u8F7D\u5B50\u8282\u70B9",key:"root-1"},{title:"\u70B9\u51FB\u52A0\u8F7D\u5B50\u8282\u70B9",key:"root-2"}]);case 4:return f.abrupt("return",[{title:"".concat(i.key,"\u7684\u5B50\u8282\u70B91"),key:"".concat(i.key,"-1")},{title:"".concat(i.key,"\u7684\u5B50\u8282\u70B92"),key:"".concat(i.key,"-2")}]);case 5:case"end":return f.stop()}},u)}));return function(i){return v.apply(this,arguments)}}();return t.createElement("div",{style:{width:"100%",height:"500px",overflow:"auto"}},t.createElement(o,{width:500,height:300,request:I,cardStyle:{background:"linear-gradient(145deg, #f6f7f9, #ffffff)",boxShadow:"5px 5px 10px #d1d9e6, -5px -5px 10px #ffffff",borderRadius:"8px",padding:"16px"}},function(v,u){return t.createElement("div",null,t.createElement("h4",null,v.title),v.loading&&t.createElement(n,{size:"small"}))}))}});case 9:case"end":return e.stop()}},p)})))),asset:{type:"BLOCK",id:"qktreecard-demo-1",refAtomIds:["QkTreeCard"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkTreeCard } from 'react-components';
import { Spin } from 'antd';

export default () => {
  const request = async (data?: Record<string, any>) => {
    // \u6A21\u62DF\u5F02\u6B65\u8BF7\u6C42
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!data?.key) {
      return [
        { title: '\u70B9\u51FB\u52A0\u8F7D\u5B50\u8282\u70B9', key: 'root-1' },
        { title: '\u70B9\u51FB\u52A0\u8F7D\u5B50\u8282\u70B9', key: 'root-2' },
      ];
    }

    return [
      { title: \`\${data.key}\u7684\u5B50\u8282\u70B91\`, key: \`\${data.key}-1\` },
      { title: \`\${data.key}\u7684\u5B50\u8282\u70B92\`, key: \`\${data.key}-2\` },
    ];
  };

  return (
    <div style={{ width: '100%', height: '500px', overflow: 'auto' }}>
      <QkTreeCard
        width={500}
        height={300}
        request={request}
        cardStyle={{
          background: 'linear-gradient(145deg, #f6f7f9, #ffffff)',
          boxShadow: '5px 5px 10px #d1d9e6, -5px -5px 10px #ffffff',
          borderRadius: '8px',
          padding: '16px',
        }}
      >
        {(data, methods) => (
          <div>
            <h4>{data.title}</h4>
            {data.loading && <Spin size="small" />}
          </div>
        )}
      </QkTreeCard>
    </div>
  );
};`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx"},context:{"react-components":h,antd:k},renderOpts:{compile:function(){var p=c()(r()().mark(function o(){var l,n=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(440).then(a.bind(a,86440));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,n));case 3:case"end":return e.stop()}},o)}));function d(){return p.apply(this,arguments)}return d}()}},"qktreecard-demo-2":{component:t.memo(t.lazy(c()(r()().mark(function p(){var d,o;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(a.bind(a,50451));case 2:return d=n.sent,o=d.QkTreeCard,n.abrupt("return",{default:function(){var e=function(){var s=c()(r()().mark(function I(){return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",[{title:"\u81EA\u5B9A\u4E49\u8282\u70B91",key:"1"},{title:"\u81EA\u5B9A\u4E49\u8282\u70B92",key:"2"}]);case 1:case"end":return u.stop()}},I)}));return function(){return s.apply(this,arguments)}}();return t.createElement("div",{style:{width:"100%",height:"500px",overflow:"auto"}},t.createElement(o,{width:400,height:200,request:e,lineColor:"#1890ff",cardStyle:{background:"linear-gradient(145deg, #f6f7f9, #ffffff)",boxShadow:"5px 5px 10px #d1d9e6, -5px -5px 10px #ffffff",borderRadius:"8px",padding:"16px"}},function(s){return t.createElement("div",{style:{color:"#1890ff"}},s.title)}))}});case 5:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"qktreecard-demo-2",refAtomIds:["QkTreeCard"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkTreeCard } from 'react-components';

export default () => {
  const request = async () => {
    return [
      { title: '\u81EA\u5B9A\u4E49\u8282\u70B91', key: '1' },
      { title: '\u81EA\u5B9A\u4E49\u8282\u70B92', key: '2' },
    ];
  };

  return (
    <div style={{ width: '100%', height: '500px', overflow: 'auto' }}>
      <QkTreeCard
        width={400}
        height={200}
        request={request}
        lineColor="#1890ff"
        cardStyle={{
          background: 'linear-gradient(145deg, #f6f7f9, #ffffff)',
          boxShadow: '5px 5px 10px #d1d9e6, -5px -5px 10px #ffffff',
          borderRadius: '8px',
          padding: '16px',
        }}
      >
        {(data) => <div style={{ color: '#1890ff' }}>{data.title}</div>}
      </QkTreeCard>
    </div>
  );
};`},"react-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"react-components":h},renderOpts:{compile:function(){var p=c()(r()().mark(function o(){var l,n=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(440).then(a.bind(a,86440));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,n));case 3:case"end":return e.stop()}},o)}));function d(){return p.apply(this,arguments)}return d}()}}}},5446:function(g,x,a){a.r(x),a.d(x,{texts:function(){return r}});var y=a(49310);const r=[{value:"\u4E00\u4E2A\u529F\u80FD\u5F3A\u5927\u4E14\u7075\u6D3B\u7684\u6811\u5F62\u5361\u7247\u7EC4\u4EF6\uFF0C\u8BA9\u5C42\u7EA7\u6570\u636E\u5C55\u793A\u66F4\u52A0\u4F18\u96C5\u3002",paraId:0,tocIndex:0},{value:"\u{1F504} \u652F\u6301\u65E0\u9650\u5C42\u7EA7\u7684\u6811\u5F62\u7ED3\u6784\u5C55\u793A",paraId:1,tocIndex:1},{value:"\u{1F916} \u667A\u80FD\u63A2\u6D4B - \u81EA\u52A8\u68C0\u6D4B\u662F\u5426\u5B58\u5728\u5B50\u8282\u70B9",paraId:1,tocIndex:1},{value:"\u26A1\uFE0F \u652F\u6301\u5F02\u6B65\u52A0\u8F7D\u548C\u5168\u91CF\u6570\u636E\u52A0\u8F7D",paraId:1,tocIndex:1},{value:"\u{1F3A8} \u9AD8\u5EA6\u53EF\u5B9A\u5236\u7684\u5361\u7247\u6837\u5F0F",paraId:1,tocIndex:1},{value:"\u{1F4F1} \u54CD\u5E94\u5F0F\u8BBE\u8BA1\uFF0C\u5B8C\u7F8E\u9002\u914D\u5404\u79CD\u5C4F\u5E55",paraId:1,tocIndex:1},{value:"\u{1F6E0} \u5F3A\u5927\u7684\u5916\u90E8\u6570\u636E\u63A7\u5236\u80FD\u529B",paraId:1,tocIndex:1},{value:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u5C55\u793A\u3002",paraId:2,tocIndex:3},{value:"\u5C55\u793A\u5982\u4F55\u5904\u7406\u5F02\u6B65\u52A0\u8F7D\u5B50\u8282\u70B9\u3002",paraId:3,tocIndex:4},{value:"\u5C55\u793A\u5982\u4F55\u81EA\u5B9A\u4E49\u5361\u7247\u6837\u5F0F\u548C\u8FDE\u63A5\u7EBF\u3002",paraId:4,tocIndex:5},{value:"\u53C2\u6570",paraId:5,tocIndex:7},{value:"\u8BF4\u660E",paraId:5,tocIndex:7},{value:"\u7C7B\u578B",paraId:5,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:7},{value:"params",paraId:5,tocIndex:7},{value:"\u53C2\u6570\u66F4\u65B0\u65F6\u89E6\u53D1\u6811\u7684\u91CD\u65B0\u751F\u6210",paraId:5,tocIndex:7},{value:"Record<string, any>",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"className",paraId:5,tocIndex:7},{value:"\u5916\u5C42\u5BB9\u5668\u7C7B\u540D",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"request",paraId:5,tocIndex:7},{value:"\u5F02\u6B65\u52A0\u8F7D\u6570\u636E\u7684\u65B9\u6CD5",paraId:5,tocIndex:7},{value:"(data?: { isRootTree?: boolean } & Record<string, any>) => Promise<any>",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"treeData",paraId:5,tocIndex:7},{value:"\u9759\u6001\u6570\u636E\u6E90",paraId:5,tocIndex:7},{value:"Record<string, any>[]",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"width",paraId:5,tocIndex:7},{value:"\u5361\u7247\u5BBD\u5EA6",paraId:5,tocIndex:7},{value:"number",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"height",paraId:5,tocIndex:7},{value:"\u5361\u7247\u9AD8\u5EA6",paraId:5,tocIndex:7},{value:"number",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"lineColor",paraId:5,tocIndex:7},{value:"\u8FDE\u63A5\u7EBF\u989C\u8272",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"#d9d9d9",paraId:5,tocIndex:7},{value:"cardStyle",paraId:5,tocIndex:7},{value:"\u5361\u7247\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:7},{value:"CSSProperties",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"isLoadNextChildren",paraId:5,tocIndex:7},{value:"\u662F\u5426\u81EA\u52A8\u63A2\u6D4B\u4E0B\u4E00\u5C42\u6570\u636E",paraId:5,tocIndex:7},{value:"boolean",paraId:5,tocIndex:7},{value:"false",paraId:5,tocIndex:7},{value:"children",paraId:5,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u51FD\u6570",paraId:5,tocIndex:7},{value:"(data: Record<string, any>, methods?: MethodsType) => React.ReactNode",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"emptyRender",paraId:5,tocIndex:7},{value:"\u7A7A\u72B6\u6001\u6E32\u67D3",paraId:5,tocIndex:7},{value:"React.ReactNode",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"\u901A\u8FC7 children \u6E32\u67D3\u51FD\u6570\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u53EF\u4EE5\u83B7\u53D6\u5230\u4EE5\u4E0B\u65B9\u6CD5\uFF1A",paraId:6,tocIndex:8},{value:"\u65B9\u6CD5\u540D",paraId:7,tocIndex:8},{value:"\u8BF4\u660E",paraId:7,tocIndex:8},{value:"\u7C7B\u578B",paraId:7,tocIndex:8},{value:"setRecord",paraId:7,tocIndex:8},{value:"\u66F4\u65B0\u6307\u5B9A\u8282\u70B9\u7684\u6570\u636E",paraId:7,tocIndex:8},{value:"(key: string, data: Partial<Record<string, any>>) => void",paraId:7,tocIndex:8},{value:"getRecord",paraId:7,tocIndex:8},{value:"\u83B7\u53D6\u6307\u5B9A\u8282\u70B9\u7684\u6570\u636E",paraId:7,tocIndex:8},{value:"(key: string) => Record<string, any>",paraId:7,tocIndex:8},{value:"refresh",paraId:7,tocIndex:8},{value:"\u5237\u65B0\u6574\u4E2A\u6811",paraId:7,tocIndex:8},{value:"() => void",paraId:7,tocIndex:8},{value:"\u4F7F\u7528 ",paraId:8,tocIndex:9},{value:"isLoadNextChildren",paraId:8,tocIndex:9},{value:" \u53EF\u4EE5\u4F18\u5316\u6027\u80FD\uFF0C\u907F\u514D\u4E00\u6B21\u6027\u52A0\u8F7D\u8FC7\u591A\u6570\u636E",paraId:8,tocIndex:9},{value:"\u5408\u7406\u8BBE\u7F6E ",paraId:8,tocIndex:9},{value:"width",paraId:8,tocIndex:9},{value:" \u548C ",paraId:8,tocIndex:9},{value:"height",paraId:8,tocIndex:9},{value:" \u6765\u63A7\u5236\u5361\u7247\u5927\u5C0F",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:8,tocIndex:9},{value:"cardStyle",paraId:8,tocIndex:9},{value:" \u6765\u81EA\u5B9A\u4E49\u5361\u7247\u5916\u89C2",paraId:8,tocIndex:9},{value:"\u914D\u5408 ",paraId:8,tocIndex:9},{value:"setRecord",paraId:8,tocIndex:9},{value:" \u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u7075\u6D3B\u7684\u72B6\u6001\u7BA1\u7406",paraId:8,tocIndex:9},{value:"\u786E\u4FDD\u63D0\u4F9B\u552F\u4E00\u7684 ",paraId:9,tocIndex:10},{value:"key",paraId:9,tocIndex:10},{value:" \u503C",paraId:9,tocIndex:10},{value:"\u5F02\u6B65\u52A0\u8F7D\u65F6\u5EFA\u8BAE\u5C55\u793A loading \u72B6\u6001",paraId:9,tocIndex:10},{value:"\u6CE8\u610F\u5904\u7406\u7A7A\u6570\u636E\u7684\u5C55\u793A",paraId:9,tocIndex:10}]}}]);
