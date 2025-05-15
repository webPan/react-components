"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[487],{65293:function(f,i,a){var c;a.r(i),a.d(i,{demos:function(){return M}});var v=a(43953),r=a.n(v),y=a(91184),s=a.n(y),p=a(38497),h=a(76405),m=a(50451),M={"qkgaodemap-demo-0":{component:p.memo(p.lazy(s()(r()().mark(function l(){var d,o,n,t,u;return r()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(a.bind(a,50451));case 2:return d=I.sent,o=d.QkGaoDeMap,I.next=6,Promise.resolve().then(a.t.bind(a,38497,19));case 6:return n=I.sent,t=n.default,u=n.useEffect,I.abrupt("return",{default:function(){return u(function(){window._AMapSecurityConfig={securityJsCode:"960b5c93849eeb50243010e446fe0016"}},[]),t.createElement("div",{style:{height:"400px",position:"relative"}},t.createElement(o,{AMapOptions:{center:[116.397428,39.90923],zoom:11}}))}});case 10:case"end":return I.stop()}},l)})))),asset:{type:"BLOCK",id:"qkgaodemap-demo-0",refAtomIds:["QkGaoDeMap"],dependencies:{"index.tsx":{type:"FILE",value:`import {QkGaoDeMap} from 'react-components';
import React, {useEffect} from 'react';

export default () => {
  useEffect(()=>{
    window._AMapSecurityConfig = { securityJsCode: '960b5c93849eeb50243010e446fe0016' }; 
  },[])
  return (
    <div style={{height: '400px', position: 'relative'}}>
      <QkGaoDeMap
        AMapOptions={{
          center: [116.397428, 39.90923],
          zoom: 11,
        }}
      />
    </div>
  );
};`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":m,react:c||(c=a.t(p,2))},renderOpts:{compile:function(){var l=s()(r()().mark(function o(){var n,t=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(440).then(a.bind(a,86440));case 2:return e.abrupt("return",(n=e.sent).default.apply(n,t));case 3:case"end":return e.stop()}},o)}));function d(){return l.apply(this,arguments)}return d}()}},"qkgaodemap-demo-1":{component:p.memo(p.lazy(s()(r()().mark(function l(){var d,o,n,t;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(a.bind(a,50451));case 2:return d=e.sent,o=d.QkGaoDeMap,e.next=6,Promise.resolve().then(a.t.bind(a,38497,19));case 6:return n=e.sent,t=n.default,e.abrupt("return",{default:function(){var x=[{id:1,name:"\u4E1C\u65B9\u660E\u73E0",lngLat:[121.499427,31.239772],color:"#f50",size:12,animation:"DIFFUSION",address:"\u4E0A\u6D77\u5E02\u6D66\u4E1C\u65B0\u533A\u4E16\u7EAA\u5927\u90531\u53F7"},{id:2,name:"\u5916\u6EE9",lngLat:[121.490317,31.233759],color:"#1890ff",size:12,address:"\u4E0A\u6D77\u5E02\u9EC4\u6D66\u533A\u4E2D\u5C71\u4E1C\u4E00\u8DEF"}];return t.createElement("div",{style:{height:"400px",position:"relative"}},t.createElement(o,{dataSource:x,AMapOptions:{center:[121.494872,31.236765],zoom:13},autoLocateScaleLevels:!0,infoWindow:{options:{columns:[{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u5730\u5740",dataIndex:"address"}]}}}))}});case 9:case"end":return e.stop()}},l)})))),asset:{type:"BLOCK",id:"qkgaodemap-demo-1",refAtomIds:["QkGaoDeMap"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkGaoDeMap } from 'react-components';
import React from 'react';

export default () => {
  const points = [
    {
      id: 1,
      name: '\u4E1C\u65B9\u660E\u73E0',
      lngLat: [121.499427, 31.239772],
      color: '#f50',
      size: 12,
      animation: 'DIFFUSION',
      address: '\u4E0A\u6D77\u5E02\u6D66\u4E1C\u65B0\u533A\u4E16\u7EAA\u5927\u90531\u53F7',
    },
    {
      id: 2,
      name: '\u5916\u6EE9',
      lngLat: [121.490317, 31.233759],
      color: '#1890ff',
      size: 12,
      address: '\u4E0A\u6D77\u5E02\u9EC4\u6D66\u533A\u4E2D\u5C71\u4E1C\u4E00\u8DEF',
    },
  ];

  return (
    <div style={{ height: '400px', position: 'relative' }}>
      <QkGaoDeMap
        dataSource={points}
        AMapOptions={{
          center: [121.494872, 31.236765],
          zoom: 13,
        }}
        autoLocateScaleLevels={true}
        infoWindow={{
          options: {
            columns: [
              { title: '\u540D\u79F0', dataIndex: 'name' },
              { title: '\u5730\u5740', dataIndex: 'address' },
            ],
          },
        }}
      />
    </div>
  );
};`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":m,react:c||(c=a.t(p,2))},renderOpts:{compile:function(){var l=s()(r()().mark(function o(){var n,t=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(440).then(a.bind(a,86440));case 2:return e.abrupt("return",(n=e.sent).default.apply(n,t));case 3:case"end":return e.stop()}},o)}));function d(){return l.apply(this,arguments)}return d}()}},"qkgaodemap-demo-2":{component:p.memo(p.lazy(s()(r()().mark(function l(){var d,o,n,t;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(a.bind(a,50451));case 2:return d=e.sent,o=d.QkGaoDeMap,e.next=6,Promise.resolve().then(a.t.bind(a,38497,19));case 6:return n=e.sent,t=n.default,e.abrupt("return",{default:function(){return t.createElement("div",{style:{height:"400px",position:"relative"}},t.createElement(o,{AMapOptions:{center:[106.258754,38.471317],zoom:4},strokeOptions:{name:"\u4E2D\u56FD",strokeWeight:2,fillColor:"#e6f7ff",fillOpacity:.4,strokeColor:"#1890ff"},isAddProvinceNamesLayer:!0}))}});case 9:case"end":return e.stop()}},l)})))),asset:{type:"BLOCK",id:"qkgaodemap-demo-2",refAtomIds:["QkGaoDeMap"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkGaoDeMap } from 'react-components';
import React from 'react';

export default () => {
  return (
    <div style={{ height: '400px', position: 'relative' }}>
      <QkGaoDeMap
        AMapOptions={{
          center: [106.258754, 38.471317],
          zoom: 4,
        }}
        strokeOptions={{
          name: '\u4E2D\u56FD',
          strokeWeight: 2,
          fillColor: '#e6f7ff',
          fillOpacity: 0.4,
          strokeColor: '#1890ff',
        }}
        isAddProvinceNamesLayer={true}
      />
    </div>
  );
};`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":m,react:c||(c=a.t(p,2))},renderOpts:{compile:function(){var l=s()(r()().mark(function o(){var n,t=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(440).then(a.bind(a,86440));case 2:return e.abrupt("return",(n=e.sent).default.apply(n,t));case 3:case"end":return e.stop()}},o)}));function d(){return l.apply(this,arguments)}return d}()}}}},71281:function(f,i,a){a.r(i),a.d(i,{texts:function(){return v}});var c=a(76405);const v=[{value:"QkGaoDeMap \u662F\u4E00\u4E2A\u57FA\u4E8E\u9AD8\u5FB7\u5730\u56FE JavaScript API \u5C01\u88C5\u7684 React \u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u5730\u56FE\u529F\u80FD\u548C\u826F\u597D\u7684\u4EA4\u4E92\u4F53\u9A8C\u3002",paraId:0,tocIndex:1},{value:"\u{1F4CD} \u652F\u6301\u70B9\u6807\u8BB0\u3001\u6D77\u91CF\u70B9\u6807\u6CE8\u53CA\u52A8\u753B\u6548\u679C",paraId:1,tocIndex:2},{value:"\u{1F50D} \u652F\u6301\u5730\u56FE\u7F29\u653E\u3001\u62D6\u62FD\u7B49\u57FA\u7840\u64CD\u4F5C",paraId:1,tocIndex:2},{value:"\u{1F6F0}\uFE0F \u652F\u6301\u536B\u661F\u5730\u56FE\u56FE\u5C42\u5207\u6362",paraId:1,tocIndex:2},{value:"\u{1F3F7}\uFE0F \u652F\u6301\u7701\u4EFD\u540D\u79F0\u6807\u6CE8",paraId:1,tocIndex:2},{value:"\u{1F5FA}\uFE0F \u652F\u6301\u7701\u4EFD\u8FB9\u754C\u7EBF\u7ED8\u5236",paraId:1,tocIndex:2},{value:"\u{1F4CC} \u652F\u6301\u5730\u70B9\u8BE6\u7EC6\u4FE1\u606F\u7A97\u4F53",paraId:1,tocIndex:2},{value:"\u2328\uFE0F \u652F\u6301\u5FEB\u6377\u952E\u64CD\u4F5C(Ctrl+\u6EDA\u8F6E\u7F29\u653E)",paraId:1,tocIndex:2},{value:"\u{1F3AF} \u652F\u6301\u81EA\u52A8\u5B9A\u4F4D\u548C\u7F29\u653E",paraId:1,tocIndex:2},{value:"\u{1F30F} \u652F\u6301\u4E2D\u82F1\u6587\u5207\u6362",paraId:1,tocIndex:2},{value:"\u270F\uFE0F \u652F\u6301\u81EA\u5B9A\u4E49\u533A\u57DF\u8FB9\u754C\u7ED8\u5236",paraId:1,tocIndex:2},{value:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u5C55\u793A\u4E00\u4E2A\u57FA\u7840\u5730\u56FE\u3002",paraId:2,tocIndex:4},{value:"\u5C55\u793A\u5E26\u6709\u6807\u8BB0\u70B9\u7684\u5730\u56FE\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u70B9\u7684\u6837\u5F0F\u548C\u52A8\u753B\u3002",paraId:3,tocIndex:5},{value:"\u5C55\u793A\u5982\u4F55\u7ED8\u5236\u533A\u57DF\u8FB9\u754C\u7EBF\u548C\u586B\u5145\u989C\u8272\u3002",paraId:4,tocIndex:6},{value:"\u53C2\u6570",paraId:5,tocIndex:8},{value:"\u8BF4\u660E",paraId:5,tocIndex:8},{value:"\u7C7B\u578B",paraId:5,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:8},{value:"AMapOptions",paraId:5,tocIndex:8},{value:"\u9AD8\u5FB7\u5730\u56FE\u5B9E\u4F8B\u5316\u914D\u7F6E\u9879",paraId:5,tocIndex:8},{value:"object",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8},{value:"dataSource",paraId:5,tocIndex:8},{value:"\u6807\u8BB0\u70B9\u6570\u636E\u6E90",paraId:5,tocIndex:8},{value:"PointType[]",paraId:5,tocIndex:8},{value:"[]",paraId:5,tocIndex:8},{value:"strokeOptions",paraId:5,tocIndex:8},{value:"\u533A\u57DF\u8FB9\u754C\u7ED8\u5236\u914D\u7F6E",paraId:5,tocIndex:8},{value:"object",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8},{value:"tileLayerOptions",paraId:5,tocIndex:8},{value:"\u536B\u661F\u56FE\u5C42\u914D\u7F6E",paraId:5,tocIndex:8},{value:"object",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8},{value:"districtLayerOptions",paraId:5,tocIndex:8},{value:"\u884C\u653F\u533A\u56FE\u5C42\u914D\u7F6E",paraId:5,tocIndex:8},{value:"object",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8},{value:"infoWindow",paraId:5,tocIndex:8},{value:"\u4FE1\u606F\u7A97\u4F53\u914D\u7F6E",paraId:5,tocIndex:8},{value:"object",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8},{value:"mapZoomShortcut",paraId:5,tocIndex:8},{value:"\u5730\u56FE\u7F29\u653E\u5FEB\u6377\u952E",paraId:5,tocIndex:8},{value:"'mousewheel'",paraId:5,tocIndex:8},{value:" | ",paraId:5,tocIndex:8},{value:"'ctrl+mousewheel'",paraId:5,tocIndex:8},{value:"'mousewheel'",paraId:5,tocIndex:8},{value:"autoLocateScaleLevels",paraId:5,tocIndex:8},{value:"\u662F\u5426\u81EA\u52A8\u5B9A\u4F4D\u5E76\u8C03\u6574\u7F29\u653E\u7EA7\u522B",paraId:5,tocIndex:8},{value:"boolean",paraId:5,tocIndex:8},{value:"false",paraId:5,tocIndex:8},{value:"isAddProvinceNamesLayer",paraId:5,tocIndex:8},{value:"\u662F\u5426\u663E\u793A\u7701\u4EFD\u540D\u79F0",paraId:5,tocIndex:8},{value:"boolean",paraId:5,tocIndex:8},{value:"true",paraId:5,tocIndex:8},{value:"language",paraId:5,tocIndex:8},{value:"\u8BED\u8A00\u8BBE\u7F6E",paraId:5,tocIndex:8},{value:"'en'",paraId:5,tocIndex:8},{value:" | ",paraId:5,tocIndex:8},{value:"'cn'",paraId:5,tocIndex:8},{value:"'cn'",paraId:5,tocIndex:8},{value:"completed",paraId:5,tocIndex:8},{value:"\u5730\u56FE\u52A0\u8F7D\u5B8C\u6210\u56DE\u8C03",paraId:5,tocIndex:8},{value:"(gdMap: { AMap: any; map: any }) => void",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8},{value:"className",paraId:5,tocIndex:8},{value:"\u5BB9\u5668\u7C7B\u540D",paraId:5,tocIndex:8},{value:"string",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8},{value:"style",paraId:5,tocIndex:8},{value:"\u5BB9\u5668\u6837\u5F0F",paraId:5,tocIndex:8},{value:"CSSProperties",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8},{value:"\u53C2\u6570",paraId:6,tocIndex:9},{value:"\u8BF4\u660E",paraId:6,tocIndex:9},{value:"\u7C7B\u578B",paraId:6,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:9},{value:"id",paraId:6,tocIndex:9},{value:"\u70B9\u6807\u8BB0\u552F\u4E00\u6807\u8BC6",paraId:6,tocIndex:9},{value:"string",paraId:6,tocIndex:9},{value:" | ",paraId:6,tocIndex:9},{value:"number",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"lngLat",paraId:6,tocIndex:9},{value:"\u7ECF\u7EAC\u5EA6\u5750\u6807",paraId:6,tocIndex:9},{value:"[number, number]",paraId:6,tocIndex:9},{value:" | ",paraId:6,tocIndex:9},{value:"null",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"color",paraId:6,tocIndex:9},{value:"\u70B9\u6807\u8BB0\u989C\u8272",paraId:6,tocIndex:9},{value:"string",paraId:6,tocIndex:9},{value:"'red'",paraId:6,tocIndex:9},{value:"animation",paraId:6,tocIndex:9},{value:"\u52A8\u753B\u6548\u679C",paraId:6,tocIndex:9},{value:"'DIFFUSION'",paraId:6,tocIndex:9},{value:" | ",paraId:6,tocIndex:9},{value:"undefined",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"size",paraId:6,tocIndex:9},{value:"\u70B9\u6807\u8BB0\u5927\u5C0F",paraId:6,tocIndex:9},{value:"number",paraId:6,tocIndex:9},{value:"8",paraId:6,tocIndex:9},{value:"hasInfoWindow",paraId:6,tocIndex:9},{value:"\u662F\u5426\u663E\u793A\u4FE1\u606F\u7A97\u4F53",paraId:6,tocIndex:9},{value:"boolean",paraId:6,tocIndex:9},{value:"false",paraId:6,tocIndex:9},{value:"\u53C2\u6570",paraId:7,tocIndex:10},{value:"\u8BF4\u660E",paraId:7,tocIndex:10},{value:"\u7C7B\u578B",paraId:7,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:10},{value:"title",paraId:7,tocIndex:10},{value:"\u7A97\u4F53\u6807\u9898",paraId:7,tocIndex:10},{value:"string",paraId:7,tocIndex:10},{value:"-",paraId:7,tocIndex:10},{value:"columns",paraId:7,tocIndex:10},{value:"\u7A97\u4F53\u5185\u5BB9\u914D\u7F6E",paraId:7,tocIndex:10},{value:"Array<{ title: string; dataIndex: string; unit?: string }>",paraId:7,tocIndex:10},{value:"-",paraId:7,tocIndex:10},{value:"more",paraId:7,tocIndex:10},{value:"\u66F4\u591A\u94FE\u63A5\u914D\u7F6E",paraId:7,tocIndex:10},{value:"{ text?: string; url?: string }",paraId:7,tocIndex:10},{value:"-",paraId:7,tocIndex:10},{value:"pointerEvents",paraId:7,tocIndex:10},{value:"\u6307\u9488\u4E8B\u4EF6",paraId:7,tocIndex:10},{value:"string",paraId:7,tocIndex:10},{value:"'none'",paraId:7,tocIndex:10},{value:"\u53EF\u4EE5\u901A\u8FC7 ",paraId:8,tocIndex:12},{value:"completed",paraId:8,tocIndex:12},{value:" \u56DE\u8C03\u51FD\u6570\u83B7\u53D6\u5730\u56FE\u5B9E\u4F8B\uFF1A",paraId:8,tocIndex:12},{value:`<QkGaoDeMap
  completed={(gdMap) => {
    const { AMap, map } = gdMap;
    // \u4F7F\u7528\u5730\u56FE\u5B9E\u4F8B\u8FDB\u884C\u64CD\u4F5C
  }}
/>
`,paraId:9,tocIndex:12},{value:"\u76F4\u63A5\u66F4\u65B0 ",paraId:10,tocIndex:13},{value:"dataSource",paraId:10,tocIndex:13},{value:" \u5C5E\u6027\u5373\u53EF\uFF0C\u7EC4\u4EF6\u4F1A\u81EA\u52A8\u5904\u7406\u6807\u8BB0\u70B9\u7684\u66F4\u65B0\uFF1A",paraId:10,tocIndex:13},{value:`const [points, setPoints] = useState([]);

// \u66F4\u65B0\u70B9\u4F4D\u6570\u636E
setPoints([...newPoints]);
`,paraId:11,tocIndex:13}]}}]);
