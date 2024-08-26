/**
 * 版本检测逻辑
 * 1. 先比对manifest.json文件是否有变动
 *    1.1 变动，则随机向manifest.json抽出三个文件
 *      1.1.1 轮询同时请求这三个文件
 *      1.1.1.1 请求成功，刷新界面
 *    1.2 不变动，继续1.1
 * */

import React, { PureComponent } from 'react';
import { Result, Badge } from 'antd';
import { eTag, rand } from '@/utils/tools.ts';
import { fetchManifestJson } from '@/services/common.ts';

type QkErrorBoundType = {
  children: React.ReactNode;
};

export default class QkErrorBound extends PureComponent<
  QkErrorBoundType,
  {
    hasError: boolean;
    type: number;
    time: number;
    count: number;
    errMsg: string;
    loadEerr: boolean;
  }
> {
  detectionTimerId: NodeJS.Timeout | null = null; //检测
  countdownTimerId: NodeJS.Timeout | null = null; //倒计时
  constructor(props: NonNullable<any>) {
    super(props);
    this.state = {
      hasError: false,
      type: 1,
      time: 30,
      count: 0,
      errMsg: '',
      loadEerr: false
    };
  }

  static getDerivedStateFromError(error: Error & { componentStack: string }) {
    console.log({ error, type: 'getDerivedStateFromError' });
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log({ error, errorInfo });
    let loadEerr = false;
    if (
      error?.message?.includes('Failed to fetch dynamically imported module')
    ) {
      this.handleVersionUpdates();

      loadEerr = true;
    }
    this.timedOutFefresh();
    this.setState({
      hasError: true,
      errMsg: error.message || JSON.stringify(errorInfo),
      loadEerr
    });
  }

  getManifestJson() {
    fetchManifestJson()
      .then(async (data) => {
        const len = Object.keys(data).length;
        const files = [rand(0, len), rand(0, len), rand(0, len)];
        const manifestJson: [string, Record<string, any>][] =
          Object.entries(data);
        const fetchs: boolean[] = [];
        for (let i = 0; i < files.length; i++) {
          await new Promise((resolve, reject) => {
            fetch(manifestJson[files[i]][1]?.file, {
              method: 'HEAD',
              cache: 'no-cache'
            })
              .then((response) => {
                fetchs.push(response.ok);
                resolve(response.ok);
              })
              .catch((reason) => {
                fetchs.push(false);
                resolve(false);
              });
          });
        }
        if (fetchs.filter(Boolean).length === 3) {
          window.location.reload();
        } else {
          console.log('请求失败，3s重新请求中....');
          setTimeout(() => {
            this.getManifestJson();
          }, 3000);
        }
      })
      .catch(() => {
        setTimeout(() => {
          this.getManifestJson();
        }, 3000);
      });
  }

  /** 检测是否有版本更新 */
  handleVersionUpdates = () => {
    this.detectionTimerId && clearInterval(this.detectionTimerId);
    this.detectionTimerId = setInterval(() => {
      eTag.getRemoteETag().then((data) => {
        if (data !== eTag.get) {
          this.detectionTimerId && clearInterval(this.detectionTimerId);
          this.getManifestJson();
        }
      });
    }, 3000);
  };

  /** 超过1分钟进行刷新 */
  timedOutFefresh = () => {
    this.countdownTimerId && clearInterval(this.countdownTimerId);
    this.countdownTimerId = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
      /** 升级超过一分钟自动刷新页面 */
      console.log({ count: this.state.count });
      if (this.state.count >= 60) {
        this.countdownTimerId && clearInterval(this.countdownTimerId);
        window.location.reload();
      }
    }, 1000);
  };
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <Result
            status="500"
            title={
              <Badge offset={[7, 0]} dot={!this.state.loadEerr}>
                <h2 className="font-normal">系统升级</h2>
              </Badge>
            }
            subTitle={
              this.state.type === 1 ? (
                '检测到系统功能已升级，正在获取最新系统...'
              ) : (
                <div>
                  系统正在升级中，预计
                  <span className="text-primary">{this.state.time}s</span>
                  后完成升级
                </div>
              )
            }
          />
        </div>
      );
    }
    return this.props.children;
  }
}
