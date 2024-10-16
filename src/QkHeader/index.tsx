import { createPortal } from 'react-dom';
import './index.less';
import React from 'react';
import classNames from 'classnames';

type QkHeaderType = {
  title?: string;
  extra?: (() => React.ReactNode) | React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};
const QkHeader: React.FC<QkHeaderType> = ({
  title,
  extra,
  children,
  className
}) => {
  const Component = () => {
    return (
      <div className={classNames('header flex', className || '')}>
        <div className="header-title flex-1">
          <span>{title}</span>
        </div>
        <div className="header-extra">
          {typeof extra === 'function' ? extra() : extra}
        </div>
      </div>
    );
  };
  return createPortal(
    children ? children : <Component />,
    document.querySelector('.wrap-header') || document.body
  );
};
export default QkHeader;
