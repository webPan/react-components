import {
  ProTable,
  type ActionType,
  type ProTableProps,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { RefObject, useRef } from 'react';
import { replaceState } from 'react-components';
import { formatColumns, formatDataSource } from './utils';

type QkProTableType = Omit<ProTableProps<any, any>, 'search'> & {
  ellipsis?: boolean;
  search?: {
    storeQueryParams?: boolean;
  } & Pick<ProTableProps<any, any>, 'search'>['search'];
};
//额外工具
const QkProTable: React.FC<QkProTableType> & Record<string, any> = (props) => {
  const isFirstLoad = useRef(true); //是否第一次加载
  const { ellipsis = true, ...otherProps } = props;
  let { columns = [] } = otherProps;
  const actionRef = otherProps.actionRef
    ? (otherProps.actionRef as RefObject<ActionType>)
    : useRef<ActionType>();

  if (ellipsis) {
    let scrollWidth = 0;
    columns.forEach((item) => {
      if (!item.width) {
        const len = String(item.title ?? '')?.length;
        item.width = len ? len * 30 : 50;
      }
      if (item.ellipsis === undefined) {
        item.ellipsis = true;
      }
      scrollWidth += Number(item.width) ?? 50;
      if (item.title === '操作') {
        item.fixed = 'right';
        item.ellipsis = void 0;
      }
    });
    otherProps.scroll = { x: scrollWidth };
  }
  /** 设置默认页码 */
  if (!('pagination' in otherProps)) {
    otherProps.pagination = { defaultPageSize: 10, showSizeChanger: true };
  }
  /** 默认不要操作按钮 */
  if (otherProps.options === undefined) {
    otherProps.options = false;
  }

  /** 表格合并 */
  /** 接口请求数据处理
   *  */
  otherProps.postData = (data: Record<string, any>[]): any[] => {
    return formatDataSource(data, columns);
  };
  /** 表格合并 已格式过 */
  if (otherProps.dataSource?.length) {
    otherProps.dataSource = formatDataSource(
      otherProps.dataSource as Record<string, any>[],
      columns,
    );
  }
  columns = formatColumns(columns);

  /** 获取本地缓存的数据 */
  const getSearchParams = () => {
    let searchParams = {};
    try {
      searchParams = JSON.parse(history.getUrlParams().searchParams);
    } catch (e) {
      searchParams = {};
    }
    return searchParams;
  };
  /** 往本地缓存数据 */
  const storeSearchParams = (data: Record<string, any>, isMerge = false) => {
    let searchParams = data;
    if (isMerge) {
      searchParams = { ...getSearchParams(), ...data };
    }
    replaceState({ searchParams: JSON.stringify(searchParams) }, isMerge);
  };

  /**
   *  默认情况 search 为undefined 显示搜索
   *  search 有可能为false 不显示搜索
   *  search 的 isRememberQueryParams为true 显示搜索，记住搜索参数
   *
   * */
  if (otherProps?.search && otherProps?.search?.storeQueryParams) {
    otherProps.search.optionRender = (searchConfig, props) => {
      const { setPageInfo, pageInfo = {} } = actionRef.current || {};
      const { resetText, searchText } = searchConfig;
      const { form } = props;
      const searchParams: Record<string, any> = getSearchParams(); //获取地址栏参数
      const getCurrentPage = () => {
        const { current } = actionRef.current?.pageInfo || {};
        return { current };
      };
      const getParams = () => {
        const fieldsValue = form?.getFieldsValue();
        const params: Record<string, any> = {};
        for (const key in fieldsValue) {
          if (fieldsValue[key] !== undefined) {
            params[key] = fieldsValue[key];
          }
        }
        return params;
      };
      if (isFirstLoad.current) {
        form?.setFieldsValue(searchParams);
        isFirstLoad.current = false;
        setPageInfo?.({
          ...pageInfo,
          current: Number(searchParams?.current ?? 1),
        });
      }
      return [
        <Button
          key="reset"
          onClick={() => {
            form?.resetFields();
            storeSearchParams(getCurrentPage(), false);
            form?.submit();
          }}
        >
          {resetText}
        </Button>,
        <Button
          type="primary"
          key="search"
          onClick={() => {
            form?.submit();
            storeSearchParams({ ...getParams(), ...getCurrentPage() }, false);
          }}
        >
          {searchText}
        </Button>,
      ];
    };
    otherProps.pagination = {
      defaultPageSize: 10,
      showQuickJumper: true,
      size: 'default',
      onChange: (current) => {
        storeSearchParams({ current }, true);
      },
      ...otherProps.pagination,
    };
  }
  return <ProTable actionRef={actionRef} {...otherProps} columns={columns} />;
};

export default QkProTable;
//额外工具
QkProTable.Summary = ProTable.Summary;
QkProTable.Summary.Row = ProTable.Summary.Row;
QkProTable.Summary.Cell = ProTable.Summary.Cell;
