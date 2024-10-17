import { useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import React, {
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.less';

import { message } from 'antd';
import Icon from './Icon';

/**
 * 递归过滤 命中当前数据，则保留父级及子集，过滤兄弟集
 *
 *
 * */

interface Filter {
  dataIndex: string[];
  value: any;
}

interface TreeNode {
  [key: string]: any; // 索引签名
}

const filterTree = ({
  data,
  filter,
}: {
  data: TreeNode[];
  filter: Filter[];
}): TreeNode[] => {
  const matchesFilter = (node: TreeNode, filter: Filter[]): boolean => {
    return filter.every(({ dataIndex, value }) =>
      dataIndex.some((key) => {
        const nodeValue = node[key] || '';
        if (
          typeof nodeValue === 'string' ||
          (Array.isArray(nodeValue) && typeof value === 'string')
        ) {
          return nodeValue.includes(value); // 模糊匹配字符串
        }
        if (Array.isArray(nodeValue) && Array.isArray(value)) {
          return nodeValue.some((val) => value.includes(val));
        }
        return nodeValue == value; // 非字符串使用精确匹配
      }),
    );
  };

  const recursiveFilter = (
    nodes: TreeNode[],
    isFirstLevel = true,
  ): TreeNode[] => {
    return nodes.map((node) => {
      const children = node.children
        ? recursiveFilter(node.children, false)
        : [];

      // 一级节点不参与过滤，直接保留
      if (isFirstLevel) {
        return {
          ...node,
          children: children.length ? children : undefined,
        };
      }

      // 其他级别节点根据过滤条件判断
      const isMatched = matchesFilter(node, filter);

      return {
        ...node,
        isFilter: !isMatched, //&& !children.some((child) => !child.isFilter)
        children: children.length ? children : undefined,
      };
    });
  };

  return recursiveFilter(data);
};

type MethodsType = {
  setRecord: (key: string, data: Record<string, any>) => any;
};

export type QkTreeCardType = {
  /**
   * params的值更新时会触发重新生成tree
   */
  params?: Record<string, any>;
  /** 外层类名 */
  className?: string;
  /** 异步加载数据 */
  request: (
    data?: { isRootTree?: boolean } & Record<string, any>,
  ) => Promise<any>;
  /** 数据源 */
  treeData?: Record<string, any>[];
  /** 卡片宽度 */
  width?: number;
  /** 卡片高度 */
  height?: number;
  /** 连线颜色 */
  lineColor?: string;
  /** 卡片样式 */
  cardStyle?: CSSProperties;
  /** 是否自动探测下一层数据 */
  isLoadNextChildren?: boolean;
  /** 组件递归内部用 */
  children?: (
    data: Record<string, any>,
    methods?: MethodsType,
  ) => React.ReactNode;
  /** 没有数据时渲染的UI */
  emptyRender?: React.ReactNode;
} & Partial<
  Pick<
    QkCardType,
    | 'onTreeChange'
    | 'filter'
    | 'treeKey'
    | 'updateTree'
    | 'data'
    | 'tree'
    | 'setTree'
    | 'extraRender'
  >
>;

type QkCardType = {
  /** 是否自动探测下一层数据 */
  isLoadNextChildren?: boolean;
  className?: string;
  data: Record<string, any>;
  cardStyle?: CSSProperties;
  request: (data?: Record<string, any>) => Promise<any>;
  completedLoading?: ({
    width,
    height,
  }: {
    width: number;
    height: number;
  }) => void;
  tree: Record<string, any>[];
  setTree: React.Dispatch<React.SetStateAction<Record<string, any>[]>>;
  extraRender?: (
    data: Record<string, any>,
    methods: MethodsType,
  ) => React.ReactNode;
  updateTree: React.MutableRefObject<Record<string, any>[]>;
  onTreeChange?: (data: Record<string, any>[]) => void;
  /** 静态过滤 */
  filter?: Filter[];
  treeKey?: string;
};

/** 只更新指定key的开启和关闭状态 */
const updateTreeData = ({
  key,
  treeKey = 'key',
  dataSource,
  updateRecord = {},
}: {
  treeKey: string;
  key: string;
  dataSource: Record<string, any>[];
  updateRecord?: Record<string, any>;
}): Record<string, any>[] =>
  dataSource.map((node) => {
    if (node[treeKey] == key) {
      return {
        ...node,
        ...updateRecord,
      };
    }
    if (node?.children?.length) {
      return {
        ...node,
        children: updateTreeData({
          key,
          treeKey,
          dataSource: node.children,
          updateRecord,
        }),
      };
    }
    return node;
  });

/** 递归，增加tree自定义字段 */
export const formatTree = ({
  tree = [],
  key = 'key',
  reset = false,
}: {
  tree: Record<string, any>[];
  key?: string;
  reset?: boolean;
}) => {
  if (!tree || !Array.isArray(tree)) {
    return [];
  }
  /** 先检查所有子集是否都满足要求 */
  return tree.map((node) => {
    const { children = [], isOpen = false } = node;
    const formattedNode: Record<string, any> = {
      ...node,
      key: node[key],
      isOpen: reset ? false : isOpen,
      opened: true,
    };
    if (Array.isArray(children) && children.length > 0) {
      formattedNode.children = formatTree({
        tree: children,
        key,
        reset,
      });
    }
    return formattedNode;
  });
};
enum BTN_STATE {
  LOADING,
  OPEN,
  CLOSE,
  HIDE,
}
const QkCard: React.FC<QkCardType> = ({
  isLoadNextChildren = false,
  data,
  request,
  completedLoading,
  setTree,
  extraRender,
  cardStyle,
  updateTree,
  onTreeChange,
  treeKey = 'key',
}) => {
  //是否有下一级
  const [btnState, setBtnState] = useState<BTN_STATE>(
    isLoadNextChildren ? BTN_STATE.LOADING : BTN_STATE.CLOSE,
  );
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const width = ref.current?.offsetWidth ?? 0;
    const height = ref.current?.offsetHeight ?? 0;
    completedLoading?.({ width: width, height });
    if (!data.isNextLevel && isLoadNextChildren) {
      setBtnState(BTN_STATE.HIDE);
    }
  }, []);
  const methods: MethodsType = {
    setRecord: (key, record) => {
      handleOpenAndClose({ key, record });
    },
  };
  //点击展开收取
  const handleOpenAndClose = async ({
    key,
    record = {},
    opened = true,
  }: {
    key: string;
    record?: Record<string, any>;
    opened?: boolean;
  }) => {
    let currentState = BTN_STATE.HIDE;
    let children = data.children;
    if (data?.children?.length) {
      if (btnState === BTN_STATE.OPEN) {
        currentState = BTN_STATE.CLOSE;
      } else {
        currentState = BTN_STATE.OPEN;
      }
    } else {
      if (typeof request === 'function') {
        currentState = BTN_STATE.LOADING;
        setBtnState(currentState);
        children = await new Promise((resolve) => {
          request(data)
            .then((result) => {
              if (result?.length) {
                currentState = BTN_STATE.OPEN;
              } else {
                currentState = BTN_STATE.HIDE;
              }
              resolve(result);
            })
            .catch(() => {
              currentState = BTN_STATE.CLOSE;
              resolve(null);
            });
        });
      }
    }
    updateTree.current = updateTreeData({
      treeKey,
      key,
      dataSource: updateTree.current,
      updateRecord: {
        isOpen: !opened ? false : currentState === BTN_STATE.OPEN,
        opened,
        children,
        ...record,
      },
    });
    setTree(updateTree.current);
    if (updateTree.current?.length === 1) {
      // current 等于1是正常的 只有一个父节点
      onTreeChange?.(updateTree.current);
    }
    let state = currentState;
    if (!opened) {
      state = BTN_STATE.CLOSE;
    }
    if (!children?.length) {
      state = BTN_STATE.HIDE;
    }
    setBtnState(state);

    /**
     * 自动探测下一级是否有数据
     * 1. 什么时候开始探测？
     * 当父级未被展开时，开始探测
     * 2. 什么时候停止探测
     * 当上级数据还是属于探测数据时，停止探测
     * 3. 那什么时候数据是非探测数据呢？
     * 当卡片是被手动点开时，子集数据就是非探测数据
     * */
  };
  useEffect(() => {
    if (isLoadNextChildren && data.opened && !data.isOpen) {
      handleOpenAndClose({ key: data[treeKey], opened: false });
    }
  }, []);
  return (
    <div
      ref={ref}
      className={classNames('qk-card', 'qk-tree-card-child-node')}
      style={cardStyle}
    >
      {extraRender?.(data, methods)}
      <div
        className={classNames(
          'btn-close-and-open text-[#54A349] hover:text-[#54C245]',
          {
            'btn-open': btnState == BTN_STATE.CLOSE,
            'btn-close': btnState == BTN_STATE.OPEN,
            'btn-loading': btnState == BTN_STATE.LOADING,
            invisible: btnState === BTN_STATE.HIDE,
          },
        )}
        onClick={() => {
          handleOpenAndClose({ key: data[treeKey], opened: true });
        }}
      >
        {btnState !== BTN_STATE.HIDE && btnState !== BTN_STATE.LOADING && (
          <Icon open={btnState == BTN_STATE.CLOSE} />
        )}
      </div>
    </div>
  );
};

const QkTreeCard: React.FC<QkTreeCardType> = ({
  request,
  className,
  treeKey = 'key',
  params,
  cardStyle = {},
  extraRender,
  isLoadNextChildren = false,
  onTreeChange,
  filter,
  tree,
  setTree,
  updateTree,
}) => {
  if (!updateTree || !setTree) return;
  const filterExistTree = (data: Record<string, any>) =>
    filter?.length ? !data.isFilter : true;
  return (
    <div className="qk-tree-card">
      {tree?.filter(filterExistTree).map((item) => {
        return (
          <div
            key={item[treeKey]}
            className={classNames(
              'qk-tree-card-column flex',
              'qk-tree-card-column-' + tree.filter(filterExistTree).length,
            )}
          >
            <QkCard
              onTreeChange={onTreeChange}
              updateTree={updateTree}
              setTree={setTree}
              data={{ ...item, params }}
              cardStyle={cardStyle}
              request={request}
              className={className}
              tree={tree}
              extraRender={extraRender}
              isLoadNextChildren={isLoadNextChildren}
              filter={filter}
              treeKey={treeKey}
            />
            <CSSTransition
              mountOnEnter
              unmountOnExit={false}
              appear
              in={item.isOpen && item?.children?.length}
              timeout={500}
              classNames={'qk-tree-card'}
            >
              <QkTreeCard
                treeKey={treeKey}
                request={request}
                // treeData={treeData}
                cardStyle={cardStyle}
                isLoadNextChildren={isLoadNextChildren}
                filter={filter}
                onTreeChange={onTreeChange}
                updateTree={updateTree}
                data={{ ...item, params }}
                params={params}
                className={className}
                tree={item.children}
                setTree={setTree}
                extraRender={extraRender}
              />
            </CSSTransition>
          </div>
        );
      })}
    </div>
  );
};

const QkTreeCardWrap: React.FC<QkTreeCardType> = (props) => {
  const {
    width = 400,
    height = 200,
    className = '',
    lineColor = '#545C5C',
    treeData = [],
    request,
    treeKey = 'key',
    params,
    cardStyle = {},
    children,
    isLoadNextChildren = false,
    emptyRender,
    onTreeChange,
    filter,
  } = props;
  const updateTree = useRef<Record<string, any>[]>([]);
  const [tree, setTree] = useState<Record<string, any>[]>([]);
  useEffect(() => {
    const dataList = formatTree({ tree: treeData, key: treeKey });
    updateTree.current = dataList;
    setTree(dataList);
  }, [JSON.stringify(treeData)]);
  const filterExistTree = (data: Record<string, any>) =>
    filter?.length ? !data.isFilter : true;
  useUpdateEffect(() => {
    if (filter) {
      const result = filterTree({
        data: updateTree.current,
        filter, // 转换为数组
      });
      /** 特殊处理，后续再改 */
      const existTree = result[0]?.children.filter(filterExistTree);
      if (!existTree.length) {
        message.error('没有查到您想要的数据');
      }
      setTree(result);
    }
  }, [filter]);

  useEffect(() => {
    !treeData?.length &&
      request({
        params,
        isRootTree: true,
      }).then((result = []) => {
        const dataList = formatTree({
          tree: result,
          key: treeKey,
          reset: true,
        });
        updateTree.current = dataList;
        // 生成根节点 也要掉用下onTreeChange
        onTreeChange?.(result);
        setTree(dataList);
      });
  }, [JSON.stringify(params)]);

  if (tree.filter(filterExistTree).length === 0) {
    return emptyRender ? (
      emptyRender
    ) : (
      <div className="text-[#ccc]">暂无数据</div>
    );
  }
  return (
    <div
      style={
        {
          '--w': width + 'px',
          '--h': height + 'px',
          '--line-color': lineColor,
        } as CSSProperties
      }
      className={classNames(className)}
    >
      <QkTreeCard
        key={Object.values(params || 'key').join('')}
        treeKey={treeKey}
        request={request}
        treeData={treeData}
        cardStyle={cardStyle}
        isLoadNextChildren={isLoadNextChildren}
        filter={filter}
        onTreeChange={onTreeChange}
        updateTree={updateTree}
        data={{ params }}
        className={className}
        tree={tree}
        setTree={setTree}
        extraRender={children}
      />
    </div>
  );
};

export default React.memo(QkTreeCardWrap);
