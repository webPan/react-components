"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[265],{25264:function(v,a,n){var d;n.r(a),n.d(a,{demos:function(){return I}});var c=n(43953),s=n.n(c),h=n(91184),_=n.n(h),p=n(38497),D=n(73423),y=n(25749),E=n(79021),I={"qkgaodeechartmap-demo-0":{component:p.memo(p.lazy(_()(s()().mark(function m(){var l,i,o,t,u,r,f,P,M,O,g;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.bind(n,25749));case 2:return l=e.sent,i=l.QkGaoDeEchartMap,e.next=6,Promise.resolve().then(n.bind(n,79021));case 6:return o=e.sent,t=o.Typography,e.next=10,Promise.resolve().then(n.t.bind(n,38497,19));case 10:return u=e.sent,r=u.default,f=t.Title,P=t.Paragraph,M=t.Text,O=t.Link,g=function(){return r.createElement("div",null,r.createElement("div",{style:{height:"500px",position:"relative"}},r.createElement(i,{dataSource:[{name:"\u4E0A\u6D77\u5E02\u9759\u5B89\u533A\u4E1C\u65B9\u660E\u73E0",lngLat:[121.499427,31.239772],id:1,color:"#990123",size:12}],AMapOptions:{center:[106.258754,38.471317],zoomEnable:!0,dragEnable:!0,showLabel:!1},mapZoomShortcut:"ctrl+mousewheel",autoLocateScaleLevels:!0,drawConnectLinesOptions:{color:{start:"#990123",end:"#223234"},endPoints:[{id:2,lngLat:[115.871364,28.660997],color:"#223234",from:[[121.499427,31.239772]]}]},completed:function(b){}})))},e.abrupt("return",{default:g});case 15:case"end":return e.stop()}},m)})))),asset:{type:"BLOCK",id:"qkgaodeechartmap-demo-0",refAtomIds:["QkGaoDeEchartMap"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkGaoDeEchartMap } from 'react-components';\r
import { Typography } from 'antd';\r
import React from 'react';\r
const { Title, Paragraph, Text, Link } = Typography;\r
\r
const Example = () => {\r
  return (\r
    <div>\r
      <div style={{ height: '500px', position: 'relative' }}>\r
        <QkGaoDeEchartMap\r
          dataSource={[\r
            {\r
              // name: '\u9879\u76EE\u5730\u5740',\r
              name: '\u4E0A\u6D77\u5E02\u9759\u5B89\u533A\u4E1C\u65B9\u660E\u73E0',\r
              lngLat: [121.499427, 31.239772],\r
              id: 1,\r
              color: '#990123',\r
              size: 12,\r
            },\r
          ]}\r
          AMapOptions={{\r
            center: [106.258754, 38.471317],\r
            zoomEnable: true, // \u662F\u5426\u7F29\u653E\r
            dragEnable: true, // \u662F\u5426\u62D6\u52A8\r
            showLabel: false,\r
          }}\r
          mapZoomShortcut="ctrl+mousewheel"\r
          autoLocateScaleLevels={true}\r
          drawConnectLinesOptions={{\r
            color: {\r
              start: '#990123',\r
              end: '#223234',\r
            },\r
            endPoints: [\r
              {\r
                id: 2,\r
                lngLat: [115.871364, 28.660997],\r
                color: '#223234',\r
                from: [[121.499427, 31.239772]],\r
              },\r
            ],\r
          }}\r
          completed={(gdMap) => {\r
            // console.log(assetsInfo.province)\r
            //   console.log('\u5730\u56FE\u52A0\u8F7D\u5B8C\u6210')\r
          }}\r
        />\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default Example;`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.21.4"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":y,antd:E,react:d||(d=n.t(p,2))},renderOpts:{compile:function(){var m=_()(s()().mark(function i(){var o,t=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(350).then(n.bind(n,48350));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,t));case 3:case"end":return r.stop()}},i)}));function l(){return m.apply(this,arguments)}return l}()}}}},9288:function(v,a,n){n.r(a),n.d(a,{texts:function(){return c}});var d=n(73423);const c=[{value:"\u57FA\u4E8E \u9AD8\u5FB7\u5730\u56FE \u4E8C\u6B21\u5C01\u88C5\uFF0C\u5C06\u9AD8\u9891\u4F7F\u7528\u7684\u529F\u80FD\u90FD\u5199\u8FDB\u4E86\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u652F\u6301\u5F00\u542F\u536B\u661F\u5730\u56FE",paraId:0,tocIndex:0},{value:"\u652F\u6301\u5F00\u542F\u6807\u6CE8\u70B9\u52A0\u8F7D\u7701\u540D\u79F0",paraId:0,tocIndex:0},{value:"\u652F\u6301\u5F00\u542F\u5404\u4E2A\u7701\u7684\u8FB9\u754C\u7EBF",paraId:0,tocIndex:0},{value:"\u652F\u6301\u67D0\u4E2A\u70B9\u7684\u8BE6\u7EC6\u5730\u5740\u6807\u6CE8 tip",paraId:0,tocIndex:0},{value:"\u652F\u6301\u6D77\u91CF\u70B9\u6807\u6CE8\u53CA\u52A8\u753B\u6548\u679C",paraId:0,tocIndex:0},{value:"\u652F\u6301\u6D77\u91CF\u70B9\u70B9\u51FB\uFF0C\u81EA\u5B9A\u4E49\u7A97\u4F53",paraId:0,tocIndex:0},{value:"\u652F\u6301\u6309 ctrl+\u6EDA\u8F6E\u7F29\u653E\u5730\u56FE",paraId:0,tocIndex:0},{value:"\u652F\u6301\u67D0\u4E2A\u533A\u57DF\u7ED8\u5236\u8FB9\u754C\u7EBF",paraId:0,tocIndex:0},{value:"\u652F\u6301\u5B9A\u4F4D\u5E76\u81EA\u52A8\u7F29\u653E\u7EA7\u522B",paraId:0,tocIndex:0},{value:"\u652F\u6301\u591A\u8BED\u8A00",paraId:0,tocIndex:0},{value:`\r
export interface PointType {\r
  id: string | number; // \u8F85\u52A9\u4F5C\u7528\r
  lngLat: [number | string, number | string] | null; // \u7ECF\u7EAC\u5EA6\r
  color?: string; // \u70B9\u989C\u8272 \u9ED8\u8BA4\u7EA2\u8272\r
  animation?: 'DIFFUSION'; // \u52A8\u753B \u70B9\u6269\u6563\r
  size?: number; // \u70B9\u5927\u5C0F \u65E0\u9700\u5E26\u5355\u4F4D \u9ED8\u8BA48px\r
  hasInfoWindow?: boolean; //\u662F\u5426\u6709\u7A97\u4F53\r
  from?: [number, number][]; //endPoint\u4E13\u5C5E\r
  result?: any;\r
  onClick?: (data: PointType) => void;\r
  [key: string]: any;\r
}\r
\r
interface InfoWindowOptions {\r
  title?: string;\r
  // \u9700\u8981\u5C55\u793A\u7684\u5B57\u6BB5 label \u6587\u6848 dataIndex \u5411dataSource \u9700\u8981\u53D6\u7684\u503C\r
  columns: Array<{ title: string; dataIndex: string; unit?: string }>;\r
  // \u53F3\u4E0A\u89D2\u6309\u94AE\r
  more?: {\r
    text?: string; // \u8D85\u94FE\u63A5\u6587\u5B57 \u9ED8\u8BA4\u8BE6\u60C5\r
    url?: string; // \u94FE\u63A5url  \u5411dataSource \u9700\u8981\u53D6\u7684\u503C\r
  };\r
  pointerEvents?: string; // \u9ED8\u8BA4none\r
}\r
\r
interface QkGaoDeMapType {\r
  /** AMap\u914D\u7F6E */\r
  AMapOptions?: Record<string, any>;\r
  /** load \u914D\u7F6E */\r
  options?: Record<string, any>;\r
  /** \u63CF\u8FB9\u914D\u7F6E\r
   *  \u4E0D\u5199\u8BE5\u5C5E\u6027\u4E0D\u4F1A\u8FDB\u884C\u63CF\u8FB9\r
   *  \u542F\u7528\u63CF\u8FB9 strokeOptions:{}\r
   * */\r
  strokeOptions?: {\r
    name?: string; // \u7ED8\u5236\u8FB9\u754C\u540D\u79F0 \u4F8B\u5982\uFF1A\u4E2D\u56FD \u6E56\u5357\r
    strokeWeight?: number; // \u63CF\u8FB9\u5BBD\u5EA6\r
    fillColor?: string; // \u586B\u5145\u989C\u8272\r
    fillOpacity?: number; // \u586B\u5145\u900F\u660E\u5EA6\r
    [key: string]: any;\r
  };\r
  /** \u52A0\u8F7D\u536B\u661F\u5730\u56FE\u914D\u7F6E  */\r
  tileLayerOptions?: Record<string, any>;\r
  /** \u52A0\u8F7D\u884C\u653F\u533A\u914D\u7F6E  */\r
  districtLayerOptions?: Record<string, any>;\r
  /** \u6570\u636E\u6E90 */\r
  dataSource?: PointType[];\r
  /** \u5730\u56FE\u52A0\u8F7D\u5B8C\u6210 */\r
  completed?: (gdMap: { AMap: any; map: any }) => void;\r
  /** \u7C7B\u540D */\r
  className?: string;\r
  /** \u6837\u5F0F */\r
  style?: CSSProperties;\r
  /**\r
   * \u81EA\u5B9A\u4E49\u7A97\u4F53\r
   * \u9ED8\u8BA4\u4E0D\u542F\u7528\r
   * \u542F\u7528 infoWindow:{}\r
   * */\r
  infoWindow?: {\r
    options?: InfoWindowOptions;\r
    // \u5982\u679Crender\u5B58\u5728\uFF0C\u5219\u4F1A\u8986\u76D6\u4E0A\u9762\u7684\u914D\u7F6E\r
    render?: (data: PointType) => React.ReactNode;\r
  };\r
  /** \u5730\u56FE\u7F29\u653E\u5FEB\u6377\u952E \u9ED8\u8BA4mousewheel */\r
  mapZoomShortcut?: 'mousewheel' | 'ctrl+mousewheel';\r
  /**  \u81EA\u52A8\u5B9A\u4F4D\u5E76\u7F29\u653E\u7EA7\u522B */\r
  autoLocateScaleLevels?: boolean;\r
  /** \u662F\u5426\u53E0\u52A0\u7701\u540D\u79F0 \u9ED8\u8BA4true */\r
  isAddProvinceNamesLayer?: boolean;\r
  /** \u8BED\u8A00 */\r
  language?: 'en' | 'cn';\r
  /**\u8FDE\u63A5\u7EBF */\r
  drawConnectLinesOptions?: {\r
    color?: {\r
      start: string;\r
      end: string;\r
    };\r
    effectSymbol?: string;\r
    symbolSize?: number;\r
    endPoints?: PointType[];\r
  };\r
}
`,paraId:1,tocIndex:2}]}}]);
