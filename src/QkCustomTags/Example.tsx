import {QkCustomTags} from 'react-components';
import React, { useState } from 'react';
import { Button, Space, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  const [d, setD] = useState<string[]>([
    '时尚大方时尚大方9',
    '时尚大方10',
    '时尚大方时尚大方11',
    '时尚大方12',
    '大方13',
    '时尚大方14',
    '时尚大方时尚大方15',
    '时尚大方16',
    '时尚大方17'
  ]);
  return (
    <div>
      <Typography>
        <Title>QkCustomTags 组件</Title>
        <Paragraph>
          <ul>
            <li>自动获取tag的宽度，实现自适应</li>
            <li>可控制tag行数</li>
          </ul>
        </Paragraph>
      </Typography>
      <Space className="mb-[10px]">
        <Button
          onClick={() => {
            setD([
              '时尚大方1',
              '时尚方2',
              '时尚方3',
              '时尚方4',
              '时尚大方时尚大方5',
              '时尚方6',
              '大方77777',
              '时大方8',
              '时尚大方时尚大方9',
              '时尚大方10',
              '时尚大方时尚大方11',
              '时尚大方12',
              '大方13',
              '时尚大方14',
              '时尚大方时尚大方15',
              '时尚大方16',
              '时尚大方17'
            ]);
          }}
        >
          初始化数据-数据较多
        </Button>
        <Button
          onClick={() => {
            setD(['A时尚大方1', 'B时尚方2', 'C时尚方3', 'D时尚方4']);
          }}
        >
          初始化数据-数据较少
        </Button>
      </Space>

      <div style={{ border: '1px solid red' }} className="w-1/2 p-[10px]">
        <QkCustomTags
          itemStyle={{ border: '1px dashed red', padding: '5px 10px' }}
          rows={2}
          data={d}
          onLoadingCompleted={({ isMore }) => {
            // console.log(isMore);
          }}
        />
      </div>
    </div>
  );
};

export default Example;
