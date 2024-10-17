import { Popconfirm, Space } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';
import dayjs from 'dayjs';
import React, { CSSProperties, useLayoutEffect, useRef } from 'react';
import Delete from './../images/icon-delete.svg';
import Download from './../images/icon-download.svg';
import type { UploadFilePlus } from './../interface';
import { getFileType } from './../tools';

/** 附件列表渲染 */
const AttachmentListItemRender = (
  originNode: React.ReactNode,
  file: UploadFilePlus,
  fileList: UploadFile[],
  actions: {
    download: () => void;
    preview: () => void;
    remove: () => void;
  },
  attachmentListItemFooterExtendRender:
    | ((file: UploadFilePlus) => React.ReactNode)
    | null,
  uploadListItemHeight: (h: number) => void,
) => {
  /** 获取单个附件列表高度 */
  const uploadListItemRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    uploadListItemHeight(uploadListItemRef.current?.offsetHeight || 0);
  }, [fileList.length]);
  const time = file.time
    ? file.time
    : dayjs(new Date(file?.lastModified || new Date())).format(
        'YYYY-MM-DD HH:mm:ss',
      );
  return (
    <div
      className="upload-list-item"
      data-h={uploadListItemRef.current?.offsetHeight}
      ref={uploadListItemRef}
    >
      <div className="upload-list-item-wrap flex relative">
        <div className={`file-preview icon-${getFileType(file.name)}`} />
        <div className="file-info flex-1 flex flex-col justify-center items-start overflow-hidden">
          <div className="flex w-full overflow-hidden">
            <div className="flex-1 overflow-hidden">
              <span className="file-name" title={file.name}>
                {file.name}
              </span>
            </div>
            <div className="btn-group flex justify-center">
              <Space size="large">
                {file.deleteRender !== null && (
                  <Popconfirm
                    placement="top"
                    title="你确定要删除吗？"
                    onConfirm={actions.remove}
                    okText="确定"
                    cancelText="取消"
                  >
                    <img className="cursor-pointer" src={Delete} />
                  </Popconfirm>
                )}
                {file.downloadRender !== null && (
                  <span className="cursor-pointer" onClick={actions.download}>
                    <img src={Download} />
                  </span>
                )}
              </Space>
            </div>
          </div>
          <div style={{ height: '10px' }} />
          <div className="flex  w-full">
            {file.size && (
              <div className="flex-1">
                <span>
                  {file.size / 1024 < 1024
                    ? (file.size / 1024).toFixed(2) + 'K'
                    : (file.size / 1024 / 1024).toFixed(2) + 'M'}
                </span>
              </div>
            )}

            <div>
              <span>{time}</span>
            </div>
          </div>
        </div>
        {file.status === 'uploading' && (
          <div
            className="absolute upload-percent justify-center items-center flex w-full h-full left-0 top-0"
            style={{ '--percent': (file.percent || 0) + '%' } as CSSProperties}
          >
            <p className="text-white">
              {(file.percent || 0) < 100
                ? `文件上传中，已上传 ${file.percent}%`
                : '上传完成 !'}
            </p>
          </div>
        )}
      </div>
      {typeof attachmentListItemFooterExtendRender === 'function'
        ? attachmentListItemFooterExtendRender(file)
        : attachmentListItemFooterExtendRender}
    </div>
  );
};

export default AttachmentListItemRender;
