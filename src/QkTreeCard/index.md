# 树型卡片

- 树形卡片,无限层级
- 可自动探测下一层级是否有子节点
- 支持异步加载及全量加载
- 内部数据，可再外部随意修改

```tsx
import { Button, Typography } from 'antd';
import React from 'react';
import { QkTreeCard } from 'react-components';
const { Title, Paragraph } = Typography;

const Index: React.FC = () => {
  const request = async (data?: Record<string, any>) => {
    return new Promise((resolve) => {
      if (!data?.key) {
        resolve([{ title: 'Expand to load', key: '01' }]);
        return;
      }

      if (data?.children) {
        resolve([]);
        return;
      }
      setTimeout(() => {
        if (data.key === '01-0') {
          resolve([]);
          return;
        }
        resolve([
          {
            title: 'Child Node',
            key: `${data.key}-0`,
          },
          {
            title: 'Child Node',
            key: `${data.key}-1`,
          },
        ]);
      }, 2000);
    });
  };

  return (
    <div>
      <div style={{ width: '100%', height: '500px', overflow: 'auto' }}>
        <QkTreeCard
          className="test"
          width={500}
          height={226}
          cardStyle={{ border: '1px solid red' }}
          request={request}
          // isLoadNextChildren
        >
          {(data, methods) => {
            return (
              <div>
                <div>{JSON.stringify(data)}</div>
                <div>
                  <Button
                    onClick={() => {
                      methods?.setRecord(data.key, { isOpen: !data.isOpen });
                    }}
                  >
                    切换展开收起
                  </Button>
                </div>
              </div>
            );
          }}
        </QkTreeCard>
      </div>
    </div>
  );
};

export default Index;
```
