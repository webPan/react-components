# 自定义文件上传
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
      <Typography>
        <Title>QkUpload</Title>
        <Paragraph>
          <ul>
            <li>主要是基于antd Upload 定制的文件上传</li>
          </ul>
        </Paragraph>
      </Typography>
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
