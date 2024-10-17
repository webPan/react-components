# 按钮折叠

> 当按钮过多时，可能需要选择性的需要收起某些按钮，这个时候就可以用到这个组件

- 按钮过多，可以选择性将按钮放入到更多中

## 示例
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

## API

```ts
/** 按钮展开 收起 */
type QkBtnGroupCollapsedType = {
  /** 数据源 */
  data: {
    label: string; //按钮文字
    key: string | number; //key
    collapsed?: boolean; //石佛折叠
    show?: boolean; //是否显示
    disabled?: boolean; //是否禁用
  }[];
  onClick?: (value: string) => void; //点击事件
};
```
