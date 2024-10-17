//todo: antd 图片预览
import { Image, message } from 'antd';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import placeholder from './images/placeholder.png';
import './index.less';

type QkImagePreviewType = {
  src: string; //图片地址
  onCancel?: () => void; //关闭预览回调
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
        },
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
    DIV,
  );
  document.body.append(DIV);
};

QkImagePreview.Create = QkImagePreviewCreate;
