import React, { useLayoutEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import _ from 'lodash';
import './index.scss';

interface DataItem {
  id: string;
  name: string;
  start: string;
  end: string;
  font?: {
    color?: string;
    size?: number;
  };
  background?: string;
}

/** 根据ID进行数据归类 */
const groupDataById = (data: DataItem[]) => {
  const group: Record<string, any> = {};
  for (const row of data) {
    row.start = row.start?.replace(/\//g, '-');
    row.end = row.end?.replace(/\//g, '-');
    if (group[row.id]) {
      group[row.id].push(row);
    } else {
      group[row.id] = [row];
    }
  }
  return group;
};

/** 计算一个长度能容纳多少文字 */
const getRectWidthWithfonts = ({
  containerWidth = 0, // 容器宽度
  fabricText
}: {
  fabricText: Record<string, any>;
  containerWidth: number;
}) => {
  /** 计算单位位子需要占多少位子 */
  if (containerWidth > fabricText?.width ?? 0) {
    return fabricText?.text;
  }
  const oneFontWidth = fabricText?.width / fabricText?.text?.length;
  let i = 0;
  let curText = '';

  while (curText.length * oneFontWidth < containerWidth - 50) {
    curText += fabricText.text.substr(i, 1);
    i++;
  }
  return curText + '...';
};
/** 浮框 */

/** 获取日期最大值和最小值 */
const getDateRange = (
  data: Array<{ start: string; end: string; [key: string]: any }>
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

/** 获取位置信息 */
const getPosition = (
  target: Record<string, any>,
  toolTip: HTMLDivElement | null
) => {
  if (!toolTip) return { left: 0, top: 0 };
  const toolTipLeft = Math.ceil(
    target.left + target.width / 2 - toolTip.offsetWidth / 2
  );
  const toolTipTop = Math.ceil(target.top - toolTip.offsetHeight - 10);
  return { left: toolTipLeft, top: toolTipTop };
};

interface ObjectOf<T> {
  [key: string]: T | ObjectOf<T>;
}

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

interface DrawPeriodicChartType {
  /** 数据 */
  data: DataItem[];
  options?: {
    diyDrawXaxios?: boolean;
    width?: number;
    height?: number;
    background?: string; // 背景色
    margin?:
      | number
      | {
          top?: number;
          right?: number;
          bottom?: number;
          left?: number;
        }; // 间距
    // 长条信息
    strip?: {
      height?: number; // 高度
      margin?: number; // 间距
      onMouseout?: (stripCanvas: any) => any; // 鼠标经过
      onMouseover?: (stripCanvas: any) => any; // 鼠标离开
    };
    xAxios?: {
      show?: boolean;
      width?: number;
      nameTextStyle?: {
        color?: string;
        fontSize?: number;
      };
      nameRender?: (date: string, index: number) => string;
    };
    yAxios?: {
      onMouseout?: (stripCanvas: any) => any; // 鼠标经过
      onMouseover?: (stripCanvas: any) => any; // 鼠标离开
      onClick?: (data: DataItem[]) => any;
      labelWidth?: number;
      height?: number; // 刻度高度
      show?: boolean;
      width?: number; // Y轴展示的宽度
      nameTextStyle?: {
        color?: string;
        fontSize?: number;
        underline?: boolean;
      };
      showToolTip?: boolean; // 是否显示tooltip
    };
    [key: string]: any;
  };
}

const DrawPeriodicChartPro: React.FC<DrawPeriodicChartType> = ({
  options = {},
  data
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const canvasFabric = useRef<any>(null);
  const [tooltip, setTooltip] = useState<{
    left: number;
    top: number;
    text: string;
    show: boolean;
  }>({
    left: 0,
    top: 0,
    text: '',
    show: false
  });
  const timer = useRef<any>(0);

  /** 根据数据id进行分组 */
  const groupData = groupDataById(data);
  const defaultOptions = {
    height: 28,
    diyDrawXaxios: false,
    margin: {
      top: 50,
      right: 10,
      bottom: 10,
      left: 10
    },
    transparent: 'transparent',
    xAxios: {
      labelWidth: 120,
      width: 80,
      show: true
    },
    strip: {
      height: 28,
      margin: 20
    },
    yAxios: {
      nameTextStyle: {
        color: '#000',
        fontSize: 12,
        underline: false
      },
      showToolTip: true
    }
  };
  options = mergeNestedObjects(defaultOptions, options);
  let height = 0;
  const stripHeight = options?.strip?.height ?? 28;
  const stripMargin = options?.strip?.margin ?? 28;
  const xAxiosWidth = options?.xAxios?.width ?? 80;
  const yAxiosLabelWidth = options?.yAxios?.width ?? 120;
  let marginLeft = 0;
  let marginTop = 0;
  let marginRight = 0;
  let marginBottom = 0;
  if (typeof options.margin === 'number') {
    marginLeft = options.margin;
    marginTop = options.margin;
    marginRight = options.margin;
    marginBottom = options.margin;
  } else if (typeof options.margin === 'object') {
    marginLeft = options?.margin?.left ?? 0;
    marginTop = options.margin?.top ?? 0;
    marginRight = options?.margin?.right ?? 0;
    marginBottom = options.margin?.bottom ?? 0;
  }
  const dataLen = Object.keys(groupData).length;
  if (!height) {
    height =
      marginTop +
      marginBottom +
      dataLen * stripHeight +
      dataLen * stripMargin +
      stripMargin;
  }
  /** updateToolTip */
  const updateToolTip = (
    eventType: 'mouseover' | 'mouseout',
    data: Record<string, any>
  ) => {
    if (data.show) {
      setTooltip((prevState) => {
        return { ...prevState, ...data };
      });
    } else {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        setTooltip((prevState) => {
          return { ...prevState, show: false };
        });
      }, 1000);
    }
  };
  /** 绘制Y轴刻度线 */
  const drawXaxisTickLine = (points: number[], color = '#979797') => {
    return new fabric.Line(points, {
      stroke: color,
      strokeWidth: 1,
      opacity: 0.2,
      selectable: false, // 禁用选择
      hoverCursor: 'normal',
      strokeDashArray: [5, 5]
    });
  };

  /** 绘制X,Y轴线条 */
  const drawAxisLine = (points: [number, number, number, number]) => {
    return new fabric.Line(points, {
      stroke: '#D7D7D7',
      strokeWidth: 1,
      selectable: false, // 禁用选择
      hoverCursor: 'normal'
    });
  };

  /** 绘制tooltip */
  const toolTipBox = ({ text }: { text: string }) => {
    const fabricWrap: any = new fabric.Rect({
      left: 0,
      top: 0,
      width: 100,
      height: 30,
      fill: 'rgba(0,0,0,0.8)',
      stroke: 'rgba(0,0,0,0.8)',
      selectable: false, // 禁用选择
      hoverCursor: 'normal',
      rx: 4,
      ry: 4
    });
    const fabricText: any = new fabric.Text(text, {
      left: 0,
      top: 0,
      fontSize: 12,
      fontFamily: 'Arial',
      selectable: false, // 禁用选择
      hoverCursor: 'normal',
      fill: '#fff'
    });
    fabricText.set({
      left: fabricWrap.width / 2 - fabricText.width / 2,
      top: fabricWrap.height / 2 - fabricText.height / 2
    });

    const toolTipBoxGroup = new fabric.Group([]);
    toolTipBoxGroup.addWithUpdate(fabricWrap);
    toolTipBoxGroup.addWithUpdate(fabricText);
    return toolTipBoxGroup;
  };

  /** 绘制Y轴文字 */
  const drawYAxisLabel = (
    text: string,
    left: number,
    top: number,
    color = '#666666',
    underline = false,
    hoverCursor = 'normal',
    fontSize = 12
  ) => {
    return new fabric.Text(text, {
      left,
      top,
      fontSize,
      fontFamily: 'Arial',
      selectable: false, // 禁用选择
      hoverCursor,
      fill: color,
      underline
    });
  };
  /** 加载图表 */
  const loadChart = ({ canvas, width = 0 }: { canvas: any; width: number }) => {
    {
      /** 绘制一条X轴 */
      const x1 = marginLeft + yAxiosLabelWidth;
      const y1 = marginTop;
      const x2 = width - marginRight;
      const y2 = y1;
      canvas.add(drawAxisLine([x1, y1, x2, y2]));
    }

    // {
    //   /** 绘制一条Y轴 */
    //   const x1 = margin + yAxiosLabelWidth
    //   const y1 = margin
    //   const x2 = margin + yAxiosLabelWidth
    //   const y2 = height - margin
    //   canvas.add(drawAxisLine([x1, y1, x2, y2]))
    // }
    /** 绘制一个背景 */
    {
      const backgroundWidth = width - marginLeft - marginRight - 1;
      const backgroundHeight = height - marginTop - marginBottom - 1;
      const backgroundTop = marginTop + 1;
      const backgroundLeft = marginLeft;
      const background = new fabric.Rect({
        left: backgroundLeft,
        top: backgroundTop,
        width: backgroundWidth,
        height: backgroundHeight,
        fill: '#F9F9F9',
        stroke: '#F9F9F9',
        selectable: false, // 禁用选择
        hoverCursor: 'normal'
      });
      canvas.add(background);
    }

    /** 获取最大日期和最小日期 */
    const { minDate, maxDate } = getDateRange(data);
    /** 根据一个时间周期，计算中间有多少天 */
    const dates = getDatesBetween(minDate, maxDate);
    /** 根据图长度，计算能放下X轴多少刻度 */
    const xAxiosTickLen = Math.floor(
      (width - marginLeft - marginRight - yAxiosLabelWidth) / xAxiosWidth
    );
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
    const oneDayXaxiosWidth = xAxiosWidth / intervalDate;
    /** 根据 xAxiosTickData 数据绘制Y轴 */
    for (let i = 0; i < xAxiosTickData.length; i++) {
      if (options?.xAxios?.show) {
        /** 绘制X轴刻度 */
        const x1 = marginLeft + yAxiosLabelWidth + i * xAxiosWidth;
        const y1 = marginTop;
        const x2 = x1;
        const y2 = height - marginBottom;
        canvas.add(drawXaxisTickLine([x1, y1, x2, y2]));
        /** 绘制X轴文字 */
        const xAxisLabelText = String(xAxiosTickData[i]).replace(/-/g, '/');
        const xAxisLabelLeft = marginLeft + yAxiosLabelWidth + i * xAxiosWidth;
        const xAxisLabelTop = marginTop;
        const xAxisLabel: any = drawYAxisLabel(
          xAxisLabelText,
          xAxisLabelLeft,
          xAxisLabelTop
        );
        canvas.add(xAxisLabel);
        /** 设置文字剧中 */
        xAxisLabel.set({
          left: Math.floor(xAxisLabelLeft - xAxisLabel.width / 2),
          top: y1 - Math.floor(xAxisLabel.height + 10)
        });
      }
    }
    /** 自定义绘制X轴 */
    /** 记录上一个刻度的位置及宽度 */
    if (options?.diyDrawXaxios) {
      let prevXAxisLabel = {
        left: 0,
        width: 0
      };
      for (let i = 0; i < dates.length; i++) {
        const item = dates[i];
        if (
          new Date(item).getDate() === 1 ||
          i === 0 ||
          i === dates.length - 1
        ) {
          /** 绘制X轴刻度 */
          const x1 = Math.ceil(
            marginLeft +
              yAxiosLabelWidth +
              (getDatesBetween(new Date(minDate), new Date(item)).length - 1) *
                oneDayXaxiosWidth
          );
          const y1 = marginTop;
          const x2 = x1;
          const y2 = height - marginBottom;
          const xAxisTickLine = drawXaxisTickLine([x1, y1, x2, y2]);
          canvas.add(xAxisTickLine);
          /** 绘制X轴文字 */
          const xAxisLabelText =
            i === 0 || i === dates.length - 1
              ? String(item.replace(/-/g, '/'))
              : String(item).substring(0, 7).replace(/-/g, '/');
          const xAxisLabelLeft = x1;
          const xAxisLabelTop = marginTop;
          const xAxisLabel: any = drawYAxisLabel(
            xAxisLabelText,
            xAxisLabelLeft,
            xAxisLabelTop
          );
          canvas.add(xAxisLabel);
          /** 设置文字剧中 */
          const xAxisLabelLeftCenter = Math.floor(
            xAxisLabelLeft - xAxisLabel.width / 2
          );
          xAxisLabel.set({
            left: xAxisLabelLeftCenter,
            top: y1 - Math.floor(xAxisLabel.height + 10)
          });
          /** 判断上一个节点与当前节点是否重叠，重叠则隐藏这个节点  */
          if (
            prevXAxisLabel.left + prevXAxisLabel.width >
              xAxisLabelLeft - xAxisLabel.width / 2 &&
            i !== 0
          ) {
            xAxisLabel.set('visible', false);
            xAxisTickLine.set('visible', false);
          }
          prevXAxisLabel = {
            left: xAxisLabelLeftCenter,
            width: xAxisLabel.width
          };
        }
      }
    }

    /** 根据已分组数据绘制矩形线条 */
    Object.keys(groupData).forEach((key, index) => {
      /** 绘制一个辅助矩形 */
      const yAxisLabelRectLeft = marginLeft;
      const yAxisLabelRectTop =
        marginTop + stripMargin + (stripMargin + stripHeight) * index;
      const yAxisLabelRectWidth = yAxiosLabelWidth;
      const yAxisLabelRectHeight = stripHeight;
      const yAxisLabelRect: any = new fabric.Rect({
        left: yAxisLabelRectLeft,
        top: yAxisLabelRectTop,
        width: yAxisLabelRectWidth,
        height: yAxisLabelRectHeight,
        fill: 'transparent',
        stroke: 'transparent',
        selectable: false, // 禁用选择
        hoverCursor: 'normal'
      });
      canvas.add(yAxisLabelRect);
      /** 绘制Y轴文字 */
      const yAxisLabelText = String(groupData[key][0].name);
      const yAxisLabelLeft = yAxisLabelRectLeft;
      const yAxisLabelTop = yAxisLabelRectTop;
      const yAxisLabel: any = drawYAxisLabel(
        yAxisLabelText,
        yAxisLabelLeft,
        yAxisLabelTop,
        options?.yAxios?.nameTextStyle?.color,
        options?.yAxios?.nameTextStyle?.underline,
        'pointer',
        15
      );
      yAxisLabel.on('mousedown', (event: any) => {
        if (typeof options?.yAxios?.onClick === 'function') {
          options?.yAxios?.onClick(groupData[key]);
        }
      });
      yAxisLabel.set({
        text: getRectWidthWithfonts({
          containerWidth: yAxisLabelRectWidth,
          fabricText: yAxisLabel
        })
      });

      yAxisLabel.on('mouseover', (event: any) => {
        const target = event.target;
        if (typeof options?.yAxios?.onMouseout === 'function') {
          options?.yAxios?.onMouseout(target);
        }
        // 是否显示toolTip
        if (options?.yAxios?.showToolTip) {
          const { left, top } = getPosition(target, tooltipRef?.current);
          updateToolTip('mouseover', {
            ...tooltip,
            text: yAxisLabelText,
            left,
            top,
            show: true
          });
        }
      });
      yAxisLabel.on('mouseout', (event: any) => {
        const target = event.target;
        if (typeof options?.yAxios?.onMouseout === 'function') {
          options?.yAxios?.onMouseout(target);
        }
        updateToolTip('mouseout', {
          show: false
        });
      });

      canvas.add(yAxisLabel);
      /** 设置文字据右边 */
      yAxisLabel.set({
        left: yAxisLabelRectLeft,
        top: Math.floor(
          yAxisLabelRectTop + (yAxisLabelRectHeight - yAxisLabel.height) / 2
        )
      });
      for (let i = 0; i < groupData[key].length; i++) {
        const item = groupData[key][i];
        /** 绘制矩形长条 */
        const rectStripLeft = Math.ceil(
          marginLeft +
            yAxiosLabelWidth +
            (getDatesBetween(new Date(minDate), new Date(item.start)).length -
              1) *
              oneDayXaxiosWidth
        );
        const rectStripTop = yAxisLabelRectTop;
        const rectStripWidth =
          oneDayXaxiosWidth *
          (getDatesBetween(new Date(item.start), new Date(item.end)).length -
            1);
        const rectStripHeight = stripHeight;
        const rectStrip: any = new fabric.Rect({
          left: rectStripLeft,
          top: rectStripTop,
          width: rectStripWidth,
          height: rectStripHeight,
          fill: item.background,
          stroke: item.background,
          selectable: false, // 禁用选择
          hoverCursor: 'normal'
        });

        /** 绘制X轴文字 */
        const rectStripText = `${String(item.start).replace(
          /-/g,
          '/'
        )} - ${String(item.end).replace(/-/g, '/')}`;
        const rectStripTextLeft = rectStripLeft;
        const rectStripTextTop = rectStripTop;
        const xAxisLabel: any = drawYAxisLabel(
          rectStripText,
          rectStripTextLeft,
          rectStripTextTop,
          '#fff'
        );
        if (xAxisLabel.width > rectStripWidth) {
          xAxisLabel.set({
            text: getRectWidthWithfonts({
              containerWidth: rectStripWidth,
              fabricText: xAxisLabel
            })
          });
        }
        xAxisLabel.set({
          left: Math.floor(
            rectStripTextLeft + ((rectStripWidth ?? 0) - xAxisLabel.width) / 2
          ),
          top: Math.floor(rectStripTop + (stripHeight - xAxisLabel.height) / 2)
        });
        const rectStripGroup = new fabric.Group([], {
          selectable: false, // 禁用选择
          hoverCursor: 'pointer'
        });
        rectStripGroup.addWithUpdate(rectStrip);
        rectStripGroup.addWithUpdate(xAxisLabel);
        canvas.add(rectStripGroup);
        canvas.renderAll();
        rectStripGroup.on('mouseover', (event: any) => {
          const target = event.target;
          if (typeof options?.strip?.onMouseover === 'function') {
            options?.strip?.onMouseover(target);
          }
          const { left, top } = getPosition(target, tooltipRef?.current);
          updateToolTip('mouseover', {
            text: rectStripText,
            left,
            top,
            show: true
          });
        });
        rectStripGroup.on('mouseout', (event: any) => {
          const target = event.target;
          if (typeof options?.strip?.onMouseout === 'function') {
            options?.strip?.onMouseout(target);
          }
          updateToolTip('mouseout', { show: false });
        });
        /** 设置文字剧中 */
      }
    });
  };
  const handleResize = _.debounce(() => {
    const container = document.getElementById('canvas-container');
    const newWidth = container?.clientWidth as number;
    const newHeight = container?.clientHeight as number;
    // 设置新的画布大小
    canvasFabric.current.setWidth(newWidth);
    canvasFabric.current.setHeight(newHeight);
    canvasFabric.current.clear();
    loadChart({ canvas: canvasFabric.current, width: newWidth });
  }, 500);
  useLayoutEffect(() => {
    const width = chartRef.current?.offsetWidth ?? 0;
    /** fabric 配置项 */
    const fabricOptions = {
      selection: false,
      width,
      height,
      backgroundColor: options.background
    };
    canvasFabric.current = new fabric.Canvas(canvasRef.current, fabricOptions);
  }, []);

  useLayoutEffect(() => {
    handleResize();
    // 监听窗口大小改变事件
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [JSON.stringify(data)]);

  return (
    <div
      className="canvas-container"
      id="canvas-container"
      style={{ height: '100%' }}
      ref={chartRef}
    >
      <div
        ref={tooltipRef}
        style={{
          left: tooltip.left,
          top: tooltip.top
        }}
        className={`canvas-tooltip ${
          tooltip.show ? 'canvas-tooltip--show' : 'canvas-tooltip--hide'
        }`}
      >
        {tooltip.text}
      </div>
      <canvas ref={canvasRef} id="canvas" />
    </div>
  );
};

export default DrawPeriodicChartPro;
