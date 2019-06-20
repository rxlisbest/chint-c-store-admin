import Layout from '@/layout'

export default {
    path: '/statistics',
    component: Layout,
    name: '统计',
    meta: { title: '统计', icon: 'chart', noCache: true, roles: [1, 2, 3] },
    children: [
      {
        path: 'module_id/1',
        name: '专业市场',
        meta: { title: '专业市场', noCache: true, roles: [1]},
        component: () => import('@/views/stores/statistics/index'),
        redirect: '/statistics/module_id/1/create',
        children: [
          {
            path: 'create',
            name: '新增统计',
            component: () => import('@/views/stores/statistics/create'),
            meta: { title: '新增统计', noCache: true, parent_module_id: 0, module_id: 1, roles: [1]}
          },
          {
            path: 'children/create',
            name: '新增统计',
            component: () => import('@/views/stores/statistics/create'),
            meta: { title: '新增统计', noCache: true, parent_module_id: 1, module_id: 0, activeMenu: '/stores/0/module_id/1', roles: [1]},
            hidden: true
          },
          {
            path: 'children/now',
            name: '现有统计',
            component: () => import('@/views/stores/statistics/now'),
            meta: { title: '现有统计', noCache: true, parent_module_id: 1, module_id: 0, activeMenu: '/stores/0/module_id/1', roles: [1]},
            hidden: true
          }
        ]
      },
      {
        path: 'module_id/2',
        name: '正泰门店',
        meta: { title: '正泰门店', noCache: true, roles: [2]},
        component: () => import('@/views/stores/statistics/index'),
        redirect: '/statistics/module_id/1/create',
        children: [
          {
            path: 'create',
            name: '新增统计',
            component: () => import('@/views/stores/statistics/create'),
            meta: { title: '新增统计', noCache: true, parent_module_id: 2, module_id: 0, roles: [2]}
          },
          {
            path: 'now',
            name: '现有统计',
            component: () => import('@/views/stores/statistics/now'),
            meta: { title: '现有统计', noCache: true, parent_module_id: 2, module_id: 0, roles: [2]}
          }
        ]
      },
      {
        path: 'module_id/3',
        name: '其他',
        meta: { title: '其他', noCache: true, roles: [3]},
        component: () => import('@/views/stores/statistics/index'),
        redirect: '/statistics/module_id/1/create',
        children: [
          {
            path: 'create',
            name: '新增统计',
            component: () => import('@/views/stores/statistics/create'),
            meta: { title: '新增统计', noCache: true, parent_module_id: 3, module_id: 0, roles: [3]}
          },
          {
            path: 'now',
            name: '现有统计',
            component: () => import('@/views/stores/statistics/now'),
            meta: { title: '现有统计', noCache: true, parent_module_id: 3, module_id: 0, roles: [3]}
          }
        ]
      }
    ]
  }