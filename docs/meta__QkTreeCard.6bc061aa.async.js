"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[272],{52594:function(T,l,e){var v;e.r(l),e.d(l,{demos:function(){return M}});var h=e(43953),o=e.n(h),O=e(91184),y=e.n(O),f=e(38497),B=e(49310),D=e(56690),I=e(91167),M={"qktreecard-demo-0":{component:f.memo(f.lazy(y()(o()().mark(function E(){var i,c,d,m,r,a,P,g,w,C;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,56690));case 2:return i=t.sent,c=i.Button,d=i.Typography,t.next=7,Promise.resolve().then(e.t.bind(e,38497,19));case 7:return m=t.sent,r=m.default,t.next=11,Promise.resolve().then(e.bind(e,91167));case 11:return a=t.sent,P=a.QkTreeCard,g=d.Title,w=d.Paragraph,C=function(){var R=function(){var u=y()(o()().mark(function s(n){return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",new Promise(function(_){if(!(n!=null&&n.key)){_([{title:"Expand to load",key:"01"}]);return}if(n!=null&&n.children){_([]);return}setTimeout(function(){if(n.key==="01-0"){_([]);return}_([{title:"Child Node",key:"".concat(n.key,"-0")},{title:"Child Node",key:"".concat(n.key,"-1")}])},2e3)}));case 1:case"end":return p.stop()}},s)}));return function(n){return u.apply(this,arguments)}}();return r.createElement("div",null,r.createElement("div",{style:{width:"100%",height:"500px",overflow:"auto"}},r.createElement(P,{className:"test",width:500,height:226,cardStyle:{border:"1px solid red"},request:R},function(u,s){return r.createElement("div",null,r.createElement("div",null,JSON.stringify(u)),r.createElement("div",null,r.createElement(c,{onClick:function(){s==null||s.setRecord(u.key,{isOpen:!u.isOpen})}},"\u5207\u6362\u5C55\u5F00\u6536\u8D77")))})))},t.abrupt("return",{default:C});case 16:case"end":return t.stop()}},E)})))),asset:{type:"BLOCK",id:"qktreecard-demo-0",refAtomIds:["QkTreeCard"],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Typography } from 'antd';
import React from 'react';
import { QkTreeCard } from 'react-components';
const { Title, Paragraph } = Typography;

const Index: React.FC = () => {
  const request = async (data?: Record<string, any>) => {
    return new Promise((resolve) => {
      if (!data?.key) {
        resolve([{ title: 'Expand to load', key: '01' }]);
        return;
      }

      if (data?.children) {
        resolve([]);
        return;
      }
      setTimeout(() => {
        if (data.key === '01-0') {
          resolve([]);
          return;
        }
        resolve([
          {
            title: 'Child Node',
            key: \`\${data.key}-0\`,
          },
          {
            title: 'Child Node',
            key: \`\${data.key}-1\`,
          },
        ]);
      }, 2000);
    });
  };

  return (
    <div>
      <div style={{ width: '100%', height: '500px', overflow: 'auto' }}>
        <QkTreeCard
          className="test"
          width={500}
          height={226}
          cardStyle={{ border: '1px solid red' }}
          request={request}
          // isLoadNextChildren
        >
          {(data, methods) => {
            return (
              <div>
                <div>{JSON.stringify(data)}</div>
                <div>
                  <Button
                    onClick={() => {
                      methods?.setRecord(data.key, { isOpen: !data.isOpen });
                    }}
                  >
                    \u5207\u6362\u5C55\u5F00\u6536\u8D77
                  </Button>
                </div>
              </div>
            );
          }}
        </QkTreeCard>
      </div>
    </div>
  );
};

export default Index;`},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{antd:D,react:v||(v=e.t(f,2)),"react-components":I},renderOpts:{compile:function(){var E=y()(o()().mark(function c(){var d,m=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(440).then(e.bind(e,86440));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,m));case 3:case"end":return a.stop()}},c)}));function i(){return E.apply(this,arguments)}return i}()}}}},5446:function(T,l,e){e.r(l),e.d(l,{texts:function(){return h}});var v=e(49310);const h=[{value:"\u6811\u5F62\u5361\u7247,\u65E0\u9650\u5C42\u7EA7",paraId:0,tocIndex:0},{value:"\u53EF\u81EA\u52A8\u63A2\u6D4B\u4E0B\u4E00\u5C42\u7EA7\u662F\u5426\u6709\u5B50\u8282\u70B9",paraId:0,tocIndex:0},{value:"\u652F\u6301\u5F02\u6B65\u52A0\u8F7D\u53CA\u5168\u91CF\u52A0\u8F7D",paraId:0,tocIndex:0},{value:"\u5185\u90E8\u6570\u636E\uFF0C\u53EF\u518D\u5916\u90E8\u968F\u610F\u4FEE\u6539",paraId:0,tocIndex:0}]}}]);
