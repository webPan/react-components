import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
const AntdTheme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          borderRadius: 2,
          colorPrimary: '#54A349',
          colorLink: '#54A349'
        },
        components: {
          Button: {
            primaryShadow: '0 2px 0 rgba(84, 163, 73, 0.01)',
            borderRadius: 2
          }
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdTheme;

import React from 'react';
