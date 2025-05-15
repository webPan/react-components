"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[265],{35005:function(x,s,e){var i;e.r(s),e.d(s,{demos:function(){return f}});var v=e(43953),l=e.n(v),h=e(91184),u=e.n(h),d=e(38497),E=e(80225),m=e(50451),f={"qkgaodeechartmap-demo-0":{component:d.memo(d.lazy(u()(l()().mark(function c(){var o,r,t,I,n;return l()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return o=p.sent,r=o.QkGaoDeEchartMap,p.next=6,Promise.resolve().then(e.t.bind(e,38497,19));case 6:return t=p.sent,I=t.useEffect,n=function(){return I(function(){window._AMapSecurityConfig={securityJsCode:"960b5c93849eeb50243010e446fe0016"}},[]),d.createElement("div",{style:{height:"500px",position:"relative"}},d.createElement(r,{mapZoomShortcut:"ctrl+mousewheel",dataSource:[{name:"\u5317\u4EAC\u5E02\u6545\u5BAB",lngLat:[116.403963,39.915119],id:1}],AMapOptions:{center:[116.403963,39.915119],zoom:12,zoomEnable:!0}}))},p.abrupt("return",{default:n});case 10:case"end":return p.stop()}},c)})))),asset:{type:"BLOCK",id:"qkgaodeechartmap-demo-0",refAtomIds:["QkGaoDeEchartMap"],dependencies:{"index.tsx":{type:"FILE",value:`import {QkGaoDeEchartMap} from 'react-components';
import {useEffect} from "react";

const BasicExample = () => {
  useEffect(() => {
    window._AMapSecurityConfig = {securityJsCode: '960b5c93849eeb50243010e446fe0016'};
  }, [])
  return (
    <div style={{height: '500px', position: 'relative'}}>
      <QkGaoDeEchartMap mapZoomShortcut="ctrl+mousewheel"
        dataSource={[
          {
            name: '\u5317\u4EAC\u5E02\u6545\u5BAB',
            lngLat: [116.403963, 39.915119],
            id: 1,
          },
        ]}
        AMapOptions={{
          center: [116.403963, 39.915119],
          zoom: 12,
          zoomEnable: true, // \u662F\u5426\u7F29\u653E
        }}
      />
    </div>
  );
};

export default BasicExample;`},"react-components":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":m,react:i||(i=e.t(d,2))},renderOpts:{compile:function(){var c=u()(l()().mark(function r(){var t,I=arguments;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(440).then(e.bind(e,86440));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,I));case 3:case"end":return a.stop()}},r)}));function o(){return c.apply(this,arguments)}return o}()}},"qkgaodeechartmap-demo-1":{component:d.memo(d.lazy(u()(l()().mark(function c(){var o,r,t;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return o=n.sent,r=o.QkGaoDeEchartMap,t=function(){return d.createElement("div",{style:{height:"500px",position:"relative"}},d.createElement(r,{mapZoomShortcut:"ctrl+mousewheel",dataSource:[{name:"\u4E0A\u6D77\u5E02\u4E1C\u65B9\u660E\u73E0",lngLat:[121.499427,31.239772],id:1,color:"#ff4d4f",size:12,animation:"DIFFUSION"}],AMapOptions:{center:[121.499427,31.239772],zoom:13,zoomEnable:!0}}))},n.abrupt("return",{default:t});case 6:case"end":return n.stop()}},c)})))),asset:{type:"BLOCK",id:"qkgaodeechartmap-demo-1",refAtomIds:["QkGaoDeEchartMap"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkGaoDeEchartMap } from 'react-components';

const AnimatedExample = () => {
  return (
    <div style={{ height: '500px', position: 'relative' }}>
      <QkGaoDeEchartMap mapZoomShortcut="ctrl+mousewheel"
        dataSource={[
          {
            name: '\u4E0A\u6D77\u5E02\u4E1C\u65B9\u660E\u73E0',
            lngLat: [121.499427, 31.239772],
            id: 1,
            color: '#ff4d4f',
            size: 12,
            animation: 'DIFFUSION',
          },
        ]}
        AMapOptions={{
          center: [121.499427, 31.239772],
          zoom: 13,
          zoomEnable: true, // \u662F\u5426\u7F29\u653E
        }}
      />
    </div>
  );
};

export default AnimatedExample;`},"react-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"react-components":m},renderOpts:{compile:function(){var c=u()(l()().mark(function r(){var t,I=arguments;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(440).then(e.bind(e,86440));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,I));case 3:case"end":return a.stop()}},r)}));function o(){return c.apply(this,arguments)}return o}()}},"qkgaodeechartmap-demo-2":{component:d.memo(d.lazy(u()(l()().mark(function c(){var o,r,t;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return o=n.sent,r=o.QkGaoDeEchartMap,t=function(){return d.createElement("div",{style:{height:"500px",position:"relative"}},d.createElement(r,{mapZoomShortcut:"ctrl+mousewheel",dataSource:[{name:"\u4E0A\u6D77\u8679\u6865\u673A\u573A",lngLat:[121.336319,31.197874],id:1,color:"#1890ff"}],drawConnectLinesOptions:{color:{start:"#1890ff",end:"#52c41a"},endPoints:[{id:2,lngLat:[121.805333,31.151308],color:"#52c41a",from:[[121.336319,31.197874]]}]}}))},n.abrupt("return",{default:t});case 6:case"end":return n.stop()}},c)})))),asset:{type:"BLOCK",id:"qkgaodeechartmap-demo-2",refAtomIds:["QkGaoDeEchartMap"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkGaoDeEchartMap } from 'react-components';

const ConnectedPointsExample = () => {
  return (
    <div style={{ height: '500px', position: 'relative' }}>
      <QkGaoDeEchartMap mapZoomShortcut="ctrl+mousewheel"
        dataSource={[
          {
            name: '\u4E0A\u6D77\u8679\u6865\u673A\u573A',
            lngLat: [121.336319, 31.197874],
            id: 1,
            color: '#1890ff',
          },
        ]}
        drawConnectLinesOptions={{
          color: {
            start: '#1890ff',
            end: '#52c41a',
          },
          endPoints: [
            {
              id: 2,
              lngLat: [121.805333, 31.151308],
              color: '#52c41a',
              from: [[121.336319, 31.197874]],
            },
          ],
        }}
      />
    </div>
  );
};

export default ConnectedPointsExample;`},"react-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"react-components":m},renderOpts:{compile:function(){var c=u()(l()().mark(function r(){var t,I=arguments;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(440).then(e.bind(e,86440));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,I));case 3:case"end":return a.stop()}},r)}));function o(){return c.apply(this,arguments)}return o}()}}}},24210:function(x,s,e){e.r(s),e.d(s,{texts:function(){return v}});var i=e(80225);const v=[{value:"\u{1F4CD} \u57FA\u4E8E\u9AD8\u5FB7\u5730\u56FE\u7684 Echarts \u5C01\u88C5\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u4E30\u5BCC\u7684\u5730\u56FE\u53EF\u89C6\u5316\u529F\u80FD\u3002",paraId:0},{value:"\u{1F5FA}\uFE0F \u652F\u6301\u536B\u661F\u5730\u56FE\u4E0E\u666E\u901A\u5730\u56FE\u5207\u6362",paraId:1,tocIndex:0},{value:"\u{1F4CC} \u652F\u6301\u7701\u4EFD\u6807\u6CE8\u4E0E\u540D\u79F0\u663E\u793A",paraId:1,tocIndex:0},{value:"\u{1F6E3}\uFE0F \u652F\u6301\u7701\u4EFD\u8FB9\u754C\u7EBF\u7ED8\u5236",paraId:1,tocIndex:0},{value:"\u{1F4CD} \u652F\u6301\u5730\u70B9\u8BE6\u7EC6\u4FE1\u606F\u6807\u6CE8",paraId:1,tocIndex:0},{value:"\u{1F3AF} \u652F\u6301\u6D77\u91CF\u70B9\u6807\u6CE8\u53CA\u52A8\u753B\u6548\u679C",paraId:1,tocIndex:0},{value:"\u{1F5B1}\uFE0F \u652F\u6301\u81EA\u5B9A\u4E49\u70B9\u51FB\u4E8B\u4EF6\u4E0E\u4FE1\u606F\u7A97\u4F53",paraId:1,tocIndex:0},{value:"\u{1F50D} \u652F\u6301 Ctrl + \u6EDA\u8F6E\u7F29\u653E",paraId:1,tocIndex:0},{value:"\u270F\uFE0F \u652F\u6301\u81EA\u5B9A\u4E49\u533A\u57DF\u8FB9\u754C\u7ED8\u5236",paraId:1,tocIndex:0},{value:"\u{1F4F1} \u652F\u6301\u81EA\u52A8\u5B9A\u4F4D\u4E0E\u7F29\u653E",paraId:1,tocIndex:0},{value:"\u{1F30D} \u652F\u6301\u4E2D\u82F1\u6587\u5207\u6362",paraId:1,tocIndex:0},{value:"\u53C2\u6570",paraId:2,tocIndex:6},{value:"\u8BF4\u660E",paraId:2,tocIndex:6},{value:"\u7C7B\u578B",paraId:2,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:6},{value:"dataSource",paraId:2,tocIndex:6},{value:"\u6807\u6CE8\u70B9\u6570\u636E\u6E90",paraId:2,tocIndex:6},{value:"PointType[]",paraId:2,tocIndex:6},{value:"[]",paraId:2,tocIndex:6},{value:"AMapOptions",paraId:2,tocIndex:6},{value:"\u9AD8\u5FB7\u5730\u56FE\u914D\u7F6E\u9879",paraId:2,tocIndex:6},{value:"Record<string, any>",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"strokeOptions",paraId:2,tocIndex:6},{value:"\u533A\u57DF\u63CF\u8FB9\u914D\u7F6E",paraId:2,tocIndex:6},{value:"StrokeOptions",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"tileLayerOptions",paraId:2,tocIndex:6},{value:"\u536B\u661F\u5730\u56FE\u914D\u7F6E",paraId:2,tocIndex:6},{value:"Record<string, any>",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"districtLayerOptions",paraId:2,tocIndex:6},{value:"\u884C\u653F\u533A\u914D\u7F6E",paraId:2,tocIndex:6},{value:"Record<string, any>",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"completed",paraId:2,tocIndex:6},{value:"\u5730\u56FE\u52A0\u8F7D\u5B8C\u6210\u56DE\u8C03",paraId:2,tocIndex:6},{value:"(gdMap: { AMap: any; map: any }) => void",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"className",paraId:2,tocIndex:6},{value:"\u5BB9\u5668\u7C7B\u540D",paraId:2,tocIndex:6},{value:"string",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"style",paraId:2,tocIndex:6},{value:"\u5BB9\u5668\u6837\u5F0F",paraId:2,tocIndex:6},{value:"CSSProperties",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"infoWindow",paraId:2,tocIndex:6},{value:"\u4FE1\u606F\u7A97\u4F53\u914D\u7F6E",paraId:2,tocIndex:6},{value:"InfoWindowOptions",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"mapZoomShortcut",paraId:2,tocIndex:6},{value:"\u5730\u56FE\u7F29\u653E\u5FEB\u6377\u952E",paraId:2,tocIndex:6},{value:"'mousewheel' | 'ctrl+mousewheel'",paraId:2,tocIndex:6},{value:"'mousewheel'",paraId:2,tocIndex:6},{value:"autoLocateScaleLevels",paraId:2,tocIndex:6},{value:"\u662F\u5426\u81EA\u52A8\u5B9A\u4F4D\u5E76\u7F29\u653E",paraId:2,tocIndex:6},{value:"boolean",paraId:2,tocIndex:6},{value:"false",paraId:2,tocIndex:6},{value:"isAddProvinceNamesLayer",paraId:2,tocIndex:6},{value:"\u662F\u5426\u663E\u793A\u7701\u4EFD\u540D\u79F0",paraId:2,tocIndex:6},{value:"boolean",paraId:2,tocIndex:6},{value:"true",paraId:2,tocIndex:6},{value:"language",paraId:2,tocIndex:6},{value:"\u8BED\u8A00\u8BBE\u7F6E",paraId:2,tocIndex:6},{value:"'en' | 'cn'",paraId:2,tocIndex:6},{value:"'cn'",paraId:2,tocIndex:6},{value:"drawConnectLinesOptions",paraId:2,tocIndex:6},{value:"\u8FDE\u63A5\u7EBF\u914D\u7F6E",paraId:2,tocIndex:6},{value:"DrawConnectLinesOptions",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"\u53C2\u6570",paraId:3,tocIndex:7},{value:"\u8BF4\u660E",paraId:3,tocIndex:7},{value:"\u7C7B\u578B",paraId:3,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:7},{value:"id",paraId:3,tocIndex:7},{value:"\u70B9\u6807\u8BC6",paraId:3,tocIndex:7},{value:"string | number",paraId:3,tocIndex:7},{value:"-",paraId:3,tocIndex:7},{value:"lngLat",paraId:3,tocIndex:7},{value:"\u7ECF\u7EAC\u5EA6",paraId:3,tocIndex:7},{value:"[number | string, number | string] | null",paraId:3,tocIndex:7},{value:"-",paraId:3,tocIndex:7},{value:"color",paraId:3,tocIndex:7},{value:"\u70B9\u989C\u8272",paraId:3,tocIndex:7},{value:"string",paraId:3,tocIndex:7},{value:"'#ff0000'",paraId:3,tocIndex:7},{value:"animation",paraId:3,tocIndex:7},{value:"\u52A8\u753B\u6548\u679C",paraId:3,tocIndex:7},{value:"'DIFFUSION'",paraId:3,tocIndex:7},{value:"-",paraId:3,tocIndex:7},{value:"size",paraId:3,tocIndex:7},{value:"\u70B9\u5927\u5C0F",paraId:3,tocIndex:7},{value:"number",paraId:3,tocIndex:7},{value:"8",paraId:3,tocIndex:7},{value:"hasInfoWindow",paraId:3,tocIndex:7},{value:"\u662F\u5426\u663E\u793A\u4FE1\u606F\u7A97\u4F53",paraId:3,tocIndex:7},{value:"boolean",paraId:3,tocIndex:7},{value:"false",paraId:3,tocIndex:7},{value:"onClick",paraId:3,tocIndex:7},{value:"\u70B9\u51FB\u56DE\u8C03",paraId:3,tocIndex:7},{value:"(data: PointType) => void",paraId:3,tocIndex:7},{value:"-",paraId:3,tocIndex:7},{value:"\u53C2\u6570",paraId:4,tocIndex:8},{value:"\u8BF4\u660E",paraId:4,tocIndex:8},{value:"\u7C7B\u578B",paraId:4,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:8},{value:"title",paraId:4,tocIndex:8},{value:"\u7A97\u4F53\u6807\u9898",paraId:4,tocIndex:8},{value:"string",paraId:4,tocIndex:8},{value:"-",paraId:4,tocIndex:8},{value:"columns",paraId:4,tocIndex:8},{value:"\u5C55\u793A\u5B57\u6BB5\u914D\u7F6E",paraId:4,tocIndex:8},{value:"Array<{ title: string; dataIndex: string; unit?: string }>",paraId:4,tocIndex:8},{value:"-",paraId:4,tocIndex:8},{value:"more",paraId:4,tocIndex:8},{value:"\u66F4\u591A\u6309\u94AE\u914D\u7F6E",paraId:4,tocIndex:8},{value:"{ text?: string; url?: string }",paraId:4,tocIndex:8},{value:"-",paraId:4,tocIndex:8},{value:"pointerEvents",paraId:4,tocIndex:8},{value:"\u6307\u9488\u4E8B\u4EF6",paraId:4,tocIndex:8},{value:"string",paraId:4,tocIndex:8},{value:"'none'",paraId:4,tocIndex:8},{value:"\u53C2\u6570",paraId:5,tocIndex:9},{value:"\u8BF4\u660E",paraId:5,tocIndex:9},{value:"\u7C7B\u578B",paraId:5,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:9},{value:"color",paraId:5,tocIndex:9},{value:"\u8FDE\u63A5\u7EBF\u989C\u8272\u914D\u7F6E",paraId:5,tocIndex:9},{value:"{ start: string; end: string }",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"effectSymbol",paraId:5,tocIndex:9},{value:"\u7279\u6548\u7B26\u53F7",paraId:5,tocIndex:9},{value:"string",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"symbolSize",paraId:5,tocIndex:9},{value:"\u7B26\u53F7\u5927\u5C0F",paraId:5,tocIndex:9},{value:"number",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"endPoints",paraId:5,tocIndex:9},{value:"\u7EC8\u70B9\u914D\u7F6E",paraId:5,tocIndex:9},{value:"PointType[]",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9}]}}]);
