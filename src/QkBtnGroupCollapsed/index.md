# 按钮折叠

> 当按钮过多时，可能需要选择性的需要收起某些按钮，这个时候就可以用到这个组件

- 按钮过多，可以选择性将按钮放入到更多中

```tsx
import { QkBtnGroupCollapsed } from 'react-components';
import React from 'react';

const Example = () => {
  return (
    <div>
      <div>
        <QkBtnGroupCollapsed
          onClick={(key) => {
            console.log(key);
          }}
          data={[
            { label: '新增', collapsed: false, key: 'ADD' },
            { label: '删除', collapsed: false, key: 'DELETE' },
            { label: '编辑', collapsed: false, key: 'EDIT' },
          ]}
        />
      </div>
      <div>
        <QkBtnGroupCollapsed
          onClick={(key) => {
            console.log(key);
          }}
          data={[
            { label: '新增', collapsed: false, key: 'ADD' },
            { label: '删除', collapsed: true, key: 'DELETE' },
            { label: '编辑', collapsed: true, key: 'EDIT' },
          ]}
        />
      </div>
    </div>
  );
};

export default Example;
```
