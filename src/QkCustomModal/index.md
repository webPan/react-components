# 自定义 Modal

- 自定义弹框组件
- 可当作组件用
- 也可通过 js 在任意位置调用改组件


## 示例
```tsx
import { QkCustomModal } from 'react-components';
import React, { useState } from 'react';
import { Button, Space, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Space>
        <Button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          组件弹框
        </Button>
        <Button
          onClick={() => {
            const handleModal = QkCustomModal.Create({
              title: '哈啊哈',
              children: '这里可以是组件，也可以是其他东西',
              onOk: () => {
                handleModal.destroy();
              },
              onCancel: () => {
                handleModal.destroy();
              },
            });
          }}
        >
          js调用弹框
        </Button>
      </Space>

      <QkCustomModal
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      >
        TEST
      </QkCustomModal>
    </div>
  );
};

export default Example;
```
## API
```ts

type CustomModalType = {
  /** 标题 */
  title?: string;
  /** 弹框内容 */
  children?: React.ReactNode;
  /** 弹框宽度 */
  width?: number;
  /** 确定文案 */
  okText?: string;
  /** 取消文案 */
  cancelText?: string;
  /** 取消事件回调 */
  onCancel?: () => void;
  /** 确定事件回调 */
  onOk?: () => void;
  /** 是否显示  */
  visible?: boolean;
  /** 底部按钮自定义渲染 */
  footerRender?: boolean;
  /** 主题 */
  theme?: 'APP' | 'PC';
  /** 是否需要关闭按钮 */
  closable?: boolean;
  /** 确定按钮自定义渲染 */
  okRender?: (() => React.ReactNode) | boolean;
  /** 关闭按钮自定义渲染 */
  cancelRender?: (() => React.ReactNode) | boolean;
  /** 弹框层级 */
  zIndex?: number;
};
```
