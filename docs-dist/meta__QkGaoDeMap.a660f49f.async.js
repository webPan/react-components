"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[487],{65293:function(v,o,e){var i;e.r(o),e.d(o,{demos:function(){return f}});var p=e(43953),l=e.n(p),y=e(91184),_=e.n(y),d=e(38497),L=e(76405),D=e(91167),O=e(56690),f={"qkgaodemap-demo-0":{component:d.memo(d.lazy(_()(l()().mark(function c(){var s,m,r,a,u,n,E,h,P,g,M;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,91167));case 2:return s=t.sent,m=s.QkGaoDeMap,t.next=6,Promise.resolve().then(e.bind(e,56690));case 6:return r=t.sent,a=r.Typography,t.next=10,Promise.resolve().then(e.t.bind(e,38497,19));case 10:return u=t.sent,n=u.default,E=a.Title,h=a.Paragraph,P=a.Text,g=a.Link,M=function(){return n.createElement("div",null,n.createElement(a,null,n.createElement(E,null,"QkGaoDeMap \u7EC4\u4EF6"),n.createElement(h,null,n.createElement("ul",null,n.createElement("li",null,"\u57FA\u4E8E \u9AD8\u5FB7\u5730\u56FE \u4E8C\u6B21\u5C01\u88C5\uFF0C\u5C06\u9AD8\u9891\u4F7F\u7528\u7684\u529F\u80FD\u90FD\u5199\u8FDB\u4E86\u7EC4\u4EF6\uFF0C\u4F7F\u7528\u63A5\u53E3\u542F\u7528")))),n.createElement("div",{style:{height:"500px",position:"relative"}},n.createElement(m,{dataSource:[{name:"\u4E0A\u6D77\u5E02\u9759\u5B89\u533A\u4E1C\u65B9\u660E\u73E0",lngLat:[121.499427,31.239772],id:1,color:"red",address:"\u4E0A\u6D77\u5E02\u9759\u5B89\u533A\u4E1C\u65B9\u660E\u73E0",size:12}],tileLayerOptions:{},districtLayerOptions:{},AMapOptions:{center:[106.258754,38.471317],zoomEnable:!0,dragEnable:!0,showLabel:!1},strokeOptions:{strokeWeight:2,fillColor:"#002322",fillOpacity:.62,name:"\u4E2D\u56FD"},mapZoomShortcut:"ctrl+mousewheel",autoLocateScaleLevels:!0,completed:function(A){}})))},t.abrupt("return",{default:M});case 15:case"end":return t.stop()}},c)})))),asset:{type:"BLOCK",id:"qkgaodemap-demo-0",refAtomIds:["QkGaoDeMap"],dependencies:{"index.tsx":{type:"FILE",value:`import {QkGaoDeMap} from 'react-components';
import { Typography } from 'antd';
import React from 'react';
const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  return (
    <div>
      <Typography>
        <Title>QkGaoDeMap \u7EC4\u4EF6</Title>
        <Paragraph>
          <ul>
            <li>
              \u57FA\u4E8E \u9AD8\u5FB7\u5730\u56FE \u4E8C\u6B21\u5C01\u88C5\uFF0C\u5C06\u9AD8\u9891\u4F7F\u7528\u7684\u529F\u80FD\u90FD\u5199\u8FDB\u4E86\u7EC4\u4EF6\uFF0C\u4F7F\u7528\u63A5\u53E3\u542F\u7528
            </li>
          </ul>
        </Paragraph>
      </Typography>
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
              size: 12
            }
          ]}
          tileLayerOptions={{}}
          districtLayerOptions={{}}
          AMapOptions={{
            center: [106.258754, 38.471317],
            zoomEnable: true, // \u662F\u5426\u7F29\u653E
            dragEnable: true, // \u662F\u5426\u62D6\u52A8
            showLabel: false
          }}
          strokeOptions={{
            strokeWeight: 2,
            fillColor: '#002322',
            fillOpacity: 0.62,
            name: '\u4E2D\u56FD'
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

export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":D,antd:O,react:i||(i=e.t(d,2))},renderOpts:{compile:function(){var c=_()(l()().mark(function m(){var r,a=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(440).then(e.bind(e,86440));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},m)}));function s(){return c.apply(this,arguments)}return s}()}}}},71281:function(v,o,e){e.r(o),e.d(o,{texts:function(){return p}});var i=e(76405);const p=[]}}]);
