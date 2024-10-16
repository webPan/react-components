import React from 'react';
import {
  type ProDescriptionsProps,
  ProDescriptions,
  type ProDescriptionsItemProps
} from '@ant-design/pro-components';

interface QkProDescriptionsType {
  (props: ProDescriptionsProps): JSX.Element;
  Item: React.FC<ProDescriptionsItemProps>;
}
const QkProDescriptions: QkProDescriptionsType = (props) => {
  return <ProDescriptions {...props} />;
};

QkProDescriptions.Item = ProDescriptions.Item;
export default QkProDescriptions;
