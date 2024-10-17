"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[713],{18508:function(L,r,n){var m;n.r(r),n.d(r,{demos:function(){return I}});var u=n(43953),v=n.n(u),D=n(91184),_=n.n(D),o=n(38497),C=n(55694),M=n(79021),h=n(26869),x=n.n(h),O=n(25749),I={"useqkscrollload-demo-0":{component:o.memo(o.lazy(_()(v()().mark(function s(){var a,d,t,i,E,e,P,y,T,g,R,N,f;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(n.bind(n,79021));case 2:return a=l.sent,d=a.Typography,l.next=6,Promise.resolve().then(n.t.bind(n,26869,23));case 6:return t=l.sent,i=t.default,l.next=10,Promise.resolve().then(n.t.bind(n,38497,19));case 10:return E=l.sent,e=E.default,l.next=14,Promise.resolve().then(n.bind(n,25749));case 14:return P=l.sent,y=P.useQkScrollLoad,T=d.Title,g=d.Paragraph,R=d.Text,N=d.Link,f=function(){var p=y({placeholder:"\u963F\u591A",delay:0,rootMargin:"100px"});return e.createElement("div",null,e.createElement(p,null,function(c){return console.log(c+"\u4E09"),e.createElement("p",{className:i({fade:c}),id:"zhangsan"},"\u5F20\u4E09")}),e.createElement("div",null,"1"),e.createElement("div",null,"2"),e.createElement("div",null,"3"),e.createElement("div",null,"4"),e.createElement("div",null,"5"),e.createElement("div",null,"6"),e.createElement("div",null,"7"),e.createElement("div",null,"8"),e.createElement("div",null,"9"),e.createElement("div",null,"10"),e.createElement("div",null,"11"),e.createElement("div",null,"12"),e.createElement("div",null,"13"),e.createElement("div",null,"14"),e.createElement("div",null,"15"),e.createElement("div",null,"16"),e.createElement("div",null,"17"),e.createElement("div",null,"18"),e.createElement("div",null,"19"),e.createElement("div",null,"20"),e.createElement("div",null,"21"),e.createElement("div",null,"22"),e.createElement("div",null,"23"),e.createElement("div",null,"24"),e.createElement("div",null,"25"),e.createElement("div",null,"26"),e.createElement("div",null,"27"),e.createElement("div",null,"28"),e.createElement("div",null,"29"),e.createElement("div",null,"30"),e.createElement("div",null,"31"),e.createElement("div",null,"32"),e.createElement("div",null,"33"),e.createElement("div",null,"34"),e.createElement("div",null,"35"),e.createElement("div",null,"36"),e.createElement("div",null,"37"),e.createElement("div",null,"38"),e.createElement("div",null,"39"),e.createElement("div",null,"40"),e.createElement("div",null,"41"),e.createElement("div",null,"42"),e.createElement("div",null,"43"),e.createElement("div",null,"44"),e.createElement("div",null,"45"),e.createElement("div",null,"46"),e.createElement("div",null,"47"),e.createElement("div",null,"48"),e.createElement("div",null,"49"),e.createElement("div",null,"50"),e.createElement("div",null,"1"),e.createElement("div",null,"2"),e.createElement("div",null,"3"),e.createElement("div",null,"4"),e.createElement("div",null,"5"),e.createElement("div",null,"6"),e.createElement("div",null,"7"),e.createElement("div",null,"8"),e.createElement("div",null,"9"),e.createElement("div",null,"10"),e.createElement("div",null,"11"),e.createElement("div",null,"12"),e.createElement("div",null,"13"),e.createElement("div",null,"14"),e.createElement("div",null,"15"),e.createElement("div",null,"16"),e.createElement("div",null,"17"),e.createElement("div",null,"18"),e.createElement("div",null,"19"),e.createElement("div",null,"20"),e.createElement("div",null,"21"),e.createElement("div",null,"22"),e.createElement("div",null,"23"),e.createElement(p,{delay:0,placeholder:e.createElement("div",null,"abc")},function(c){return e.createElement("div",{className:i({fade:c}),id:"zhangsan"},e.createElement("input",{type:"text",placeholder:"\u54C8\u554A\u54C8"}),e.createElement("div",{className:"lisi"},"\u674E\u56DB"))}),e.createElement("div",null,"24"),e.createElement("div",null,"25"),e.createElement("div",null,"26"),e.createElement("div",null,"27"),e.createElement("div",null,"28"),e.createElement("div",null,"29"),e.createElement("div",null,"30"),e.createElement("div",null,"31"),e.createElement("div",null,"32"),e.createElement("div",null,"33"),e.createElement("div",null,"34"),e.createElement("div",null,"35"),e.createElement("div",null,"36"),e.createElement("div",null,"37"),e.createElement("div",null,"38"),e.createElement("div",null,"39"),e.createElement("div",null,"40"),e.createElement("div",null,"41"),e.createElement(p,null,e.createElement("div",{className:"wangwu"},"\u738B\u4E94")),e.createElement("div",null,"42"),e.createElement("div",null,"43"),e.createElement("div",null,"44"),e.createElement("div",null,"45"),e.createElement("div",null,"46"),e.createElement("div",null,"47"),e.createElement("div",null,"48"),e.createElement("div",null,"49"),e.createElement("div",null,"50"))},l.abrupt("return",{default:f});case 19:case"end":return l.stop()}},s)})))),asset:{type:"BLOCK",id:"useqkscrollload-demo-0",refAtomIds:["useQkScrollLoad"],dependencies:{"index.tsx":{type:"FILE",value:`/**\r
 * title: \u7EC4\u4EF6\u61D2\u52A0\u8F7D\r
 * */\r
import { Typography } from 'antd';\r
import classNames from 'classnames';\r
import React from 'react';\r
import { useQkScrollLoad } from 'react-components';\r
\r
const { Title, Paragraph, Text, Link } = Typography;\r
\r
const Example = () => {\r
  const QkScrollLoad = useQkScrollLoad({\r
    placeholder: '\u963F\u591A',\r
    delay: 0,\r
    rootMargin: '100px',\r
  });\r
  return (\r
    <div>\r
      <QkScrollLoad>\r
        {(visible) => {\r
          console.log(visible + '\u4E09');\r
          return (\r
            <p\r
              className={classNames({\r
                fade: visible,\r
              })}\r
              id="zhangsan"\r
            >\r
              \u5F20\u4E09\r
            </p>\r
          );\r
        }}\r
      </QkScrollLoad>\r
      <div>1</div>\r
      <div>2</div>\r
      <div>3</div>\r
      <div>4</div>\r
      <div>5</div>\r
      <div>6</div>\r
      <div>7</div>\r
      <div>8</div>\r
      <div>9</div>\r
      <div>10</div>\r
      <div>11</div>\r
      <div>12</div>\r
      <div>13</div>\r
      <div>14</div>\r
      <div>15</div>\r
      <div>16</div>\r
      <div>17</div>\r
      <div>18</div>\r
      <div>19</div>\r
      <div>20</div>\r
      <div>21</div>\r
      <div>22</div>\r
      <div>23</div>\r
      <div>24</div>\r
      <div>25</div>\r
      <div>26</div>\r
      <div>27</div>\r
      <div>28</div>\r
      <div>29</div>\r
      <div>30</div>\r
      <div>31</div>\r
      <div>32</div>\r
      <div>33</div>\r
      <div>34</div>\r
      <div>35</div>\r
      <div>36</div>\r
      <div>37</div>\r
      <div>38</div>\r
      <div>39</div>\r
      <div>40</div>\r
      <div>41</div>\r
      <div>42</div>\r
      <div>43</div>\r
      <div>44</div>\r
      <div>45</div>\r
      <div>46</div>\r
      <div>47</div>\r
      <div>48</div>\r
      <div>49</div>\r
      <div>50</div>\r
      <div>1</div>\r
      <div>2</div>\r
      <div>3</div>\r
      <div>4</div>\r
      <div>5</div>\r
      <div>6</div>\r
      <div>7</div>\r
      <div>8</div>\r
      <div>9</div>\r
      <div>10</div>\r
      <div>11</div>\r
      <div>12</div>\r
      <div>13</div>\r
      <div>14</div>\r
      <div>15</div>\r
      <div>16</div>\r
      <div>17</div>\r
      <div>18</div>\r
      <div>19</div>\r
      <div>20</div>\r
      <div>21</div>\r
      <div>22</div>\r
      <div>23</div>\r
\r
      <QkScrollLoad delay={0} placeholder={<div>abc</div>}>\r
        {(visible) => {\r
          return (\r
            <div\r
              className={classNames({\r
                fade: visible,\r
              })}\r
              id="zhangsan"\r
            >\r
              <input type="text" placeholder="\u54C8\u554A\u54C8" />\r
              <div className="lisi">\u674E\u56DB</div>\r
            </div>\r
          );\r
        }}\r
      </QkScrollLoad>\r
      <div>24</div>\r
      <div>25</div>\r
      <div>26</div>\r
      <div>27</div>\r
      <div>28</div>\r
      <div>29</div>\r
      <div>30</div>\r
      <div>31</div>\r
      <div>32</div>\r
      <div>33</div>\r
      <div>34</div>\r
      <div>35</div>\r
      <div>36</div>\r
      <div>37</div>\r
      <div>38</div>\r
      <div>39</div>\r
      <div>40</div>\r
      <div>41</div>\r
      <QkScrollLoad>\r
        <div className="wangwu">\u738B\u4E94</div>\r
      </QkScrollLoad>\r
      <div>42</div>\r
      <div>43</div>\r
      <div>44</div>\r
      <div>45</div>\r
      <div>46</div>\r
      <div>47</div>\r
      <div>48</div>\r
      <div>49</div>\r
      <div>50</div>\r
    </div>\r
  );\r
};\r
\r
export default Example;`},antd:{type:"NPM",value:"5.21.4"},classnames:{type:"NPM",value:"2.5.1"},react:{type:"NPM",value:"18.3.1"},"react-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{antd:M,classnames:h,react:m||(m=n.t(o,2)),"react-components":O},renderOpts:{compile:function(){var s=_()(v()().mark(function d(){var t,i=arguments;return v()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(350).then(n.bind(n,48350));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},d)}));function a(){return s.apply(this,arguments)}return a}()}}}},17080:function(L,r,n){n.r(r),n.d(r,{texts:function(){return u}});var m=n(55694);const u=[{value:"\u53EF\u4EE5\u6309F12\u6EDA\u52A8\u9875\u9762\u67E5\u770BDOM\u5143\u7D20\u7684\u53D8\u5316",paraId:0,tocIndex:0},{value:"React \u4E2D\u4E00\u5207\u7686\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u5229\u7528 IntersectionObserver \u5B9E\u73B0\u61D2\u52A0\u8F7D\u65B9\u6848",paraId:1,tocIndex:0},{value:"\u652F\u6301\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3\u65F6\u673A\uFF0C\u5305\u62EC\uFF08\u65F6\u95F4\u3001\u53EF\u89C6\u533A\u57DF\u8DDD\u79BB\uFF09",paraId:1,tocIndex:0},{value:`type CommonType = {\r
  delay?: number; //\u5EF6\u8FDF\u52A0\u8F7D\r
  placeholder?: React.ReactNode | string | (() => React.ReactNode); //\u5360\u4F4D\r
  children?: ((visible: boolean) => void) | React.ReactNode; //\u6E32\u67D3\u5185\u5BB9\r
};
`,paraId:2,tocIndex:2}]}}]);
