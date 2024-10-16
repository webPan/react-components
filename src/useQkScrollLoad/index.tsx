import React, { useEffect, useRef, useState } from 'react';

const wait = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

type CommonType = {
  delay?: number;
  placeholder?: React.ReactNode | string | (() => React.ReactNode);
  children?: ((visible: boolean) => void) | React.ReactNode;
};

type QkScrollLoadOptions = IntersectionObserverInit & CommonType;

const useQkScrollLoad = (options?: QkScrollLoadOptions) => {
  let uuid = 0;
  const observer: Record<string, any> = {};
  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((item: Record<string, any>) => {
      const uuid = item.target.getAttribute('uuid');
      const { render, delay, SetVisible } = observer[uuid];
      if (item.isIntersecting) {
        setTimeout(() => {
          render(true);
        }, delay);
      }
      SetVisible(item.isIntersecting);
    });
  }, options);
  const QkScrollLoad: React.FC<CommonType> = ({
    delay = 0,
    children,
    placeholder,
  }) => {
    delay = delay || options?.delay || 0;
    placeholder = placeholder || options?.placeholder || '加载中...';
    if (typeof placeholder === 'function') {
      placeholder = placeholder();
    }
    const html = useRef<HTMLDivElement>(null);
    const [isRender, SetIsRender] = useState(false);
    const [visible, SetVisible] = useState(false);
    useEffect(() => {
      uuid++;
      const node = html.current as HTMLElement;
      node.setAttribute('uuid', String(uuid));
      node && intersectionObserver.observe(node);
      observer[uuid] = {
        render: SetIsRender,
        delay,
        SetVisible,
        visible,
      };
    }, []);
    let ReactNode = children as React.ReactNode;
    if (typeof children === 'function') {
      ReactNode = children(visible) as React.ReactNode;
    }
    return <div ref={html}>{isRender ? ReactNode : placeholder}</div>;
  };
  return QkScrollLoad;
};

export default useQkScrollLoad;
