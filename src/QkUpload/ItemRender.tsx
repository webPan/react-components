import type { UploadFile } from 'antd/es/upload/interface';
import React from 'react';
import _delete from './images/icon-delete.svg';
import type { UploadFilePlus } from './index.d';
import { getFileType } from './tools';

/** 附件简单列表渲染 */
export const attachmentSimpleListItemRender = (
  originNode: React.ReactNode,
  file: UploadFilePlus,
  fileList: UploadFile[],
  actions: {
    download: () => void;
    preview: () => void;
    remove: () => void;
  },
) => {
  return (
    <div className="upload-list-item upload-simple-list-item">
      <div className="upload-list-item-wrap flex relative">
        <div className={`file-preview icon-${getFileType(file.name)}`} />
        <div className="file-info flex-1 flex flex-col justify-center items-start overflow-hidden">
          <div className="flex w-full overflow-hidden">
            <div className="flex-1 overflow-hidden">
              <span className="file-name" title={file.name}>
                {file.name}
              </span>
            </div>
            <div
              className="btn-group flex justify-center items-center"
              onClick={actions.remove}
            >
              {file.downloadRender !== null && (
                <img src={_delete} title="删除" alt="删除" />
              )}
            </div>
          </div>
          <div style={{ height: '10px' }} />
        </div>
      </div>
    </div>
  );
};
