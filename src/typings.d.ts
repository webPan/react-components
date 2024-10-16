declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';

declare type RequestParams = {
  pageSize?: number;
  current?: number;
  keyword?: string;
  pageNow?: number;
  [key: string]: any;
};

declare interface String {
  format: (formatStr?: string) => string;
  currency: (useElement: boolean, showFlag: boolean) => string;
  formula: (value?: { type: 'string' | 'html' }) => ReactElement | string;
}

declare interface History {
  getUrlParams: (url?: string) => Record<string, any>;
}

declare interface Window {
  isMobile: boolean;
  equipment: {
    userAgent: string;
  };
  reload: () => void;
  device: 'PC' | 'PAD';
  isPrd: boolean;
  aplus_queue: any; //友盟统计
  umengTrack: (value: {
    id: string;
    params?: Record<string, number | string>;
  }) => void;
  ip: string;
  ESG_WEB_HOST: string;
  TRANCE_SOURCE_HOST: string;
  COLLECTION_MONITOR_HOST: string;
}
