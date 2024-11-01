import { Button, Divider, message, Typography } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { QkCustomSteps } from 'react-components';
import { type ForwardRefPropsType } from './../QkCustomSteps';
const { Title, Paragraph, Text, Link } = Typography;

const Step1 = forwardRef<any, ForwardRefPropsType>((props, ref) => {
  const { dispatch } = props;
  useImperativeHandle(ref, () => ({
    save() {
      message.success('数据保存成功');
    },
  }));
  return (
    <div style={{ padding: '100px', fontSize: '20px' }}>
      <Button
        onClick={() => {
          dispatch('next');
        }}
      >
        组件里面执行下一步（保存数据）
      </Button>
      <Divider />
      <Button
        onClick={() => {
          dispatch('setCurrent', { current: 1 });
        }}
      >
        只是简单下一步（不保存数据）
      </Button>
    </div>
  );
});

const Step2 = forwardRef<any, ForwardRefPropsType>((props, ref) => {
  const { dispatch, record, setRecord } = props;
  return (
    <div style={{ padding: '100px', fontSize: '20px' }}>
      <h2>目前的全局数据</h2>
      <Divider />
      <div>{JSON.stringify(record, null, 2)}</div>
      <Divider />
      <Button
        onClick={() => {
          setRecord({ b: 2 });
          dispatch('next');
        }}
      >
        给步骤三中传递一些数据
      </Button>
    </div>
  );
});
const Step3 = forwardRef<any, ForwardRefPropsType>((props, ref) => {
  const { record, dispatch } = props;
  return (
    <div style={{ padding: '100px', fontSize: '20px' }}>
      <h2>目前的全局数据</h2>
      <Divider />
      <div>{JSON.stringify(record, null, 2)}</div>
      <Divider />
      <Button
        onClick={() => {
          dispatch('next', { a: 1, b: 2 });
        }}
      >
        给步骤三中传递一些数据
      </Button>
    </div>
  );
});
const Example = () => {
  const [record, setRecord] = useState<Record<string, any>>({
    a: 1,
  });
  const items = [
    {
      title: '步骤一',
      content: Step1,
    },
    {
      title: '步骤二',
      content: Step2,
    },
    {
      title: '步骤三',
      content: Step3,
    },
  ];
  return (
    <div>
      <Typography>
        <Title>QkCustomSteps 组件</Title>
        <Paragraph>
          <ul>
            <li>数据贯穿全组件</li>
            <li>底部按钮可自定义</li>
            <li>组件内部方法外层可调用</li>
          </ul>
        </Paragraph>
      </Typography>
      <QkCustomSteps items={items} current={0} record={record} />
    </div>
  );
};

export default Example;
