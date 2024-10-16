import { type FC, useEffect, useState } from 'react';
const classNames = require('classnames');
import './index.scss';

interface dataSourceItem {
  name: string; // 设备中文名称
  equipment?: string; // 设备类型 如 总表 电表 逆变器 光伏组件
  type?: string; // 类型 如总表 电表 区域
  children?: dataSourceItem[]; // 子集
  number?: number; // 数量
}
interface SketchMapType {
  dataSource: dataSourceItem[];
  options?: {
    /** 语言 */
    language?: 'en' | 'cn';
    height?: string;
  };
}

/** 获取项目总表 */
const getProjectSummary = (dataSource: dataSourceItem[]) => {
  const data = dataSource.filter((item) => item.type === 'summaryTable');
  if (data.length) {
    return data.map((item) => {
      return {
        name: item.name,
        equipment: item.equipment,
        type: item.type
      };
    });
  }
  return data;
};
/** 获取子电表 */
const getSubMeter = (dataSource: dataSourceItem[], subMeter: any[] = []) => {
  // 子电表可能在第一层可能在第二层或者可能没有
  dataSource.forEach((item) => {
    if (item.type === 'wattHourMeter') {
      subMeter.push({
        name: item.name,
        equipment: item.equipment,
        type: item.type
      });
    }
    if (item.children) {
      getSubMeter(item.children, subMeter);
    }
  });
  return subMeter;
};

/** 虚拟子电表 分组数量 */
const virtualSubMeter = ({
  data,
  groupNumber = 4
}: {
  data: dataSourceItem[];
  groupNumber?: number;
}) => {
  const length = data.length;
  const groupSize =
    length > groupNumber ? Math.ceil(length / groupNumber) : groupNumber; // 计算每组的大小，向上取整
  const groups = [];
  for (let i = 0; i < length; i += groupSize) {
    // 分组
    groups.push({
      name: '虚拟电表',
      equipment: 'wattHourMeter',
      type: 'wattHourMeter',
      children: data.slice(i, i + groupSize)
    });
  }
  return groups;
};

/** 获取区域设备 */
const getRegionalEquipment = ({
  data,
  type,
  result = []
}: {
  data: dataSourceItem[]; // 数据
  type?: string | undefined; // 父级当前数据类型
  result?: dataSourceItem[]; // 最后的返回结果
}) => {
  /** 当没有子电表概念时，将区域两两分配，虚拟出子电表 */
  /** 当type=region没有父级时，全部返回 */
  /** 当type=region父级是 summaryTable，返回父级的children */
  /** 当type=region父级是 wattHourMeter ，返回 父级的父级的children */
  for (const item of data) {
    /** 有区域 */
    if (item.type === 'region' && type === undefined) {
      result = virtualSubMeter({ data });
      continue;
    }
    /** 有总表，区域 */
    if (item.type === 'region' && type === 'summaryTable') {
      result = virtualSubMeter({ data });
      continue;
    }
    /**  有总表，电表，区域 */
    if (item.type === 'wattHourMeter' && type === 'summaryTable') {
      result = data;
      continue;
    }
    /** 有电表，区域 */
    if (item.type === 'wattHourMeter' && type === undefined) {
      result = data;
      continue;
    }
    if (item.children?.length && !result.length) {
      result = getRegionalEquipment({
        data: item.children,
        type: item.type
      });
    }
  }
  return result;
};

/** 电表 */
const Equipment: FC<{
  type: string;
  name: string;
  className?: string;
}> = ({ type, name, className = '' }) => {
  const wattHourMeter: boolean = ['summaryTable', 'wattHourMeter'].includes(
    type
  );
  return (
    <div
      className={classNames(
        {
          'watt-hour-meter-comp': wattHourMeter
        },
        'flex',
        className
      )}
    >
      <div className="equipment__icon flex justify-center items-center">
        <i className={classNames('icon', 'icon-' + type)}></i>
      </div>
      <div className="equipment__name flex-1 flex justify-center items-center">
        {name}
      </div>
    </div>
  );
};

/** 区域设备 */
const RegionalEquipment: FC<{ data: dataSourceItem }> = ({ data }) => {
  const name = data.name;
  const children = data?.children ?? [];
  return (
    <div className="regional-equipment">
      <div className="regional-equipment__name">
        <span>{name}</span>
      </div>
      <div className="regional-equipment-eq-row flex flex-row  justify-center">
        {children.map((item, index) => {
          return (
            <div key={'r-' + index} className="regional-equipment-asse">
              <div className="regional-equipment-eq">
                <div
                  className={classNames('eq__icon', 'icon-' + item.equipment)}
                ></div>
                <div className="eq__name">{item.name}</div>
              </div>
              <div className="regional-equipment-number">
                *{item?.number ?? 0}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const QkSketchMap: FC<SketchMapType> = ({ dataSource, options = {} }) => {
  const { language = 'cn', height = '100%' } = options;
  /** 项目总表 */
  const [projectSummary, setProjectSummary] = useState<dataSourceItem[]>([]);
  /** 子电表 */
  const [subMeter, setSubMeter] = useState<dataSourceItem[]>([]);
  /** 获取区域设备 */
  const [regionalEquipment, setRegionalEquipment] = useState<dataSourceItem[]>(
    []
  );
  /** 语言字典 */
  const languageDictionary = {
    cn: {
      wattHourMeter: '电表',
      region: '光伏区域'
    },
    en: {
      wattHourMeter: 'Electric Meter',
      region: 'Region of Solar'
    }
  };
  useEffect(() => {
    setProjectSummary(getProjectSummary(dataSource));
    setSubMeter(getSubMeter(dataSource));
    setRegionalEquipment(getRegionalEquipment({ data: dataSource }));
  }, [JSON.stringify(dataSource)]);
  return (
    <div className="qk-sketch-map" style={{ maxHeight: height }}>
      <div
        className={classNames('pv-diagram', {
          'not-project-summary': !projectSummary.length,
          'has-project-summary': projectSummary.length,
          'not-sub-meter': !subMeter.length,
          'not-regional-equipment': !regionalEquipment.length,
          'sub-meter-number-1': subMeter.length === 1
        })}
      >
        <div className="pv-diagram-warp flex flex-row">
          <div className="watt-hour-meter flex justify-center">
            <div className="watt-hour-meter-wrap flex flex-row">
              <div className="watt-hour-meter-wrap__name">
                {languageDictionary[language].wattHourMeter}
              </div>
              <div className="project-pummary flex items-center">
                {projectSummary.map((item, index) => {
                  return (
                    item.type && (
                      <Equipment
                        key={'v-' + index}
                        type={item.type}
                        name={item.name}
                      />
                    )
                  );
                })}
              </div>
              <div className="whm-sm-connection">
                <div className="whm-sm-connection__line-top"></div>
                <div className="whm-sm-connection__line-bottom"></div>
                <div className="whm-sm-connection__line-center"></div>
              </div>
              <div className="sub-meter flex justify-center flex-col">
                {subMeter.map((item, index) => {
                  return (
                    <div className="sub-meter-wrap" key={'g-' + index}>
                      {item.type && (
                        <Equipment
                          className={classNames({
                            'watt-hour-meter-comp__line':
                              index !== 0 && index !== subMeter.length - 1
                          })}
                          type={item.type}
                          name={item.name}
                        />
                      )}
                      {index < subMeter.length - 1 && (
                        <div className="seize-seat"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="area flex-1">
            <div className="area-wrap">
              <div className="area-wrap__name">
                {languageDictionary[language].region}
              </div>
              {regionalEquipment.map((item, index) => {
                return (
                  <div
                    key={'k-' + index}
                    className="area-equipment-row flex flex-row"
                  >
                    {item.children?.map((areaItem, index) => {
                      return (
                        <RegionalEquipment key={'z-' + index} data={areaItem} />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QkSketchMap;
