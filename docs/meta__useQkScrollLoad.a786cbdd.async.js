"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[713],{51226:function(L,t,n){var m;n.r(t),n.d(t,{demos:function(){return I}});var u=n(43953),a=n.n(u),D=n(91184),_=n.n(D),o=n(38497),C=n(98874),M=n(56690),h=n(26869),x=n.n(h),O=n(50451),I={"useqkscrollload-demo-0":{component:o.memo(o.lazy(_()(a()().mark(function s(){var r,d,i,v,E,e,P,y,T,g,R,N,f;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(n.bind(n,56690));case 2:return r=l.sent,d=r.Typography,l.next=6,Promise.resolve().then(n.t.bind(n,26869,23));case 6:return i=l.sent,v=i.default,l.next=10,Promise.resolve().then(n.t.bind(n,38497,19));case 10:return E=l.sent,e=E.default,l.next=14,Promise.resolve().then(n.bind(n,50451));case 14:return P=l.sent,y=P.useQkScrollLoad,T=d.Title,g=d.Paragraph,R=d.Text,N=d.Link,f=function(){var p=y({placeholder:"\u963F\u591A",delay:0,rootMargin:"100px"});return e.createElement("div",null,e.createElement(p,null,function(c){return console.log(c+"\u4E09"),e.createElement("p",{className:v({fade:c}),id:"zhangsan"},"\u5F20\u4E09")}),e.createElement("div",null,"1"),e.createElement("div",null,"2"),e.createElement("div",null,"3"),e.createElement("div",null,"4"),e.createElement("div",null,"5"),e.createElement("div",null,"6"),e.createElement("div",null,"7"),e.createElement("div",null,"8"),e.createElement("div",null,"9"),e.createElement("div",null,"10"),e.createElement("div",null,"11"),e.createElement("div",null,"12"),e.createElement("div",null,"13"),e.createElement("div",null,"14"),e.createElement("div",null,"15"),e.createElement("div",null,"16"),e.createElement("div",null,"17"),e.createElement("div",null,"18"),e.createElement("div",null,"19"),e.createElement("div",null,"20"),e.createElement("div",null,"21"),e.createElement("div",null,"22"),e.createElement("div",null,"23"),e.createElement("div",null,"24"),e.createElement("div",null,"25"),e.createElement("div",null,"26"),e.createElement("div",null,"27"),e.createElement("div",null,"28"),e.createElement("div",null,"29"),e.createElement("div",null,"30"),e.createElement("div",null,"31"),e.createElement("div",null,"32"),e.createElement("div",null,"33"),e.createElement("div",null,"34"),e.createElement("div",null,"35"),e.createElement("div",null,"36"),e.createElement("div",null,"37"),e.createElement("div",null,"38"),e.createElement("div",null,"39"),e.createElement("div",null,"40"),e.createElement("div",null,"41"),e.createElement("div",null,"42"),e.createElement("div",null,"43"),e.createElement("div",null,"44"),e.createElement("div",null,"45"),e.createElement("div",null,"46"),e.createElement("div",null,"47"),e.createElement("div",null,"48"),e.createElement("div",null,"49"),e.createElement("div",null,"50"),e.createElement("div",null,"1"),e.createElement("div",null,"2"),e.createElement("div",null,"3"),e.createElement("div",null,"4"),e.createElement("div",null,"5"),e.createElement("div",null,"6"),e.createElement("div",null,"7"),e.createElement("div",null,"8"),e.createElement("div",null,"9"),e.createElement("div",null,"10"),e.createElement("div",null,"11"),e.createElement("div",null,"12"),e.createElement("div",null,"13"),e.createElement("div",null,"14"),e.createElement("div",null,"15"),e.createElement("div",null,"16"),e.createElement("div",null,"17"),e.createElement("div",null,"18"),e.createElement("div",null,"19"),e.createElement("div",null,"20"),e.createElement("div",null,"21"),e.createElement("div",null,"22"),e.createElement("div",null,"23"),e.createElement(p,{delay:0,placeholder:e.createElement("div",null,"abc")},function(c){return e.createElement("div",{className:v({fade:c}),id:"zhangsan"},e.createElement("input",{type:"text",placeholder:"\u54C8\u554A\u54C8"}),e.createElement("div",{className:"lisi"},"\u674E\u56DB"))}),e.createElement("div",null,"24"),e.createElement("div",null,"25"),e.createElement("div",null,"26"),e.createElement("div",null,"27"),e.createElement("div",null,"28"),e.createElement("div",null,"29"),e.createElement("div",null,"30"),e.createElement("div",null,"31"),e.createElement("div",null,"32"),e.createElement("div",null,"33"),e.createElement("div",null,"34"),e.createElement("div",null,"35"),e.createElement("div",null,"36"),e.createElement("div",null,"37"),e.createElement("div",null,"38"),e.createElement("div",null,"39"),e.createElement("div",null,"40"),e.createElement("div",null,"41"),e.createElement(p,null,e.createElement("div",{className:"wangwu"},"\u738B\u4E94")),e.createElement("div",null,"42"),e.createElement("div",null,"43"),e.createElement("div",null,"44"),e.createElement("div",null,"45"),e.createElement("div",null,"46"),e.createElement("div",null,"47"),e.createElement("div",null,"48"),e.createElement("div",null,"49"),e.createElement("div",null,"50"))},l.abrupt("return",{default:f});case 19:case"end":return l.stop()}},s)})))),asset:{type:"BLOCK",id:"useqkscrollload-demo-0",refAtomIds:["useQkScrollLoad"],dependencies:{"index.tsx":{type:"FILE",value:`/**
 * title: \u7EC4\u4EF6\u61D2\u52A0\u8F7D
 * */
import { Typography } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { useQkScrollLoad } from 'react-components';

const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  const QkScrollLoad = useQkScrollLoad({
    placeholder: '\u963F\u591A',
    delay: 0,
    rootMargin: '100px',
  });
  return (
    <div>
      <QkScrollLoad>
        {(visible) => {
          console.log(visible + '\u4E09');
          return (
            <p
              className={classNames({
                fade: visible,
              })}
              id="zhangsan"
            >
              \u5F20\u4E09
            </p>
          );
        }}
      </QkScrollLoad>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
      <div>17</div>
      <div>18</div>
      <div>19</div>
      <div>20</div>
      <div>21</div>
      <div>22</div>
      <div>23</div>
      <div>24</div>
      <div>25</div>
      <div>26</div>
      <div>27</div>
      <div>28</div>
      <div>29</div>
      <div>30</div>
      <div>31</div>
      <div>32</div>
      <div>33</div>
      <div>34</div>
      <div>35</div>
      <div>36</div>
      <div>37</div>
      <div>38</div>
      <div>39</div>
      <div>40</div>
      <div>41</div>
      <div>42</div>
      <div>43</div>
      <div>44</div>
      <div>45</div>
      <div>46</div>
      <div>47</div>
      <div>48</div>
      <div>49</div>
      <div>50</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
      <div>17</div>
      <div>18</div>
      <div>19</div>
      <div>20</div>
      <div>21</div>
      <div>22</div>
      <div>23</div>

      <QkScrollLoad delay={0} placeholder={<div>abc</div>}>
        {(visible) => {
          return (
            <div
              className={classNames({
                fade: visible,
              })}
              id="zhangsan"
            >
              <input type="text" placeholder="\u54C8\u554A\u54C8" />
              <div className="lisi">\u674E\u56DB</div>
            </div>
          );
        }}
      </QkScrollLoad>
      <div>24</div>
      <div>25</div>
      <div>26</div>
      <div>27</div>
      <div>28</div>
      <div>29</div>
      <div>30</div>
      <div>31</div>
      <div>32</div>
      <div>33</div>
      <div>34</div>
      <div>35</div>
      <div>36</div>
      <div>37</div>
      <div>38</div>
      <div>39</div>
      <div>40</div>
      <div>41</div>
      <QkScrollLoad>
        <div className="wangwu">\u738B\u4E94</div>
      </QkScrollLoad>
      <div>42</div>
      <div>43</div>
      <div>44</div>
      <div>45</div>
      <div>46</div>
      <div>47</div>
      <div>48</div>
      <div>49</div>
      <div>50</div>
    </div>
  );
};

export default Example;`},antd:{type:"NPM",value:"5.20.2"},classnames:{type:"NPM",value:"2.5.1"},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{antd:M,classnames:h,react:m||(m=n.t(o,2)),"react-components":O},renderOpts:{compile:function(){var s=_()(a()().mark(function d(){var i,v=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(440).then(n.bind(n,86440));case 2:return e.abrupt("return",(i=e.sent).default.apply(i,v));case 3:case"end":return e.stop()}},d)}));function r(){return s.apply(this,arguments)}return r}()}}}},9641:function(L,t,n){n.r(t),n.d(t,{texts:function(){return u}});var m=n(98874);const u=[{value:"\u53EF\u4EE5\u6309F12\u6EDA\u52A8\u9875\u9762\u67E5\u770BDOM\u5143\u7D20\u7684\u53D8\u5316",paraId:0,tocIndex:0},{value:"React \u4E2D\u4E00\u5207\u7686\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u5229\u7528 IntersectionObserver \u5B9E\u73B0\u61D2\u52A0\u8F7D\u65B9\u6848",paraId:1,tocIndex:0},{value:"\u652F\u6301\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3\u65F6\u673A\uFF0C\u5305\u62EC\uFF08\u65F6\u95F4\u3001\u53EF\u89C6\u533A\u57DF\u8DDD\u79BB\uFF09",paraId:1,tocIndex:0},{value:`type CommonType = {
  delay?: number; //\u5EF6\u8FDF\u52A0\u8F7D
  placeholder?: React.ReactNode | string | (() => React.ReactNode); //\u5360\u4F4D
  children?: ((visible: boolean) => void) | React.ReactNode; //\u6E32\u67D3\u5185\u5BB9
};
`,paraId:2,tocIndex:2}]}}]);
