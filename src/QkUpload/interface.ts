import type { UploadFile } from 'antd/es/upload/interface';
import type React from 'react';
/** 文件上传组件 */
export type QkUploadType = {
  /** 标题 */
  title?: string | React.ReactElement;
  /** 文件上传按钮render */
  uploadButtonRender?:
    | (({
        onTriggerUpload,
      }: {
        onTriggerUpload: () => void;
      }) => React.ReactNode)
    | null;
  /** 上传按钮文字 */
  uploadButtonText?: string;
  /** 文件占位提示 */
  placeholder?: string;
  /** 附件列表是否启用收起收缩按钮 */
  retractionEnable?: boolean;
  /** 附件列表底部增加额外内容 */
  attachmentListItemFooterExtendRender?:
    | ((file: UploadFilePlus) => React.ReactNode)
    | null;
  /** 头部按钮重新渲染 */
  headerButtonRender?: React.ReactNode;
  /** 标题旁边的tip */
  tooltip?: string;
  /** 对齐方式 */
  layout?: 'horizontal' | 'vertical';
  /** 主题 */
  theme?: 'collection' | 'operation' | 'certified' | 'fund';
  /** 是否必填 */
  required?: boolean;
  /** 自定义类名 */
  uploadClassName?: string;
  language?: 'en' | 'cn';
};

/** 文件附件列表 */
export type UploadFilePlus = UploadFile & {
  /** 时间 */
  time?: string;
  [x: string]: any;
  /** 是否渲染下载按钮 */
  downloadRender?: boolean | null;
  /** 是否渲染删除按钮 */
  deleteRender?: boolean | null;
};
