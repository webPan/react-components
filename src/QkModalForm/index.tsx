import { ModalForm, type ModalFormProps } from '@ant-design/pro-components';
import React from 'react';

type QkModalFormType = ModalFormProps;
const QkModalForm: React.FC<QkModalFormType> = (props) => {
  return <ModalForm {...props} />;
};

export default QkModalForm;
