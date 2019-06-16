import Layout from '@/layout'

export default {
    path: '/stores/2',
    component: Layout,
    name: '正泰门店',
    meta: { title: '正泰门店', icon: 'list', noCache: true, roles: [2, 14, 15] },
    children: [
      {
        path: 'module_id/14',
        name: '一级经销商',
        component: () => import('@/views/stores/index'),
        meta: { title: '一级经销商', noCache: true, parent_module_id: 2, module_id: 14, roles: [2, 14]}
      },
      {
        path: 'module_id/14/create',
        name: '新建一级经销商',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建一级经销商', noCache: true, parent_module_id: 2, module_id: 14, activeMenu: '/stores/2/module_id/14', roles: [2, 14] },
        hidden: true
      },
      {
        path: 'module_id/14/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑一级经销商',
        meta: { title: '编辑一级经销商', noCache: true, activeMenu: '/stores/2/module_id/14', roles: [2, 14] },
        hidden: true
      },
      {
        path: 'module_id/14/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '品牌形象',
        meta: { title: '品牌形象', noCache: true, activeMenu: '/stores/2/module_id/14', roles: [2, 14] },
        hidden: true
      },
      {
        path: 'module_id/14/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/2/module_id/14', roles: [2, 14] },
        hidden: true
      },
      {
        path: 'index/15',
        name: '二级经销商',
        component: () => import('@/views/stores/index'),
        meta: { title: '二级经销商', noCache: true, parent_module_id: 2, module_id: 15, roles: [2, 15]}
      },
      {
        path: 'module_id/15/create',
        name: '新建二级经销商',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建二级经销商', noCache: true, parent_module_id: 2, module_id: 15, activeMenu: '/stores/2/module_id/15', roles: [2, 15] },
        hidden: true
      },
      {
        path: 'module_id/15/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑二级经销商',
        meta: { title: '编辑二级经销商', noCache: true, activeMenu: '/stores/2/module_id/15', roles: [2, 15] },
        hidden: true
      },
      {
        path: 'module_id/15/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '品牌形象',
        meta: { title: '品牌形象', noCache: true, activeMenu: '/stores/2/module_id/15', roles: [2, 15] },
        hidden: true
      },
      {
        path: 'module_id/15/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/2/module_id/15', roles: [2, 15] },
        hidden: true
      }
    ]
  }