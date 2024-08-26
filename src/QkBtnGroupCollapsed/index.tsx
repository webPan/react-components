import React from 'react';
import { Button, Dropdown, MenuProps, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

/** 按钮展开 收起 */
type QkBtnGroupCollapsedType = {
  data: {
    label: string;
    key: string | number;
    collapsed?: boolean;
    show?: boolean;
    disabled?: boolean;
  }[];
  onClick?: (value: string) => void;
};
const QkBtnGroupCollapsed: React.FC<QkBtnGroupCollapsedType> = ({
  data,
  onClick
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
              if (typeof onClick == 'function') {
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
              if (typeof onClick == 'function') {
                onClick(event.key);
              }
            }
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
