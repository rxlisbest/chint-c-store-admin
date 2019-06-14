import Layout from '@/layout'

export default {
    path: '/stores',
    component: Layout,
    name: '正泰门店',
    meta: { title: '正泰门店', icon: 'list', noCache: true, roles: [2, 14, 15] },
    children: [
      {
        path: 'module_id/14',
        name: '一级经销商',
        component: () => import('@/views/stores/index'),
        meta: { title: '一级经销商', noCache: true, module_id: 14, roles: [2, 14]}
      },
      {
        path: 'module_id/14/create',
        name: '新建一级经销商',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建一级经销商', noCache: true, module_id: 14, activeMenu: '/stores/module_id/14', roles: [2, 14] },
        hidden: true
      },
      {
        path: 'module_id/14/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑一级经销商',
        meta: { title: '编辑一级经销商', noCache: true, activeMenu: '/stores/module_id/14', roles: [2, 14] },
        hidden: true
      },
      {
        path: 'index/15',
        name: '二级经销商',
        component: () => import('@/views/stores/index'),
        meta: { title: '二级经销商', noCache: true, module_id: 15, roles: [2, 15]}
      },
      {
        path: 'module_id/15/create',
        name: '新建二级经销商',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建二级经销商', noCache: true, module_id: 15, activeMenu: '/stores/module_id/15', roles: [2, 15] },
        hidden: true
      },
      {
        path: 'module_id/15/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑二级经销商',
        meta: { title: '编辑二级经销商', noCache: true, activeMenu: '/stores/module_id/15', roles: [2, 15] },
        hidden: true
      }
    ]
  }