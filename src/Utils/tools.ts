/**
 * @description 将tree数组拉平
 * @param data 需要拉平的tree
 * @param flatData 拉平后的数据
 * @param childrenKey 需要拉平的key
 * @param filter 过滤逻辑 只有为true才会被提取
 * @return flatData
 * */
export const flatTree = ({
  data = [],
  flatData = [],
  childrenKey = 'routes',
  filter,
}: {
  data: Array<Record<string, any>>;
  flatData?: Array<Record<string, any>>;
  childrenKey?: string;
  filter?: (data: any) => boolean;
}) => {
  for (let i = 0; i < data.length; i++) {
    /** 过滤数据逻辑,filter 为true则数据提取 */
    if (typeof filter === 'function') {
      if (!filter(data[i])) continue;
    }
    /** 递归主逻辑 */
    const children = data[i][childrenKey];
    if (children?.length) {
      flatData.push(data[i]);
      flatTree({ data: children, flatData, filter });
    } else {
      flatData.push(data[i]);
    }
  }
  return flatData;
};

/**
 * 根据路由生成面包屑需要用到的数据 -> 分类
 * {
 *     '/clientManagement/followUp':[{path:'/clientManagement',name:'客户管理'},{path:'/clientManagement/followUp',name:'线索管理'}]
 * }
 *
 * */
export const generateBreadcrumbs = (data: Record<string, any>[]) => {
  const breadcrumbs: Record<string, Record<string, any>> = {}; //递归
  const breadcrumbsRecursion = (data: Record<string, any>[]) => {
    data.forEach((item) => {
      breadcrumbs[item.path] = { path: item.path, name: item.name };
      /** 如果存在 children 继续往下递归 */
      if (item?.children?.length) {
        breadcrumbsRecursion(item.children);
      }
    });
  };
  breadcrumbsRecursion(data);
  return breadcrumbs;
};

/**
 *  求min与max之间的随机数
 * */
export const rand = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min)) + min;
};

/** 扁平化路由 */
export const flatRoutes = (
  routes: Record<string, any>[],
  data: Record<string, any> = {},
) => {
  routes.forEach((item) => {
    const { children, ...reset } = item;
    data[item.path] = reset;
    if (children?.length) {
      flatRoutes(children, data);
    }
  });
  return data;
};

/**
 * @desc 获取动态菜单中第一项可用菜单
 * 正常情况第一项可用菜单就是路由第一个路由中的二层嵌套的第一项菜单
 * */
export const firstAvailableRouter = ({
  routes,
  childrenKye = 'children',
}: {
  routes: Record<string, any>[];
  childrenKye?: string;
}): Record<string, any> => {
  const [router = {}] = routes;
  if (!router?.component && router[childrenKye]?.length && !router.redirect) {
    return firstAvailableRouter({
      routes: router[childrenKye],
      childrenKye,
    });
  } else {
    return router;
  }
};

export const equipment = function () {
  //判断终端
  const u = window.navigator.userAgent;
  return {
    trident: u.indexOf('Trident') > -1, //IE内核
    presto: u.indexOf('Presto') > -1, //opera内核
    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/) || u.indexOf('Samsung') > -1, //是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者安卓QQ浏览器
    iPad: u.indexOf('iPad') > -1, //是否为iPad
    webApp: u.indexOf('Safari') == -1, //是否为web应用程序，没有头部与底部
    weixin: u.indexOf('MicroMessenger') > -1, //是否为微信浏览器
    userAgent: u,
  };
};

/**
 * 地址新增参数不刷新页面
 * 能把新的参数覆盖旧的参数
 * @param  params {Object} 例如{a:1}
 * @param isMerge {boolean} 是否合并 true:
 * */
export const replaceState = function (
  params: Record<string, any>,
  isMerge = true,
) {
  const hrefParamsObject: Record<string, any> = {};
  const { origin, pathname, hash, href } = window.location;
  let hrefParams: any = href.split('#')[1].split('?');
  if (hrefParams.length === 2) {
    hrefParams = hrefParams[1];
    hrefParams = hrefParams.split('&');
    hrefParams.map((item: string) => {
      const hrefParam = item.split('=');
      const key = hrefParam[0];
      hrefParamsObject[key] = hrefParam[1];
    });
  }
  if (isMerge) {
    params = Object.assign({}, hrefParamsObject, params); //新参数覆盖久参数
  }

  let query = '';
  for (const key in params) {
    query += `${key}=${params[key]}&`;
  }
  query = query.substring(0, query.length - 1);
  const [path] = hash.split('?');
  const url = `${origin}${pathname}${path}?${query}`;
  window.history.replaceState(null, '', url);
};

/** 单文件下载 */
export const downloadFile = ({ url, name }: { url: string; name: string }) => {
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.setAttribute('download', decodeURIComponent(name));
  document.body.appendChild(link);
  link.click();
};
