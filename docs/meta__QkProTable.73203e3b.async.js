"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[815],{80512:function(E,o,e){var c;e.r(o),e.d(o,{demos:function(){return D}});var p=e(43953),a=e.n(p),f=e(91184),g=e.n(f),h=e(38497),A=e(14220),I=e(25749),C=e(79021),D={"qkprotable-demo-0":{component:h.memo(h.lazy(g()(a()().mark(function _(){var d,u,s,t,v,n,b,M,O,L,P;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.bind(e,25749));case 2:return d=r.sent,u=d.QkProTable,r.next=6,Promise.resolve().then(e.bind(e,79021));case 6:return s=r.sent,t=s.Typography,r.next=10,Promise.resolve().then(e.t.bind(e,38497,19));case 10:return v=r.sent,n=v.default,b=t.Title,M=t.Paragraph,O=t.Text,L=t.Link,P=function(){var y=[{label:"\u652F\u4ED8\u5B9D",value:1},{label:"\u963F\u91CC\u5DF4\u5DF4",value:2}],R=[{title:"\u5E8F\u53F7",valueType:"index"},{dataIndex:"name",title:"\u59D3\u540D"},{dataIndex:"orgCode",title:"\u6240\u5728\u4F01\u4E1A",merge:"col",mergeBy:["orgCode"],request:function(){var x=g()(a()().mark(function l(){return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",y);case 1:case"end":return i.stop()}},l)}));function m(){return x.apply(this,arguments)}return m}(),renderText:function(m){var l=y.find(function(T){return T.value===m});return(l==null?void 0:l.label)||m}},{dataIndex:"sex",title:"\u6027\u522B"},{dataIndex:"age",title:"\u5E74\u9F84"},{dataIndex:"height",title:"\u8EAB\u9AD8"}],B=[{name:"\u5F20\u4E09",sex:"\u7537",age:20,height:175,orgCode:1},{name:"\u674E\u56DB",sex:"\u5973",age:25,height:180,orgCode:1},{name:"\u738B\u4E94",sex:"\u7537",age:18,height:183,orgCode:1},{name:"\u8D75\u516D",sex:"\u7537",age:18,height:183,orgCode:2},{name:"\u5C0F\u540D",sex:"\u7537",age:18,height:183,orgCode:2},{name:"\u5C0F\u9ED1",sex:"\u7537",age:18,height:183,orgCode:2}];return n.createElement("div",null,n.createElement(u,{columns:R,dataSource:B,search:{storeQueryParams:!0},pagination:{pageSize:5}}))},r.abrupt("return",{default:P});case 15:case"end":return r.stop()}},_)})))),asset:{type:"BLOCK",id:"qkprotable-demo-0",refAtomIds:["QkProTable"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkProTable } from 'react-components';\r
import { type ProColumns } from '@ant-design/pro-components';\r
import { Typography } from 'antd';\r
import React from 'react';\r
const { Title, Paragraph, Text, Link } = Typography;\r
\r
const Example = () => {\r
  const options = [\r
    { label: '\u652F\u4ED8\u5B9D', value: 1 },\r
    { label: '\u963F\u91CC\u5DF4\u5DF4', value: 2 },\r
  ];\r
  const columns: ProColumns<any> & Record<string, any>[] = [\r
    {\r
      title: '\u5E8F\u53F7',\r
      valueType: 'index',\r
    },\r
    { dataIndex: 'name', title: '\u59D3\u540D' },\r
    {\r
      dataIndex: 'orgCode',\r
      title: '\u6240\u5728\u4F01\u4E1A',\r
      merge: 'col',\r
      mergeBy: ['orgCode'],\r
      request: async () => {\r
        return options;\r
      },\r
      renderText: (_: number) => {\r
        const current = options.find((item) => item.value === _);\r
        return current?.label || _;\r
      },\r
    },\r
    { dataIndex: 'sex', title: '\u6027\u522B' },\r
    { dataIndex: 'age', title: '\u5E74\u9F84' },\r
    { dataIndex: 'height', title: '\u8EAB\u9AD8' },\r
  ];\r
  const dataSource = [\r
    {\r
      name: '\u5F20\u4E09',\r
      sex: '\u7537',\r
      age: 20,\r
      height: 175,\r
      orgCode: 1,\r
    },\r
    {\r
      name: '\u674E\u56DB',\r
      sex: '\u5973',\r
      age: 25,\r
      height: 180,\r
      orgCode: 1,\r
    },\r
    {\r
      name: '\u738B\u4E94',\r
      sex: '\u7537',\r
      age: 18,\r
      height: 183,\r
      orgCode: 1,\r
    },\r
    {\r
      name: '\u8D75\u516D',\r
      sex: '\u7537',\r
      age: 18,\r
      height: 183,\r
      orgCode: 2,\r
    },\r
    {\r
      name: '\u5C0F\u540D',\r
      sex: '\u7537',\r
      age: 18,\r
      height: 183,\r
      orgCode: 2,\r
    },\r
    {\r
      name: '\u5C0F\u9ED1',\r
      sex: '\u7537',\r
      age: 18,\r
      height: 183,\r
      orgCode: 2,\r
    },\r
  ];\r
  return (\r
    <div>\r
      <QkProTable\r
        columns={columns}\r
        dataSource={dataSource}\r
        search={{ storeQueryParams: true }}\r
        pagination={{ pageSize: 5 }}\r
      />\r
    </div>\r
  );\r
};\r
\r
export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":I,antd:C,react:c||(c=e.t(h,2))},renderOpts:{compile:function(){var _=g()(a()().mark(function u(){var s,t=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(350).then(e.bind(e,48350));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,t));case 3:case"end":return n.stop()}},u)}));function d(){return _.apply(this,arguments)}return d}()}}}},42628:function(E,o,e){e.r(o),e.d(o,{texts:function(){return p}});var c=e(14220);const p=[{value:"\u57FA\u4E8E antd \u8868\u683C\u7684\u4E8C\u6B21\u5C01\u88C5",paraId:0,tocIndex:0},{value:"\u589E\u52A0\u6570\u636E\u6A2A\u5411\u4E0E\u7EB5\u5411\u5408\u5E76\u529F\u80FD",paraId:1,tocIndex:0},{value:"\u589E\u52A0\u7FFB\u9875\u8BB0\u5FC6\u53CA\u641C\u7D22\u6761\u4EF6\u8BB0\u5FC6\u529F\u80FD",paraId:1,tocIndex:0},{value:"\u589E\u52A0\u8868\u683C\u5404\u9879\u5BBD\u5EA6\u81EA\u9002\u5E94\u529F\u80FD",paraId:1,tocIndex:0},{value:`type QkProTableType = Omit<ProTableProps<any, any>, 'search'> & {\r
  ellipsis?: boolean; //\u5FEB\u6377\u5F00\u542Fellipsis\r
  search?: {\r
    storeQueryParams?: boolean; //\u662F\u5426\u7F13\u5B58\u641C\u7D22\u53C2\u6570\r
  } & Pick<ProTableProps<any, any>, 'search'>['search'];\r
};
`,paraId:2,tocIndex:2}]}}]);
