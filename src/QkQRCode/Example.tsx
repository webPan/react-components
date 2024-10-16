import { Button, Space, Typography } from 'antd';
import React from 'react';
import { QkQRCode, downloadFile } from 'react-components';
const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  return (
    <div>
      <Typography>
        <Title>QkQRCode</Title>
        <Paragraph>
          <ul>
            <li>二维码生成带标题</li>
            <li>支持自定义尺寸的二维码下载</li>
          </ul>
        </Paragraph>
      </Typography>
      <div>
        <QkQRCode
          content="http://www.baidu.com"
          width={200}
          margin={10}
          title="百度一下，你就知道"
        />
      </div>
      <div className="mt-[10px]">
        <Space>
          <Button
            onClick={() => {
              const screenshot = QkQRCode.screenshot({
                content: 'http://www.baidu.com',
                width: 200,
                margin: 10,
                title: '百度一下，你就知道',
                success: (data) => {
                  downloadFile({ url: data, name: '百度一下，你就知道' });
                  screenshot.destroy();
                },
              });
            }}
          >
            200px
          </Button>
          <Button
            onClick={() => {
              const screenshot = QkQRCode.screenshot({
                content: 'http://www.baidu.com',
                width: 500,
                margin: 20,
                title: '百度一下，你就知道',
                success: (data) => {
                  downloadFile({ url: data, name: '百度一下，你就知道' });
                  screenshot.destroy();
                },
              });
            }}
          >
            500px
          </Button>
          <Button
            onClick={() => {
              const screenshot = QkQRCode.screenshot({
                content: 'http://www.baidu.com',
                width: 1000,
                margin: 50,
                title: '百度一下，你就知道',
                success: (data) => {
                  downloadFile({ url: data, name: '百度一下，你就知道' });
                  screenshot.destroy();
                },
              });
            }}
          >
            1000px
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Example;
