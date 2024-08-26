import classNames from 'classnames';
import React from 'react';
import './index.less';

const Loading: React.FC<{ type?: number }> = ({ type = 1 }) => {
  return (
    <div
      className={classNames({
        'loading-1': type == 1,
        'loading-2': type == 2,
        'loading-3': type == 3
      })}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Loading;
