import React, { useLayoutEffect, useRef } from 'react';
import { fabric } from 'fabric';
import _ from 'lodash';

/** 获取日期最大值和最小值 */
const getDateRange = (
  data: { start: string; end: string; [key: string]: any }[]
) => {
  const start = new Date(
    Math.min(...data.map((d) => new Date(d.start).getTime()))
  );
  const end = new Date(Math.max(...data.map((d) => new Date(d.end).getTime())));
  return { minDate: new Date(start), maxDate: new Date(end) };
};

/** 根据一个时间周期，计算这个周期有多少天 */
const getDatesBetween = (start: Date, end: Date): string[] => {
  const dates: string[] = [];
  const currentDate = new Date(start);
  const endDate = new Date(end);

  while (currentDate <= endDate) {
    dates.push(currentDate.toISOString().slice(0, 10));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};

type GroupedData = Record<string, DataItem[]>;

/** 根据总数量进行数据归类 */
function groupDataByTotal(data: DataItem[]): GroupedData {
  const computedData = data.map((item) => {
    const total = item.columns.reduce(
      (acc, cur) => acc + Number(cur?.value),
      0
    );
    return {
      ...item,
      total
    };
  });
  const sortedData = computedData.sort((a, b) => b.total - a.total);
  const groupedData = sortedData.reduce((acc: Record<string, any>, cur) => {
    const index = cur.total.toString();
    if (!acc[index]) {
      acc[index] = [];
    }
    acc[index].push(cur);
    return acc;
  }, {});

  return groupedData;
}

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

export type DataItem = {
  name?: string;
  start: string;
  end: string;
  columns: {
    title: string;
    value: number;
    color: string;
    background: string;
  }[];
  font?: { color?: string; size?: number };
  color?: string;
  [key: string]: any;
};

interface QkStackDrawPeriodicChartType {
  /** 数据 */
  data: DataItem[];
  options?: {
    width?: number;
    height?: number;
    background?: string; //背景色
    margin?:
      | {
          left?: number;
          top?: number;
          right?: number;
          bottom?: number;
        }
      | number; //间距
    //长条信息
    strip?: {
      height?: number; //高度
      margin?: number;
    };
    tickLineWidth?: number; //刻度长度
    xAxios?: {
      show?: boolean;
      nameTextStyle?: {
        color?: string;
        fontSize?: number;
      };
      nameRender?: ((date: string, index: number) => string) | null | undefined;
    };
    yAxios?: {
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

const QkStackDrawPeriodicChart: React.FC<QkStackDrawPeriodicChartType> = ({
  options = {},
  data
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const defaultOptoins = {
    margin: {
      left: 0,
      top: 20, //失效
      right: 50,
      bottom: 50 //失效，高度会累加
    },
    yAxios: {
      width: 50
    },
    strip: { height: 24, margin: 20 },
    background: 'transparent',
    xAxios: {
      nameRender: null
    }
  };
  options = mergeNestedObjects(defaultOptoins, options);
  let height = options?.height ?? 700;
  const tickLineWidth = options.tickLineWidth ?? 65;
  const { width: yAxiosWidth = 50 } = options.yAxios ?? {};
  const { nameRender } = options.xAxios ?? {};
  const stripMargin = options.strip?.margin ?? 0;
  const stripHeight = options.strip?.margin ?? 0;
  const background = options.background;
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

  //已分组数据
  const groupedData = groupDataByTotal(data);
  if (!height) {
    height =
      Object.keys(groupedData).length * stripMargin +
      data.length * stripMargin +
      marginBottom +
      marginTop +
      50;
  }

  /** 绘制X轴刻度线 */
  const drawXAxisTickLine = (points: number[]) => {
    return new fabric.Line(points, {
      stroke: '#E6E6E6',
      selectable: false, // 禁用选择
      hoverCursor: 'normal'
    });
  };

  /** 绘制X,Y轴线条 */
  const drawAxisLine = (points: [number, number, number, number]) => {
    return new fabric.Line(points, {
      //left: yAxiosWidth + margin,
      stroke: '#CCD6EB',
      strokeWidth: 1,
      selectable: false, // 禁用选择
      hoverCursor: 'normal'
    });
  };

  /** 绘制X轴文字 */
  const drawXAxisLabel = (xAxisLabel: string, left: number, top: number) => {
    return new fabric.Text(xAxisLabel, {
      left,
      top,
      fontSize: 12,
      fontFamily: 'SourceHanSansCN',
      selectable: false, // 禁用选择
      hoverCursor: 'normal',
      fill: '#666666',
      angle: -20
    });
  };

  /** 绘制刻度线 */
  const drawXAxis = ({
    dates,
    height,
    oneDayXaxiosWidth
  }: {
    dates: string[];
    oneDayXaxiosWidth: number;
    height: number;
  }) => {
    const cv = [];
    for (let i = 0; i < dates.length; i++) {
      /** 绘制X轴刻度 */
      const x1 = marginLeft + yAxiosWidth + i * tickLineWidth + tickLineWidth;
      const y1 = marginTop;
      const x2 = x1;
      const y2 = height - marginTop - marginBottom;
      /** 绘制Y轴文字 */
      let xAxisLabelText = String(dates[i]);
      if (typeof nameRender === 'function') {
        xAxisLabelText = nameRender(dates[i], i);
      }
      const xAxisLabelLeft = marginLeft - 30 + yAxiosWidth + i * tickLineWidth;
      const xAxisLabelTop = height - marginTop - marginBottom + 35;
      const xAxisLabel: any = drawXAxisLabel(
        xAxisLabelText,
        xAxisLabelLeft,
        xAxisLabelTop
      );
      cv.push(drawXAxisTickLine([x1, y1, x2, y2]), xAxisLabel);
      /** 设置文字剧中 */
      xAxisLabel.set({
        left: Math.floor(xAxisLabelLeft - xAxisLabel.width / 2) + tickLineWidth
      });
    }
    return cv;
  };

  /** 绘制图上的菱形 */
  const drawDiamond = ({
    oneDayXaxiosWidth,
    minDate,
    height,
    width
  }: {
    oneDayXaxiosWidth: number;
    minDate: Date;
    height: number;
    width: number;
  }) => {
    const skewX = -20;
    const cv: any[] = [];
    let wrapRectTop = height - marginTop - marginBottom - stripMargin;
    Object.keys(groupedData).forEach((key, index, array) => {
      /** 绘制外围图层 */
      const len = groupedData[key].length;
      const wrapRectHeight = stripMargin * len;
      wrapRectTop -= wrapRectHeight;
      if (index > 0) {
        wrapRectTop -= stripMargin;
      }
      const wrapRect: any = new fabric.Rect({
        left: marginLeft + yAxiosWidth,
        top: wrapRectTop,
        width: width - marginLeft + marginRight - yAxiosWidth,
        height: wrapRectHeight,
        fill: 'transparent',
        stroke: 'transparent',
        selectable: false, // 禁用选择
        hoverCursor: 'normal'
      });
      /** 绘制Y轴 */
      const yAxiosLabel: any = new fabric.Textbox(key, {
        left: wrapRect.left,
        top: wrapRect.top,
        fontSize: 14,
        fontFamily: '微软雅黑',
        fill: '#5B6C7E',
        selectable: false, // 禁用选择
        hoverCursor: 'normal'
      });
      const yAxiosLabelTop = Math.ceil(
        wrapRect.top + (wrapRect.height - yAxiosLabel.height) / 2
      );
      const yAxiosLabelLeft = Math.ceil(wrapRect.left - yAxiosLabel.width - 20);
      yAxiosLabel.set({
        top: yAxiosLabelTop,
        left: yAxiosLabelLeft
      });
      cv.push(wrapRect);
      cv.push(yAxiosLabel);
      for (let i = 0; i < groupedData[key].length; i++) {
        const item = groupedData[key][i];
        const top = wrapRectTop + i * stripHeight + i * 1;
        //菱形偏移
        const left = Math.ceil(
          (getDatesBetween(minDate, new Date(item.start)).length - 1) *
            oneDayXaxiosWidth +
            marginLeft +
            yAxiosWidth +
            tickLineWidth
        );
        // console.log({
        //   左侧距离: margin + tickLineWidth + yAxiosWidth,
        //   每个的左侧距离:
        //     margin +
        //     tickLineWidth +
        //     yAxiosWidth +
        //     (getDatesBetween(minDate, new Date(item.start)).length - 1) *
        //       oneDayXaxiosWidth,
        //   刻度宽度: tickLineWidth,
        //   一天等于: oneDayXaxiosWidth
        // })
        const w =
          oneDayXaxiosWidth *
            (getDatesBetween(new Date(item.start), new Date(item.end)).length -
              1) +
          skewX / 2 +
          2;
        const rect: any = new fabric.Rect({
          left: left,
          top: top,
          width: w,
          height: stripHeight,
          fill: 'transparent',
          stroke: 'transparent',
          selectable: false, // 禁用选择
          hoverCursor: 'normal'
        });

        /** 根据columns绘制3个子方块 */
        let subRectLeft = rect.left;
        const columnsRect: any[] = [];
        let rectTextString = '';
        const colors: {
          startIndex: number;
          endIndex: number;
          color: string;
        }[] = [];
        let startIndex = rectTextString.length;
        item.columns.forEach((v, vIndex) => {
          const subRectWidth = Math.floor((v.value / Number(key)) * rect.width);
          const subRect: any = new fabric.Rect({
            left: subRectLeft,
            top: rect.top,
            width: subRectWidth,
            height: stripHeight,
            fill: v.background,
            stroke: v.background,
            selectable: false, // 禁用选择
            hoverCursor: 'normal',
            skewX
          });
          subRectLeft += subRectWidth;
          const text = v.value > 0 ? `${v.title}/${v.value} ` : '';
          rectTextString += text;
          if (subRect.width) columnsRect.push(subRect);
          colors.push({
            startIndex,
            endIndex: text.length + startIndex,
            color: v.color
          });
          startIndex += text.length;
        });

        /** 设置图表上的文字 例如：W/3 S/1 H/3*/
        const rectText: any = new fabric.Text(rectTextString, {
          left: rect.left,
          top: rect.top,
          textAlign: 'center',
          fontSize: 14,
          fontFamily: 'Arial',
          fill: '#fff',
          selectable: false, // 禁用选择
          hoverCursor: 'normal'
        });
        colors.forEach((kk) => {
          rectText.setSelectionStyles(
            {
              fill: kk.color
            },
            kk.startIndex,
            kk.endIndex
          );
        });
        const textLeft = Math.ceil(
          rect.left + (rect.width - rectText.width) / 2
        );
        const textTop = Math.ceil(
          rect.top + (rect.height - rectText.height) / 2
        );
        /** 如果文字在矩形中放不下，则放到左边或者右边 */
        const textOptions = {
          left: textLeft,
          top: textTop,
          fill: 'red'
        };
        //默认放右边，如果右边放不下那就放左边,左边放不下就放中间
        const textWidth = rectText.width + 20;
        const leftMargin = rect.left - marginLeft - tickLineWidth;
        const rightMargin = width - (rect.left + rect.width + marginLeft) - 20;

        if (rightMargin > textWidth) {
          /** 右边间距是否大于字体长度 */
          textOptions.left = Math.ceil(rect.left + rect.width + 20);
        } else if (leftMargin > textWidth) {
          /** 左边间距是否大于字体长度 */
          // console.log({
          //   rightMargin,
          //   leftMargin,
          //   textWidth,
          //   rectTextString,
          //   left: rect.left,
          //   start: item.start,
          //   end: item.end,
          // });
          textOptions.left = Math.ceil(rect.left - textWidth);
        } else {
          textOptions.left = Math.ceil(
            rect.left + rect.width / 2 - textWidth / 2
          );
        }
        // 设置文本位置
        rectText.set(textOptions);
        cv.push(rect, ...columnsRect, rectText);
      }
    });
    return cv;
  };

  /** 加载图表 */
  const loadChart = ({ canvas, width = 0 }: { canvas: any; width: number }) => {
    const dateRange = getDateRange(data);
    const { minDate, maxDate } = dateRange;
    const dates = getDatesBetween(minDate, maxDate);
    /** 根据图长度，计算能放下X轴多少刻度 */
    const xAxiosTickLen =
      Math.floor(
        (width - yAxiosWidth - (marginLeft + marginRight)) / tickLineWidth
      ) - 1;
    console.log({ xAxiosTickLen });
    /** 间隔多少天取一次数据 */
    const intervalDate = Math.ceil(dates.length / xAxiosTickLen);
    /** 每间隔16天，向dates取一次数据绘制X轴刻度 */
    const xAxiosTickData = [];
    for (let i = 0; i < dates.length; i++) {
      const item = dates[i];
      if (i % intervalDate === 0) {
        xAxiosTickData.push(item);
      }
    }
    /** 计算一个日期对应图表长度 */
    const oneDayXaxiosWidth = tickLineWidth / intervalDate;
    drawXAxis({ dates: xAxiosTickData, oneDayXaxiosWidth, height }).forEach(
      (cv) => {
        canvas.add(cv);
      }
    );
    /** X轴 */
    canvas.add(
      drawAxisLine([
        yAxiosWidth + marginLeft,
        height - marginTop - marginBottom,
        width - marginRight,
        height - marginTop - marginBottom
      ])
    );
    /** Y轴 */
    canvas.add(
      drawAxisLine([
        yAxiosWidth + marginLeft,
        marginTop,
        yAxiosWidth + marginLeft,
        height - marginTop - marginBottom
      ])
    );
    drawDiamond({ oneDayXaxiosWidth, minDate, height, width }).forEach((cv) => {
      canvas.add(cv);
    });
    return canvas;
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

export default QkStackDrawPeriodicChart;
