"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[272],{58920:function(P,l,e){var _;e.r(l),e.d(l,{demos:function(){return D}});var h=e(43953),o=e.n(h),R=e(91184),v=e.n(R),f=e(38497),x=e(13998),g=e(79021),O=e(25749),D={"qktreecard-demo-0":{component:f.memo(f.lazy(v()(o()().mark(function E(){var i,u,d,m,t,a,T,I,M,C;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,79021));case 2:return i=n.sent,u=i.Button,d=i.Typography,n.next=7,Promise.resolve().then(e.t.bind(e,38497,19));case 7:return m=n.sent,t=m.default,n.next=11,Promise.resolve().then(e.bind(e,25749));case 11:return a=n.sent,T=a.QkTreeCard,I=d.Title,M=d.Paragraph,C=function(){var k=function(){var c=v()(o()().mark(function s(r){return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",new Promise(function(y){if(!(r!=null&&r.key)){y([{title:"Expand to load",key:"01"}]);return}if(r!=null&&r.children){y([]);return}setTimeout(function(){if(r.key==="01-0"){y([]);return}y([{title:"Child Node",key:"".concat(r.key,"-0")},{title:"Child Node",key:"".concat(r.key,"-1")}])},2e3)}));case 1:case"end":return p.stop()}},s)}));return function(r){return c.apply(this,arguments)}}();return t.createElement("div",null,t.createElement("div",{style:{width:"100%",height:"500px",overflow:"auto"}},t.createElement(T,{className:"test",width:500,height:226,cardStyle:{border:"1px solid red"},request:k},function(c,s){return t.createElement("div",null,t.createElement("div",null,JSON.stringify(c)),t.createElement("div",null,t.createElement(u,{onClick:function(){s==null||s.setRecord(c.key,{isOpen:!c.isOpen})}},"\u5207\u6362\u5C55\u5F00\u6536\u8D77")))})))},n.abrupt("return",{default:C});case 16:case"end":return n.stop()}},E)})))),asset:{type:"BLOCK",id:"qktreecard-demo-0",refAtomIds:["QkTreeCard"],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Typography } from 'antd';\r
import React from 'react';\r
import { QkTreeCard } from 'react-components';\r
const { Title, Paragraph } = Typography;\r
\r
const Index: React.FC = () => {\r
  const request = async (data?: Record<string, any>) => {\r
    return new Promise((resolve) => {\r
      if (!data?.key) {\r
        resolve([{ title: 'Expand to load', key: '01' }]);\r
        return;\r
      }\r
\r
      if (data?.children) {\r
        resolve([]);\r
        return;\r
      }\r
      setTimeout(() => {\r
        if (data.key === '01-0') {\r
          resolve([]);\r
          return;\r
        }\r
        resolve([\r
          {\r
            title: 'Child Node',\r
            key: \`\${data.key}-0\`,\r
          },\r
          {\r
            title: 'Child Node',\r
            key: \`\${data.key}-1\`,\r
          },\r
        ]);\r
      }, 2000);\r
    });\r
  };\r
\r
  return (\r
    <div>\r
      <div style={{ width: '100%', height: '500px', overflow: 'auto' }}>\r
        <QkTreeCard\r
          className="test"\r
          width={500}\r
          height={226}\r
          cardStyle={{ border: '1px solid red' }}\r
          request={request}\r
          // isLoadNextChildren\r
        >\r
          {(data, methods) => {\r
            return (\r
              <div>\r
                <div>{JSON.stringify(data)}</div>\r
                <div>\r
                  <Button\r
                    onClick={() => {\r
                      methods?.setRecord(data.key, { isOpen: !data.isOpen });\r
                    }}\r
                  >\r
                    \u5207\u6362\u5C55\u5F00\u6536\u8D77\r
                  </Button>\r
                </div>\r
              </div>\r
            );\r
          }}\r
        </QkTreeCard>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default Index;`},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{antd:g,react:_||(_=e.t(f,2)),"react-components":O},renderOpts:{compile:function(){var E=v()(o()().mark(function u(){var d,m=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(350).then(e.bind(e,48350));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,m));case 3:case"end":return a.stop()}},u)}));function i(){return E.apply(this,arguments)}return i}()}}}},77844:function(P,l,e){e.r(l),e.d(l,{texts:function(){return h}});var _=e(13998);const h=[{value:"\u6811\u5F62\u5361\u7247,\u65E0\u9650\u5C42\u7EA7",paraId:0,tocIndex:0},{value:"\u53EF\u81EA\u52A8\u63A2\u6D4B\u4E0B\u4E00\u5C42\u7EA7\u662F\u5426\u6709\u5B50\u8282\u70B9",paraId:0,tocIndex:0},{value:"\u652F\u6301\u5F02\u6B65\u52A0\u8F7D\u53CA\u5168\u91CF\u52A0\u8F7D",paraId:0,tocIndex:0},{value:"\u5185\u90E8\u6570\u636E\uFF0C\u53EF\u518D\u5916\u90E8\u968F\u610F\u4FEE\u6539",paraId:0,tocIndex:0},{value:`\r
export type QkTreeCardType = {\r
  /**\r
   * params\u7684\u503C\u66F4\u65B0\u65F6\u4F1A\u89E6\u53D1\u91CD\u65B0\u751F\u6210tree\r
   */\r
  params?: Record<string, any>;\r
  /** \u5916\u5C42\u7C7B\u540D */\r
  className?: string;\r
  /** \u5F02\u6B65\u52A0\u8F7D\u6570\u636E */\r
  request: (\r
    data?: { isRootTree?: boolean } & Record<string, any>,\r
  ) => Promise<any>;\r
  /** \u6570\u636E\u6E90 */\r
  treeData?: Record<string, any>[];\r
  /** \u5361\u7247\u5BBD\u5EA6 */\r
  width?: number;\r
  /** \u5361\u7247\u9AD8\u5EA6 */\r
  height?: number;\r
  /** \u8FDE\u7EBF\u989C\u8272 */\r
  lineColor?: string;\r
  /** \u5361\u7247\u6837\u5F0F */\r
  cardStyle?: CSSProperties;\r
  /** \u662F\u5426\u81EA\u52A8\u63A2\u6D4B\u4E0B\u4E00\u5C42\u6570\u636E */\r
  isLoadNextChildren?: boolean;\r
  /** \u7EC4\u4EF6\u9012\u5F52\u5185\u90E8\u7528 */\r
  children?: (\r
    data: Record<string, any>,\r
    methods?: MethodsType,\r
  ) => React.ReactNode;\r
  /** \u6CA1\u6709\u6570\u636E\u65F6\u6E32\u67D3\u7684UI */\r
  emptyRender?: React.ReactNode;\r
} & Partial<\r
  Pick<\r
    QkCardType,\r
    | 'onTreeChange'\r
    | 'filter'\r
    | 'treeKey'\r
    | 'updateTree'\r
    | 'data'\r
    | 'tree'\r
    | 'setTree'\r
    | 'extraRender'\r
  >\r
>;
`,paraId:1,tocIndex:2}]}}]);
