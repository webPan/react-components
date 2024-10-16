import {
  DownOutlined,
  ExclamationCircleOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Tooltip, Upload } from 'antd';
import classnames from 'classnames';
import type { CSSProperties } from 'react';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import useAttachmentListItemRender from './hooks/useAttachmentListItemRender';
import { type QkUploadType } from './index.d';
import './index.less';
import languageDict from './language';
export type UploadHandle = {
  onTriggerUpload: () => void;
};
/** 文件上传组件 带进度条 */
const QkUploadFund = (
  props: UploadProps & QkUploadType,
  ref: React.Ref<unknown>,
) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  /** 文件上传单行高度 */
  const uploadListItemHeight = useRef(0);
  const attachmentListItemRender = useAttachmentListItemRender;
  const {
    title,
    theme = 'fund',
    uploadButtonRender,
    placeholder,
    uploadButtonText = '文件上传',
    retractionEnable = true,
    attachmentListItemFooterExtendRender = null,
    tooltip = '',
    defaultFileList,
    fileList,
    layout = 'vertical',
    required,
    uploadClassName = '',
    language = 'cn',
    ...otherProps
  } = props;
  /** 展开收缩 */
  const [retraction, setRetraction] = useState<'stow' | 'open'>(
    retractionEnable ? 'stow' : 'open',
  ); //默认收缩
  /** 文件行信息 */
  const [row, setRow] = useState({
    singleHeight: 0, //单行高
    multiHeight: 0, //多行高
    actualRows: 0, //实际多少行
    rows: 3, //一行放多少个
  });
  const uploadProps: UploadProps = {
    defaultFileList,
    fileList,
    showUploadList: true,
    itemRender: (originNode, file, uploadFileList, actions) => {
      return attachmentListItemRender(
        originNode,
        file,
        uploadFileList,
        actions,
        attachmentListItemFooterExtendRender,
        (h) => {
          uploadListItemHeight.current = h;
        },
      );
    },
    ...otherProps,
  };
  /** 展开收起切换 */
  const uploadRef = useRef<HTMLButtonElement>(null);
  /** 触发上传功能 */
  const onTriggerUpload = () => {
    uploadRef.current?.click();
    setRetraction('open');
  };

  /** placeholder 文字占位*/
  const PlaceholderRender = () => {
    if (defaultFileList?.length) return <></>;
    if (fileList?.length) return <></>;
    return <p className="upload-placeholder">{placeholder}</p>;
  };

  /** 固定间距 标题存在是40 */
  const FIXEDSPACING = title || uploadButtonRender ? 104 : 40;
  /** 获取行高度及总高度*/
  const getRowHeightInfo = useCallback(() => {
    const w: number = wrapRef.current?.offsetWidth ?? 1920;

    let rows = 0;
    //小于992px 一栏
    //992px~1600px 两栏
    //大于1600px 三栏
    if (w < 992) rows = 1;
    if (w > 992 && w < 1600) rows = 2;
    if (w > 1600) rows = 3;
    if ((fileList?.length || 0) < 1) rows = 1;
    /** 实际多少行 */
    const actualRows = Math.ceil((fileList?.length || 0) / rows);
    setRow({
      singleHeight: (uploadListItemHeight.current + 24) * 2 + FIXEDSPACING,
      multiHeight:
        (uploadListItemHeight.current + 24) * actualRows + FIXEDSPACING,
      actualRows,
      rows,
    });
  }, [fileList?.length]);
  useLayoutEffect(() => {
    getRowHeightInfo();
    window.addEventListener('resize', getRowHeightInfo);
  }, [fileList?.length]);
  /** 把收缩展开功能暴露到外部，可通过ref访问 */
  useImperativeHandle(ref, () => ({
    setRetraction,
    onTriggerUpload,
  }));
  const ThemeColor = {
    collection: '#F6FFFA',
    operation: '#F6FFFA',
    certified: '#F6F6FF',
    fund: '#F6F6FF',
  };
  return (
    <div
      ref={wrapRef}
      className={classnames(
        'upload-panel',
        uploadClassName,
        'layout-' + layout,
        {
          'upload-panel--stow': retraction === 'stow',
          'upload-panel--open': retraction === 'open',
          'upload-panel--auto': row.actualRows < 3,
          'not-upload-file': !fileList?.length,
        },
      )}
      style={
        {
          height:
            retraction === 'stow'
              ? row.singleHeight + 'px'
              : row.multiHeight + 'px',
          '--theme-color': ThemeColor[theme],
          '--rows': row.rows,
        } as CSSProperties
      }
    >
      {title && (
        <div className="upload-panel-header flex">
          <div className="flex-1">
            <span
              className={classnames('font-bold', {
                'upload-required': required,
              })}
            >
              {title}
            </span>
            {tooltip && (
              <Tooltip placement="topLeft" title={tooltip}>
                <span className="tool-tip">
                  <ExclamationCircleOutlined style={{ color: '#5EC385' }} />
                </span>
              </Tooltip>
            )}
          </div>
          {uploadButtonRender !== null && (
            <div>
              {uploadButtonRender ? (
                typeof uploadButtonRender == 'function' ? (
                  uploadButtonRender({ onTriggerUpload })
                ) : (
                  uploadButtonRender
                )
              ) : (
                <Button onClick={onTriggerUpload} icon={<UploadOutlined />}>
                  {uploadButtonText}
                </Button>
              )}
            </div>
          )}
        </div>
      )}

      <div className="upload-panel-body upload-list">
        <Upload {...uploadProps}>
          <Button style={{ display: 'none' }} ref={uploadRef} />
        </Upload>
        <PlaceholderRender />
      </div>
      {retractionEnable && row.actualRows > 2 && (
        <div
          className={`${
            attachmentListItemFooterExtendRender !== null
              ? 'retraction retraction-extra-footer'
              : 'retraction'
          } `}
        >
          <Button
            className="btn-retraction"
            type="link"
            size="small"
            onClick={() => {
              setRetraction((prevState) => {
                return prevState === 'stow' ? 'open' : 'stow';
              });
            }}
          >
            <span>
              {retraction === 'stow'
                ? languageDict.expand[language]
                : languageDict.collapse[language]}
            </span>
            <DownOutlined />
          </Button>
        </div>
      )}
    </div>
  );
};
export default forwardRef(QkUploadFund);
