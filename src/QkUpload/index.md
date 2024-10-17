# 自定义文件上传
> 基于 antd Upload组件 定制的文件上传

- 支持自定义模块上传标题
- 支持文件上传按钮自定义
- 支持文件上传文字自定义
- 支持文件占位提示
- 附件列表支持收起展开
- 附件列表底部可增加自定义额外内容
- 头部按钮可重新渲染
- 自定义标题旁边的tip
- 支持主题切换，内置4种 'collection' | 'operation' | 'certified' | 'fund'
- 支持上传校验
- 支持多语言
- 
## 示例

```tsx
import { message, Typography, Upload } from 'antd';
import { type UploadProps } from 'antd/es/upload';
import React, { useState } from 'react';
import { attachmentSimpleListItemRender, QkUpload } from 'react-components';
const uploadProgress = async () => {
  return Promise.resolve();
};

const { Title, Paragraph } = Typography;

const Example: React.FC = () => {
  const [defaultFileList, setDefaultFileList] = useState<
    Pick<UploadProps, 'fileList'>['fileList']
  >([
    {
      uid: '1',
      name: 'dfasdfasd撒旦发射点发射点发射点发射点发射点发生阿斯顿发射点发射点.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      size: 2000000,
    },
    {
      uid: '1',
      name: 'dfasdfasd撒旦发射点发射点发射点发射点发射点发生阿斯顿发射点发射点.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      size: 2000000,
    },
    {
      uid: '1',
      name: 'dfasdfasd撒旦发射点发射点发射点发射点发射点发生阿斯顿发射点发射点.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      size: 2000000,
    },
  ]);
  const customRequest = (options: Record<string, any>) => {
    const { onSuccess, file, onError } = options;
    const fromData = new FormData();
    const params: any = {
      serviceId: '16709931833741-2022-12-4693',
      serviceKey: 'bankTransferFile',
      file,
    };
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        fromData.append(key, params[key]);
      }
    }

    if (file?.size / 1024 / 1024 > 10) {
      message.error('文件大小不能超过10M');
      onError?.(new Error('文件大小不能超过10M'));
      return;
    }

    uploadProgress().then((data) => {
      onSuccess?.({ a: 1, data });
    });
  };
  return (
    <div className="p-5 border-solid border-black border m-auto bg-white">
      <QkUpload
        title={'设备申报登记表'}
        placeholder="还没有上传其他类型文件"
        tooltip="What do you want others to call you?"
        fileList={defaultFileList}
        attachmentListItemFooterExtendRender={(file) => {
          return <div>abc</div>;
        }}
        customRequest={(options) => {
          customRequest(options);
        }}
        multiple={true}
        onChange={({ file, fileList }) => {
          setDefaultFileList(
            fileList.filter((item) => item.status !== 'error'),
          );
        }}
      />
      <QkUpload
        title={'这里更换上传按钮'}
        placeholder="还没有上传其他类型文件"
        fileList={[
          {
            uid: '2',
            name: '发射点发射点发的啊但是发射点发射点发啊但是发射点发射点发射点啊手动阀手动阀手动阀.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            size: 2000000,
          },
          {
            uid: '2',
            name: '发射点发射点发的啊但是发射点发射点发啊但是发射点发射点发射点啊手动阀手动阀手动阀.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            size: 2000000,
          },
          {
            uid: '2',
            name: '发射点发射点发的啊但是发射点发射点发啊但是发射点发射点发射点啊手动阀手动阀手动阀.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            size: 2000000,
          },
        ]}
        customRequest={(options) => {
          customRequest(options);
        }}
        uploadButtonRender={({ onTriggerUpload }) => {
          return <div>重新上传</div>;
        }}
      />
      <Upload
        itemRender={attachmentSimpleListItemRender}
        fileList={[
          {
            uid: '2',
            name: '发射点发射点发的啊但是发射点发射点发啊但是发射点发射点发射点啊手动阀手动阀手动阀.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            size: 2000000,
          },
        ]}
        customRequest={(options) => {
          customRequest(options);
        }}
      >
        <div>重新上传</div>
      </Upload>
    </div>
  );
};

export default Example;
```
## API
```ts
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

```
