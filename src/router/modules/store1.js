import Layout from '@/layout'

export default {
  path: '/stores/0',
  component: Layout,
  children: [
    {
      path: 'module_id/1',
      name: '专业市场',
      component: () => import('@/views/stores/index'),
      meta: { title: '专业市场', icon: 'list', noCache: true, parent_module_id: 0, module_id: 1, roles: [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
    },
    {
      path: 'module_id/:module_id(\\d+)/create',
      name: '新建',
      component: () => import('@/views/stores/create'),
      meta: { title: '新建', noCache: true, parent_module_id: 0, module_id: 1, activeMenu: '/stores/0/module_id/1', roles: [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
      hidden: true
    },
    {
      path: 'module_id/:module_id(\\d+)/edit/:id(\\d+)',
      component: () => import('@/views/stores/edit'),
      name: '编辑',
      meta: { title: '编辑', noCache: true, parent_module_id: 0, module_id: 1, activeMenu: '/stores/0/module_id/1', roles: [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
      hidden: true
    },
    {
      path: 'module_id/:parent_id(\\d+)/children/:id(\\d+)',
      name: '下级列表',
      component: () => import('@/views/stores/children'),
      meta: { title: '下级列表', icon: 'list', noCache: true, parent_module_id: 0, module_id: 1, activeMenu: '/stores/0/module_id/1', roles: [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
      hidden: true
    },
    {
      path: 'module_id/:parent_id(\\d+)/images/:store_id(\\d+)',
      component: () => import('@/views/store-images/index'),
      name: '品牌形象',
      meta: { title: '品牌形象', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [1] },
      hidden: true
    }
  ]
}