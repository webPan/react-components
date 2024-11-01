"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[487],{65293:function(g,o,n){var d;n.r(o),n.d(o,{demos:function(){return E}});var p=n(43953),s=n.n(p),y=n(91184),_=n.n(y),c=n(38497),P=n(76405),h=n(50451),I=n(56690),E={"qkgaodemap-demo-0":{component:c.memo(c.lazy(_()(s()().mark(function m(){var l,i,r,a,u,e,f,O,M,D,v;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.bind(n,50451));case 2:return l=t.sent,i=l.QkGaoDeMap,t.next=6,Promise.resolve().then(n.bind(n,56690));case 6:return r=t.sent,a=r.Typography,t.next=10,Promise.resolve().then(n.t.bind(n,38497,19));case 10:return u=t.sent,e=u.default,f=a.Title,O=a.Paragraph,M=a.Text,D=a.Link,v=function(){return e.createElement("div",null,e.createElement("div",{style:{height:"500px",position:"relative"}},e.createElement(i,{dataSource:[{name:"\u4E0A\u6D77\u5E02\u9759\u5B89\u533A\u4E1C\u65B9\u660E\u73E0",lngLat:[121.499427,31.239772],id:1,color:"red",address:"\u4E0A\u6D77\u5E02\u9759\u5B89\u533A\u4E1C\u65B9\u660E\u73E0",size:12}],tileLayerOptions:{},districtLayerOptions:{},AMapOptions:{center:[106.258754,38.471317],zoomEnable:!0,dragEnable:!0,showLabel:!1},strokeOptions:{strokeWeight:2,fillColor:"#002322",fillOpacity:.62,name:"\u4E2D\u56FD"},mapZoomShortcut:"ctrl+mousewheel",autoLocateScaleLevels:!0,completed:function(R){}})))},t.abrupt("return",{default:v});case 15:case"end":return t.stop()}},m)})))),asset:{type:"BLOCK",id:"qkgaodemap-demo-0",refAtomIds:["QkGaoDeMap"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkGaoDeMap } from 'react-components';
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

export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":h,antd:I,react:d||(d=n.t(c,2))},renderOpts:{compile:function(){var m=_()(s()().mark(function i(){var r,a=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(440).then(n.bind(n,86440));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,a));case 3:case"end":return e.stop()}},i)}));function l(){return m.apply(this,arguments)}return l}()}}}},71281:function(g,o,n){n.r(o),n.d(o,{texts:function(){return p}});var d=n(76405);const p=[{value:"\u57FA\u4E8E \u9AD8\u5FB7\u5730\u56FE \u4E8C\u6B21\u5C01\u88C5\uFF0C\u5C06\u9AD8\u9891\u4F7F\u7528\u7684\u529F\u80FD\u90FD\u5199\u8FDB\u4E86\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u652F\u6301\u5F00\u542F\u536B\u661F\u5730\u56FE",paraId:0,tocIndex:0},{value:"\u652F\u6301\u5F00\u542F\u6807\u6CE8\u70B9\u52A0\u8F7D\u7701\u540D\u79F0",paraId:0,tocIndex:0},{value:"\u652F\u6301\u5F00\u542F\u5404\u4E2A\u7701\u7684\u8FB9\u754C\u7EBF",paraId:0,tocIndex:0},{value:"\u652F\u6301\u67D0\u4E2A\u70B9\u7684\u8BE6\u7EC6\u5730\u5740\u6807\u6CE8 tip",paraId:0,tocIndex:0},{value:"\u652F\u6301\u6D77\u91CF\u70B9\u6807\u6CE8\u53CA\u52A8\u753B\u6548\u679C",paraId:0,tocIndex:0},{value:"\u652F\u6301\u6D77\u91CF\u70B9\u70B9\u51FB\uFF0C\u81EA\u5B9A\u4E49\u7A97\u4F53",paraId:0,tocIndex:0},{value:"\u652F\u6301\u6309 ctrl+\u6EDA\u8F6E\u7F29\u653E\u5730\u56FE",paraId:0,tocIndex:0},{value:"\u652F\u6301\u67D0\u4E2A\u533A\u57DF\u7ED8\u5236\u8FB9\u754C\u7EBF",paraId:0,tocIndex:0},{value:"\u652F\u6301\u5B9A\u4F4D\u5E76\u81EA\u52A8\u7F29\u653E\u7EA7\u522B",paraId:0,tocIndex:0},{value:"\u652F\u6301\u591A\u8BED\u8A00",paraId:0,tocIndex:0},{value:`
export interface PointType {
  id: string | number; // \u8F85\u52A9\u4F5C\u7528
  lngLat: [number, number] | null; // \u7ECF\u7EAC\u5EA6
  color?: string; // \u70B9\u989C\u8272 \u9ED8\u8BA4\u7EA2\u8272
  animation?: 'DIFFUSION'; // \u52A8\u753B \u70B9\u6269\u6563
  size?: number; // \u70B9\u5927\u5C0F \u65E0\u9700\u5E26\u5355\u4F4D \u9ED8\u8BA48px
  hasInfoWindow?: boolean; //\u662F\u5426\u6709\u7A97\u4F53
  [key: string]: any;
}

interface InfoWindowOptions {
  title?: string;
  // \u9700\u8981\u5C55\u793A\u7684\u5B57\u6BB5 label \u6587\u6848 dataIndex \u5411dataSource \u9700\u8981\u53D6\u7684\u503C
  columns: Array<{ title: string; dataIndex: string; unit?: string }>;
  // \u53F3\u4E0A\u89D2\u6309\u94AE
  more?: {
    text?: string; // \u8D85\u94FE\u63A5\u6587\u5B57 \u9ED8\u8BA4\u8BE6\u60C5
    url?: string; // \u94FE\u63A5url  \u5411dataSource \u9700\u8981\u53D6\u7684\u503C
  };
  pointerEvents?: string; // \u9ED8\u8BA4none
}

interface QkGaoDeMapType {
  /** AMap\u914D\u7F6E */
  AMapOptions?: Record<string, any>;
  /** load \u914D\u7F6E */
  options?: Record<string, any>;
  /** \u63CF\u8FB9\u914D\u7F6E
   *  \u4E0D\u5199\u8BE5\u5C5E\u6027\u4E0D\u4F1A\u8FDB\u884C\u63CF\u8FB9
   *  \u542F\u7528\u63CF\u8FB9 strokeOptions:{}
   * */
  strokeOptions?: {
    name?: string; // \u7ED8\u5236\u8FB9\u754C\u540D\u79F0 \u4F8B\u5982\uFF1A\u4E2D\u56FD \u6E56\u5357
    strokeWeight?: number; // \u63CF\u8FB9\u5BBD\u5EA6
    fillColor?: string; // \u586B\u5145\u989C\u8272
    fillOpacity?: number; // \u586B\u5145\u900F\u660E\u5EA6
    [key: string]: any;
  };
  /** \u52A0\u8F7D\u536B\u661F\u5730\u56FE\u914D\u7F6E  */
  tileLayerOptions?: Record<string, any>;
  /** \u52A0\u8F7D\u884C\u653F\u533A\u914D\u7F6E  */
  districtLayerOptions?: Record<string, any>;
  /** \u6570\u636E\u6E90 */
  dataSource?: PointType[];
  /** \u5730\u56FE\u52A0\u8F7D\u5B8C\u6210 */
  completed?: (gdMap: { AMap: null; map: null }) => void;
  /** \u7C7B\u540D */
  className?: string;
  /** \u6837\u5F0F */
  style?: CSSProperties;
  /**
   * \u81EA\u5B9A\u4E49\u7A97\u4F53
   * \u9ED8\u8BA4\u4E0D\u542F\u7528
   * \u542F\u7528 infoWindow:{}
   * */
  infoWindow?: {
    options?: InfoWindowOptions;
    // \u5982\u679Crender\u5B58\u5728\uFF0C\u5219\u4F1A\u8986\u76D6\u4E0A\u9762\u7684\u914D\u7F6E
    render?: (data: PointType) => React.ReactNode;
  };
  /** \u5730\u56FE\u7F29\u653E\u5FEB\u6377\u952E \u9ED8\u8BA4mousewheel */
  mapZoomShortcut?: 'mousewheel' | 'ctrl+mousewheel';
  /**  \u81EA\u52A8\u5B9A\u4F4D\u5E76\u7F29\u653E\u7EA7\u522B */
  autoLocateScaleLevels?: boolean;
  /** \u662F\u5426\u53E0\u52A0\u7701\u540D\u79F0 \u9ED8\u8BA4true */
  isAddProvinceNamesLayer?: boolean;
  /** \u8BED\u8A00 */
  language?: 'en' | 'cn';
}
`,paraId:1,tocIndex:2}]}}]);
