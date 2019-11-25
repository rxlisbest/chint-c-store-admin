import Layout from '@/layout'

export default {
    path: '/stores/21',
    component: Layout,
    name: '正泰门店',
    meta: { title: '正泰门店', icon: 'list', noCache: true, roles: [21, 22, 31] },
    children: [
      {
        path: 'module_id/22',
        name: '一级经销商',
        component: () => import('@/views/stores/index'),
        meta: { title: '一级经销商', noCache: true, parent_module_id: 21, module_id: 22, roles: [21, 22]}
      },
      {
        path: 'module_id/22/create',
        name: '新建一级经销商',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建一级经销商', noCache: true, parent_module_id: 21, module_id: 22, activeMenu: '/stores/21/module_id/22', roles: [21, 22] },
        hidden: true
      },
      {
        path: 'module_id/22/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑一级经销商',
        meta: { title: '编辑一级经销商', noCache: true, activeMenu: '/stores/21/module_id/22', roles: [21, 22] },
        hidden: true
      },
      {
        path: 'module_id/22/children/:id(\\d+)',
        name: '下级列表',
        component: () => import('@/views/stores/children'),
        meta: { title: '下级列表', icon: 'list', noCache: true, parent_module_id: 21, module_id: 22, activeMenu: '/stores/21/module_id/22', roles: [21, 22] },
        hidden: true
      },
      {
        path: 'module_id/22/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '品牌形象',
        meta: { title: '品牌形象', noCache: true, activeMenu: '/stores/21/module_id/22', roles: [21, 22] },
        hidden: true
      },
      {
        path: 'module_id/22/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/21/module_id/22', roles: [21, 22] },
        hidden: true
      },
      {
        path: 'index/31',
        name: '二级经销商',
        component: () => import('@/views/stores/index'),
        meta: { title: '二级经销商', noCache: true, parent_module_id: 21, module_id: 31, roles: [21, 31]}
      },
      {
        path: 'module_id/31/create',
        name: '新建二级经销商',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建二级经销商', noCache: true, parent_module_id: 21, module_id: 31, activeMenu: '/stores/21/module_id/31', roles: [21, 31] },
        hidden: true
      },
      {
        path: 'module_id/31/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑二级经销商',
        meta: { title: '编辑二级经销商', noCache: true, activeMenu: '/stores/21/module_id/31', roles: [21, 31] },
        hidden: true
      },
      {
        path: 'module_id/31/children/:id(\\d+)',
        name: '下级列表',
        component: () => import('@/views/stores/children'),
        meta: { title: '下级列表', icon: 'list', noCache: true, parent_module_id: 21, module_id: 31, activeMenu: '/stores/21/module_id/31', roles: [21, 31] },
        hidden: true
      },
      {
        path: 'module_id/31/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '品牌形象',
        meta: { title: '品牌形象', noCache: true, activeMenu: '/stores/21/module_id/31', roles: [21, 31] },
        hidden: true
      },
      {
        path: 'module_id/31/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/21/module_id/31', roles: [21, 31] },
        hidden: true
      },
      {
        path: 'module_id/32/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/21/module_id/31', roles: [21, 31] },
        hidden: true
      },
    ]
  }