(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[713],{51226:function(S,u,e){"use strict";var g;e.r(u),e.d(u,{demos:function(){return W}});var F=e(39346),P=e.n(F),T=e(40607),N=e.n(T),x=e(9083),b=e.n(x),j=e(43953),d=e.n(j),B=e(91184),h=e.n(B),c=e(38497),Q=e(98874),k=e(50451),$=e(69620),w=e(41453),K=e(52346),W={"useqkscrollload-demo-0":{component:c.memo(c.lazy(h()(d()().mark(function i(){var o,n,r,s,l,t,y,m;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return o=a.sent,n=o.default,a.next=6,Promise.resolve().then(e.bind(e,50451));case 6:return r=a.sent,s=r.useQkScrollLoad,a.next=10,Promise.resolve().then(e.bind(e,69620));case 10:return l=a.sent,t=l.Card,y=l.Spin,m=function(){var v=s();return n.createElement("div",{style:{height:"300px",overflow:"auto"}},n.createElement("div",{style:{height:"200px",background:"#f5f5f5",display:"flex",justifyContent:"center",alignItems:"center"}},"\u5411\u4E0B\u6EDA\u52A8\u67E5\u770B\u6548\u679C"),n.createElement(v,{delay:2e3,placeholder:n.createElement("div",{style:{textAlign:"center",width:"100%",padding:"20px"}},n.createElement(y,{tip:"\u52A0\u8F7D\u4E2D..."}))},n.createElement(t,{title:"\u5EF6\u8FDF\u52A0\u8F7D\u5185\u5BB9"},"\u6211\u4F1A\u5728\u8FDB\u5165\u53EF\u89C6\u533A\u57DF2\u79D2\u540E\u663E\u793A")))},a.abrupt("return",{default:m});case 15:case"end":return a.stop()}},i)})))),asset:{type:"BLOCK",id:"useqkscrollload-demo-0",refAtomIds:["useQkScrollLoad"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { useQkScrollLoad } from 'react-components';
import { Card, Spin } from 'antd';

const DelayDemo = () => {
  const QkScrollLoad = useQkScrollLoad();

  return (
    <div style={{ height: '300px', overflow: 'auto' }}>
      <div style={{ height: '200px', background: '#f5f5f5' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
        \u5411\u4E0B\u6EDA\u52A8\u67E5\u770B\u6548\u679C
      </div>
      <QkScrollLoad delay={2000} placeholder={<div style={{textAlign:'center',width:'100%',padding:'20px'}}><Spin tip="\u52A0\u8F7D\u4E2D..." /></div>}>
        <Card title="\u5EF6\u8FDF\u52A0\u8F7D\u5185\u5BB9">\u6211\u4F1A\u5728\u8FDB\u5165\u53EF\u89C6\u533A\u57DF2\u79D2\u540E\u663E\u793A</Card>
      </QkScrollLoad>
    </div>
  );
};

export default DelayDemo;`},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx",description:"\u53EF\u4EE5\u8BBE\u7F6E\u5EF6\u8FDF\u65F6\u95F4\uFF0C\u5373\u4F7F\u8FDB\u5165\u53EF\u89C6\u533A\u57DF\u4E5F\u4F1A\u7B49\u5F85\u6307\u5B9A\u65F6\u95F4\u540E\u518D\u663E\u793A",title:"\u5EF6\u8FDF\u52A0\u8F7D"},context:{react:g||(g=e.t(c,2)),"react-components":k,antd:$},renderOpts:{compile:function(){var i=h()(d()().mark(function n(){var r,s=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(440).then(e.bind(e,86440));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,s));case 3:case"end":return t.stop()}},n)}));function o(){return i.apply(this,arguments)}return o}()}},"useqkscrollload-demo-1":{component:c.memo(c.lazy(h()(d()().mark(function i(){var o,n,r,s,l,t,y,m,I;return d()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return o=p.sent,n=o.default,p.next=6,Promise.resolve().then(e.bind(e,50451));case 6:return r=p.sent,s=r.useQkScrollLoad,p.next=10,Promise.resolve().then(e.bind(e,69620));case 10:return l=p.sent,t=l.List,y=l.Avatar,m=l.Skeleton,I=function(){var f=s(),D=n.useState(function(){return Array.from({length:20},function(R,E){return{id:E,title:"Item ".concat(E),description:"This is the description for item ".concat(E)}})}),M=b()(D,1),L=M[0];return n.createElement(t,{itemLayout:"vertical",dataSource:L,renderItem:function(E,O){return n.createElement(f,{key:E.id,placeholder:n.createElement(m,{active:!0,avatar:!0,paragraph:{rows:1}}),rootMargin:"100px",delay:O*100},n.createElement(t.Item,null,n.createElement(t.Item.Meta,{avatar:n.createElement(y,{src:"https://api.dicebear.com/7.x/pixel-art/svg?seed=".concat(E.id)}),title:E.title,description:E.description})))}})},p.abrupt("return",{default:I});case 16:case"end":return p.stop()}},i)})))),asset:{type:"BLOCK",id:"useqkscrollload-demo-1",refAtomIds:["useQkScrollLoad"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { useQkScrollLoad } from 'react-components';
import { List, Avatar, Skeleton } from 'antd';

const ListDemo = () => {
  const QkScrollLoad = useQkScrollLoad();
  const [data] = React.useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      title: \`Item \${i}\`,
      description: \`This is the description for item \${i}\`,
    })),
  );

  return (
    <List
      itemLayout="vertical"
      dataSource={data}
      renderItem={(item, index) => (
        <QkScrollLoad
          key={item.id}
          placeholder={<Skeleton active avatar paragraph={{ rows: 1 }} />}
          rootMargin="100px"
          delay={index * 100} // \u9519\u5F00\u52A0\u8F7D\u65F6\u95F4\uFF0C\u907F\u514D\u4E00\u6B21\u6027\u5927\u91CF\u6E32\u67D3
        >
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={\`https://api.dicebear.com/7.x/pixel-art/svg?seed=\${item.id}\`}
                />
              }
              title={item.title}
              description={item.description}
            />
          </List.Item>
        </QkScrollLoad>
      )}
    />
  );
};

export default ListDemo;`},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx",description:"\u5728\u957F\u5217\u8868\u573A\u666F\u4E2D\u4F7F\u7528\u61D2\u52A0\u8F7D\uFF0C\u4F18\u5316\u9996\u5C4F\u52A0\u8F7D\u6027\u80FD\u548C\u5185\u5B58\u5360\u7528",title:"\u957F\u5217\u8868\u4F18\u5316"},context:{react:g||(g=e.t(c,2)),"react-components":k,antd:$},renderOpts:{compile:function(){var i=h()(d()().mark(function n(){var r,s=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(440).then(e.bind(e,86440));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,s));case 3:case"end":return t.stop()}},n)}));function o(){return i.apply(this,arguments)}return o}()}},"useqkscrollload-demo-2":{component:c.memo(c.lazy(h()(d()().mark(function i(){var o,n,r,s,l,t,y,m;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return o=a.sent,n=o.default,a.next=6,Promise.resolve().then(e.bind(e,50451));case 6:return r=a.sent,s=r.useQkScrollLoad,a.next=10,Promise.resolve().then(e.bind(e,69620));case 10:return l=a.sent,t=l.Image,y=l.Spin,a.t0=N(),a.next=16,Promise.resolve().then(e.bind(e,41453));case 16:return a.t1=a.sent,(0,a.t0)(a.t1),m=function(){var v=s(),f=new Array(20).fill("https://placehold.co/600x400/000000/FFFFFF/png");return n.createElement("div",{className:"gallery"},f.map(function(D,M){return n.createElement(v,{key:D,placeholder:n.createElement("div",{className:"placeholder"},n.createElement(y,{size:"large"})),rootMargin:"200px",delay:1e3},function(L){return n.createElement("div",null,n.createElement(t,{src:D,alt:"Gallery image ".concat(M+1),loading:"lazy",preview:!0}))})}))},a.abrupt("return",{default:m});case 20:case"end":return a.stop()}},i)})))),asset:{type:"BLOCK",id:"useqkscrollload-demo-2",refAtomIds:["useQkScrollLoad"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { useQkScrollLoad } from 'react-components';
import { Image, Spin } from 'antd';
import './demo.less';

const GalleryDemo = () => {
  const QkScrollLoad = useQkScrollLoad();
  const images = new Array(20).fill('https://placehold.co/600x400/000000/FFFFFF/png')

  return (
    <div className="gallery">
      {images.map((url, index) => (
        <QkScrollLoad
          key={url}
          placeholder={
            <div className="placeholder">
              <Spin size="large" />
            </div>
          }
          rootMargin="200px" delay={1000} 
        >
          {(visible) => (
            <div >
              <Image
                src={url}
                alt={\`Gallery image \${index + 1}\`}
                loading="lazy"
                preview={true}
              />
            </div>
          )}
        </QkScrollLoad>
      ))}
    </div>
  );
};

export default GalleryDemo;`},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},"./demo.less":{type:"FILE",value:e(89761).Z}},entry:"index.tsx",description:"\u7ED3\u5408\u52A8\u753B\u6548\u679C\u5B9E\u73B0\u56FE\u7247\u61D2\u52A0\u8F7D\uFF0C\u63D0\u5347\u7528\u6237\u4F53\u9A8C",title:"\u56FE\u7247\u753B\u5ECA"},context:{react:g||(g=e.t(c,2)),"react-components":k,antd:$,"D:/wwwroot/react-components/src/useQkScrollLoad/demo.less":w},renderOpts:{compile:function(){var i=h()(d()().mark(function n(){var r,s=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(440).then(e.bind(e,86440));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,s));case 3:case"end":return t.stop()}},n)}));function o(){return i.apply(this,arguments)}return o}()}},"useqkscrollload-demo-3":{component:c.memo(c.lazy(h()(d()().mark(function i(){var o,n,r,s,l,t,y,m,I,a,p;return d()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return o=f.sent,n=o.default,r=o.lazy,s=o.Suspense,f.next=8,Promise.resolve().then(e.bind(e,50451));case 8:return l=f.sent,t=l.useQkScrollLoad,f.next=12,Promise.resolve().then(e.bind(e,69620));case 12:return y=f.sent,m=y.Spin,I=y.Card,a=r(function(){return new Promise(function(D){setTimeout(function(){D(Promise.resolve().then(e.bind(e,52346)))},1500)})}),p=function(){var M=t(),L=n.useState(!1),R=b()(L,2),E=R[0],O=R[1];return n.createElement("div",{style:{height:"300px",overflow:"auto"}},n.createElement("div",{style:{height:"300px",background:"#f5f5f5",display:"flex",justifyContent:"center",alignItems:"center"}},"\u5411\u4E0B\u6EDA\u52A8\u52A0\u8F7D\u590D\u6742\u7EC4\u4EF6"),n.createElement(M,{placeholder:n.createElement(I,null,n.createElement("div",{style:{textAlign:"center"}},n.createElement(m,{tip:"\u51C6\u5907\u52A0\u8F7D\u7EC4\u4EF6..."}))),rootMargin:"150px"},function(C){return n.useEffect(function(){C&&O(!0)},[C]),n.createElement("div",{style:{padding:"20px"}},E&&n.createElement(s,{fallback:n.createElement(m,{tip:"\u7EC4\u4EF6\u52A0\u8F7D\u4E2D..."})},n.createElement(a,null)))}))},f.abrupt("return",{default:p});case 18:case"end":return f.stop()}},i)})))),asset:{type:"BLOCK",id:"useqkscrollload-demo-3",refAtomIds:["useQkScrollLoad"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { lazy, Suspense } from 'react';
import { useQkScrollLoad } from 'react-components';
import { Spin, Card } from 'antd';

// \u6A21\u62DF\u4E00\u4E2A\u91CD\u91CF\u7EA7\u7EC4\u4EF6
const HeavyComponent = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./HeavyComponent'));
      }, 1500);
    }),
);

const ComplexDemo = () => {
  const QkScrollLoad = useQkScrollLoad();
  const [isReady, setIsReady] = React.useState(false);

  return (
    <div style={{ height: '300px', overflow: 'auto' }}>
      <div style={{ height: '300px', background: '#f5f5f5', display:'flex',justifyContent:'center',alignItems:'center'}}>
        \u5411\u4E0B\u6EDA\u52A8\u52A0\u8F7D\u590D\u6742\u7EC4\u4EF6
      </div>

      <QkScrollLoad
        placeholder={
          <Card>
            <div style={{textAlign:'center'}}><Spin tip="\u51C6\u5907\u52A0\u8F7D\u7EC4\u4EF6..." /></div>
            
          </Card>
        }
        rootMargin="150px"
      >
        {(visible) => {
          // \u53EA\u5728\u7EC4\u4EF6\u53EF\u89C1\u65F6\u624D\u89E6\u53D1\u52A0\u8F7D
          React.useEffect(() => {
            if (visible) {
              setIsReady(true);
            }
          }, [visible]);

          return (
            <div style={{ padding: '20px' }}>
              {isReady && (
                <Suspense fallback={<Spin tip="\u7EC4\u4EF6\u52A0\u8F7D\u4E2D..." />}>
                  <HeavyComponent />
                </Suspense>
              )}
            </div>
          );
        }}
      </QkScrollLoad>
    </div>
  );
};

export default ComplexDemo;`},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},"./HeavyComponent.tsx":{type:"FILE",value:e(1025).Z}},entry:"index.tsx",description:"\u7ED3\u5408 React.lazy \u5B9E\u73B0\u91CD\u91CF\u7EA7\u7EC4\u4EF6\u7684\u6309\u9700\u52A0\u8F7D",title:"\u590D\u6742\u7EC4\u4EF6\u61D2\u52A0\u8F7D"},context:{react:g||(g=e.t(c,2)),"react-components":k,antd:$,"D:/wwwroot/react-components/src/useQkScrollLoad/HeavyComponent.tsx":K},renderOpts:{compile:function(){var i=h()(d()().mark(function n(){var r,s=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(440).then(e.bind(e,86440));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,s));case 3:case"end":return t.stop()}},n)}));function o(){return i.apply(this,arguments)}return o}()}},"useqkscrollload-demo-4":{component:c.memo(c.lazy(h()(d()().mark(function i(){var o,n,r,s,l,t,y,m,I,a;return d()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return o=v.sent,n=o.default,v.next=6,Promise.resolve().then(e.bind(e,50451));case 6:return r=v.sent,s=r.useQkScrollLoad,v.next=10,Promise.resolve().then(e.bind(e,69620));case 10:return l=v.sent,t=l.Card,y=l.Switch,m=l.InputNumber,I=l.Form,a=function(){var D=n.useState({delay:1e3,rootMargin:"100px",threshold:.5,once:!0}),M=b()(D,2),L=M[0],R=M[1],E=s(L);return n.createElement("div",null,n.createElement(I,{layout:"inline",style:{marginBottom:20}},n.createElement(I.Item,{label:"\u5EF6\u8FDF\u65F6\u95F4(ms)"},n.createElement(m,{value:L.delay,onChange:function(C){return R(function(A){return P()(P()({},A),{},{delay:C})})}})),n.createElement(I.Item,{label:"\u89E6\u53D1\u9608\u503C"},n.createElement(m,{value:L.threshold,step:.1,min:0,max:1,onChange:function(C){return R(function(A){return P()(P()({},A),{},{threshold:C})})}})),n.createElement(I.Item,{label:"\u53EA\u89E6\u53D1\u4E00\u6B21"},n.createElement(y,{checked:L.once,onChange:function(C){return R(function(A){return P()(P()({},A),{},{once:C})})}}))),n.createElement("div",{style:{height:"400px",overflow:"auto"}},Array.from({length:5}).map(function(O,C){return n.createElement(E,{key:C},function(A){return n.createElement(t,{style:{margin:"20px 0"}},n.createElement("p",null,"\u53EF\u89C1\u72B6\u6001: ",A?"\u662F":"\u5426"),n.createElement("p",null,"\u5F53\u524D\u914D\u7F6E:"),n.createElement("pre",null,JSON.stringify(L,null,2)))})})))},v.abrupt("return",{default:a});case 17:case"end":return v.stop()}},i)})))),asset:{type:"BLOCK",id:"useqkscrollload-demo-4",refAtomIds:["useQkScrollLoad"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { useQkScrollLoad } from 'react-components';
import { Card, Switch, InputNumber, Space, Form } from 'antd';

const AdvancedDemo = () => {
  const [config, setConfig] = React.useState({
    delay: 1000,
    rootMargin: '100px',
    threshold: 0.5,
    once: true,
  });

  const QkScrollLoad = useQkScrollLoad(config);

  return (
    <div>
      <Form layout="inline" style={{ marginBottom: 20 }}>
        <Form.Item label="\u5EF6\u8FDF\u65F6\u95F4(ms)">
          <InputNumber
            value={config.delay}
            onChange={(v) => setConfig((c) => ({ ...c, delay: v }))}
          />
        </Form.Item>
        <Form.Item label="\u89E6\u53D1\u9608\u503C">
          <InputNumber
            value={config.threshold}
            step={0.1}
            min={0}
            max={1}
            onChange={(v) => setConfig((c) => ({ ...c, threshold: v }))}
          />
        </Form.Item>
        <Form.Item label="\u53EA\u89E6\u53D1\u4E00\u6B21">
          <Switch
            checked={config.once}
            onChange={(v) => setConfig((c) => ({ ...c, once: v }))}
          />
        </Form.Item>
      </Form>

      <div style={{ height: '400px', overflow: 'auto' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <QkScrollLoad key={i}>
            {(visible) => (
              <Card style={{ margin: '20px 0' }}>
                <p>\u53EF\u89C1\u72B6\u6001: {visible ? '\u662F' : '\u5426'}</p>
                <p>\u5F53\u524D\u914D\u7F6E:</p>
                <pre>{JSON.stringify(config, null, 2)}</pre>
              </Card>
            )}
          </QkScrollLoad>
        ))}
      </div>
    </div>
  );
};

export default AdvancedDemo;`},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx",description:"\u5C55\u793A\u7EC4\u4EF6\u7684\u9AD8\u7EA7\u914D\u7F6E\u548C\u6027\u80FD\u4F18\u5316\u9009\u9879",title:"\u9AD8\u7EA7\u914D\u7F6E"},context:{react:g||(g=e.t(c,2)),"react-components":k,antd:$},renderOpts:{compile:function(){var i=h()(d()().mark(function n(){var r,s=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(440).then(e.bind(e,86440));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,s));case 3:case"end":return t.stop()}},n)}));function o(){return i.apply(this,arguments)}return o}()}}}},52346:function(S,u,e){"use strict";e.r(u);var g=e(75159),F=e(9064),P=e(63450),T=e(26531),N=e(38497),x=e(96469),b=function(){var d=[{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u5730\u5740",dataIndex:"address",key:"address"},{title:"\u6807\u7B7E",key:"tags",dataIndex:"tags",render:function(c){return(0,x.jsx)(x.Fragment,{children:c.map(function(Q){return(0,x.jsx)(g.Z,{color:Q.length>5?"geekblue":"green",children:Q},Q)})})}},{title:"\u64CD\u4F5C",key:"action",render:function(c,Q){return(0,x.jsxs)(F.Z,{size:"middle",children:[(0,x.jsxs)("a",{children:["\u7F16\u8F91 ",Q.name]}),(0,x.jsx)("a",{children:"\u5220\u9664"})]})}}],B=[{key:"1",name:"\u5F20\u4E09",age:32,address:"\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7",tags:["\u7A0B\u5E8F\u5458","\u7BEE\u7403\u7231\u597D\u8005"]},{key:"2",name:"\u674E\u56DB",age:42,address:"\u6EE8\u6C5F\u533A\u7F51\u5546\u8DEF699\u53F7",tags:["\u8BBE\u8BA1\u5E08","\u6444\u5F71\u5E08"]},{key:"3",name:"\u738B\u4E94",age:32,address:"\u4F59\u676D\u533A\u6587\u4E00\u897F\u8DEF969\u53F7",tags:["\u4EA7\u54C1\u7ECF\u7406","\u8FDC\u7A0B\u5DE5\u4F5C\u8005"]}];return(0,x.jsxs)(P.Z,{title:"\u590D\u6742\u7EC4\u4EF6\u793A\u4F8B",bordered:!1,children:[(0,x.jsx)("p",{style:{marginBottom:16},children:"\u8FD9\u662F\u4E00\u4E2A\u6A21\u62DF\u7684\u91CD\u91CF\u7EA7\u7EC4\u4EF6\uFF0C\u5305\u542B\u4E86\u590D\u6742\u7684\u8868\u683C\u548C\u4EA4\u4E92\u903B\u8F91"}),(0,x.jsx)(T.Z,{columns:d,dataSource:B})]})};u.default=b},41453:function(S,u,e){"use strict";e.r(u)},9641:function(S,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return F}});var g=e(98874);const F=[{value:"\u4E00\u4E2A\u4F18\u96C5\u7684 React \u7EC4\u4EF6\u61D2\u52A0\u8F7D\u65B9\u6848\uFF0C\u8BA9\u9875\u9762\u52A0\u8F7D\u66F4\u5FEB\u3001\u66F4\u6D41\u7545 \u26A1\uFE0F",paraId:0,tocIndex:0},{value:"\u{1F3A8} React \u4E2D\u4E00\u5207\u7686\u7EC4\u4EF6\uFF0C\u5B8C\u7F8E\u5951\u5408 React \u751F\u6001",paraId:1,tocIndex:1},{value:"\u{1F50D} \u57FA\u4E8E IntersectionObserver API\uFF0C\u6027\u80FD\u66F4\u4F18",paraId:1,tocIndex:1},{value:"\u2699\uFE0F \u652F\u6301\u5168\u5C40\u914D\u7F6E\u7EC4\u4EF6\u6E32\u67D3\u65F6\u673A\uFF08\u5EF6\u8FDF\u65F6\u95F4\u3001\u53EF\u89C6\u533A\u57DF\u8DDD\u79BB\uFF09",paraId:1,tocIndex:1},{value:"\u{1F3AF} \u652F\u6301\u7EC4\u4EF6\u7EA7\u522B\u7684\u4E2A\u6027\u5316\u914D\u7F6E",paraId:1,tocIndex:1},{value:"\u{1F3AD} \u652F\u6301\u81EA\u5B9A\u4E49\u5360\u4F4D\u5185\u5BB9",paraId:1,tocIndex:1},{value:"\u{1F4F1} \u54CD\u5E94\u5F0F\u8BBE\u8BA1\uFF0C\u5B8C\u7F8E\u652F\u6301\u79FB\u52A8\u7AEF",paraId:1,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:14},{value:"\u8BF4\u660E",paraId:2,tocIndex:14},{value:"\u7C7B\u578B",paraId:2,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:14},{value:"delay",paraId:2,tocIndex:14},{value:"\u5EF6\u8FDF\u52A0\u8F7D\u65F6\u95F4(ms)",paraId:2,tocIndex:14},{value:"number",paraId:2,tocIndex:14},{value:"0",paraId:2,tocIndex:14},{value:"placeholder",paraId:2,tocIndex:14},{value:"\u52A0\u8F7D\u5360\u4F4D\u5185\u5BB9",paraId:2,tocIndex:14},{value:"ReactNode | string | (() => ReactNode)",paraId:2,tocIndex:14},{value:"-",paraId:2,tocIndex:14},{value:"rootMargin",paraId:2,tocIndex:14},{value:"\u89E6\u53D1\u52A0\u8F7D\u7684\u89C6\u53E3\u8DDD\u79BB",paraId:2,tocIndex:14},{value:"string",paraId:2,tocIndex:14},{value:"0px",paraId:2,tocIndex:14},{value:"children",paraId:2,tocIndex:14},{value:"\u6E32\u67D3\u5185\u5BB9",paraId:2,tocIndex:14},{value:"ReactNode | ((visible: boolean) => ReactNode)",paraId:2,tocIndex:14},{value:"-",paraId:2,tocIndex:14},{value:"\u53C2\u6570",paraId:3,tocIndex:15},{value:"\u8BF4\u660E",paraId:3,tocIndex:15},{value:"\u7C7B\u578B",paraId:3,tocIndex:15},{value:"QkScrollLoad",paraId:3,tocIndex:15},{value:"\u61D2\u52A0\u8F7D\u7EC4\u4EF6",paraId:3,tocIndex:15},{value:"React.FC<CommonType>",paraId:3,tocIndex:15},{value:"\u53EF\u4EE5\u901A\u8FC7 children \u7684 render props \u65B9\u5F0F\u83B7\u53D6\u52A0\u8F7D\u72B6\u6001\uFF0C\u81EA\u884C\u5904\u7406\u5931\u8D25\u5C55\u793A\uFF1A",paraId:4,tocIndex:17},{value:`<QkScrollLoad>
  {(visible) => (visible ? <YourComponent /> : <ErrorComponent />)}
</QkScrollLoad>
`,paraId:5,tocIndex:17},{value:"\u652F\u6301\u3002\u7EC4\u4EF6\u4F1A\u5728\u5BA2\u6237\u7AEF\u521D\u59CB\u5316\u65F6\u68C0\u6D4B IntersectionObserver API \u7684\u53EF\u7528\u6027\uFF0C\u5728\u670D\u52A1\u7AEF\u6E32\u67D3\u65F6\u4F1A\u76F4\u63A5\u6E32\u67D3\u5360\u4F4D\u5185\u5BB9\u3002",paraId:6,tocIndex:18},{value:"\u53EF\u4EE5\u5728\u5E94\u7528\u9876\u5C42\u901A\u8FC7 Context \u65B9\u5F0F\u8BBE\u7F6E\u5168\u5C40\u9ED8\u8BA4\u914D\u7F6E\uFF1A",paraId:7,tocIndex:19},{value:`import { QkScrollLoadProvider } from 'react-components';

<QkScrollLoadProvider delay={1000} rootMargin="50px">
  <App />
</QkScrollLoadProvider>;
`,paraId:8,tocIndex:19}]},1025:function(S,u){"use strict";u.Z=`import { Card, Space, Table, Tag } from 'antd';
import React from 'react';

// \u6A21\u62DF\u4E00\u4E2A\u590D\u6742\u7684\u6570\u636E\u8868\u683C\u7EC4\u4EF6
const HeavyComponent: React.FC = () => {
  const columns = [
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '\u5730\u5740',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '\u6807\u7B7E',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: string[]) => (
        <>
          {tags.map((tag) => (
            <Tag color={tag.length > 5 ? 'geekblue' : 'green'} key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: '\u64CD\u4F5C',
      key: 'action',
      render: (_: any, record: { name: string }) => (
        <Space size="middle">
          <a>\u7F16\u8F91 {record.name}</a>
          <a>\u5220\u9664</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: '\u5F20\u4E09',
      age: 32,
      address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
      tags: ['\u7A0B\u5E8F\u5458', '\u7BEE\u7403\u7231\u597D\u8005'],
    },
    {
      key: '2',
      name: '\u674E\u56DB',
      age: 42,
      address: '\u6EE8\u6C5F\u533A\u7F51\u5546\u8DEF699\u53F7',
      tags: ['\u8BBE\u8BA1\u5E08', '\u6444\u5F71\u5E08'],
    },
    {
      key: '3',
      name: '\u738B\u4E94',
      age: 32,
      address: '\u4F59\u676D\u533A\u6587\u4E00\u897F\u8DEF969\u53F7',
      tags: ['\u4EA7\u54C1\u7ECF\u7406', '\u8FDC\u7A0B\u5DE5\u4F5C\u8005'],
    },
  ];

  return (
    <Card title="\u590D\u6742\u7EC4\u4EF6\u793A\u4F8B" bordered={false}>
      <p style={{ marginBottom: 16 }}>
        \u8FD9\u662F\u4E00\u4E2A\u6A21\u62DF\u7684\u91CD\u91CF\u7EA7\u7EC4\u4EF6\uFF0C\u5305\u542B\u4E86\u590D\u6742\u7684\u8868\u683C\u548C\u4EA4\u4E92\u903B\u8F91
      </p>
      <Table columns={columns} dataSource={data} />
    </Card>
  );
};

export default HeavyComponent;
`},89761:function(S,u){"use strict";u.Z=`.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  padding: 16px;
}

.imageWrapper {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 10%);

  &.fadeIn {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.placeholder {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border-radius: 8px;
}
`},40607:function(S){function u(e){if(e==null)throw new TypeError("Cannot destructure "+e)}S.exports=u,S.exports.__esModule=!0,S.exports.default=S.exports}}]);
