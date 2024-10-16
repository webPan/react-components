# 图片预览

```tsx
import {QkImagePreview} from 'react-components';
import { Button, Typography } from 'antd';
import React from 'react';
const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  return (
    <div>
      <Typography>
        <Title>QkImagePreview</Title>
        <Paragraph>
          <ul>
            <li>基于antd Image 二次封装</li>
            <li>支持以JS方式在任意位置调用</li>
          </ul>
        </Paragraph>
      </Typography>
      <div>
        <Button
          onClick={() => {
            QkImagePreview.Create({
              src: 'https://img0.baidu.com/it/u=3569066416,3506148795&fm=253&fmt=auto&app=138&f=JPEG?w=875&h=500'
            });
          }}
        >
          JS调用方式预览图片
        </Button>
      </div>
    </div>
  );
};

export default Example;
```
