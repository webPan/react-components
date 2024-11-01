# 步骤组件

> 数据和方法贯穿全局，高度自定义

## 示例

```tsx
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
```

## API

```ts
type InstanceType = {
  /** 下一步 */
  next: () => void;
  /** 上一步 */
  prev: () => void;
  /** 初始步骤 */
  current: number;
  /** 贯穿整个组件数据 */
  record: Record<string, any>;
  /** 下一步的Loading */
  nextLoading: boolean;
  /** 全局可调用的方法 */
  dispatch: DispatchType;
};
type QkCustomStepsType = {
  /** 各步骤组件 */
  items: {
    title: string; //标题
    content: (ref: any) => ReactNode; //组件
    hideInSteps?: boolean; //当前步骤是否在step中隐藏
    key?: number | string; //分类用的，如果两个类相同需要用一个步骤，key需要设置相同
  }[];
  /** 当前步骤 */
  current: number;
  loading?: boolean;
  /** 公共数据 */
  record: Record<string, any>;
  /** 自定义底部 null->不渲染底部按钮 undefined->使用原生底部按钮  */
  footerRender?: (
    instance: InstanceType & Record<string, any>,
  ) => ReactNode | null | undefined;
  /** 可以更改下一步文案 */
  nextText?: string | ((current: number) => string);
  /** 下一步 */
  onChange?: (data: {
    current: number;
    record: Record<string, any>;
    type: 'next' | 'prev' | 'change';
  }) => void;
  onValuesChange?: (values: Record<string, any>) => void;
};

export type DispatchType = (
  type: 'next' | 'prev' | 'change' | 'setRecord' | 'setCurrent',
  data?: Record<string, any>,
) => void;

//实例
export type ForwardRefPropsType = {
  record: Record<string, any>;
  setRecord: (data: Record<string, any>) => void;
  next: Pick<InstanceType, 'next'>['next'];
  prev: Pick<InstanceType, 'prev'>['prev'];
  dispatch: DispatchType;
};
```
