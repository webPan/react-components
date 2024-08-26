import React, { useLayoutEffect, useRef, useState } from 'react';
import classNames from 'classnames';
type QkFixedFooterType = {
  children?: React.ReactNode;
  className?: string;
  zIndex?: number;
  show?: boolean;
};
import styles from './index.module.less';
const QkFixedFooter: React.FC<QkFixedFooterType> = ({
  children,
  className,
  zIndex = '9',
  show = true
}) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(60);
  useLayoutEffect(() => {
    setHeight(footerRef.current?.offsetHeight ?? 60);
  }, []);
  return (
    <>
      {show && <div style={{ height: height + 'px' }}></div>}
      <div
        style={{ zIndex }}
        ref={footerRef}
        className={classNames('fixed', className, styles.footer)}
      >
        {children}
      </div>
    </>
  );
};

export default QkFixedFooter;
