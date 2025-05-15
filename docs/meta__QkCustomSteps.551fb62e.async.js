"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[5],{44934:function(A,D,e){var F;e.r(D),e.d(D,{demos:function(){return z}});var L=e(43953),c=e.n(L),N=e(9083),M=e.n(N),K=e(91184),P=e.n(K),t=e(38497),b=e(48183),O=e(50451),$=e(69620),z={"qkcustomsteps-demo-0":{component:t.memo(t.lazy(P()(c()().mark(function i(){var d,s,a,r,l,n,o,y,I,g,E,h,S,u;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return d=m.sent,s=d.QkCustomSteps,m.next=6,Promise.resolve().then(e.bind(e,69620));case 6:return a=m.sent,r=a.Button,l=a.Card,n=a.Space,o=a.Typography,m.next=13,Promise.resolve().then(e.t.bind(e,38497,19));case 13:return y=m.sent,I=y.forwardRef,g=y.useState,E=o.Title,h=o.Paragraph,S=I(function(C,p){var v=C.dispatch;return t.createElement(l,null,t.createElement(n,{direction:"vertical",size:"large",style:{width:"100%"}},t.createElement(o,null,t.createElement(E,{level:4},"\u6B22\u8FCE\u4F7F\u7528"),t.createElement(h,null,"\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\uFF0C\u5C55\u793A\u4E86\u57FA\u7840\u7684\u6B65\u9AA4\u8868\u5355\u529F\u80FD\u3002")),t.createElement(r,{type:"primary",onClick:function(){return v("next")}},"\u5F00\u59CB\u4F7F\u7528")))}),u=I(function(C,p){var v=C.dispatch;return t.createElement(l,null,t.createElement(n,{direction:"vertical",size:"large",style:{width:"100%"}},t.createElement(o,null,t.createElement(E,{level:4},"\u5B8C\u6210\u8BBE\u7F6E"),t.createElement(h,null,"\u606D\u559C\u4F60\u5B8C\u6210\u4E86\u6240\u6709\u6B65\u9AA4\uFF01")),t.createElement(r,{type:"primary",onClick:function(){return v("next")}},"\u5B8C\u6210")))}),m.abrupt("return",{default:function(){var p=g({}),v=M()(p,2),x=v[0],R=v[1],B=[{title:"\u5F00\u59CB",content:S},{title:"\u5B8C\u6210",content:u}];return t.createElement(s,{style:{padding:"24px"},items:B,current:0,record:x})}});case 20:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"qkcustomsteps-demo-0",refAtomIds:["QkCustomSteps"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkCustomSteps } from 'react-components';
import { Button, Card, Space, Typography } from 'antd';
import { forwardRef, useState } from 'react';

const { Title, Paragraph } = Typography;

const Step1 = forwardRef<any, ForwardRefPropsType>((props, ref) => {
  const { dispatch } = props;
  return (
    <Card>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Typography>
          <Title level={4}>\u6B22\u8FCE\u4F7F\u7528</Title>
          <Paragraph>\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\uFF0C\u5C55\u793A\u4E86\u57FA\u7840\u7684\u6B65\u9AA4\u8868\u5355\u529F\u80FD\u3002</Paragraph>
        </Typography>
        <Button type="primary" onClick={() => dispatch('next')}>
          \u5F00\u59CB\u4F7F\u7528
        </Button>
      </Space>
    </Card>
  );
});

const Step2 = forwardRef<any, ForwardRefPropsType>((props, ref) => {
  const { dispatch } = props;
  return (
    <Card>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Typography>
          <Title level={4}>\u5B8C\u6210\u8BBE\u7F6E</Title>
          <Paragraph>\u606D\u559C\u4F60\u5B8C\u6210\u4E86\u6240\u6709\u6B65\u9AA4\uFF01</Paragraph>
        </Typography>
        <Button type="primary" onClick={() => dispatch('next')}>
          \u5B8C\u6210
        </Button>
      </Space>
    </Card>
  );
});

export default () => {
  const [record, setRecord] = useState<Record<string, any>>({});

  const items = [
    { title: '\u5F00\u59CB', content: Step1 },
    { title: '\u5B8C\u6210', content: Step2 },
  ];

  return (
    <QkCustomSteps
      style={{ padding: '24px' }}
      items={items}
      current={0}
      record={record}
    />
  );
};`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":O,antd:$,react:F||(F=e.t(t,2))},renderOpts:{compile:function(){var i=P()(c()().mark(function s(){var a,r=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(440).then(e.bind(e,86440));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,r));case 3:case"end":return n.stop()}},s)}));function d(){return i.apply(this,arguments)}return d}()}},"qkcustomsteps-demo-1":{component:t.memo(t.lazy(P()(c()().mark(function i(){var d,s,a,r,l,n,o,y,I,g,E,h,S,u,T,m;return c()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return d=p.sent,s=d.QkCustomSteps,p.next=6,Promise.resolve().then(e.bind(e,69620));case 6:return a=p.sent,r=a.Button,l=a.Card,n=a.Form,o=a.Input,y=a.Space,I=a.Typography,p.next=15,Promise.resolve().then(e.t.bind(e,38497,19));case 15:return g=p.sent,E=g.forwardRef,h=g.useState,S=I.Title,u=I.Paragraph,T=E(function(v,x){var R=v.dispatch,B=v.setRecord,w=n.useForm(),Q=M()(w,1),f=Q[0],U=function(){f.validateFields().then(function(W){B(W),R("next")})};return t.createElement(l,null,t.createElement(y,{direction:"vertical",size:"large",style:{width:"100%"}},t.createElement(I,null,t.createElement(S,{level:4},"\u4E2A\u4EBA\u4FE1\u606F"),t.createElement(u,null,"\u8BF7\u8F93\u5165\u60A8\u7684\u57FA\u672C\u4FE1\u606F\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u5C06\u5728\u4E0B\u4E00\u6B65\u4E2D\u5C55\u793A\u3002")),t.createElement(n,{form:f,layout:"vertical"},t.createElement(n.Item,{label:"\u59D3\u540D",name:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D"}]},t.createElement(o,{placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u59D3\u540D"})),t.createElement(n.Item,null,t.createElement(r,{type:"primary",onClick:U},"\u4E0B\u4E00\u6B65")))))}),m=E(function(v,x){var R=v.record;return t.createElement(l,null,t.createElement(y,{direction:"vertical",size:"large",style:{width:"100%"}},t.createElement(I,null,t.createElement(S,{level:4},"\u4FE1\u606F\u786E\u8BA4"),t.createElement(u,null,"\u60A8\u597D\uFF0C",t.createElement("strong",null,R.name),"\uFF01 \u6211\u4EEC\u5DF2\u7ECF\u6536\u5230\u4E86\u60A8\u7684\u4FE1\u606F\u3002"))))}),p.abrupt("return",{default:function(){var x=h({}),R=M()(x,2),B=R[0],w=R[1],Q=[{title:"\u586B\u5199\u4FE1\u606F",content:T},{title:"\u4FE1\u606F\u786E\u8BA4",content:m}];return t.createElement(s,{style:{padding:"24px"},items:Q,current:0,record:B})}});case 22:case"end":return p.stop()}},i)})))),asset:{type:"BLOCK",id:"qkcustomsteps-demo-1",refAtomIds:["QkCustomSteps"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkCustomSteps } from 'react-components';
import { Button, Card, Form, Input, Space, Typography } from 'antd';
import { forwardRef, useState } from 'react';

const { Title, Paragraph } = Typography;

const DataStep1 = forwardRef<any, ForwardRefPropsType>((props, ref) => {
  const { dispatch, setRecord } = props;
  const [form] = Form.useForm();

  const handleNext = () => {
    form.validateFields().then(values => {
      setRecord(values);
      dispatch('next');
    });
  };

  return (
    <Card>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Typography>
          <Title level={4}>\u4E2A\u4EBA\u4FE1\u606F</Title>
          <Paragraph>\u8BF7\u8F93\u5165\u60A8\u7684\u57FA\u672C\u4FE1\u606F\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u5C06\u5728\u4E0B\u4E00\u6B65\u4E2D\u5C55\u793A\u3002</Paragraph>
        </Typography>
        
        <Form form={form} layout="vertical">
          <Form.Item 
            label="\u59D3\u540D" 
            name="name" 
            rules={[{ required: true, message: '\u8BF7\u8F93\u5165\u59D3\u540D' }]}
          >
            <Input placeholder="\u8BF7\u8F93\u5165\u60A8\u7684\u59D3\u540D" />
          </Form.Item>
          
          <Form.Item>
            <Button type="primary" onClick={handleNext}>
              \u4E0B\u4E00\u6B65
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </Card>
  );
});

const DataStep2 = forwardRef<any, ForwardRefPropsType>((props, ref) => {
  const { record } = props;

  return (
    <Card>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Typography>
          <Title level={4}>\u4FE1\u606F\u786E\u8BA4</Title>
          <Paragraph>
            \u60A8\u597D\uFF0C<strong>{record.name}</strong>\uFF01
            \u6211\u4EEC\u5DF2\u7ECF\u6536\u5230\u4E86\u60A8\u7684\u4FE1\u606F\u3002
          </Paragraph>
        </Typography>
      </Space>
    </Card>
  );
});

export default () => {
  const [record, setRecord] = useState<Record<string, any>>({});

  const items = [
    { title: '\u586B\u5199\u4FE1\u606F', content: DataStep1 },
    { title: '\u4FE1\u606F\u786E\u8BA4', content: DataStep2 },
  ];

  return (
    <QkCustomSteps 
      style={{ padding: '24px' }}
      items={items} 
      current={0} 
      record={record} 
    />
  );
};`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":O,antd:$,react:F||(F=e.t(t,2))},renderOpts:{compile:function(){var i=P()(c()().mark(function s(){var a,r=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(440).then(e.bind(e,86440));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,r));case 3:case"end":return n.stop()}},s)}));function d(){return i.apply(this,arguments)}return d}()}},"qkcustomsteps-demo-2":{component:t.memo(t.lazy(P()(c()().mark(function i(){var d,s,a,r,l;return c()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return d=o.sent,s=d.QkCustomSteps,o.next=6,Promise.resolve().then(e.bind(e,69620));case 6:return a=o.sent,r=a.Button,l=a.Space,o.abrupt("return",{default:function(){var I=[],g=function(h){var S=h.current,u=h.next,T=h.prev;return t.createElement(l,null,S>0&&t.createElement(r,{onClick:T},"\u8FD4\u56DE"),t.createElement(r,{type:"primary",onClick:u},S===I.length-1?"\u5B8C\u6210":"\u4E0B\u4E00\u6B65"))};return t.createElement(s,{items:I,current:0,footerRender:g})}});case 10:case"end":return o.stop()}},i)})))),asset:{type:"BLOCK",id:"qkcustomsteps-demo-2",refAtomIds:["QkCustomSteps"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkCustomSteps } from 'react-components';
import { Button, Space } from 'antd';

export default () => {
  const items = [
    /*...*/
  ];

  const customFooter = (instance: InstanceType) => {
    const { current, next, prev } = instance;

    return (
      <Space>
        {current > 0 && <Button onClick={prev}>\u8FD4\u56DE</Button>}
        <Button type="primary" onClick={next}>
          {current === items.length - 1 ? '\u5B8C\u6210' : '\u4E0B\u4E00\u6B65'}
        </Button>
      </Space>
    );
  };

  return (
    <QkCustomSteps items={items} current={0} footerRender={customFooter} />
  );
};`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"}},entry:"index.tsx"},context:{"react-components":O,antd:$},renderOpts:{compile:function(){var i=P()(c()().mark(function s(){var a,r=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(440).then(e.bind(e,86440));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,r));case 3:case"end":return n.stop()}},s)}));function d(){return i.apply(this,arguments)}return d}()}},"qkcustomsteps-demo-3":{component:t.memo(t.lazy(P()(c()().mark(function i(){var d,s,a,r,l,n,o,y,I,g,E,h;return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,50451));case 2:return d=u.sent,s=d.QkCustomSteps,u.next=6,Promise.resolve().then(e.bind(e,69620));case 6:return a=u.sent,r=a.Button,l=a.Form,n=a.Input,o=a.message,u.next=13,Promise.resolve().then(e.t.bind(e,38497,19));case 13:return y=u.sent,I=y.forwardRef,g=y.useImperativeHandle,E=y.useState,h=I(function(T,m){var C=T.dispatch,p=l.useForm(),v=M()(p,1),x=v[0];return g(m,function(){return{save:function(){return P()(c()().mark(function B(){var w;return c()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,f.next=3,x.validateFields();case 3:return w=f.sent,o.success("\u9A8C\u8BC1\u901A\u8FC7"),f.abrupt("return",w);case 8:return f.prev=8,f.t0=f.catch(0),o.error("\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"),f.abrupt("return",!1);case 12:case"end":return f.stop()}},B,null,[[0,8]])}))()}}}),t.createElement(l,{form:x,style:{padding:"50px"}},t.createElement(l.Item,{name:"username",label:"\u7528\u6237\u540D",rules:[{required:!0}]},t.createElement(n,null)),t.createElement(r,{onClick:function(){return C("next")}},"\u4E0B\u4E00\u6B65"))}),u.abrupt("return",{default:function(){var m=E({}),C=M()(m,2),p=C[0],v=C[1],x=[{title:"\u586B\u5199\u8868\u5355",content:h}];return t.createElement(s,{items:x,current:0,record:p})}});case 19:case"end":return u.stop()}},i)})))),asset:{type:"BLOCK",id:"qkcustomsteps-demo-3",refAtomIds:["QkCustomSteps"],dependencies:{"index.tsx":{type:"FILE",value:`import { QkCustomSteps } from 'react-components';
import { Button, Form, Input, message } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';

const FormStep = forwardRef<any, ForwardRefPropsType>((props, ref) => {
  const { dispatch } = props;
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    async save() {
      try {
        const values = await form.validateFields();
        message.success('\u9A8C\u8BC1\u901A\u8FC7');
        return values;
      } catch (error) {
        message.error('\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F');
        return false;
      }
    },
  }));

  return (
    <Form form={form} style={{padding:'50px'}}>
      <Form.Item name="username" label="\u7528\u6237\u540D" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Button onClick={() => dispatch('next')}>\u4E0B\u4E00\u6B65</Button>
    </Form>
  );
});

export default () => {
  const [record, setRecord] = useState<Record<string, any>>({});

  const items = [
    { title: '\u586B\u5199\u8868\u5355', content: FormStep },
    // ...\u5176\u4ED6\u6B65\u9AA4
  ];

  return <QkCustomSteps items={items} current={0} record={record} />;
};`},"react-components":{type:"NPM",value:"0.0.1"},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"react-components":O,antd:$,react:F||(F=e.t(t,2))},renderOpts:{compile:function(){var i=P()(c()().mark(function s(){var a,r=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(440).then(e.bind(e,86440));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,r));case 3:case"end":return n.stop()}},s)}));function d(){return i.apply(this,arguments)}return d}()}}}},20808:function(A,D,e){e.r(D),e.d(D,{texts:function(){return L}});var F=e(48183);const L=[{value:"\u4E00\u4E2A\u9AD8\u5EA6\u81EA\u5B9A\u4E49\u7684\u6B65\u9AA4\u7EC4\u4EF6\uFF0C\u8BA9\u591A\u6B65\u9AA4\u8868\u5355\u5904\u7406\u66F4\u52A0\u7B80\u5355",paraId:0,tocIndex:0},{value:"\u{1F504} \u6570\u636E\u8D2F\u7A7F\u5168\u5C40\uFF0C\u65B9\u4FBF\u5404\u6B65\u9AA4\u95F4\u5171\u4EAB\u72B6\u6001",paraId:1,tocIndex:1},{value:"\u{1F3A8} \u9AD8\u5EA6\u81EA\u5B9A\u4E49\u7684\u754C\u9762\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE",paraId:1,tocIndex:1},{value:"\u{1F6E0} \u7075\u6D3B\u7684\u65B9\u6CD5\u8C03\u7528\uFF0C\u652F\u6301\u5185\u90E8\u7EC4\u4EF6\u548C\u5916\u90E8\u7EC4\u4EF6\u7684\u53CC\u5411\u901A\u4FE1",paraId:1,tocIndex:1},{value:"\u{1F4F1} \u54CD\u5E94\u5F0F\u8BBE\u8BA1\uFF0C\u5B8C\u7F8E\u9002\u914D\u5404\u79CD\u5C4F\u5E55\u5C3A\u5BF8",paraId:1,tocIndex:1},{value:"\u{1F3AF} \u7C7B\u578B\u5B89\u5168\uFF0C\u5B8C\u6574\u7684 TypeScript \u652F\u6301",paraId:1,tocIndex:1},{value:"\u6700\u7B80\u5355\u7684\u6B65\u9AA4\u8868\u5355\u4F7F\u7528\u65B9\u5F0F\uFF1A",paraId:2,tocIndex:3},{value:"\u5C55\u793A\u6B65\u9AA4\u95F4\u6570\u636E\u5171\u4EAB\u7684\u80FD\u529B\uFF1A",paraId:3,tocIndex:4},{value:"\u53C2\u6570",paraId:4,tocIndex:8},{value:"\u8BF4\u660E",paraId:4,tocIndex:8},{value:"\u7C7B\u578B",paraId:4,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:8},{value:"items",paraId:4,tocIndex:8},{value:"\u6B65\u9AA4\u914D\u7F6E\u6570\u7EC4",paraId:4,tocIndex:8},{value:"StepItem[]",paraId:4,tocIndex:8},{value:"-",paraId:4,tocIndex:8},{value:"current",paraId:4,tocIndex:8},{value:"\u5F53\u524D\u6B65\u9AA4",paraId:4,tocIndex:8},{value:"number",paraId:4,tocIndex:8},{value:"0",paraId:4,tocIndex:8},{value:"record",paraId:4,tocIndex:8},{value:"\u516C\u5171\u6570\u636E\u5BF9\u8C61",paraId:4,tocIndex:8},{value:"Record<string, any>",paraId:4,tocIndex:8},{value:"{}",paraId:4,tocIndex:8},{value:"loading",paraId:4,tocIndex:8},{value:"\u52A0\u8F7D\u72B6\u6001",paraId:4,tocIndex:8},{value:"boolean",paraId:4,tocIndex:8},{value:"false",paraId:4,tocIndex:8},{value:"footerRender",paraId:4,tocIndex:8},{value:"\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE",paraId:4,tocIndex:8},{value:"(instance: InstanceType) => ReactNode | null | undefined",paraId:4,tocIndex:8},{value:"-",paraId:4,tocIndex:8},{value:"nextText",paraId:4,tocIndex:8},{value:"\u4E0B\u4E00\u6B65\u6309\u94AE\u6587\u6848",paraId:4,tocIndex:8},{value:"string | ((current: number) => string)",paraId:4,tocIndex:8},{value:"'\u4E0B\u4E00\u6B65'",paraId:4,tocIndex:8},{value:"onChange",paraId:4,tocIndex:8},{value:"\u6B65\u9AA4\u6539\u53D8\u65F6\u7684\u56DE\u8C03",paraId:4,tocIndex:8},{value:"(data: StepChangeData) => void",paraId:4,tocIndex:8},{value:"-",paraId:4,tocIndex:8},{value:"onValuesChange",paraId:4,tocIndex:8},{value:"\u6570\u636E\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:4,tocIndex:8},{value:"(values: Record<string, any>) => void",paraId:4,tocIndex:8},{value:"-",paraId:4,tocIndex:8},{value:"\u53C2\u6570",paraId:5,tocIndex:9},{value:"\u8BF4\u660E",paraId:5,tocIndex:9},{value:"\u7C7B\u578B",paraId:5,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:9},{value:"title",paraId:5,tocIndex:9},{value:"\u6B65\u9AA4\u6807\u9898",paraId:5,tocIndex:9},{value:"string",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"content",paraId:5,tocIndex:9},{value:"\u6B65\u9AA4\u5185\u5BB9\u7EC4\u4EF6",paraId:5,tocIndex:9},{value:"(ref: any) => ReactNode",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"hideInSteps",paraId:5,tocIndex:9},{value:"\u662F\u5426\u5728\u6B65\u9AA4\u6761\u4E2D\u9690\u85CF",paraId:5,tocIndex:9},{value:"boolean",paraId:5,tocIndex:9},{value:"false",paraId:5,tocIndex:9},{value:"key",paraId:5,tocIndex:9},{value:"\u6B65\u9AA4\u552F\u4E00\u6807\u8BC6",paraId:5,tocIndex:9},{value:"number | string",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"\u6B65\u9AA4\u7EC4\u4EF6\u63A5\u6536\u7684 props \u7C7B\u578B\uFF1A",paraId:6,tocIndex:10},{value:"\u53C2\u6570",paraId:7,tocIndex:10},{value:"\u8BF4\u660E",paraId:7,tocIndex:10},{value:"\u7C7B\u578B",paraId:7,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:10},{value:"record",paraId:7,tocIndex:10},{value:"\u516C\u5171\u6570\u636E\u5BF9\u8C61",paraId:7,tocIndex:10},{value:"Record<string, any>",paraId:7,tocIndex:10},{value:"-",paraId:7,tocIndex:10},{value:"setRecord",paraId:7,tocIndex:10},{value:"\u66F4\u65B0\u516C\u5171\u6570\u636E\u7684\u65B9\u6CD5",paraId:7,tocIndex:10},{value:"(data: Record<string, any>) => void",paraId:7,tocIndex:10},{value:"-",paraId:7,tocIndex:10},{value:"next",paraId:7,tocIndex:10},{value:"\u4E0B\u4E00\u6B65\u65B9\u6CD5",paraId:7,tocIndex:10},{value:"() => void",paraId:7,tocIndex:10},{value:"-",paraId:7,tocIndex:10},{value:"prev",paraId:7,tocIndex:10},{value:"\u4E0A\u4E00\u6B65\u65B9\u6CD5",paraId:7,tocIndex:10},{value:"() => void",paraId:7,tocIndex:10},{value:"-",paraId:7,tocIndex:10},{value:"dispatch",paraId:7,tocIndex:10},{value:"\u6D3E\u53D1\u4E8B\u4EF6\u65B9\u6CD5",paraId:7,tocIndex:10},{value:"DispatchType",paraId:7,tocIndex:10},{value:"-",paraId:7,tocIndex:10},{value:"\u4F7F\u7528 ",paraId:8,tocIndex:11},{value:"record",paraId:8,tocIndex:11},{value:" \u5728\u6B65\u9AA4\u95F4\u5171\u4EAB\u6570\u636E",paraId:8,tocIndex:11},{value:"\u901A\u8FC7 ",paraId:8,tocIndex:11},{value:"ref",paraId:8,tocIndex:11},{value:" \u8C03\u7528\u6B65\u9AA4\u7EC4\u4EF6\u5185\u90E8\u65B9\u6CD5\u8FDB\u884C\u8868\u5355\u9A8C\u8BC1",paraId:8,tocIndex:11},{value:"\u4F7F\u7528 ",paraId:8,tocIndex:11},{value:"dispatch",paraId:8,tocIndex:11},{value:" \u7EDF\u4E00\u7BA1\u7406\u6B65\u9AA4\u6D41\u8F6C",paraId:8,tocIndex:11},{value:"\u5408\u7406\u4F7F\u7528 ",paraId:8,tocIndex:11},{value:"footerRender",paraId:8,tocIndex:11},{value:" \u81EA\u5B9A\u4E49\u64CD\u4F5C\u6309\u94AE",paraId:8,tocIndex:11},{value:"\u6BCF\u4E2A\u6B65\u9AA4\u7EC4\u4EF6\u5E94\u8BE5\u662F\u72EC\u7ACB\u4E14\u53EF\u590D\u7528\u7684",paraId:8,tocIndex:11},{value:"\u6B22\u8FCE\u63D0\u4EA4 Issue \u6216 Pull Request \u6765\u5E2E\u52A9\u6539\u8FDB\u8FD9\u4E2A\u7EC4\u4EF6\uFF01",paraId:9,tocIndex:12}]}}]);
