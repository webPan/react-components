# 高德地图 Echat版本

```tsx
import {QkGaoDeEchartMap} from 'react-components';
import { Typography } from 'antd';
import React from 'react';
const { Title, Paragraph, Text, Link } = Typography;

const Example = () => {
  return (
    <div>
      <Typography>
        <Title>QkGaoDeMap 组件</Title>
        <Paragraph>
          <ul>
            <li>
              基于 高德地图 二次封装，将高频使用的功能都写进了组件，使用接口启用
            </li>
          </ul>
        </Paragraph>
      </Typography>
      <div style={{ height: '500px', position: 'relative' }}>
        <QkGaoDeEchartMap
          dataSource={[
            {
              // name: '项目地址',
              name: '上海市静安区东方明珠',
              lngLat: [121.499427, 31.239772],
              id: 1,
              color: '#990123',
              size: 12
            }
          ]}
          AMapOptions={{
            center: [106.258754, 38.471317],
            zoomEnable: true, // 是否缩放
            dragEnable: true, // 是否拖动
            showLabel: false
          }}
          mapZoomShortcut="ctrl+mousewheel"
          autoLocateScaleLevels={true}
          drawConnectLinesOptions={{
            color: {
              start: '#990123',
              end: '#223234'
            },
            endPoints: [
              {
                id: 2,
                lngLat: [115.871364, 28.660997],
                color: '#223234',
                from: [[121.499427, 31.239772]]
              }
            ]
          }}
          completed={(gdMap) => {
            // console.log(assetsInfo.province)
            //   console.log('地图加载完成')
          }}
        />
      </div>
    </div>
  );
};

export default Example;
```
