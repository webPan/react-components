import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps, Space } from 'antd';
import React from 'react';

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
const QkBtnGroupCollapsed: React.FC<QkBtnGroupCollapsedType> = ({
  data,
  onClick,
}) => {
  const collapsed: MenuProps['items'] = [];
  const expand: Record<string, any>[] = [];
  data
    .filter((item) => item.show !== false)
    .forEach((item) => {
      if (item.collapsed) {
        collapsed.push(item as any);
      } else {
        expand.push(item);
      }
    });
  return (
    <>
      {expand.map((item) => {
        return (
          <Button
            disabled={item.disabled === true}
            type="link"
            key={item.key}
            onClick={() => {
              if (typeof onClick === 'function') {
                onClick(item.key);
              }
            }}
          >
            {item.label}
          </Button>
        );
      })}
      {collapsed.length > 0 && (
        <Dropdown
          arrow={true}
          menu={{
            items: collapsed,
            onClick: (event) => {
              if (typeof onClick === 'function') {
                onClick(event.key);
              }
            },
          }}
        >
          <Button type="link">
            <Space>
              更多
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      )}
    </>
  );
};

export default QkBtnGroupCollapsed;
