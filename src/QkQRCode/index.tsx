import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import classNames from 'classnames';
import html2canvas from 'html2canvas';
import { produce } from 'immer';
import QRCode from 'qrcode.react';
import { CSSProperties, useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import NOT_DATA from './images/icon-not-data.png';
import './index.less';

type QkQRCodeType = {
  /** 二维码内容 */
  content: string;
  /** 二维码宽度 */
  width?: number;
  /** 二维码标题 */
  title?: string;
  /** 二维码内容是否可编辑 */
  edit?: boolean;
  /** 需要编辑的内容 */
  value?: string;
  /** 二维码外边距 */
  margin?: number;
  /** 是否默认开启截图 */
  screenshot?: boolean;
  /** 输入文字长度限制 */
  titleLen?: number;
  /** 编辑完成事件 */
  finish?: (data: string) => void;
  /** 是否支持二维码下载 */
  download?: (() => void) | null;
  /** 二维码标题编辑框onChange事件 */
  onChange?: ((value: string) => void) | null;
  /** 截图完成回调 */
  success?: (data: string) => void;
};
const QkQRCode = (props: QkQRCodeType) => {
  const {
    content = '',
    width = 168,
    edit = false,
    margin = 10,
    value = '',
    title = '',
    download = null,
    screenshot = false,
    onChange = (data) => 0,
    success = (data) => 0,
    finish = (data) => 0,
    titleLen = 20,
  } = props;
  const screenshotRef = useRef<HTMLDivElement>(null);
  const [qrCode, setQrCode] = useState({
    edit: false,
  });
  const inputRef = useRef<HTMLTextAreaElement>(null);
  /** 根据二维码宽度计算文字大小，比率是 15 */
  const fontSize = Math.round(width / 14);
  /** 截图 */
  const handleScreenshot = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      html2canvas(screenshotRef.current || document.body, {
        ignoreElements: (element) => {
          if (element.classList.value.indexOf('icon-edit') !== -1) {
            return true;
          }
          return false;
        },
      })
        .then((canvas) => {
          resolve(canvas.toDataURL('image/png'));
        })
        .catch(() => {
          reject();
        });
    });
  };
  useLayoutEffect(() => {
    if (screenshot && typeof success === 'function') {
      setTimeout(() => {
        handleScreenshot().then((data) => {
          success(data);
        });
      }, 1000);
    }
  });

  if (!content) {
    return (
      <div className="qk-qr-code" style={{ width: width + 'px' }}>
        <img src={NOT_DATA} alt="" />
      </div>
    );
  }

  return (
    <div
      className="qk-qr-code"
      style={
        {
          width: width - margin + 'px',
          '--fontSize': fontSize + 'px',
          '--margin': margin + 'px',
        } as CSSProperties
      }
    >
      <div className="qk-qr-code-wrap" ref={screenshotRef}>
        <QRCode
          value={content}
          size={width - margin}
          style={{
            padding: margin + 'px',
            background: '#fff',
            borderRadius: '8px',
          }}
        />
        <p
          className={classNames('qk-qr-code__title', {
            'qk-qr-code__title-margin': value || title,
          })}
        >
          {qrCode.edit && (
            <textarea
              ref={inputRef}
              value={value || title}
              maxLength={titleLen}
              onChange={(event) => {
                const val = event.target.value;
                onChange?.(val);
              }}
              onBlur={() => {
                if (typeof finish === 'function') {
                  finish(value);
                }
                setQrCode(
                  produce((draft) => {
                    draft.edit = false;
                  }),
                );
              }}
            />
          )}
          {!qrCode.edit && <span>{value || title}</span>}
          {edit && (
            <i
              onClick={() => {
                setQrCode(
                  produce((draft) => {
                    draft.edit = true;
                  }),
                );
                setTimeout(() => {
                  const len = inputRef.current?.value.length || 0;
                  inputRef.current?.focus();
                  inputRef.current?.setSelectionRange(len, len);
                });
              }}
              className="icon-edit"
            ></i>
          )}
        </p>
      </div>
      {download && (
        <div className="btn-group">
          <Button
            type="primary"
            block
            className="btn-download cursor-pointer"
            onClick={download}
            disabled={false}
            icon={<DownloadOutlined />}
          >
            下载二维码
          </Button>
        </div>
      )}
    </div>
  );
};

/** 截图 */
const screenshot = (props: QkQRCodeType) => {
  const DIV = document.createElement('div');
  ReactDOM.render(<QkQRCode screenshot={true} {...props} />, DIV);
  document.body.appendChild(DIV);
  return {
    destroy: () => {
      ReactDOM.unmountComponentAtNode(DIV);
      document.body.removeChild(DIV);
    },
  };
};

export default QkQRCode;

QkQRCode.screenshot = screenshot;
