# 自定义 Modal

- 自定义弹框组件
- 可当作组件用
- 也可通过 js 在任意位置调用改组件

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
