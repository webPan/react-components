"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[815],{97236:function(E,o,e){var c;e.r(o),e.d(o,{demos:function(){return D}});var p=e(43953),r=e.n(p),f=e(91184),g=e.n(f),h=e(38497),A=e(27892),I=e(50451),C=e(56690),D={"qkprotable-demo-0":{component:h.memo(h.lazy(g()(r()().mark(function _(){var d,u,s,a,v,n,b,M,O,L,P;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return d=t.sent,u=d.QkProTable,t.next=6,Promise.resolve().then(e.bind(e,56690));case 6:return s=t.sent,a=s.Typography,t.next=10,Promise.resolve().then(e.t.bind(e,38497,19));case 10:return v=t.sent,n=v.default,b=a.Title,M=a.Paragraph,O=a.Text,L=a.Link,P=function(){var y=[{label:"\u652F\u4ED8\u5B9D",value:1},{label:"\u963F\u91CC\u5DF4\u5DF4",value:2}],R=[{title:"\u5E8F\u53F7",valueType:"index"},{dataIndex:"name",title:"\u59D3\u540D"},{dataIndex:"orgCode",title:"\u6240\u5728\u4F01\u4E1A",merge:"col",mergeBy:["orgCode"],request:function(){var x=g()(r()().mark(function l(){return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",y);case 1:case"end":return i.stop()}},l)}));function m(){return x.apply(this,arguments)}return m}(),renderText:function(m){var l=y.find(function(T){return T.value===m});return(l==null?void 0:l.label)||m}},{dataIndex:"sex",title:"\u6027\u522B"},{dataIndex:"age",title:"\u5E74\u9F84"},{dataIndex:"height",title:"\u8EAB\u9AD8"}],B=[{name:"\u5F20\u4E09",sex:"\u7537",age:20,height:175,orgCode:1},{name:"\u674E\u56DB",sex:"\u5973",age:25,height:180,orgCode:1},{name:"\u738B\u4E94",sex:"\u7537",age:18,height:183,orgCode:1},{name:"\u8D75\u516D",sex:"\u7537",age:18,height:183,orgCode:2},{name:"\u5C0F\u540D",sex:"\u7537",age:18,height:183,orgCode:2},{name:"\u5C0F\u9ED1",sex:"\u7537",age:18,height:183,orgCode:2}];return n.createElement("div",null,n.createElement(u,{columns:R,dataSource:B,search:{storeQueryParams:!0},pagination:{pageSize:5}}))},t.abrupt("return",{default:P});case 15:case"end":return t.stop()}},_)})))),asset:{type:"BLOCK",id:"qkprotable-demo-0",refAtomIds:["QkProTable"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkProTable } from 'react-components';
import { type ProColumns } from '@ant-design/pro-components';
import { Typography } from 'antd';
import React from 'react';
const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  const options = [
    { label: '\u652F\u4ED8\u5B9D', value: 1 },
    { label: '\u963F\u91CC\u5DF4\u5DF4', value: 2 },
  ];
  const columns: ProColumns<any> & Record<string, any>[] = [
    {
      title: '\u5E8F\u53F7',
      valueType: 'index',
    },
    { dataIndex: 'name', title: '\u59D3\u540D' },
    {
      dataIndex: 'orgCode',
      title: '\u6240\u5728\u4F01\u4E1A',
      merge: 'col',
      mergeBy: ['orgCode'],
      request: async () => {
        return options;
      },
      renderText: (_: number) => {
        const current = options.find((item) => item.value === _);
        return current?.label || _;
      },
    },
    { dataIndex: 'sex', title: '\u6027\u522B' },
    { dataIndex: 'age', title: '\u5E74\u9F84' },
    { dataIndex: 'height', title: '\u8EAB\u9AD8' },
  ];
  const dataSource = [
    {
      name: '\u5F20\u4E09',
      sex: '\u7537',
      age: 20,
      height: 175,
      orgCode: 1,
    },
    {
      name: '\u674E\u56DB',
      sex: '\u5973',
      age: 25,
      height: 180,
      orgCode: 1,
    },
    {
      name: '\u738B\u4E94',
      sex: '\u7537',
      age: 18,
      height: 183,
      orgCode: 1,
    },
    {
      name: '\u8D75\u516D',
      sex: '\u7537',
      age: 18,
      height: 183,
      orgCode: 2,
    },
    {
      name: '\u5C0F\u540D',
      sex: '\u7537',
      age: 18,
      height: 183,
      orgCode: 2,
    },
    {
      name: '\u5C0F\u9ED1',
      sex: '\u7537',
      age: 18,
      height: 183,
      orgCode: 2,
    },
  ];
  return (
    <div>
      <QkProTable
        columns={columns}
        dataSource={dataSource}
        search={{ storeQueryParams: true }}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":I,antd:C,react:c||(c=e.t(h,2))},renderOpts:{compile:function(){var _=g()(r()().mark(function u(){var s,a=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(440).then(e.bind(e,86440));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,a));case 3:case"end":return n.stop()}},u)}));function d(){return _.apply(this,arguments)}return d}()}}}},3446:function(E,o,e){e.r(o),e.d(o,{texts:function(){return p}});var c=e(27892);const p=[{value:"\u57FA\u4E8E antd \u8868\u683C\u7684\u4E8C\u6B21\u5C01\u88C5",paraId:0,tocIndex:0},{value:"\u589E\u52A0\u6570\u636E\u6A2A\u5411\u4E0E\u7EB5\u5411\u5408\u5E76\u529F\u80FD",paraId:1,tocIndex:0},{value:"\u589E\u52A0\u7FFB\u9875\u8BB0\u5FC6\u53CA\u641C\u7D22\u6761\u4EF6\u8BB0\u5FC6\u529F\u80FD",paraId:1,tocIndex:0},{value:"\u589E\u52A0\u8868\u683C\u5404\u9879\u5BBD\u5EA6\u81EA\u9002\u5E94\u529F\u80FD",paraId:1,tocIndex:0},{value:`type QkProTableType = Omit<ProTableProps<any, any>, 'search'> & {
  ellipsis?: boolean; //\u5FEB\u6377\u5F00\u542Fellipsis
  search?: {
    storeQueryParams?: boolean; //\u662F\u5426\u7F13\u5B58\u641C\u7D22\u53C2\u6570
  } & Pick<ProTableProps<any, any>, 'search'>['search'];
};
`,paraId:2,tocIndex:2}]}}]);
