import {QkProTable} from 'react-components';
import { type ProColumns } from '@ant-design/pro-components';
import { Typography } from 'antd';
import React from 'react';
const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  const options = [
    { label: '支付宝', value: 1 },
    { label: '阿里巴巴', value: 2 }
  ];
  const columns: ProColumns<any> & Record<string, any>[] = [
    {
      title: '序号',
      valueType: 'index'
    },
    { dataIndex: 'name', title: '姓名' },
    {
      dataIndex: 'orgCode',
      title: '所在企业',
      merge: 'col',
      mergeBy: ['orgCode'],
      request: async () => {
        return options;
      },
      renderText: (_: number) => {
        const current = options.find((item) => item.value === _);

        return current?.label || _;
      }
    },
    { dataIndex: 'sex', title: '性别' },
    { dataIndex: 'age', title: '年龄' },
    { dataIndex: 'height', title: '身高' }
  ];
  const dataSource = [
    {
      name: '张三',
      sex: '男',
      age: 20,
      height: 175,
      orgCode: 1
    },
    {
      name: '李四',
      sex: '女',
      age: 25,
      height: 180,
      orgCode: 1
    },
    {
      name: '王五',
      sex: '男',
      age: 18,
      height: 183,
      orgCode: 1
    },
    {
      name: '赵六',
      sex: '男',
      age: 18,
      height: 183,
      orgCode: 2
    },
    {
      name: '小名',
      sex: '男',
      age: 18,
      height: 183,
      orgCode: 2
    },
    {
      name: '小黑',
      sex: '男',
      age: 18,
      height: 183,
      orgCode: 2
    }
  ];
  return (
    <div>
      <Typography>
        <Title>QkProTable 组件二次封装</Title>
        <Paragraph>
          <ul>
            <li>增加数据横向及合并纵向功能</li>
            <li>增加翻页记忆及搜索条件记忆功能</li>
          </ul>
        </Paragraph>
      </Typography>
      <QkProTable
        columns={columns}
        dataSource={dataSource}
        search={{ storeQueryParams: true }}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default Example;
