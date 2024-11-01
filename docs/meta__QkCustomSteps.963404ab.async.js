"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[5],{44934:function(w,p,n){var y;n.r(p),n.d(p,{demos:function(){return U}});var f=n(43953),m=n.n(f),b=n(9083),L=n.n(b),k=n(91184),g=n.n(k),e=n(38497),N=n(48183),A=n(56690),K=n(50451),U={"qkcustomsteps-demo-0":{component:e.memo(e.lazy(g()(m()().mark(function E(){var d,i,o,_,c,t,v,R,T,C,D,P,x,W,Q,S,O,I,M;return m()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(n.bind(n,56690));case 2:return d=r.sent,i=d.Button,o=d.Divider,_=d.message,c=d.Typography,r.next=9,Promise.resolve().then(n.t.bind(n,38497,19));case 9:return t=r.sent,v=t.forwardRef,R=t.useImperativeHandle,T=t.useState,r.next=15,Promise.resolve().then(n.bind(n,50451));case 15:return C=r.sent,D=C.QkCustomSteps,P=c.Title,x=c.Paragraph,W=c.Text,Q=c.Link,S=v(function(a,u){var s=a.dispatch;return R(u,function(){return{save:function(){_.success("\u6570\u636E\u4FDD\u5B58\u6210\u529F")}}}),e.createElement("div",{style:{padding:"100px",fontSize:"20px"}},e.createElement(i,{onClick:function(){s("next")}},"\u7EC4\u4EF6\u91CC\u9762\u6267\u884C\u4E0B\u4E00\u6B65\uFF08\u4FDD\u5B58\u6570\u636E\uFF09"),e.createElement(o,null),e.createElement(i,{onClick:function(){s("setCurrent",{current:1})}},"\u53EA\u662F\u7B80\u5355\u4E0B\u4E00\u6B65\uFF08\u4E0D\u4FDD\u5B58\u6570\u636E\uFF09"))}),O=v(function(a,u){var s=a.dispatch,l=a.record,h=a.setRecord;return e.createElement("div",{style:{padding:"100px",fontSize:"20px"}},e.createElement("h2",null,"\u76EE\u524D\u7684\u5168\u5C40\u6570\u636E"),e.createElement(o,null),e.createElement("div",null,JSON.stringify(l,null,2)),e.createElement(o,null),e.createElement(i,{onClick:function(){h({b:2}),s("next")}},"\u7ED9\u6B65\u9AA4\u4E09\u4E2D\u4F20\u9012\u4E00\u4E9B\u6570\u636E"))}),I=v(function(a,u){var s=a.record,l=a.dispatch;return e.createElement("div",{style:{padding:"100px",fontSize:"20px"}},e.createElement("h2",null,"\u76EE\u524D\u7684\u5168\u5C40\u6570\u636E"),e.createElement(o,null),e.createElement("div",null,JSON.stringify(s,null,2)),e.createElement(o,null),e.createElement(i,{onClick:function(){l("next",{a:1,b:2})}},"\u7ED9\u6B65\u9AA4\u4E09\u4E2D\u4F20\u9012\u4E00\u4E9B\u6570\u636E"))}),M=function(){var u=T({a:1}),s=L()(u,2),l=s[0],h=s[1],B=[{title:"\u6B65\u9AA4\u4E00",content:S},{title:"\u6B65\u9AA4\u4E8C",content:O},{title:"\u6B65\u9AA4\u4E09",content:I}];return e.createElement("div",null,e.createElement(c,null,e.createElement(P,null,"QkCustomSteps \u7EC4\u4EF6"),e.createElement(x,null,e.createElement("ul",null,e.createElement("li",null,"\u6570\u636E\u8D2F\u7A7F\u5168\u7EC4\u4EF6"),e.createElement("li",null,"\u5E95\u90E8\u6309\u94AE\u53EF\u81EA\u5B9A\u4E49"),e.createElement("li",null,"\u7EC4\u4EF6\u5185\u90E8\u65B9\u6CD5\u5916\u5C42\u53EF\u8C03\u7528")))),e.createElement(D,{items:B,current:0,record:l}))},r.abrupt("return",{default:M});case 23:case"end":return r.stop()}},E)})))),asset:{type:"BLOCK",id:"qkcustomsteps-demo-0",refAtomIds:["QkCustomSteps"],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Divider, message, Typography } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { QkCustomSteps } from 'react-components';
import { type ForwardRefPropsType } from './../QkCustomSteps';
const { Title, Paragraph, Text, Link } = Typography;

const Step1 = forwardRef<any, ForwardRefPropsType>((props, ref) => {
  const { dispatch } = props;
  useImperativeHandle(ref, () => ({
    save() {
      message.success('\u6570\u636E\u4FDD\u5B58\u6210\u529F');
    },
  }));
  return (
    <div style={{ padding: '100px', fontSize: '20px' }}>
      <Button
        onClick={() => {
          dispatch('next');
        }}
      >
        \u7EC4\u4EF6\u91CC\u9762\u6267\u884C\u4E0B\u4E00\u6B65\uFF08\u4FDD\u5B58\u6570\u636E\uFF09
      </Button>
      <Divider />
      <Button
        onClick={() => {
          dispatch('setCurrent', { current: 1 });
        }}
      >
        \u53EA\u662F\u7B80\u5355\u4E0B\u4E00\u6B65\uFF08\u4E0D\u4FDD\u5B58\u6570\u636E\uFF09
      </Button>
    </div>
  );
});

const Step2 = forwardRef<any, ForwardRefPropsType>((props, ref) => {
  const { dispatch, record, setRecord } = props;
  return (
    <div style={{ padding: '100px', fontSize: '20px' }}>
      <h2>\u76EE\u524D\u7684\u5168\u5C40\u6570\u636E</h2>
      <Divider />
      <div>{JSON.stringify(record, null, 2)}</div>
      <Divider />
      <Button
        onClick={() => {
          setRecord({ b: 2 });
          dispatch('next');
        }}
      >
        \u7ED9\u6B65\u9AA4\u4E09\u4E2D\u4F20\u9012\u4E00\u4E9B\u6570\u636E
      </Button>
    </div>
  );
});
const Step3 = forwardRef<any, ForwardRefPropsType>((props, ref) => {
  const { record, dispatch } = props;
  return (
    <div style={{ padding: '100px', fontSize: '20px' }}>
      <h2>\u76EE\u524D\u7684\u5168\u5C40\u6570\u636E</h2>
      <Divider />
      <div>{JSON.stringify(record, null, 2)}</div>
      <Divider />
      <Button
        onClick={() => {
          dispatch('next', { a: 1, b: 2 });
        }}
      >
        \u7ED9\u6B65\u9AA4\u4E09\u4E2D\u4F20\u9012\u4E00\u4E9B\u6570\u636E
      </Button>
    </div>
  );
});
const Example = () => {
  const [record, setRecord] = useState<Record<string, any>>({
    a: 1,
  });
  const items = [
    {
      title: '\u6B65\u9AA4\u4E00',
      content: Step1,
    },
    {
      title: '\u6B65\u9AA4\u4E8C',
      content: Step2,
    },
    {
      title: '\u6B65\u9AA4\u4E09',
      content: Step3,
    },
  ];
  return (
    <div>
      <Typography>
        <Title>QkCustomSteps \u7EC4\u4EF6</Title>
        <Paragraph>
          <ul>
            <li>\u6570\u636E\u8D2F\u7A7F\u5168\u7EC4\u4EF6</li>
            <li>\u5E95\u90E8\u6309\u94AE\u53EF\u81EA\u5B9A\u4E49</li>
            <li>\u7EC4\u4EF6\u5185\u90E8\u65B9\u6CD5\u5916\u5C42\u53EF\u8C03\u7528</li>
          </ul>
        </Paragraph>
      </Typography>
      <QkCustomSteps items={items} current={0} record={record} />
    </div>
  );
};

export default Example;`},antd:{type:"NPM",value:"5.20.2"},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{antd:A,react:y||(y=n.t(e,2)),"react-components":K},renderOpts:{compile:function(){var E=g()(m()().mark(function i(){var o,_=arguments;return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(440).then(n.bind(n,86440));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,_));case 3:case"end":return t.stop()}},i)}));function d(){return E.apply(this,arguments)}return d}()}}}},20808:function(w,p,n){n.r(p),n.d(p,{texts:function(){return f}});var y=n(48183);const f=[{value:"\u6570\u636E\u548C\u65B9\u6CD5\u8D2F\u7A7F\u5168\u5C40\uFF0C\u9AD8\u5EA6\u81EA\u5B9A\u4E49",paraId:0,tocIndex:0},{value:`type InstanceType = {
  /** \u4E0B\u4E00\u6B65 */
  next: () => void;
  /** \u4E0A\u4E00\u6B65 */
  prev: () => void;
  /** \u521D\u59CB\u6B65\u9AA4 */
  current: number;
  /** \u8D2F\u7A7F\u6574\u4E2A\u7EC4\u4EF6\u6570\u636E */
  record: Record<string, any>;
  /** \u4E0B\u4E00\u6B65\u7684Loading */
  nextLoading: boolean;
  /** \u5168\u5C40\u53EF\u8C03\u7528\u7684\u65B9\u6CD5 */
  dispatch: DispatchType;
};
type QkCustomStepsType = {
  /** \u5404\u6B65\u9AA4\u7EC4\u4EF6 */
  items: {
    title: string; //\u6807\u9898
    content: (ref: any) => ReactNode; //\u7EC4\u4EF6
    hideInSteps?: boolean; //\u5F53\u524D\u6B65\u9AA4\u662F\u5426\u5728step\u4E2D\u9690\u85CF
    key?: number | string; //\u5206\u7C7B\u7528\u7684\uFF0C\u5982\u679C\u4E24\u4E2A\u7C7B\u76F8\u540C\u9700\u8981\u7528\u4E00\u4E2A\u6B65\u9AA4\uFF0Ckey\u9700\u8981\u8BBE\u7F6E\u76F8\u540C
  }[];
  /** \u5F53\u524D\u6B65\u9AA4 */
  current: number;
  loading?: boolean;
  /** \u516C\u5171\u6570\u636E */
  record: Record<string, any>;
  /** \u81EA\u5B9A\u4E49\u5E95\u90E8 null->\u4E0D\u6E32\u67D3\u5E95\u90E8\u6309\u94AE undefined->\u4F7F\u7528\u539F\u751F\u5E95\u90E8\u6309\u94AE  */
  footerRender?: (
    instance: InstanceType & Record<string, any>,
  ) => ReactNode | null | undefined;
  /** \u53EF\u4EE5\u66F4\u6539\u4E0B\u4E00\u6B65\u6587\u6848 */
  nextText?: string | ((current: number) => string);
  /** \u4E0B\u4E00\u6B65 */
  onChange?: (data: {
    current: number;
    record: Record<string, any>;
    type: 'next' | 'prev' | 'change';
  }) => void;
  onValuesChange?: (values: Record<string, any>) => void;
};

export type DispatchType = (
  type: 'next' | 'prev' | 'change' | 'setRecord' | 'setCurrent',
  data?: Record<string, any>,
) => void;

//\u5B9E\u4F8B
export type ForwardRefPropsType = {
  record: Record<string, any>;
  setRecord: (data: Record<string, any>) => void;
  next: Pick<InstanceType, 'next'>['next'];
  prev: Pick<InstanceType, 'prev'>['prev'];
  dispatch: DispatchType;
};
`,paraId:1,tocIndex:2}]}}]);
