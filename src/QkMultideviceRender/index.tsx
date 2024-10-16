import React from 'react';

interface QkMultideviceRenderProps {
  Pc: ({ children }: { children: React.ReactNode }) => React.ReactNode;
  Mobile: ({ children }: { children: React.ReactNode }) => React.ReactNode;
}
const QkMultideviceRender: React.FC<{ children: React.ReactNode }> &
  QkMultideviceRenderProps = ({ children }) => {
  return children;
};

QkMultideviceRender.Pc = ({ children }) => {
  const isMobile = window.isMobile;
  if (!isMobile) return children;
};

QkMultideviceRender.Mobile = ({ children }) => {
  const isMobile = window.isMobile;
  if (isMobile) return children;
};

export default QkMultideviceRender;
