import { DrawerForm, type DrawerFormProps } from '@ant-design/pro-components';
import React from 'react';

type QkDrawerFormType = DrawerFormProps;
const QkDrawerForm: React.FC<QkDrawerFormType> = (props) => {
  return <DrawerForm {...props} />;
};

export default QkDrawerForm;
