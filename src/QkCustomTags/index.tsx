import classNames from 'classnames';
import React, {
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import styles from './index.module.less';

/**
 * 1. 计算每个ITEM元素的宽度，存储后面用
 * 2. 根据rows，累加计算各行的能放多少个ITEM [[..],[..],...[]]
 * 3. 数据拉平，数据重组
 * 4. 接着判断当前是否能放下全部内容
 *
 * */

type DataType = {
  value: string;
  render: boolean;
  width: number;
  key: string;
};

const useTags = ({ rows, gap }: { rows: number; gap: number }) => {
  const [formatted, setFormatted] = useState<DataType[]>([]);
  const formattedListRef = useRef<DataType[]>([]);
  const containerWidthRef = useRef<number>(0);
  const moreWidthRef = useRef<number>(0);
  const [dataList, setDataList] = useState<string[]>([]);
  const format = (data: string[]) => {
    return data.map((value) => ({
      value,
      render: true,
      width: 0,
      key: Math.random().toString(),
    }));
  };
  /** 根据rows计算到底能放下多少ITEMS */
  const calculateItemByRows = (row: number) => {
    const formattedList = formattedListRef.current;
    const data: Array<DataType[]> = [];
    for (let i = 0; i < row; i++) {
      data.push([]);
      let currentWidth = 0;
      for (let k = data.flat().length; k < formattedList.length; k++) {
        currentWidth += formattedList[k].width + gap;
        if (
          currentWidth <
          containerWidthRef.current - (row - 1 === i ? moreWidthRef.current : 0)
        ) {
          data[i].push(formattedList[k]);
        }
      }
    }
    setFormatted(data.flat());
  };
  const widthBackfilling = (index: number, value: number) => {
    formattedListRef.current[index]['width'] = value;
    if (formatted.length - 1 === index) {
      calculateItemByRows(rows);
    }
  };
  //设置容器宽度
  const setContainerWidth = (width: number) => {
    containerWidthRef.current = width;
  };
  const setMoreWidth = (width: number) => {
    moreWidthRef.current = width;
  };
  useEffect(() => {
    const formattedData = format(dataList);
    formattedListRef.current = formattedData;
    setFormatted(formattedData);
  }, [dataList]);

  return {
    formatted,
    widthBackfilling,
    setContainerWidth,
    setMoreWidth,
    setDataList,
  };
};

type QkCustomTagsType = {
  data: string[]; //数据源
  gap?: number; //标签之间的宽度
  reservedWidth?: number; //预留宽度
  itemStyle?: CSSProperties; //标签之间的宽度控制
  rows?: number; //行数
  moreRender?: ((len?: number) => React.ReactNode) | boolean; //更多自定义渲染
  moreText?: string; //等多文案修改
  onLoadingCompleted?: ({ isMore }: { isMore: boolean }) => void; //加载完成时间
};

type QkCustomTagsItemType = {
  value: string;
  onLoadingCompleted: (width: number) => void;
  itemStyle?: CSSProperties;
  //加载完成
};

const QkCustomTagsItem: React.FC<QkCustomTagsItemType> = ({
  value,
  onLoadingCompleted,
  itemStyle,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  useLayoutEffect(() => {
    onLoadingCompleted?.(ref.current?.offsetWidth || 0);
  }, []);
  return (
    <span style={itemStyle} ref={ref}>
      {value}
    </span>
  );
};

const QkCustomTags: React.FC<QkCustomTagsType> = ({
  data = [],
  gap = 10,
  itemStyle = {},
  rows = 1,
  moreRender = true,
  moreText = '更多',
  onLoadingCompleted,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const [isMore, setIsMore] = useState<boolean>(true);
  const {
    formatted,
    widthBackfilling,
    setContainerWidth,
    setMoreWidth,
    setDataList,
  } = useTags({
    rows,
    gap,
  });
  useLayoutEffect(() => {
    setContainerWidth(ref.current?.offsetWidth || 0);
    setMoreWidth(moreRef.current?.offsetWidth || 0);
  }, []);
  useEffect(() => {
    setDataList(data);
  }, [data]);
  useEffect(() => {
    onLoadingCompleted?.({ isMore: data.length !== formatted.length });
    setIsMore(data.length !== formatted.length);
  }, [data, formatted]);
  return (
    <div
      className={classNames(
        'flex flex-auto flex-wrap',
        styles['qk-custom-tags'],
      )}
      ref={ref}
      style={{ gap: gap + 'px' }}
    >
      {formatted.map((item, index) => {
        return (
          item.render && (
            <QkCustomTagsItem
              key={item.key}
              value={item.value}
              itemStyle={itemStyle}
              onLoadingCompleted={(width) => {
                widthBackfilling(index, width);
              }}
            />
          )
        );
      })}
      <div ref={moreRef}>
        {(() => {
          if (typeof moreRender === 'function' && isMore) {
            return moreRender(formatted?.length || 0);
          }
          if (moreRender && isMore) {
            return <div>{moreText}</div>;
          }
        })()}
      </div>
    </div>
  );
};

export default QkCustomTags;
