import AMapLoader from '@amap/amap-jsapi-loader';
import 'echarts-extension-amap';
import * as echarts from 'echarts/core';

import './index.scss';
import React, {
  useEffect,
  useRef,
  type CSSProperties,
  useState,
  useLayoutEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
const classNames = require('classnames');
import { districts } from './chinaPdata';
import ReactDOMServer from 'react-dom/server';
import { useUpdateEffect } from 'ahooks';

export interface PointType {
  id: string | number; // 辅助作用
  lngLat: [number | string, number | string] | null; // 经纬度
  color?: string; // 点颜色 默认红色
  animation?: 'DIFFUSION'; // 动画 点扩散
  size?: number; // 点大小 无需带单位 默认8px
  hasInfoWindow?: boolean; //是否有窗体
  from?: [number, number][]; //endPoint专属
  result?: any;
  onClick?: (data: PointType) => void;
  [key: string]: any;
}

interface InfoWindowOptions {
  title?: string;
  // 需要展示的字段 label 文案 dataIndex 向dataSource 需要取的值
  columns: Array<{ title: string; dataIndex: string; unit?: string }>;
  // 右上角按钮
  more?: {
    text?: string; // 超链接文字 默认详情
    url?: string; // 链接url  向dataSource 需要取的值
  };
  pointerEvents?: string; // 默认none
}

interface QkGaoDeMapType {
  /** AMap配置 */
  AMapOptions?: Record<string, any>;
  /** load 配置 */
  options?: Record<string, any>;
  /** 描边配置
   *  不写该属性不会进行描边
   *  启用描边 strokeOptions:{}
   * */
  strokeOptions?: {
    name?: string; // 绘制边界名称 例如：中国 湖南
    strokeWeight?: number; // 描边宽度
    fillColor?: string; // 填充颜色
    fillOpacity?: number; // 填充透明度
    [key: string]: any;
  };
  /** 加载卫星地图配置  */
  tileLayerOptions?: Record<string, any>;
  /** 加载行政区配置  */
  districtLayerOptions?: Record<string, any>;
  /** 数据源 */
  dataSource?: PointType[];
  /** 地图加载完成 */
  completed?: (gdMap: { AMap: any; map: any }) => void;
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: CSSProperties;
  /**
   * 自定义窗体
   * 默认不启用
   * 启用 infoWindow:{}
   * */
  infoWindow?: {
    options?: InfoWindowOptions;
    // 如果render存在，则会覆盖上面的配置
    render?: (data: PointType) => React.ReactNode;
  };
  /** 地图缩放快捷键 默认mousewheel */
  mapZoomShortcut?: 'mousewheel' | 'ctrl+mousewheel';
  /**  自动定位并缩放级别 */
  autoLocateScaleLevels?: boolean;
  /** 是否叠加省名称 默认true */
  isAddProvinceNamesLayer?: boolean;
  /** 语言 */
  language?: 'en' | 'cn';
  /**连接线 */
  drawConnectLinesOptions?: {
    color?: {
      start: string;
      end: string;
    };
    effectSymbol?: string;
    symbolSize?: number;
    endPoints?: PointType[];
  };
}

/** 是否是对象 */
export const isObject = (val: any) => {
  return Object.prototype.toString.call(val) === '[object Object]';
};

/** 自定义窗体 */
const CreateTipInfoPanel: React.FC<{
  data: Record<string, any>; // 当前点的数据
  render?: any; // 自定义窗体
  options?: InfoWindowOptions; // 窗体配置
}> = ({ data, render, options }) => {
  if (typeof render === 'function') {
    return render(data);
  }
  const { columns = [], more = {} } = options ?? {};
  const { text = '详情' } = more;
  return (
    <div className="tip-info-panel">
      <div className="panel-header flex">
        <h2 className="flex-1">{data.title}</h2>
        <a
          className="btn-more"
          href={data.url}
          target="_blank"
          rel="noreferrer"
        >
          {text}
        </a>
      </div>
      <div className="panel-body">
        <ul>
          {columns.map((item: Record<string, any>) => {
            return (
              <React.Fragment key={item.dataIndex}>
                <li className="flex">
                  <span className="text-label">{item.title}</span>
                  <span className="text-value">
                    {data[item.dataIndex]} {item?.unit}
                  </span>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const QkGaoDeMap: React.ForwardRefRenderFunction<unknown, QkGaoDeMapType> = (
  props,
  ref
) => {
  const {
    AMapOptions = {},
    options = {},
    strokeOptions,
    tileLayerOptions,
    districtLayerOptions,
    completed,
    className = '',
    style = {},
    infoWindow = null,
    mapZoomShortcut = 'mousewheel',
    autoLocateScaleLevels = false,
    isAddProvinceNamesLayer = true,
    language = 'cn'
  } = props;
  const mapRef = useRef<HTMLDivElement>(null);
  const gdMap = useRef<{ AMap: any; map: any; chart: any }>({
    AMap: null,
    map: null,
    chart: null
  });
  const layer = useRef({
    province: [],
    china: [],
    loadLayer: ''
  });
  const [ctrlPressed, setCtrlPressed] = useState(false);
  const drawConnectLinesOptions = {
    endPoints: [],
    color: {
      start: '#F7A61B',
      end: '#01FE7D'
    },
    symbolSize: 10,
    effectSymbol:
      'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjVweCIgaGVpZ2h0PSIyNXB4IiB2aWV3Qm94PSIwIDAgMjUgMjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+57yW57uEIDEzNDwvdGl0bGU+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnvJbnu4QtMTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjIzNzAwMCwgMC40OTg5ODcpIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iI0Q4RDhEOCIgb3BhY2l0eT0iMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48L3JlY3Q+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLot6/lvoQtNTblpIfku70tOCIgZmlsbD0iIzAxRkU3RCIgcG9pbnRzPSIxMi4zOTU5ODAzIDQgNyAxOS44MjYyMjI5IDExLjkzNzYxNDUgMTYuNDk1NzU5OCAxNy4zNDIyOTU1IDE5LjgyNjIyMjkiPjwvcG9seWdvbj4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
    ...props.drawConnectLinesOptions
  };
  /** 语言字典 */
  const languageDictionary = {
    cn: {
      mapZoomTips: '按Ctrl + 滚轮可缩放地图'
    },
    en: {
      mapZoomTips: 'Press Ctrl + scroll wheel to zoom the map'
    }
  };
  const dataSource = [
    ...(props.dataSource || []),
    ...(drawConnectLinesOptions?.endPoints || []).filter(
      (item: Record<string, any>) => item.lngLat
    )
  ];
  /** 显示对应的省名称 start  */
  const addProvinceNamesLayer = () => {
    const { AMap, map } = gdMap.current;
    if (!AMap || !map) return;
    const labels: any = [];
    for (let i = 0; i < districts.length; i++) {
      const label: Record<string, any> = {
        zIndex: 1,
        opacity: 1,
        text: {
          content: '',
          direction: 'center',
          offset: [0, 0],
          zooms: [3, 5],
          style: {
            fontSize: 13,
            fontWeight: 'normal',
            fillColor: '#000',
            strokeColor: '#fff',
            strokeWidth: 2
          }
        }
      };
      const district = districts[i];
      const name = district[language === 'en' ? 'name_en' : 'name_cn'];
      label.text.content = name;
      label.position = district.center.split(',');
      if (districts[i].position) {
        label.text.direction = districts[i].position;
      }
      const labelsMarker = new AMap.LabelMarker(label);
      labels.push(labelsMarker);
    }
    const labelsLayer = new AMap.LabelsLayer({
      zooms: [3, 20],
      zIndex: 99,
      // 该层内标注是否避让
      collision: true,
      // 设置 allowCollision：true，可以让标注避让用户的标注
      allowCollision: true,
      passMouse: true
    });
    labelsLayer.add(labels);
    labelsLayer.setMap(map);
  };

  /** 显示对应的省名称 end  */

  /** 获取边界路径 */
  const getBoundaryInfo = async (
    name: string,
    isGenerateAuxPath = false
  ): Promise<{ polygon: any; district: any; auxPolygons: any }> => {
    const { AMap, map } = gdMap.current;
    if (!AMap || !map || !name) {
      return { polygon: null, district: null, auxPolygons: null };
    }
    return await new Promise((resolve, reject) => {
      const district = new AMap.DistrictSearch({
        level: 'province',
        extensions: 'all',
        subdistrict: 0,
        showbiz: false
      });
      district.search(name, (status: any, result: any) => {
        if (result.info === 'OK') {
          // 外多边形坐标数组和内多边形坐标数组
          const outer = [
            new AMap.LngLat(-360, 90, true),
            new AMap.LngLat(-360, -90, true),
            new AMap.LngLat(360, -90, true),
            new AMap.LngLat(360, 90, true)
          ];
          const holes = result.districtList[0].boundaries || [];
          const pathArray = [outer, ...holes];
          const polygon = new AMap.Polygon({
            pathL: pathArray,
            strokeColor: '#1CBAA7',
            strokeWeight: strokeOptions?.strokeWeight ?? 1,
            fillColor: strokeOptions?.fillColor ?? '#000',
            fillOpacity: strokeOptions?.fillOpacity ?? 0.8,
            ...strokeOptions
          });
          polygon.setPath(pathArray);
          /** 生成一个辅助透明路径，让绘制的区域能够以最佳的方式显示 */
          const auxPolygons: any[] = [];
          if (isGenerateAuxPath) {
            for (let i = 0; i < holes.length; i++) {
              const auxPolygon = new AMap.Polygon({
                pathL: holes[i],
                strokeColor: 'transparent',
                strokeWeight: 0,
                fillOpacity: 0
              });
              auxPolygon.setPath(holes[i]);
              auxPolygons.push(auxPolygon);
            }
          }
          resolve({ polygon, auxPolygons, district: result.districtList[0] });
        }
      });
    });
  };

  /** 给中国地图绘制边界  */
  const drawBoundaries = () => {
    const { AMap, map } = gdMap.current;
    if (!AMap || !map) return;
    /** 备用：这里绘制中国地图是为了在地图缩放的时候可以用 */
    mapZoomShortcut === 'ctrl+mousewheel' &&
      setTimeout(() => {
        !layer.current.china.length &&
          getBoundaryInfo('中国')
            .then((data) => {
              layer.current.china = data.polygon;
            })
            .catch((e) => {
              console.log(e);
            });
      });
    /** 这里是根据实际绘制边界 */
    !layer.current.province.length &&
      getBoundaryInfo(strokeOptions?.name ?? '中国', true)
        .then((data) => {
          layer.current.province = data.polygon;
          map.add(data.polygon);
          if (autoLocateScaleLevels) {
            mapAutoLocateScaleLevels({ polygon: data.auxPolygons });
          }
        })
        .catch((e) => {
          console.log(e);
        });
  };

  /** 绘制行政区域 */
  const drawDistrictLayer = (
    districtLayerOptions: Record<string, any> | undefined
  ) => {
    const { AMap, map } = gdMap.current;
    if (!AMap || !map) return;
    const options = {
      zIndex: 10, // 设置图层层级
      SOC: 'CHN', // 设置显示国家
      depth: 1, // 设置数据显示层级
      styles: {
        'province-stroke-width': 0,
        'city-stroke-width': 0,
        'nation-stroke': 'rgba(0,0,0,0)', // 设置国境线颜色
        'coastline-stroke': 'rgba(0,0,0,0)', // 设置海岸线颜色
        'province-stroke': 'rgba(0,0,0,0)', // 设置省界颜色
        fill: 'rgba(0,0,0,0)'
      },
      ...(districtLayerOptions || {})
    };
    const disCountry = new AMap.DistrictLayer.Country(options);
    disCountry.setMap(map);
  };

  /** 加载卫星地图 */
  const loadTileLayer = () => {
    const { AMap, map } = gdMap.current;
    if (!AMap || !map) return;
    map.add(
      new AMap.TileLayer.Satellite({
        opacity: 1,
        detectRetina: true
      })
    );
  };
  /** 加载海量点 */
  const loadPoints = () => {
    const { AMap, map } = gdMap.current;
    if (!AMap || !map) return;
    // 设置dataSource默认配置项
    const options = {
      color: 'red', // 点颜色
      animation: 'DIFFUSION', // 动画 点扩散
      size: 8 // 点大小 无需带单位
    };
    const markers: any[] = [];
    const data = [...dataSource];
    for (let i = 0; i < data.length; i++) {
      const row = { ...options, ...data[i] }; // 原始数据与默认数据进行合并
      const AMap: any = gdMap.current?.AMap;
      const marker = new AMap.Marker({
        position: row.lngLat, // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        content: `<div style="--color:${row.color};--animation:${row.animation};--size:${row.size}px" class="icon-marker"></div>`,
        extData: {
          id: row.id
        },
        anchor: 'center',
        offset: new AMap.Pixel(0, 0), // 以 icon 的 [center bottom] 为原点
        zIndex: 999
      });
      /** 是否给标点的详细地址  */
      if (data[i].address) {
        const InfoWindow = new AMap.InfoWindow({
          // isCustom: true, // 使用自定义窗体
          content: data[i]?.address,
          offset: new AMap.Pixel(0, -15),
          autoMove: true
          // closeWhenClickMap: true
        });
        data[i]?.address && InfoWindow.open(map, marker.getPosition());
      }
      marker.on('click', async () => {
        if (typeof data[i]?.onClick === 'function') {
          data[i].onClick?.(data[i]);
        }
        if (isObject(infoWindow) && data[i].hasInfoWindow !== false) {
          if (data[i]?.request) {
            row.result = await data[i]?.request(row);
          }
          const InfoWindow = new AMap.InfoWindow({
            isCustom: true, // 使用自定义窗体
            content: ReactDOMServer.renderToStaticMarkup(
              <CreateTipInfoPanel
                data={row}
                render={infoWindow?.render}
                options={infoWindow?.options}
              />
            ),

            offset: new AMap.Pixel(0, -15),
            autoMove: true,
            closeWhenClickMap: true
          });
          AMap.closeInfoWindow = () => {
            InfoWindow.close();
          };
          InfoWindow.open(map, marker.getPosition());
          InfoWindow.on('close', () => {
            AMap.closeInfoWindow = void 0;
          });
        }
      });
      markers.push(marker);
    }
    map.add(markers);
  };

  /** 更换地图缩放事件 */
  const setMapZoomShortcut = () => {
    const { AMap, map } = gdMap.current;

    if (!AMap || !map) return;
    document.addEventListener('keydown', (e) => {
      e.stopPropagation();
      gdMap.current.map.setStatus({
        scrollWheel: true
      });
      if (e.keyCode === 17) setCtrlPressed(true);
    });

    document.addEventListener('keyup', (e) => {
      e.stopPropagation();
      gdMap.current.map.setStatus({
        scrollWheel: false
      });
      if (e.keyCode === 17) setCtrlPressed(false);
    });
  };

  /** 地图自动定位，自动缩放级别 */
  const mapAutoLocateScaleLevels = ({ polygon }: { polygon: any }) => {
    const { AMap, map } = gdMap.current;
    if (!AMap || !map) return;
    if (strokeOptions?.name !== '中国') {
      layer.current.loadLayer = 'province';
      if (polygon) {
        map.add(polygon);
        map.setFitView(polygon);
      }
    } else {
      layer.current.loadLayer = 'china';
    }
    /** 当地图设置了最佳视野之后再监听地图缩放变化 */
    setTimeout(() => {
      const realZoom = map.getZoom();
      map.on('zoomchange', () => {
        const zoomLevel = map.getZoom(); // 获取当前地图缩放级别
        if (zoomLevel < realZoom) {
          if (layer.current.loadLayer !== 'china') {
            layer.current.loadLayer = 'china';
            map?.remove(layer.current.province);
            map?.add(layer.current.china);
          }
        } else {
          if (layer.current.loadLayer !== 'province') {
            layer.current.loadLayer = 'province';
            map?.remove(layer.current.china);
            map?.add(layer.current.province);
          }
        }
        // 在这里可以根据当前地图缩放级别调整地图显示内容
      });
    }, 5000);
  };

  /** 绘制连接线 */

  const drawConnectLines = (endPoints: PointType[]) => {
    const data: any = [];
    endPoints.forEach((item: Record<string, any>) => {
      const points = item.from || [];
      points.forEach((lngLat: any[]) => {
        data.push({
          coords: [lngLat, item.lngLat]
        });
      });
    });
    const { AMap, map, chart } = gdMap.current;
    if (!AMap || !map || !chart) return;
    const groupedData = dataSource.reduce((acc: Record<string, any>, item) => {
      const color = item.color as string;
      if (!acc[color]) {
        acc[color] = [];
      }
      acc[color].push(item);
      return acc;
    }, {});

    const scatters = [];
    for (const key in groupedData) {
      const data = groupedData[key];
      const scatterOptions = {
        type: 'scatter',
        coordinateSystem: 'amap',
        symbolSize: 15,
        itemStyle: {
          normal: {
            color: key
          }
        },
        data: data.map((item: PointType) => ({
          value: item.lngLat
        }))
      };
      scatters.push(scatterOptions);
    }

    const series = [
      {
        type: 'lines',
        coordinateSystem: 'amap',
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: drawConnectLinesOptions.effectSymbol,
          symbolSize: drawConnectLinesOptions.symbolSize,
          color: '#01FE7D'
        },
        lineStyle: {
          normal: {
            width: 1,
            opacity: 0.8,
            curveness: 0.2,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: drawConnectLinesOptions?.color?.start || ''
              },
              {
                offset: 1,
                color: drawConnectLinesOptions?.color?.end || ''
              }
            ])
          }
        },
        data
      },
      ...scatters
    ];
    console.log({ series });
    gdMap.current.chart.setOption({
      series
    });
  };
  useImperativeHandle(ref, () => ({
    loadMap,
    gdMap: gdMap.current
  }));

  /** 加载地图 */
  const loadMap = async (): Promise<any> => {
    return await new Promise((resolve, reject) => {
      if (gdMap.current?.map) {
        gdMap.current?.map?.destroy();
      }
      void AMapLoader.load({
        key: '475c97e5ba9c55b5bbf684b116fe3c6e', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '1.4.15', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        ...options
      }).then(async (AMap) => {
        window.AMap = AMap;
        const echartsAmap = document.getElementById('echarts-amap');
        if (!echartsAmap) return;
        if (gdMap.current.chart) gdMap.current.chart.dispose();
        const chart = echarts.init(echartsAmap);
        const option = {
          // 加载 amap 组件
          amap: {
            lang: language,
            // mapStyle: 'amap://styles/0474b7b572d0cb829734acf2ec3e67cf', // amap://styles/blue amap://styles/a6db628fd05d5239b0eb3aceb8e78bdf
            zoom: 4,
            zooms: [2, 10], // 放大缩小限制
            center: [117.552366, 41.997914],
            resizeEnable: true,
            scrollWheel: false,
            ...AMapOptions
          },
          series: []
        };
        chart.setOption(option);
        // @ts-ignore
        const amapComponent = chart.getModel().getComponent('amap');
        amapComponent.setEChartsLayerInteractive(false);
        const map = amapComponent.getAMap();
        gdMap.current = {
          map,
          AMap,
          chart
        };
        /** 是否加载省名称 */
        if (isAddProvinceNamesLayer) {
          addProvinceNamesLayer();
        }
        /** 加载地图插件  */
        const plugin = [
          isObject(strokeOptions) && 'AMap.DistrictSearch',
          isObject(tileLayerOptions) && 'AMap.TileLayer',
          isObject(districtLayerOptions) && 'AMap.DistrictLayer'
        ].filter(Boolean);
        AMap.plugin(plugin, () => {
          /** 给中国地图绘制边界  */
          plugin.includes('AMap.DistrictSearch') && drawBoundaries();
          /** 绘制行政区域 */
          plugin.includes('AMap.DistrictLayer') &&
            drawDistrictLayer(districtLayerOptions);
          /** 加载卫星地图 */
          plugin.includes('AMap.TileLayer') && loadTileLayer();
        });
        /** 更换提示缩放事件 */
        if (mapZoomShortcut === 'ctrl+mousewheel') {
          setMapZoomShortcut();
        }
        /**  地图加载完成 */
        if (typeof completed === 'function') {
          // 显示省级名称 start
          const layer = new AMap.LabelsLayer({
            // 开启标注避让，默认为开启，v1.4.15 新增属性
            collision: false,
            // 开启标注淡入动画，默认为开启，v1.4.15 新增属性
            animation: true
          });
          map.add(layer);
          await new Promise((resolve) => setTimeout(resolve, 1500));
          completed(gdMap.current);
        }
        resolve(map);
      });
    });
  };

  useEffect(() => {
    void loadMap().then(() => {
      /** 加载海量点 */
      if (dataSource?.length) {
        loadPoints();
        drawConnectLines(drawConnectLinesOptions.endPoints);
      }
    });
  }, []);
  useUpdateEffect(() => {
    /** 加载海量点 */
    if (dataSource?.length) {
      loadPoints();
      drawConnectLines(drawConnectLinesOptions.endPoints);
    }
  }, [JSON.stringify(dataSource)]);
  useLayoutEffect(() => {
    document.body.focus(); // 将焦点设置到<body>元素上
  }, []);
  return (
    <div
      ref={mapRef}
      className={classNames(
        { 'qk-pointer-events-none': ctrlPressed },
        'qk-gao-de-map h-full w-full',
        className
      )}
      style={style}
    >
      {mapZoomShortcut === 'ctrl+mousewheel' && (
        <div className="map-zoom-shortcut-tip shortcut-tip--simple">
          {languageDictionary[language].mapZoomTips}
        </div>
      )}

      <div id="echarts-amap" className=" h-full w-full absolute"></div>
    </div>
  );
};

export default forwardRef(QkGaoDeMap);
