import {QkBtnGroupCollapsed} from 'react-components';
import { Typography } from 'antd';
import React from 'react';
const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  return (
    <div>
      <Typography>
        <Title>QkBtnGroupCollapsed</Title>
        <Paragraph>
          <ul>
            <li>按钮过多，可以选择性将按钮放入到更多中</li>
          </ul>
        </Paragraph>
      </Typography>
      <div>
        <QkBtnGroupCollapsed
          data={[
            { label: '新增', collapsed: false, key: 'ADD' },
            { label: '删除', collapsed: false, key: 'DELETE' },
            { label: '编辑', collapsed: false, key: 'EDIT' }
          ]}
        />
      </div>
      <div>
        <QkBtnGroupCollapsed
          data={[
            { label: '新增', collapsed: false, key: 'ADD' },
            { label: '删除', collapsed: true, key: 'DELETE' },
            { label: '编辑', collapsed: true, key: 'EDIT' }
          ]}
        />
      </div>
    </div>
  );
};

export default Example;
