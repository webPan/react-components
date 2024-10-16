# 自定义Modal

```tsx
import {QkCustomModal} from 'react-components';
import React, { useState } from 'react';
import { Button, Space, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Typography>
        <Title>QkCustomModal 组件</Title>
        <Paragraph>
          <ul>
            <li>自定义弹框组件</li>
            <li>可当作组件用</li>
            <li>也可通过js在任意位置调用改组件</li>
          </ul>
        </Paragraph>
      </Typography>
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
              }
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
