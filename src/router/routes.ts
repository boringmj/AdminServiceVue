import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    children: [
      {
        path: 'home',
        redirect: '/home/console',
        meta: {
          is_menu: true,
          sort: 1,
          parent: true,
          title: '首页',
          icon: 'HomeFilled',
        },
        children: [
          {
            path: 'console',
            name: 'HomeConsole',
            component: () => import('@/views/HomeConsole.vue'),
            meta: {
              is_menu: true,
              sort: 1,
              parent: false,
              title: '控制台',
              activeName: 'home-console',
            },
          },
          {
            path: 'user',
            name: 'HomeUser',
            component: () => import('@/views/HomeUser.vue'),
            meta: {
              is_menu: true,
              sort: 2,
              parent: false,
              title: '账户管理',
              activeName: 'home-user',
            },
          },
        ],
      },
    ],
  },
]
