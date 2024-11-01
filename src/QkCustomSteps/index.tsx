import { useGetState } from 'ahooks';
import { Button, Space } from 'antd';
import classNames from 'classnames';
import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { QkFixedFooter, QkLoading } from 'react-components';
import Complete from './images/icon-complete.svg';
import './index.less';

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
  next: InstanceType['next'];
  prev: InstanceType['prev'];
  dispatch: DispatchType;
};
const StepLoading = () => {
  return (
    <div className="mt-[20%]">
      <QkLoading />
    </div>
  );
};

const QkCustomSteps: React.FC<QkCustomStepsType> = ({
  items,
  current: cur,
  loading = false,
  record: data,
  nextText,
  footerRender,
  onChange,
  onValuesChange,
}) => {
  const [nextLoading, setNextLoading] = useState(false);
  const ref = useRef<{
    save: () => void;
    back: () => void;
  }>({
    save: () => void 0,
    back: () => void 0,
  });
  const [record, setRecord, getRecord] = useGetState<Record<string, any>>(data);
  const [current, setCurrent] = useState(0);
  const [, Render] = useState<number>();
  /** 上一步 */
  const handlePrev = async () => {
    if (current === 0) return;
    try {
      await ref.current?.back?.();
    } catch (e) {
      return;
    }
    setCurrent(current - 1);
    setTimeout(() => {
      onChange?.({
        current,
        record: { ...data, ...getRecord() },
        type: 'prev',
      });
    });
  };

  /** 下一步 */
  const handleNext = async () => {
    setNextLoading(true);
    try {
      await ref.current?.save?.();
    } catch (e) {
      if (e === 'next') {
        setTimeout(() => {
          onChange?.({
            current,
            record: { ...data, ...getRecord() },
            type: 'next',
          });
        });
      }
      return;
    } finally {
      setNextLoading(false);
    }
    if (current === items.length - 1) return;
    setTimeout(() => {
      onChange?.({
        current,
        record: { ...data, ...getRecord() },
        type: 'next',
      });
    });
    setCurrent(current + 1);
  };
  const nextTextRender = useMemo(() => {
    if (nextText) {
      return typeof nextText === 'function' ? nextText(current) : nextText;
    }
    return current < items.length - 1 ? '下一步' : '完成';
  }, [current]);

  useEffect(() => {
    setCurrent(cur);
  }, [cur]);
  useEffect(() => {
    Render(Math.random());
  }, [current]);
  const values = { ...data, ...getRecord() };
  useEffect(() => {
    onValuesChange?.(values);
  }, [JSON.stringify(values)]);

  /** 触发上一步还是下一步 */
  const handleDispatch: DispatchType = (type, data = {}) => {
    if (type === 'next') {
      handleNext();
    } else if (type === 'prev') {
      handlePrev();
    } else if (type === 'change') {
      setTimeout(() => {
        onChange?.({
          current,
          type: 'change',
          record: { ...getRecord(), ...data },
          ...data,
        });
        data?.current && setCurrent(data.current);
      });
    } else if (type === 'setRecord') {
      setRecord({ ...record, ...data });
    } else if (type === 'setCurrent') {
      data?.current && setCurrent(data.current);
    }
  };

  /** 底部模块 */
  const StepsFooter = () => {
    return (
      <QkFixedFooter className="flex justify-end">
        <Space>
          {current > 0 && (
            <Button type="default" onClick={handlePrev}>
              上一步
            </Button>
          )}
          <Button type="primary" loading={nextLoading} onClick={handleNext}>
            {nextTextRender}
          </Button>
        </Space>
      </QkFixedFooter>
    );
  };

  const currentStepComponent = useMemo(() => {
    if (current > items.length - 1 || current < 0) return null;
    const Component = items[current].content as any;
    return (
      <Component
        ref={ref}
        record={{ ...data, ...getRecord() }}
        setRecord={setRecord}
        next={handleNext}
        prev={handlePrev}
        dispatch={handleDispatch}
      />
    );
  }, [current, data, record]);

  const steps = useMemo(() => {
    let n = 0;
    return items.reduce(
      (previousValue: Record<string, any>[], currentValue) => {
        if (!currentValue.hideInSteps) {
          n = n + 1;
        }
        previousValue.push({
          ...currentValue,
          stepIndex: currentValue.hideInSteps ? 0 : n,
        });
        return previousValue;
      },
      [],
    );
  }, [items.length]);

  /** 底部操作 */

  const footer = () => {
    if (typeof footerRender === 'function') {
      const ftr = footerRender({
        next: handleNext,
        prev: handlePrev,
        dispatch: handleDispatch,
        ...ref.current,
        current,
        record,
        nextLoading,
      });
      if (ftr === undefined) {
        return <StepsFooter />;
      } else if (ftr === null) {
        return <></>;
      } else {
        return ftr;
      }
    } else {
      return <StepsFooter />;
    }
  };
  const currentKey = steps.find((item, index) => index === current)?.key || 0;
  return (
    <div className="qk-custom-steps flex flex-col">
      <div className="qk-custom-steps-header">
        <ul className="flex justify-center">
          {steps.map((item, index) => {
            return (
              <li
                className={classNames('flex items-center', {
                  'step-item-active':
                    index === current || item.key === currentKey,
                  'step-item-complete': current > index, //完成
                  hidden: item.stepIndex === 0,
                })}
                key={'T-' + index}
              >
                <span className="flex step-item-icon justify-center items-center ">
                  {current > index ? <img src={Complete} /> : item.stepIndex}
                </span>
                <span className="step-item-title">{item.title}</span>
                <span className="step-item-line"></span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="qk-custom-steps-content flex-1">
        {loading ? <StepLoading /> : currentStepComponent}
      </div>
      <div className="qk-custom-steps-footer">{footer()}</div>
    </div>
  );
};

export default QkCustomSteps;
