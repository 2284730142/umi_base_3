import { Subscription, Reducer, Effect } from 'umi';

export interface GlobalModelState {
  global: string;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
    // fetchNotices: Effect;
  };
  reducers: {
    changeGlobalState: Reducer<GlobalModelState>;
  };
  subscriptions: {
    // setup: Subscription
  };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {
    global: '全局数据',
  },
  effects: {},
  reducers: {
    changeGlobalState(state, { payload }): GlobalModelState {
      return { ...state, ...payload };
    },
  },
  subscriptions: {
    // setup({ history }): void {
    //   // Subscribe history(url) change, trigger `load` action if pathname is `/`
    //   history.listen(({ pathname, search }): void => {
    //     if (typeof window.ga !== 'undefined') {
    //       window.ga('send', 'pageview', pathname + search);
    //     }
    //   });
    // },
  },
};

export default GlobalModel;
