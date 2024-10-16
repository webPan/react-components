/** groupArr2Arr将list按照group中的key值进行分组
 * @param {Array} list 要分割的数组
 * @param {Object} group 要分割的规则数组
 * @param {Object} key 字段名
 */
const groupArr2Arr = (list: any[], group: any[], key: string) => {
  const obj: any = {};
  group.forEach((i) => {
    obj[i] = [];
    list.forEach((item) => {
      if (item[key] === i) {
        obj[i].push(item);
      }
    });
  });
  const arr: any[] = [];
  Object.keys(obj).forEach((item) => {
    arr.push({
      [key]: item,
      list: obj[item]
    });
  });
  return arr;
};

/** splitArr2Arr以list中的key为属性值 将key值相同的对象归类到key中
 * @param {Array} list 要分割的数组
 * @param {Object} key 字段名
 */
const splitArr2Arr = (list: any[], key: string) => {
  if (!list.length) return [];
  if (!key) return list;
  const mySet = new Set();
  list.forEach((item) => {
    mySet.add(item[key]);
  });
  return groupArr2Arr(list, [...mySet], key);
};

/**
 *  1. 默认不展示工具栏目
 *  2. 自带表格合并功能
 * */
/** 根据 columns 与 dataSource 进行表格与数据合并 */

export const formatDataSource = (
  data: Record<string, any>[],
  columns: any[]
) => {
  const mergeCol = columns?.filter((item) => item.merge === 'col');
  const res: any[] = data;
  mergeCol.map((obj) => {
    const splitBy: string = obj.mergeBy ? obj.mergeBy : obj.dataIndex;
    const groups = splitArr2Arr(data, splitBy);
    groups.forEach((arr) => {
      arr?.list?.forEach((item: Record<string, any>, index: number) => {
        item[`rowSpan_${splitBy}`] = index === 0 ? arr.list.length : 0;
      });
      res.concat(arr?.list);
    });
    return groups;
  });
  /**
   * 横向合并
   *  1. 先确定哪些字段需要进行横向合并
   *  2. 再判断每一条数据，是否达到横向合并的要求
   *    2.1 达到要求，则在当前记录下返回 colSpan，colSpan 规则如下
   *      2.1.1 达到记录则colSpan = keys.length,其他则为0
   * */
  let keysGroup: any[][] = [];

  let index = 0;
  columns.forEach((item) => {
    if (!Object.keys(keysGroup).length) {
      keysGroup[index] = [];
    }
    if (!(item.merge ?? []).includes('row')) {
      index++;
      keysGroup[index] = [];
    } else {
      keysGroup[index].push(item.dataIndex);
    }
  });
  keysGroup = keysGroup.filter((value) => value.length > 1);
  if (keysGroup.length) {
    res.forEach((item) => {
      keysGroup.forEach((keys) => {
        const value = keys.map((k) => item[k]).filter(Boolean);
        const size = new Set(value).size;
        if (size <= 1) {
          keys.forEach((k, i) => {
            if (i === 0) {
              item['colSpan_' + k] = keys.length;
            } else {
              item['colSpan_' + k] = 0;
            }
          });
        }
      });
    });
  }
  return res;
};

/** 格式化 columns  */
export const formatColumns = (columns: any[]) => {
  columns?.forEach((item) => {
    if (item.valueType === 'index') item.width = 50;
    columns?.forEach((item) => {
      if (item.valueType == 'index') item.width = 50;
      if ((item.merge ?? []).length) {
        item.onCell = (record: Record<string, any>) => {
          const splitBy = item.mergeBy ? item.mergeBy : item.dataIndex;
          return {
            rowSpan: record[`rowSpan_${splitBy}`] ?? 1,
            colSpan: record[`colSpan_${item.dataIndex}`] ?? 1
          };
        };
      }
    });
  });
  return columns;
};
