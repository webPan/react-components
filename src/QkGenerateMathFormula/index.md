# 数学公式-手写

```tsx
/**
 * title: 数学公式-手写
 * */
import {QkGenerateMathFormula} from 'react-components';
import { Divider, Typography } from "antd";
import React from "react";
const { Title, Paragraph, Text, Link } = Typography;

/**
 * 标签队列
 * 1.  往标签队列里写入内容
 *  1.1 如果是非闭合字符，则push到队列中，并把它当成起始标签
 *  1.2 如果是闭合字符，则返回最后一个标签，并删除标签队列最后一个标签，形成一闭一合
 * */

const Example = ()=>{
  const html = String.raw`下标 CO_{2^{22}} 上标CO^{2} 下划线 \underline{AB} 上划线 \overline{ABC DEFG} 复杂的 \sum{^{1000}_{n = 100}} A/R CDM项目活动生物质燃烧造成非CO[[2]]温室气体排放增加的估算工具（V4.0.0，EB65） 项目采用方法学HB-AR-CM-001-V01河北承德森林固碳生态产品项目方法学V01`;
  const html2 = String.raw`项目活动的固碳量由公式计算：∆C_{NET}=\sum{_{t = 1}^{t}} ABC ∆C_{NET,t} 审定 \sum{_{t=1}^{T}}`
  return <div>
    <Typography>
      <Title>QkGenerateMathFormula 组件</Title>
      <Paragraph>
        <ul>
          <li>手写数学公式的实现</li>
          <li>支持无极上标、无极下标、上划线、下划线、求和</li>
        </ul>
      </Paragraph>
    </Typography>
    <p>原始格式：{html}</p>
    <QkGenerateMathFormula content={html}/>
    <Divider/>
    <p>原始格式：{html2}</p>
    <QkGenerateMathFormula content={html2}/>
  </div>
}

export default Example
```
