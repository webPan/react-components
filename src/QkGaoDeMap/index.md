# 高德地图

```tsx
import {QkGaoDeMap} from 'react-components';
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
        <QkGaoDeMap
          dataSource={[
            {
              // name: '项目地址',
              name: '上海市静安区东方明珠',
              lngLat: [121.499427, 31.239772],
              id: 1,
              color: 'red',
              address: '上海市静安区东方明珠',
              size: 12
            }
          ]}
          tileLayerOptions={{}}
          districtLayerOptions={{}}
          AMapOptions={{
            center: [106.258754, 38.471317],
            zoomEnable: true, // 是否缩放
            dragEnable: true, // 是否拖动
            showLabel: false
          }}
          strokeOptions={{
            strokeWeight: 2,
            fillColor: '#002322',
            fillOpacity: 0.62,
            name: '中国'
          }}
          mapZoomShortcut="ctrl+mousewheel"
          autoLocateScaleLevels={true}
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
