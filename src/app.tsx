import React from 'react';
import { BasicLayoutProps, Settings as LayoutSettings } from '@ant-design/pro-layout';
import { history, RequestConfig, request as appRequest, Link } from 'umi';
import { createLogger } from 'redux-logger';
import { message } from 'antd';

import MenuHeader from '@/components/MenuHeader';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';

import useAuthModel from '@/models/useAuthModel';

import logoPng from '@/assets/images/logo/logo.png';

export interface InitialState {
  settings?: LayoutSettings;
  currentUser?: any;
  permission?: string[];
}

export const request: RequestConfig = {
  timeout: 5000,
  errorConfig: {},
  middlewares: [], // 中间件
  requestInterceptors: [], // ==request.interceptors.request.use()
  responseInterceptors: [], // ==request.interceptors.response.use()
};

// 数据流
export const dva = {
  config: {
    // onAction: createLogger(), // 开启console日志
    onError(e: Error) {
      message.error(e.message, 3);
    },
  },
};

// 运行时初始化
export const getInitialState = async (): Promise<InitialState> => {
  let currentUser = null;
  try {
    // @ts-ignore 无视这里的空判断 用session来处理保证每次打开页面都是登录界面，刷新会在当前页面
    const testUser = JSON.parse(sessionStorage.getItem('testUser'));
    if (testUser) {
      const response = await appRequest(
        `http://crystalshield.wugucloud.com/api-crystal/auth/mobile/users`, {
          method: 'POST',
          data: {
            mobile: testUser.mobile,
          },
          headers: {
            ClientType: 'admin',
            token: testUser.accessToken,
          },
        });
      if (response.code === 200) {
        currentUser = response.data;
      }
    }
  } catch (e) {
    message.error(e.message, 3);
  }
  return {
    settings: {
      title: 'testTitle',
    },
    currentUser: currentUser,
    permission: ['home', 'test', 'test1', 'test2'],
  };
};

// 布局
export const layout = ({ initialState }: { initialState: InitialState; }): BasicLayoutProps => {
  console.log(initialState);
  return {
    theme: 'dark',
    logo: logoPng,
    disableMobile: true,
    menuHeaderRender: () => <MenuHeader/>,
    menuDataRender: (menuData) => {
      // 这里动态修改路由数据
      return menuData;
    },
    menuItemRender: (menuItemProps, defaultDom) => {
      if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
        return defaultDom;
      }
      return <Link to={menuItemProps.path}>{defaultDom}</Link>;
    },
    rightContentRender: () => <RightContent/>,
    onPageChange: (location) => {
      // 如果没有登录，重定向到 login
      const { currentUser } = initialState;
      if (!currentUser && location?.pathname !== '/login') {
        history.push('/login');
      }
    },
    footerRender: () => <Footer/>,
    ...initialState?.settings,
  };
};
