//todo: antd 图片预览
import { Image, message } from 'antd';
import React, { useEffect, useState } from 'react';
import placeholder from './images/placeholder.png';
import './index.less';
import ReactDOM from 'react-dom';

type QkImagePreviewType = {
  src: string; //图片地址
  onCancel?: () => void;
};
const QkImagePreview = (props: QkImagePreviewType) => {
  const [visible, setVisible] = useState(false);
  const { src, onCancel } = props;
  useEffect(() => {
    src && setVisible(true);
  }, [src]);
  return (
    <Image
      src={visible ? src : placeholder}
      onError={() => {
        message.error('图片加载失败');
      }}
      placeholder="加载中..."
      style={{ display: 'none' }}
      preview={{
        visible,
        src,
        onVisibleChange: (value) => {
          if (!value) {
            setVisible(false);
            setTimeout(() => {
              onCancel?.();
            }, 200);
          }
        }
      }}
    />
  );
};
//支付完成
export default QkImagePreview;

const QkImagePreviewCreate = (props: Pick<QkImagePreviewType, 'src'>) => {
  const DIV = document.createElement('div');
  ReactDOM.render(
    <QkImagePreview
      {...props}
      onCancel={() => {
        ReactDOM.unmountComponentAtNode(DIV);
        document.body.removeChild(DIV);
      }}
    />,
    DIV
  );
  document.body.append(DIV);
};

QkImagePreview.Create = QkImagePreviewCreate;
