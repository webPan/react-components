"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[815],{97236:function(S,x,e){var i;e.r(x),e.d(x,{demos:function(){return Q}});var P=e(43953),d=e.n(P),M=e(91184),p=e.n(M),c=e(38497),w=e(27892),f=e(50451),D=e(69620),Q={"qkprotable-demo-0":{component:c.memo(c.lazy(p()(d()().mark(function u(){var o,l,t,r,m;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return o=a.sent,l=o.QkProTable,a.next=6,Promise.resolve().then(e.t.bind(e,38497,19));case 6:return t=a.sent,r=t.default,m=function(){var s=[{title:"\u5E8F\u53F7",valueType:"index",width:48},{title:"\u59D3\u540D",dataIndex:"name",width:100},{title:"\u5E74\u9F84",dataIndex:"age",width:80},{title:"\u5730\u5740",dataIndex:"address",ellipsis:!0}],v=[{name:"\u5F20\u4E09",age:25,address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A"},{name:"\u674E\u56DB",age:28,address:"\u4E0A\u6D77\u5E02\u6D66\u4E1C\u65B0\u533A"}];return r.createElement(l,{columns:s,dataSource:v,search:!1,pagination:{pageSize:10}})},a.abrupt("return",{default:m});case 10:case"end":return a.stop()}},u)})))),asset:{type:"BLOCK",id:"qkprotable-demo-0",refAtomIds:["QkProTable"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkProTable } from 'react-components';
import { type ProColumns } from '@ant-design/pro-components';
import React from 'react';

const BasicExample: React.FC = () => {
  const columns: ProColumns<any>[] = [
    {
      title: '\u5E8F\u53F7',
      valueType: 'index',
      width: 48,
    },
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
      width: 100,
    },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
      width: 80,
    },
    {
      title: '\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
    },
  ];

  const dataSource = [
    {
      name: '\u5F20\u4E09',
      age: 25,
      address: '\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A',
    },
    {
      name: '\u674E\u56DB',
      age: 28,
      address: '\u4E0A\u6D77\u5E02\u6D66\u4E1C\u65B0\u533A',
    },
  ];

  return (
    <QkProTable
      columns={columns}
      dataSource={dataSource}
      search={false}
      pagination={{
        pageSize: 10,
      }}
    />
  );
};

export default BasicExample;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":f,react:i||(i=e.t(c,2))},renderOpts:{compile:function(){var u=p()(d()().mark(function l(){var t,r=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(440).then(e.bind(e,86440));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,r));case 3:case"end":return n.stop()}},l)}));function o(){return u.apply(this,arguments)}return o}()}},"qkprotable-demo-1":{component:c.memo(c.lazy(p()(d()().mark(function u(){var o,l,t,r,m;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return o=a.sent,l=o.QkProTable,a.next=6,Promise.resolve().then(e.t.bind(e,38497,19));case 6:return t=a.sent,r=t.default,m=function(){var s=[{title:"\u90E8\u95E8",dataIndex:"department",merge:"col",mergeBy:["department"]},{title:"\u7EC4\u522B",dataIndex:"group",merge:"col",mergeBy:["department","group"]},{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u5DE5\u53F7",dataIndex:"workId"}],v=[{department:"\u6280\u672F\u90E8",group:"\u524D\u7AEF\u7EC4",name:"\u5F20\u4E09",workId:"001"},{department:"\u6280\u672F\u90E8",group:"\u524D\u7AEF\u7EC4",name:"\u674E\u56DB",workId:"002"},{department:"\u6280\u672F\u90E8",group:"\u540E\u7AEF\u7EC4",name:"\u738B\u4E94",workId:"003"}];return r.createElement(l,{columns:s,dataSource:v,search:!1})},a.abrupt("return",{default:m});case 10:case"end":return a.stop()}},u)})))),asset:{type:"BLOCK",id:"qkprotable-demo-1",refAtomIds:["QkProTable"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkProTable } from 'react-components';
import { type ProColumns } from '@ant-design/pro-components';
import React from 'react';

const MergeExample: React.FC = () => {
  const columns: ProColumns<any>[] = [
    {
      title: '\u90E8\u95E8',
      dataIndex: 'department',
      merge: 'col',
      mergeBy: ['department'],
    },
    {
      title: '\u7EC4\u522B',
      dataIndex: 'group',
      merge: 'col',
      mergeBy: ['department', 'group'],
    },
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
    },
    {
      title: '\u5DE5\u53F7',
      dataIndex: 'workId',
    },
  ];

  const dataSource = [
    {
      department: '\u6280\u672F\u90E8',
      group: '\u524D\u7AEF\u7EC4',
      name: '\u5F20\u4E09',
      workId: '001',
    },
    {
      department: '\u6280\u672F\u90E8',
      group: '\u524D\u7AEF\u7EC4',
      name: '\u674E\u56DB',
      workId: '002',
    },
    {
      department: '\u6280\u672F\u90E8',
      group: '\u540E\u7AEF\u7EC4',
      name: '\u738B\u4E94',
      workId: '003',
    },
  ];

  return (
    <QkProTable columns={columns} dataSource={dataSource} search={false} />
  );
};

export default MergeExample;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":f,react:i||(i=e.t(c,2))},renderOpts:{compile:function(){var u=p()(d()().mark(function l(){var t,r=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(440).then(e.bind(e,86440));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,r));case 3:case"end":return n.stop()}},l)}));function o(){return u.apply(this,arguments)}return o}()}},"qkprotable-demo-2":{component:c.memo(c.lazy(p()(d()().mark(function u(){var o,l,t,r,m;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return o=a.sent,l=o.QkProTable,a.next=6,Promise.resolve().then(e.t.bind(e,38497,19));case 6:return t=a.sent,r=t.default,m=function(){var s=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u72B6\u6001",dataIndex:"status",valueEnum:{0:{text:"\u5173\u95ED",status:"Default"},1:{text:"\u8FD0\u884C\u4E2D",status:"Processing"},2:{text:"\u5DF2\u4E0A\u7EBF",status:"Success"},3:{text:"\u5F02\u5E38",status:"Error"}}}],v=[{id:1,name:"\u5F20\u4E09",status:1},{id:2,name:"\u674E\u56DB",status:2},{id:3,name:"\u738B\u4E94",status:0},{id:4,name:"\u8D75\u516D",status:3},{id:5,name:"\u5C0F\u660E",status:1}];return r.createElement(l,{columns:s,request:function(){var E=p()(d()().mark(function b(y){var I;return d()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return console.log("\u641C\u7D22\u53C2\u6570:",y),I=[].concat(v),y.name&&(I=I.filter(function(C){return C.name.includes(y.name)})),y.status!==void 0&&(I=I.filter(function(C){return C.status===y.status})),g.abrupt("return",{data:I,success:!0,total:I.length});case 5:case"end":return g.stop()}},b)}));function T(b){return E.apply(this,arguments)}return T}(),search:{storeQueryParams:!0,defaultCollapsed:!1},pagination:{pageSize:3}})},a.abrupt("return",{default:m});case 10:case"end":return a.stop()}},u)})))),asset:{type:"BLOCK",id:"qkprotable-demo-2",refAtomIds:["QkProTable"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkProTable } from 'react-components';
import { type ProColumns } from '@ant-design/pro-components';
import React from 'react';

const SearchMemoryExample: React.FC = () => {
  const columns: ProColumns<any>[] = [
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
    },
    {
      title: '\u72B6\u6001',
      dataIndex: 'status',
      valueEnum: {
        0: { text: '\u5173\u95ED', status: 'Default' },
        1: { text: '\u8FD0\u884C\u4E2D', status: 'Processing' },
        2: { text: '\u5DF2\u4E0A\u7EBF', status: 'Success' },
        3: { text: '\u5F02\u5E38', status: 'Error' },
      },
    },
  ];

  // \u6A21\u62DF\u6570\u636E
  const mockData = [
    { id: 1, name: '\u5F20\u4E09', status: 1 },
    { id: 2, name: '\u674E\u56DB', status: 2 },
    { id: 3, name: '\u738B\u4E94', status: 0 },
    { id: 4, name: '\u8D75\u516D', status: 3 },
    { id: 5, name: '\u5C0F\u660E', status: 1 },
  ];

  return (
    <QkProTable
      columns={columns}
      request={async (params) => {
        console.log('\u641C\u7D22\u53C2\u6570:', params);

        // \u6A21\u62DF\u641C\u7D22\u903B\u8F91
        let result = [...mockData];
        if (params.name) {
          result = result.filter((item) => item.name.includes(params.name));
        }
        if (params.status !== undefined) {
          result = result.filter((item) => item.status === params.status);
        }

        return {
          data: result,
          success: true,
          total: result.length,
        };
      }}
      search={{
        storeQueryParams: true, // \u5F00\u542F\u641C\u7D22\u6761\u4EF6\u8BB0\u5FC6
        defaultCollapsed: false,
      }}
      pagination={{
        pageSize: 3,
      }}
    />
  );
};

export default SearchMemoryExample;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":f,react:i||(i=e.t(c,2))},renderOpts:{compile:function(){var u=p()(d()().mark(function l(){var t,r=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(440).then(e.bind(e,86440));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,r));case 3:case"end":return n.stop()}},l)}));function o(){return u.apply(this,arguments)}return o}()}},"qkprotable-demo-3":{component:c.memo(c.lazy(p()(d()().mark(function u(){var o,l,t,r,m,n,a;return d()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return o=s.sent,l=o.QkProTable,s.next=6,Promise.resolve().then(e.bind(e,69620));case 6:return t=s.sent,r=t.Table,s.next=10,Promise.resolve().then(e.t.bind(e,38497,19));case 10:return m=s.sent,n=m.default,a=function(){var E=[{title:"\u5E8F\u53F7",valueType:"index",width:50},{title:"\u5927\u533A",dataIndex:"region",merge:"col",mergeBy:["region"]},{title:"\u7701\u4EFD",dataIndex:"province",merge:"col",mergeBy:["region","province"]},{title:"\u57CE\u5E02",dataIndex:"city"},{title:"\u4E0A\u534A\u5E74",children:[{title:"Q1\u9500\u552E\u989D",dataIndex:"q1",merge:["row"]},{title:"Q2\u9500\u552E\u989D",dataIndex:"q2",merge:["row"]}]}],T=[{region:"\u534E\u4E1C",province:"\u6D59\u6C5F",city:"\u676D\u5DDE",q1:1e3,q2:1e3},{region:"\u534E\u4E1C",province:"\u6D59\u6C5F",city:"\u5B81\u6CE2",q1:800,q2:800},{region:"\u534E\u4E1C",province:"\u6C5F\u82CF",city:"\u5357\u4EAC",q1:900,q2:900},{region:"\u534E\u5357",province:"\u5E7F\u4E1C",city:"\u6DF1\u5733",q1:1100,q2:1100},{region:"\u534E\u5357",province:"\u5E7F\u4E1C",city:"\u5E7F\u5DDE",q1:1200,q2:1200}];return n.createElement(l,{columns:E,dataSource:T,search:!1,pagination:!1,bordered:!0,summary:function(){return n.createElement(r.Summary,null,n.createElement(r.Summary.Row,null,n.createElement(r.Summary.Cell,{index:0,colSpan:4},"\u603B\u8BA1"),n.createElement(r.Summary.Cell,{index:1},5e3),n.createElement(r.Summary.Cell,{index:2},5e3)))}})},s.abrupt("return",{default:a});case 14:case"end":return s.stop()}},u)})))),asset:{type:"BLOCK",id:"qkprotable-demo-3",refAtomIds:["QkProTable"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkProTable } from 'react-components';
import { type ProColumns } from '@ant-design/pro-components';
import { Table } from 'antd';
import React from 'react';

const ComplexMergeExample: React.FC = () => {
  const columns: ProColumns<any>[] = [
    {
      title: '\u5E8F\u53F7',
      valueType: 'index',
      width: 50,
    },
    {
      title: '\u5927\u533A',
      dataIndex: 'region',
      merge: 'col', // \u7EB5\u5411\u5408\u5E76
      mergeBy: ['region'], // \u6309region\u5B57\u6BB5\u5408\u5E76
    },
    {
      title: '\u7701\u4EFD',
      dataIndex: 'province',
      merge: 'col',
      mergeBy: ['region', 'province'], // \u6309region\u548Cprovince\u5B57\u6BB5\u5408\u5E76
    },
    {
      title: '\u57CE\u5E02',
      dataIndex: 'city',
    },
    {
      title: '\u4E0A\u534A\u5E74',
      children: [
        {
          title: 'Q1\u9500\u552E\u989D',
          dataIndex: 'q1',
          merge: ['row'], // \u6A2A\u5411\u5408\u5E76
        },
        {
          title: 'Q2\u9500\u552E\u989D',
          dataIndex: 'q2',
          merge: ['row'], // \u6A2A\u5411\u5408\u5E76
        },
      ],
    },
  ];

  const dataSource = [
    {
      region: '\u534E\u4E1C',
      province: '\u6D59\u6C5F',
      city: '\u676D\u5DDE',
      q1: 1000,
      q2: 1000,
    },
    {
      region: '\u534E\u4E1C',
      province: '\u6D59\u6C5F',
      city: '\u5B81\u6CE2',
      q1: 800,
      q2: 800,
    },
    {
      region: '\u534E\u4E1C',
      province: '\u6C5F\u82CF',
      city: '\u5357\u4EAC',
      q1: 900,
      q2: 900,
    },
    {
      region: '\u534E\u5357',
      province: '\u5E7F\u4E1C',
      city: '\u6DF1\u5733',
      q1: 1100,
      q2: 1100,
    },
    {
      region: '\u534E\u5357',
      province: '\u5E7F\u4E1C',
      city: '\u5E7F\u5DDE',
      q1: 1200,
      q2: 1200,
    },
  ];

  return (
    <QkProTable
      columns={columns}
      dataSource={dataSource}
      search={false}
      pagination={false}
      bordered
      summary={() => (
        <Table.Summary>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={4}>
              \u603B\u8BA1
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1}>{5000}</Table.Summary.Cell>
            <Table.Summary.Cell index={2}>{5000}</Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default ComplexMergeExample;`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":f,antd:D,react:i||(i=e.t(c,2))},renderOpts:{compile:function(){var u=p()(d()().mark(function l(){var t,r=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(440).then(e.bind(e,86440));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,r));case 3:case"end":return n.stop()}},l)}));function o(){return u.apply(this,arguments)}return o}()}}}},3446:function(S,x,e){e.r(x),e.d(x,{texts:function(){return P}});var i=e(27892);const P=[{value:"\u57FA\u4E8E antd ProTable \u7684\u589E\u5F3A\u578B\u8868\u683C\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u66F4\u5F3A\u5927\u7684\u8868\u683C\u529F\u80FD",paraId:0,tocIndex:0},{value:"\u{1F4CA} \u652F\u6301\u6570\u636E\u6A2A\u5411\u4E0E\u7EB5\u5411\u5408\u5E76\u529F\u80FD",paraId:1,tocIndex:1},{value:"\u{1F4BE} \u5185\u7F6E\u7FFB\u9875\u8BB0\u5FC6\u53CA\u641C\u7D22\u6761\u4EF6\u8BB0\u5FC6\u529F\u80FD",paraId:1,tocIndex:1},{value:"\u{1F4CF} \u667A\u80FD\u8868\u683C\u5217\u5BBD\u81EA\u9002\u5E94",paraId:1,tocIndex:1},{value:"\u{1F3AF} \u7B80\u5355\u6613\u7528\u7684 API \u8BBE\u8BA1",paraId:1,tocIndex:1},{value:"\u{1F6E0} \u4E30\u5BCC\u7684\u6570\u636E\u5C55\u793A\u5F62\u5F0F",paraId:1,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:8},{value:"\u8BF4\u660E",paraId:2,tocIndex:8},{value:"\u7C7B\u578B",paraId:2,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:8},{value:"columns",paraId:2,tocIndex:8},{value:"\u8868\u683C\u5217\u7684\u914D\u7F6E\u63CF\u8FF0",paraId:2,tocIndex:8},{value:"ProColumns[]",paraId:2,tocIndex:8},{value:"-",paraId:2,tocIndex:8},{value:"dataSource",paraId:2,tocIndex:8},{value:"\u6570\u636E\u6570\u7EC4",paraId:2,tocIndex:8},{value:"object[]",paraId:2,tocIndex:8},{value:"-",paraId:2,tocIndex:8},{value:"ellipsis",paraId:2,tocIndex:8},{value:"\u662F\u5426\u542F\u7528\u5355\u5143\u683C\u7701\u7565",paraId:2,tocIndex:8},{value:"boolean",paraId:2,tocIndex:8},{value:"false",paraId:2,tocIndex:8},{value:"search",paraId:2,tocIndex:8},{value:"\u641C\u7D22\u8868\u5355\u76F8\u5173\u914D\u7F6E",paraId:2,tocIndex:8},{value:"false | SearchConfig",paraId:2,tocIndex:8},{value:"-",paraId:2,tocIndex:8},{value:"pagination",paraId:2,tocIndex:8},{value:"\u5206\u9875\u5668\u914D\u7F6E",paraId:2,tocIndex:8},{value:"false | PaginationConfig",paraId:2,tocIndex:8},{value:"-",paraId:2,tocIndex:8},{value:"\u53C2\u6570",paraId:3,tocIndex:9},{value:"\u8BF4\u660E",paraId:3,tocIndex:9},{value:"\u7C7B\u578B",paraId:3,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:9},{value:"storeQueryParams",paraId:3,tocIndex:9},{value:"\u662F\u5426\u8BB0\u5FC6\u641C\u7D22\u53C2\u6570",paraId:3,tocIndex:9},{value:"boolean",paraId:3,tocIndex:9},{value:"false",paraId:3,tocIndex:9},{value:"defaultCollapsed",paraId:3,tocIndex:9},{value:"\u662F\u5426\u9ED8\u8BA4\u6298\u53E0\u641C\u7D22\u8868\u5355",paraId:3,tocIndex:9},{value:"boolean",paraId:3,tocIndex:9},{value:"true",paraId:3,tocIndex:9},{value:"span",paraId:3,tocIndex:9},{value:"\u641C\u7D22\u8868\u5355\u9879\u5BBD\u5EA6",paraId:3,tocIndex:9},{value:"number",paraId:3,tocIndex:9},{value:"-",paraId:3,tocIndex:9},{value:"labelWidth",paraId:3,tocIndex:9},{value:"\u6807\u7B7E\u5BBD\u5EA6",paraId:3,tocIndex:9},{value:"number | 'auto'",paraId:3,tocIndex:9},{value:"80",paraId:3,tocIndex:9},{value:"\u53C2\u6570",paraId:4,tocIndex:10},{value:"\u8BF4\u660E",paraId:4,tocIndex:10},{value:"\u7C7B\u578B",paraId:4,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:10},{value:"merge",paraId:4,tocIndex:10},{value:"\u5408\u5E76\u65B9\u5411",paraId:4,tocIndex:10},{value:"'row' | 'col'",paraId:4,tocIndex:10},{value:"-",paraId:4,tocIndex:10},{value:"mergeBy",paraId:4,tocIndex:10},{value:"\u5408\u5E76\u4F9D\u636E\u7684\u5B57\u6BB5",paraId:4,tocIndex:10},{value:"string[]",paraId:4,tocIndex:10},{value:"-",paraId:4,tocIndex:10},{value:"\u542F\u7528 ",paraId:5,tocIndex:11},{value:"storeQueryParams",paraId:5,tocIndex:11},{value:" \u65F6\uFF0C\u641C\u7D22\u6761\u4EF6\u4F1A\u88AB\u5B58\u50A8\u5728 localStorage \u4E2D",paraId:5,tocIndex:11},{value:"\u5408\u5E76\u529F\u80FD\u9700\u8981\u4FDD\u8BC1\u6570\u636E\u662F\u6309\u7167\u5408\u5E76\u5B57\u6BB5\u6392\u5E8F\u7684",paraId:5,tocIndex:11},{value:"\u81EA\u9002\u5E94\u5217\u5BBD\u5728\u6570\u636E\u91CF\u8F83\u5927\u65F6\u53EF\u80FD\u4F1A\u5F71\u54CD\u6027\u80FD",paraId:5,tocIndex:11},{value:"\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6E05\u9664:",paraId:6,tocIndex:13},{value:`localStorage.removeItem('table-query-params');
`,paraId:7,tocIndex:13},{value:"\u53EF\u4EE5\uFF0C\u4F46\u9700\u8981\u6CE8\u610F\u5408\u5E76\u7684\u4F18\u5148\u7EA7\uFF0C\u5EFA\u8BAE\u5148\u8FDB\u884C\u5217\u5408\u5E76\u518D\u8FDB\u884C\u884C\u5408\u5E76\u3002",paraId:8,tocIndex:14}]}}]);
