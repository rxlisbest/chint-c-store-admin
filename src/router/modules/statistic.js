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
        meta: { title: '专业市场', noCache: true, roles: [2]},
        component: () => import('@/views/stores/statistics/index'),
        redirect: '/statistics/module_id/1/create',
        children: [
          {
            path: 'create',
            name: '新增统计',
            component: () => import('@/views/stores/statistic'),
            meta: { title: '新增统计', noCache: true, parent_module_id: 1, module_id: 1, roles: [2]}
          },
          {
            path: 'now',
            name: '现有统计',
            component: () => import('@/views/stores/index'),
            meta: { title: '现有统计', noCache: true, parent_module_id: 1, module_id: 1, roles: [2]}
          }
        ]
      },
      {
        path: 'module_id/2',
        name: '正泰门店',
        component: () => import('@/views/stores/statistic'),
        meta: { title: '正泰门店', noCache: true, parent_module_id: 0, module_id: 2, roles: [2, 14]}
      },
      {
        path: 'module_id/3',
        name: '其他',
        component: () => import('@/views/stores/statistic'),
        meta: { title: '其他', noCache: true, parent_module_id: 0, module_id: 3, roles: [2, 14]}
      }
    ]
  }