"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[272],{52594:function(D,s,e){var h;e.r(s),e.d(s,{demos:function(){return R}});var y=e(43953),o=e.n(y),g=e(91184),v=e.n(g),E=e(38497),B=e(49310),M=e(56690),w=e(91167),R={"qktreecard-demo-0":{component:E.memo(E.lazy(v()(o()().mark(function f(){var d,c,a,m,n,l,T,P,C,O;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,56690));case 2:return d=r.sent,c=d.Button,a=d.Typography,r.next=7,Promise.resolve().then(e.t.bind(e,38497,19));case 7:return m=r.sent,n=m.default,r.next=11,Promise.resolve().then(e.bind(e,91167));case 11:return l=r.sent,T=l.QkTreeCard,P=a.Title,C=a.Paragraph,O=function(){var k=function(){var u=v()(o()().mark(function i(t){return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",new Promise(function(_){if(!(t!=null&&t.key)){_([{title:"Expand to load",key:"01"}]);return}if(t!=null&&t.children){_([]);return}setTimeout(function(){if(t.key==="01-0"){_([]);return}_([{title:"Child Node",key:"".concat(t.key,"-0")},{title:"Child Node",key:"".concat(t.key,"-1")}])},2e3)}));case 1:case"end":return p.stop()}},i)}));return function(t){return u.apply(this,arguments)}}();return n.createElement("div",null,n.createElement(a,null,n.createElement(P,null,"QkTreeCard"),n.createElement(C,null,n.createElement("ul",null,n.createElement("li",null,"\u6811\u5F62\u5361\u7247,\u65E0\u9650\u5C42\u7EA7"),n.createElement("li",null,"\u53EF\u81EA\u52A8\u63A2\u6D4B\u4E0B\u4E00\u5C42\u7EA7\u662F\u5426\u6709\u5B50\u8282\u70B9"),n.createElement("li",null,"\u652F\u6301\u5F02\u6B65\u52A0\u8F7D\u53CA\u5168\u91CF\u52A0\u8F7D"),n.createElement("li",null,"\u5185\u90E8\u6570\u636E\uFF0C\u53EF\u518D\u5916\u90E8\u968F\u610F\u4FEE\u6539")))),n.createElement("div",{style:{width:"100%",height:"500px",overflow:"auto"}},n.createElement(T,{className:"test",width:500,height:226,cardStyle:{border:"1px solid red"},request:k},function(u,i){return n.createElement("div",null,n.createElement("div",null,JSON.stringify(u)),n.createElement("div",null,n.createElement(c,{onClick:function(){i==null||i.setRecord(u.key,{isOpen:!u.isOpen})}},"\u5207\u6362\u5C55\u5F00\u6536\u8D77")))})))},r.abrupt("return",{default:O});case 16:case"end":return r.stop()}},f)})))),asset:{type:"BLOCK",id:"qktreecard-demo-0",refAtomIds:["QkTreeCard"],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Typography } from 'antd';
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
      <Typography>
        <Title>QkTreeCard</Title>
        <Paragraph>
          <ul>
            <li>\u6811\u5F62\u5361\u7247,\u65E0\u9650\u5C42\u7EA7</li>
            <li>\u53EF\u81EA\u52A8\u63A2\u6D4B\u4E0B\u4E00\u5C42\u7EA7\u662F\u5426\u6709\u5B50\u8282\u70B9</li>
            <li>\u652F\u6301\u5F02\u6B65\u52A0\u8F7D\u53CA\u5168\u91CF\u52A0\u8F7D</li>
            <li>\u5185\u90E8\u6570\u636E\uFF0C\u53EF\u518D\u5916\u90E8\u968F\u610F\u4FEE\u6539</li>
          </ul>
        </Paragraph>
      </Typography>
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

export default Index;`},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{antd:M,react:h||(h=e.t(E,2)),"react-components":w},renderOpts:{compile:function(){var f=v()(o()().mark(function c(){var a,m=arguments;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(440).then(e.bind(e,86440));case 2:return l.abrupt("return",(a=l.sent).default.apply(a,m));case 3:case"end":return l.stop()}},c)}));function d(){return f.apply(this,arguments)}return d}()}}}},5446:function(D,s,e){e.r(s),e.d(s,{texts:function(){return y}});var h=e(49310);const y=[]}}]);
