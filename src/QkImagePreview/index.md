# 图片预览

- 基于 antd Image 二次封装
- 支持以 JS 方式在任意位置调用

## 示例
```tsx
import { QkImagePreview } from 'react-components';
import { Button, Typography } from 'antd';
import React from 'react';
const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  return (
    <div>
      <div>
        <Button
          onClick={() => {
            QkImagePreview.Create({
              src: 'https://img0.baidu.com/it/u=3569066416,3506148795&fm=253&fmt=auto&app=138&f=JPEG?w=875&h=500',
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

## API
```ts
type QkImagePreviewType = {
  src: string; //图片地址
  onCancel?: () => void; //关闭预览回调
};
```
