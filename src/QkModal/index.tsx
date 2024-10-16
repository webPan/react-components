import { Modal, type ModalProps } from 'antd';
import React from 'react';

type QkModalType = ModalProps;
const QkModal: React.FC<QkModalType> = (props) => {
  return <Modal {...props} />;
};

export default QkModal;
