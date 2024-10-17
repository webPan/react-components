"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[487],{65293:function(E,o,e){var p;e.r(o),e.d(o,{demos:function(){return D}});var m=e(43953),l=e.n(m),h=e(91184),_=e.n(h),c=e(38497),L=e(76405),I=e(91167),M=e(56690),D={"qkgaodemap-demo-0":{component:c.memo(c.lazy(_()(l()().mark(function i(){var s,d,r,a,u,n,O,f,y,P,v;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,91167));case 2:return s=t.sent,d=s.QkGaoDeMap,t.next=6,Promise.resolve().then(e.bind(e,56690));case 6:return r=t.sent,a=r.Typography,t.next=10,Promise.resolve().then(e.t.bind(e,38497,19));case 10:return u=t.sent,n=u.default,O=a.Title,f=a.Paragraph,y=a.Text,P=a.Link,v=function(){return n.createElement("div",null,n.createElement("div",{style:{height:"500px",position:"relative"}},n.createElement(d,{dataSource:[{name:"\u4E0A\u6D77\u5E02\u9759\u5B89\u533A\u4E1C\u65B9\u660E\u73E0",lngLat:[121.499427,31.239772],id:1,color:"red",address:"\u4E0A\u6D77\u5E02\u9759\u5B89\u533A\u4E1C\u65B9\u660E\u73E0",size:12}],tileLayerOptions:{},districtLayerOptions:{},AMapOptions:{center:[106.258754,38.471317],zoomEnable:!0,dragEnable:!0,showLabel:!1},strokeOptions:{strokeWeight:2,fillColor:"#002322",fillOpacity:.62,name:"\u4E2D\u56FD"},mapZoomShortcut:"ctrl+mousewheel",autoLocateScaleLevels:!0,completed:function(C){}})))},t.abrupt("return",{default:v});case 15:case"end":return t.stop()}},i)})))),asset:{type:"BLOCK",id:"qkgaodemap-demo-0",refAtomIds:["QkGaoDeMap"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkGaoDeMap } from 'react-components';
import { Typography } from 'antd';
import React from 'react';
const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  return (
    <div>
      <div style={{ height: '500px', position: 'relative' }}>
        <QkGaoDeMap
          dataSource={[
            {
              // name: '\u9879\u76EE\u5730\u5740',
              name: '\u4E0A\u6D77\u5E02\u9759\u5B89\u533A\u4E1C\u65B9\u660E\u73E0',
              lngLat: [121.499427, 31.239772],
              id: 1,
              color: 'red',
              address: '\u4E0A\u6D77\u5E02\u9759\u5B89\u533A\u4E1C\u65B9\u660E\u73E0',
              size: 12,
            },
          ]}
          tileLayerOptions={{}}
          districtLayerOptions={{}}
          AMapOptions={{
            center: [106.258754, 38.471317],
            zoomEnable: true, // \u662F\u5426\u7F29\u653E
            dragEnable: true, // \u662F\u5426\u62D6\u52A8
            showLabel: false,
          }}
          strokeOptions={{
            strokeWeight: 2,
            fillColor: '#002322',
            fillOpacity: 0.62,
            name: '\u4E2D\u56FD',
          }}
          mapZoomShortcut="ctrl+mousewheel"
          autoLocateScaleLevels={true}
          completed={(gdMap) => {
            // console.log(assetsInfo.province)
            //   console.log('\u5730\u56FE\u52A0\u8F7D\u5B8C\u6210')
          }}
        />
      </div>
    </div>
  );
};

export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":I,antd:M,react:p||(p=e.t(c,2))},renderOpts:{compile:function(){var i=_()(l()().mark(function d(){var r,a=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(440).then(e.bind(e,86440));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function s(){return i.apply(this,arguments)}return s}()}}}},71281:function(E,o,e){e.r(o),e.d(o,{texts:function(){return m}});var p=e(76405);const m=[{value:"\u57FA\u4E8E \u9AD8\u5FB7\u5730\u56FE \u4E8C\u6B21\u5C01\u88C5\uFF0C\u5C06\u9AD8\u9891\u4F7F\u7528\u7684\u529F\u80FD\u90FD\u5199\u8FDB\u4E86\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u652F\u6301\u5F00\u542F\u536B\u661F\u5730\u56FE",paraId:0,tocIndex:0},{value:"\u652F\u6301\u5F00\u542F\u6807\u6CE8\u70B9\u52A0\u8F7D\u7701\u540D\u79F0",paraId:0,tocIndex:0},{value:"\u652F\u6301\u5F00\u542F\u5404\u4E2A\u7701\u7684\u8FB9\u754C\u7EBF",paraId:0,tocIndex:0},{value:"\u652F\u6301\u67D0\u4E2A\u70B9\u7684\u8BE6\u7EC6\u5730\u5740\u6807\u6CE8 tip",paraId:0,tocIndex:0},{value:"\u652F\u6301\u6D77\u91CF\u70B9\u6807\u6CE8\u53CA\u52A8\u753B\u6548\u679C",paraId:0,tocIndex:0},{value:"\u652F\u6301\u6D77\u91CF\u70B9\u70B9\u51FB\uFF0C\u81EA\u5B9A\u4E49\u7A97\u4F53",paraId:0,tocIndex:0},{value:"\u652F\u6301\u6309 ctrl+\u6EDA\u8F6E\u7F29\u653E\u5730\u56FE",paraId:0,tocIndex:0},{value:"\u652F\u6301\u67D0\u4E2A\u533A\u57DF\u7ED8\u5236\u8FB9\u754C\u7EBF",paraId:0,tocIndex:0},{value:"\u652F\u6301\u5B9A\u4F4D\u5E76\u81EA\u52A8\u7F29\u653E\u7EA7\u522B",paraId:0,tocIndex:0},{value:"\u652F\u6301\u591A\u8BED\u8A00",paraId:0,tocIndex:0}]}}]);
