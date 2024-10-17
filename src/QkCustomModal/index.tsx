import { Button, Divider, Space } from 'antd';
import classNames from 'classnames';
import React, { useImperativeHandle, useState } from 'react';
import { AntdTheme } from 'react-components';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { CSSTransition } from 'react-transition-group';
import ICON_CLOSE from './images/icon-close.svg';
import './index.less';

type CustomModalType = {
  /** 标题 */
  title?: string;
  /** 弹框内容 */
  children?: React.ReactNode;
  /** 弹框宽度 */
  width?: number;
  /** 确定文案 */
  okText?: string;
  /** 取消文案 */
  cancelText?: string;
  /** 取消事件回调 */
  onCancel?: () => void;
  /** 确定事件回调 */
  onOk?: () => void;
  /** 是否显示  */
  visible?: boolean;
  /** 底部按钮自定义渲染 */
  footerRender?: boolean;
  /** 主题 */
  theme?: 'APP' | 'PC';
  /** 是否需要关闭按钮 */
  closable?: boolean;
  /** 确定按钮自定义渲染 */
  okRender?: (() => React.ReactNode) | boolean;
  /** 关闭按钮自定义渲染 */
  cancelRender?: (() => React.ReactNode) | boolean;
  /** 弹框层级 */
  zIndex?: number;
};

//可见的
const CustomModal: React.FC<CustomModalType> = ({
  title,
  width = 500,
  children,
  okText = '确定',
  cancelText = '取消',
  onCancel,
  onOk,
  visible = true,
  footerRender = true,
  theme = 'PC',
  closable = true,
  okRender = true,
  cancelRender = true,
  zIndex = 1005,
}) => {
  const CustomModalFooterApp = () => {
    return (
      <div className="qk-custom-modal-footer">
        <div className="btn-group flex items-center justify-center gap-[20px]">
          {cancelRender && (
            <div className="flex-1">
              <Button
                type="default"
                size="large"
                shape="round"
                block
                onClick={() => {
                  if (typeof onCancel === 'function') {
                    onCancel();
                  }
                }}
              >
                {cancelText}
              </Button>
            </div>
          )}
          {okRender && cancelRender && (
            <div className="h-full">
              <Divider type="vertical" style={{ height: '30px' }} />
            </div>
          )}
          {okRender && (
            <div className="flex-1">
              <Button
                block
                type="primary"
                size="large"
                shape="round"
                onClick={() => {
                  if (typeof onOk === 'function') {
                    onOk();
                  }
                }}
              >
                {okText}
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const CustomModalFooterPc = () => {
    return (
      <div className="qk-custom-modal-footer">
        <div className="btn-group flex justify-end items-end">
          <Space>
            {cancelRender && (
              <Button
                type="default"
                onClick={() => {
                  if (typeof onCancel === 'function') {
                    onCancel();
                  }
                }}
              >
                {cancelText}
              </Button>
            )}
            {okRender && (
              <Button
                type="primary"
                onClick={() => {
                  if (typeof onOk === 'function') {
                    onOk();
                  }
                }}
              >
                {okText}
              </Button>
            )}
          </Space>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <CSSTransition
        unmountOnExit
        appear
        in={visible}
        timeout={200}
        classNames={'qk-custom-modal'}
      >
        <div style={{ zIndex: zIndex - 1 }} className="qk-custom-modal"></div>
      </CSSTransition>
      <CSSTransition
        unmountOnExit
        appear
        in={visible}
        timeout={200}
        classNames={'qk-custom-content'}
      >
        <AntdTheme>
          <div
            style={{ zIndex: zIndex }}
            className={classNames(
              'qk-custom-modal-wrap flex justify-center items-center',
              `qk-custom-modal--${theme.toLowerCase()}`,
            )}
          >
            <div
              className="qk-custom-modal-center"
              style={{ width: width + 'px' }}
            >
              <div className="qk-custom-modal-header flex">
                <div className="qk-custom-modal-header__title flex-1">
                  <span>{title}</span>
                </div>
                {closable && (
                  <div className="qk-custom-modal-header__btn-group flex justify-center items-center">
                    <div
                      className="cursor-pointer btn-close"
                      onClick={() => {
                        if (typeof onCancel === 'function') {
                          onCancel();
                        }
                      }}
                    >
                      <img src={ICON_CLOSE} alt="" className="block" />
                    </div>
                  </div>
                )}
              </div>
              <div className="qk-custom-modal-content">{children}</div>
              {footerRender && theme === 'PC' && <CustomModalFooterPc />}
              {footerRender && theme === 'APP' && <CustomModalFooterApp />}
            </div>
          </div>
        </AntdTheme>
      </CSSTransition>
    </React.Fragment>
  );
};

const QkCustomModal = (props: CustomModalType) => {
  return createPortal(<CustomModal {...props} />, document.body);
};

export default QkCustomModal;

const QkCustomModalForward = React.forwardRef<any, CustomModalType>(function (
  props,
  ref,
) {
  const [visible, setVisible] = useState(true);
  useImperativeHandle(ref, () => ({
    setVisible,
  }));
  return <QkCustomModal {...props} visible={visible} />;
});
QkCustomModalForward.displayName = 'QkCustomModalForward';

/**
 * 两种方式调用
 * 第一种：以组件方式
 * 第二种: 以js执行方式调用
 * */
const QkCustomModalCreate = (props: CustomModalType) => {
  const actionRef = React.createRef<{
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  }>();
  const DIV = document.createElement('div');
  const root = createRoot(DIV);
  root.render(<QkCustomModalForward {...props} ref={actionRef} />);
  document.body.append(DIV);
  return {
    destroy: () => {
      actionRef.current?.setVisible(false);
      setTimeout(() => {
        root.unmount();
        document.body.removeChild(DIV);
      }, 200);
    },
  };
};

QkCustomModal.Create = QkCustomModalCreate;
