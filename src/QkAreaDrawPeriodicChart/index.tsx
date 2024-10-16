import React, { useLayoutEffect, useRef } from 'react';
import { fabric } from 'fabric';
import _ from 'lodash';

interface Column {
  background: string;
  color: string;
  list: { title: string; value: number }[];
}

interface DataItem {
  name?: string;
  start: string;
  end: string;
  columns: {
    w?: Column;
    s?: Column;
    h?: Column;
    [key: string]: Column | undefined; // 添加额外的索引签名
  };
  [key: string]: any;
}

/** 给数据添加总资产 */
const dataWithTotal = (data: DataItem[]) => {
  return data.map((item) => {
    let total = 0;
    for (const key in item.columns) {
      if (Object.prototype.hasOwnProperty.call(item.columns, key)) {
        const column = item.columns[key];
        total +=
          column?.list.reduce((prev, current) => {
            return prev + Number(current.value);
          }, 0) || 0; // 使用可选链运算符和短路运算符来保证计算不会出错
      }
    }
    return { ...item, total };
  });
};

/** 单个工艺数据总资产 */
const columnsItemWithTotal = (data: { title: string; value: number }[]) => {
  return data.reduce((acc, cur) => acc + cur.value, 0);
};

const formattedNumber = (num: number, digit = 2) => {
  try {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: digit,
      maximumFractionDigits: digit
    });
  } catch (e) {
    return num;
  }
};

/** 对象合并 */
type ObjectOf<T> = { [key: string]: T | ObjectOf<T> };
function mergeNestedObjects<T>(
  baseObj: ObjectOf<T>,
  objToMerge: ObjectOf<T>
): ObjectOf<T> {
  const mergedObj: ObjectOf<T> = { ...baseObj };

  for (const key in objToMerge) {
    if (Object.prototype.hasOwnProperty.call(objToMerge, key)) {
      const valueToMerge = objToMerge[key];
      const mergedValue = mergedObj[key];

      if (typeof valueToMerge !== 'object') {
        mergedObj[key] = valueToMerge;
      } else {
        if (typeof mergedValue !== 'object') {
          mergedObj[key] = { ...(mergedValue as unknown as ObjectOf<T>) };
        }

        mergedObj[key] = mergeNestedObjects(
          mergedValue as ObjectOf<T>,
          valueToMerge as ObjectOf<T>
        );
      }
    }
  }

  return mergedObj;
}

interface QkAreaDrawPeriodicChartType {
  /** 数据 */
  data: DataItem[];
  options?: {
    width?: number;
    height?: number;
    background?: string; //背景色
    margin?:
      | {
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
        }
      | number; //间距
    //长条信息
    strip?: {
      width?: number; //宽度
      margin?: number; //间距
      radius?: number; //圆角
      minHeight?: number; // 最小高度
    };
    xAxios?: {
      show?: boolean;
      nameTextStyle?: {
        color?: string;
        fontSize?: number;
      };
      nameRender?: (date: Date, index: number) => string | null;
    };
    yAxios?: {
      height?: number; //刻度高度
      show?: boolean;
      width?: number; //Y轴展示的宽度
      nameTextStyle?: {
        color?: string;
        fontSize?: number;
      };
    };
    [key: string]: any;
  };
}

const QkAreaDrawPeriodicChart: React.FC<QkAreaDrawPeriodicChartType> = ({
  options = {},
  data
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  /** 绘制周期图*/
  const defaultOptions = {
    margin: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10
    },
    yAxios: {
      width: 50,
      height: 60
    },
    strip: {
      width: 28,
      margin: 20,
      radius: 15,
      minHeight: 30
    },
    background: 'transparent',
    height: 390
  };
  options = mergeNestedObjects(defaultOptions, options);

  const height = options?.height ?? 390;
  const stripWidth = options?.strip?.width ?? 28;
  const stripMargin = options?.strip?.margin ?? 20;
  const stripRadius = options?.strip?.radius ?? 15;
  const stripMinHeight = options?.strip?.minHeight ?? 30;
  const background = options.background ?? 'transparent';
  const yAxiosWidth = options?.yAxios?.width ?? 50;
  const yAxiosHeight = options?.yAxios?.height ?? 390;
  let marginLeft = 0,
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0;
  if (typeof options.margin === 'number') {
    marginLeft = options.margin ?? 0;
    marginTop = options.margin;
    marginRight = options.margin;
    marginBottom = options.margin;
  } else if (typeof options.margin === 'object') {
    marginLeft = options?.margin?.left ?? 0;
    marginTop = options.margin?.top ?? 0;
    marginRight = options?.margin?.right ?? 0;
    marginBottom = options.margin?.bottom ?? 0;
  }
  console.log({
    marginLeft,
    marginTop,
    marginRight,
    marginBottom
  });
  console.log(options);
  //已分组数据
  data = dataWithTotal(data);
  const yAxiosMaxValue = Math.max(...data.map((item) => item?.total ?? 0));

  /** 绘制Y轴刻度线 */
  const drawYaxisTickLine = (points: number[]) => {
    return new fabric.Line(points, {
      stroke: '#E6E6E6',
      strokeWidth: 1,
      selectable: false, // 禁用选择
      hoverCursor: 'normal'
    });
  };

  /** 绘制X,Y轴线条 */
  const drawAxisLine = (points: [number, number, number, number]) => {
    return new fabric.Line(points, {
      stroke: '#CCD6EB',
      strokeWidth: 1,
      selectable: false, // 禁用选择
      hoverCursor: 'normal'
    });
  };

  /** 绘制Y轴文字 */
  const drawYAxisLabel = (text: string, left: number, top: number) => {
    return new fabric.Text(text, {
      left,
      top,
      fontSize: 12,
      fontFamily: 'Arial',
      selectable: false, // 禁用选择
      hoverCursor: 'normal',
      fill: '#666666'
    });
  };
  /** 加载图表 */
  const loadChart = ({ canvas, width = 0 }: { canvas: any; width: number }) => {
    {
      /** 绘制一条X轴 */
      const x1 = marginLeft + yAxiosWidth;
      const y1 = height - marginBottom;
      const x2 = width - marginRight;
      const y2 = y1;
      canvas.add(drawAxisLine([x1, y1, x2, y2]));
    }

    {
      /** 绘制一条Y轴 */
      const x1 = marginLeft + yAxiosWidth;
      const y1 = marginTop;
      const x2 = marginLeft + yAxiosWidth;
      const y2 = height - marginBottom;
      canvas.add(drawAxisLine([x1, y1, x2, y2]));
    }

    /** 根据高度计算 Y轴需要绘制多少线条 */
    const yAxiosTickLen = Math.floor(
      (height - marginTop - marginBottom) / yAxiosHeight
    );
    /** 生成Y轴label */
    const yAxiosLabels = [];
    /** 计算一个刻度，对应Y轴多少数值 */
    const yAxiosValue = Math.ceil(yAxiosMaxValue / yAxiosTickLen);
    let yAxiosLabelValue = 0;
    while (yAxiosLabelValue < yAxiosMaxValue) {
      yAxiosLabels.push(yAxiosLabelValue);
      yAxiosLabelValue += yAxiosValue;
    }
    yAxiosLabels.push(yAxiosLabelValue);
    for (let i = 0; i < yAxiosLabels.length; i++) {
      /** 绘制Y轴刻度 */
      const x1 = marginLeft + yAxiosWidth;
      const y1 = height - marginBottom - i * yAxiosHeight;
      const x2 = width - marginRight;
      const y2 = y1;
      canvas.add(drawYaxisTickLine([x1, y1, x2, y2]));
      {
        /** 绘制Y轴文字 */
        const xAxisLabelText = String(formattedNumber(yAxiosLabels[i], 1));
        const xAxisLabelLeft = marginLeft;
        const xAxisLabelTop =
          height - marginTop - marginBottom - i * yAxiosHeight;
        const xAxisLabel: any = drawYAxisLabel(
          xAxisLabelText,
          xAxisLabelLeft,
          xAxisLabelTop
        );
        canvas.add(xAxisLabel);
        xAxisLabel.set({
          top: Math.ceil(y1 - xAxisLabel.height / 2)
        });
      }
    }
    /** 根据周期均分X轴 */
    const xAxiosTickWidth = Math.ceil(
      (width - marginLeft - marginRight - yAxiosWidth) / data.length
    );
    /** 计算1资产对应多少高度 */
    const oneAssetsHeight = yAxiosHeight / yAxiosValue;
    const polylinePoints: { x: number; y: number }[] = []; //绘制折线图需要用到
    /** 根据周期绘制矩形 */
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const columns = item.columns;
      {
        const rangeRectLeft = marginLeft + yAxiosWidth + i * xAxiosTickWidth;
        let rangeRectHeight = Math.ceil(oneAssetsHeight * (item?.total ?? 1));
        if (rangeRectHeight < stripMinHeight) {
          rangeRectHeight = stripMinHeight + 5;
        }
        const rangeRectTop = height - marginBottom - rangeRectHeight;
        const rangeRect: any = new fabric.Rect({
          left: rangeRectLeft,
          top: rangeRectTop,
          width: xAxiosTickWidth,
          height: rangeRectHeight,
          selectable: false, // 禁用选择
          hoverCursor: 'normal',
          opacity: 0.05,
          fill: new fabric.Gradient({
            type: 'linear',
            coords: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: rangeRectHeight
            },
            colorStops: [
              { offset: 0, color: '#6AC1FF' },
              { offset: 0.5, color: '#A4E2FF' }
            ]
          })
        });
        canvas.add(rangeRect);

        /** 绘制风光水柱子 */
        {
          const startLeft =
            xAxiosTickWidth -
            (Object.keys(columns).length * stripWidth +
              (stripMargin * Object.keys(columns).length - 1));
          let columnRectLeft = Math.floor(rangeRectLeft + startLeft / 2);
          Object.keys(columns).forEach((key, index) => {
            columnRectLeft = Math.floor(
              rangeRectLeft + 2 + index * 60 + startLeft / 2
            );
            const columnRectWidth = stripWidth;
            let columnRectHeight = Math.ceil(
              columnsItemWithTotal(columns[key]?.list || []) *
                oneAssetsHeight *
                0.9
            );
            columnRectHeight =
              columnRectHeight < stripMinHeight
                ? stripMinHeight
                : columnRectHeight;
            const columnRectTop = height - marginBottom - columnRectHeight - 2;
            const columnRect: any = new fabric.Rect({
              left: columnRectLeft,
              top: columnRectTop,
              width: columnRectWidth,
              height: columnRectHeight,
              fill: columns[key]?.background,
              stroke: columns[key]?.background,
              selectable: false, // 禁用选择
              hoverCursor: 'normal',
              rx: 15,
              ry: 15
            });
            canvas.add(columnRect);
            /** 给柱子绘制文字 */
            const stripTextString =
              key.toUpperCase() + Object.keys(columns).length;
            const stripText: any = new fabric.Text(stripTextString, {
              left: columnRect.left,
              top: columnRect.top,
              fontSize: 12,
              fontFamily: 'Arial',
              selectable: false, // 禁用选择
              hoverCursor: 'normal',
              fill: columns[key]?.color
            });
            stripText.set({
              left: Math.ceil(
                columnRect.left + (columnRect.width - stripText.width) / 2
              ),
              top: Math.ceil(
                columnRect.top + (columnRect.height - stripText.height) / 2
              )
            });
            canvas.add(stripText);
          });
        }

        /** 在矩形上方绘制文字 */
        {
          const unit = 'WMh'; //单位
          const rectTextString = `${formattedNumber(
            Number(item.total),
            2
          )}  ${unit}\n ${item.start.substring(0, 4)} ${item.start.substring(
            5
          )} - ${item.end.substring(5)}`;
          const rectTextLeft = rangeRect.left;
          const rectTextTop =
            height - marginBottom - (rangeRect?.height ?? 0) - 50;
          const rectText: any = new fabric.Text(rectTextString, {
            left: rectTextLeft,
            top: rectTextTop,
            textAlign: 'center',
            fontSize: 14,
            fontFamily: 'Arial',
            fill: '#000',
            selectable: false, // 禁用选择
            hoverCursor: 'normal'
          });
          const unitIndex = rectTextString.indexOf(unit);
          rectText.setSelectionStyles(
            {
              fill: '#666666'
            },
            unitIndex,
            unitIndex + unit.length
          );

          canvas.add(rectText);
          rectText.set({
            left: Math.ceil(
              rangeRect.left + (rangeRect.width - rectText.width) / 2
            )
          });
        }

        {
          const x1 = marginLeft + yAxiosWidth + i * xAxiosTickWidth + 2;
          const y1 = height - marginBottom - rangeRect?.height ?? 0;
          const x2 = xAxiosTickWidth * (i + 1) + marginLeft + yAxiosWidth + 2;
          const y2 = y1;
          polylinePoints.push(
            {
              x: x1,
              y: y1
            },
            {
              x: x2,
              y: y2
            }
          );
        }
      }
    }
    /** 绘制折线图 */
    {
      const line = new fabric.Polyline(polylinePoints, {
        fill: 'transparent',
        stroke: '#01B5D5',
        strokeWidth: 2,
        selectable: false, // 禁用选择
        hoverCursor: 'normal'
      });
      canvas.add(line);
    }
  };
  useLayoutEffect(() => {
    const width = chartRef.current?.offsetWidth ?? 0;
    /** fabric 配置项 */
    const fabricOptions = {
      selection: false,
      width,
      height,
      backgroundColor: background
    };
    const canvas = new fabric.Canvas(canvasRef.current, fabricOptions);
    loadChart({ canvas, width });
    const handleResize = _.debounce(() => {
      const container = document.getElementById('canvas-container');
      const newWidth = container?.clientWidth as number;
      const newHeight = container?.clientHeight as number;
      // 设置新的画布大小
      canvas.setWidth(newWidth);
      canvas.setHeight(newHeight);
      // 清除激活的对象
      canvas.discardActiveObject();
      // 清除canvas缓存并重新渲染内容
      canvas.requestRenderAll();
      canvas.clear();
      loadChart({ canvas, width: newWidth });
    }, 500);
    // 监听窗口大小改变事件
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="canvas-container"
      id="canvas-container"
      style={{ height: '100%' }}
      ref={chartRef}
    >
      <canvas ref={canvasRef} id="canvas" />
    </div>
  );
};

export default QkAreaDrawPeriodicChart;
