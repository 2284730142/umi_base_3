import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 数据流
  dva: {
    immer: true,
    hmr: false,
  },
  // 布局
  layout: {
    name: '测试包名', // 产品名
    locale: false, // 国际化配置
    layout: 'side',
    theme: 'pro', // Layout主题
  },
  // antd配置
  antd: {
    dark: false, // 暗黑模式
    compact: true, // 紧凑主题
  },
  // 请求数据项适配
  request: {
    dataField: 'data',
  },
  // 路由(这里写的access不能直接被控制，要在config下的route.ts，不过可以直接手动控制)
  routes: [
    {
      path: '/',
      component: '@/pages/home/index',
      access: 'home',
      wrappers: ['@/layouts/blank/index'],
    },
    {
      path: '/home',
      component: '@/pages/home/index',
      access: 'home',
      wrappers: ['@/layouts/blank/index'],
      menu: {
        name: '欢迎', // 兼容此写法
        // icon: icon,
      },
    },
    {
      path: '/test',
      access: 'test',
      menu: {
        name: '测试总',
      },
      routes: [
        {
          path: '/test/test1',
          component: '@/pages/test/test1/index',
          access: 'test1',
          wrappers: ['@/layouts/blank/index'],
          menu: {
            name: '测试1',
          },
        },
        {
          path: '/test/test2',
          component: '@/pages/test/test2/index',
          access: 'test2',
          wrappers: ['@/layouts/blank/index'],
          menu: {
            name: '测试2',
          },
        },
      ],
    },
    {
      path: '/login',
      component: '@/pages/user/login/index',
      // 不展示顶栏
      headerRender: false,
      // 不展示页脚
      footerRender: false,
      // 不展示菜单
      menuRender: false,
      // 不展示菜单顶栏
      menuHeaderRender: false,
    },
  ],
});
