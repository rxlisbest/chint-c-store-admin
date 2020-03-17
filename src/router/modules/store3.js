import Layout from '@/layout'

export default {
    path: '/stores/3',
    component: Layout,
    name: '其他',
    meta: { title: '其他', icon: 'list', noCache: true, roles: [3, 16, 17, 18, 19, 20, 21, 22, 23] },
    children: [
      {
        path: 'module_id/16',
        name: '户外广告',
        component: () => import('@/views/stores/index'),
        meta: { title: '户外广告', noCache: true, parent_module_id: 3, module_id: 16, roles: [3, 16]}
      },
      {
        path: 'module_id/16/create',
        name: '新建户外广告',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建户外广告', noCache: true, parent_module_id: 3, module_id: 16, activeMenu: '/stores/3/module_id/16', roles: [3, 16] },
        hidden: true
      },
      {
        path: 'module_id/16/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑户外广告',
        meta: { title: '编辑户外广告', noCache: true, activeMenu: '/stores/3/module_id/16', roles: [3, 16] },
        hidden: true
      },
      {
        path: 'module_id/16/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '建设案例',
        meta: { title: '建设案例', noCache: true, activeMenu: '/stores/1/module_id/16', roles: [2, 16] },
        hidden: true
      },
      {
        path: 'module_id/16/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/1/module_id/16', roles: [2, 16] },
        hidden: true
      },
      {
        path: 'module_id/17',
        name: '正泰岗亭',
        component: () => import('@/views/stores/index'),
        meta: { title: '正泰岗亭', noCache: true, parent_module_id: 3, module_id: 17, roles: [3, 17]}
      },
      {
        path: 'module_id/17/create',
        name: '新建正泰岗亭',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建正泰岗亭', noCache: true, parent_module_id: 3, module_id: 17, activeMenu: '/stores/3/module_id/17', roles: [3, 17] },
        hidden: true
      },
      {
        path: 'module_id/17/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑正泰岗亭',
        meta: { title: '编辑正泰岗亭', noCache: true, activeMenu: '/stores/3/module_id/17', roles: [3, 17] },
        hidden: true
      },
      {
        path: 'module_id/17/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '建设案例',
        meta: { title: '建设案例', noCache: true, activeMenu: '/stores/1/module_id/17', roles: [2, 17] },
        hidden: true
      },
      {
        path: 'module_id/17/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/1/module_id/17', roles: [2, 17] },
        hidden: true
      },
      {
        path: 'module_id/18',
        name: '品牌体验馆',
        component: () => import('@/views/stores/index'),
        meta: { title: '品牌体验馆', noCache: true, parent_module_id: 3, module_id: 18, roles: [3, 18]}
      },
      {
        path: 'module_id/18/create',
        name: '新建品牌体验馆',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建品牌体验馆', noCache: true, parent_module_id: 3, module_id: 18, activeMenu: '/stores/3/module_id/18', roles: [3, 18] },
        hidden: true
      },
      {
        path: 'module_id/18/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑品牌体验馆',
        meta: { title: '编辑品牌体验馆', noCache: true, activeMenu: '/stores/3/module_id/18', roles: [3, 18] },
        hidden: true
      },
      {
        path: 'module_id/18/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '建设案例',
        meta: { title: '建设案例', noCache: true, activeMenu: '/stores/1/module_id/18', roles: [2, 18] },
        hidden: true
      },
      {
        path: 'module_id/18/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/1/module_id/18', roles: [2, 18] },
        hidden: true
      },
      {
        path: 'module_id/19',
        name: '工业超市',
        component: () => import('@/views/stores/index'),
        meta: { title: '工业超市', noCache: true, parent_module_id: 3, module_id: 19, roles: [3, 19]}
      },
      {
        path: 'module_id/19/create',
        name: '新建工业超市',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建工业超市', noCache: true, parent_module_id: 3, module_id: 19, activeMenu: '/stores/3/module_id/19', roles: [3, 19] },
        hidden: true
      },
      {
        path: 'module_id/19/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑工业超市',
        meta: { title: '编辑工业超市', noCache: true, activeMenu: '/stores/3/module_id/19', roles: [3, 19] },
        hidden: true
      },
      {
        path: 'module_id/19/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '建设案例',
        meta: { title: '建设案例', noCache: true, activeMenu: '/stores/1/module_id/19', roles: [2, 19] },
        hidden: true
      },
      {
        path: 'module_id/19/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/1/module_id/19', roles: [2, 19] },
        hidden: true
      },
      {
        path: 'module_id/20',
        name: 'SI专卖店',
        component: () => import('@/views/stores/index'),
        meta: { title: 'SI专卖店', noCache: true, parent_module_id: 3, module_id: 20, roles: [3, 20]}
      },
      {
        path: 'module_id/20/create',
        name: '新建SI专卖店',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建SI专卖店', noCache: true, parent_module_id: 3, module_id: 20, activeMenu: '/stores/3/module_id/20', roles: [3, 20] },
        hidden: true
      },
      {
        path: 'module_id/20/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑SI专卖店',
        meta: { title: '编辑SI专卖店', noCache: true, activeMenu: '/stores/3/module_id/20', roles: [3, 20] },
        hidden: true
      },
      {
        path: 'module_id/20/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '建设案例',
        meta: { title: '建设案例', noCache: true, activeMenu: '/stores/1/module_id/20', roles: [2, 20] },
        hidden: true
      },
      {
        path: 'module_id/20/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/1/module_id/20', roles: [2, 20] },
        hidden: true
      },
      {
        path: 'module_id/21',
        name: '二级形象店',
        component: () => import('@/views/stores/index'),
        meta: { title: '二级形象店', noCache: true, parent_module_id: 3, module_id: 21, roles: [3, 21]}
      },
      {
        path: 'module_id/21/create',
        name: '新建二级形象店',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建二级形象店', noCache: true, parent_module_id: 3, module_id: 21, activeMenu: '/stores/3/module_id/21', roles: [3, 21] },
        hidden: true
      },
      {
        path: 'module_id/21/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑二级形象店',
        meta: { title: '编辑二级形象店', noCache: true, activeMenu: '/stores/3/module_id/21', roles: [3, 21] },
        hidden: true
      },
      {
        path: 'module_id/21/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '建设案例',
        meta: { title: '建设案例', noCache: true, activeMenu: '/stores/1/module_id/21', roles: [2, 21] },
        hidden: true
      },
      {
        path: 'module_id/21/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/1/module_id/21', roles: [2, 21] },
        hidden: true
      },
      {
        path: 'module_id/22',
        name: '二级门招',
        component: () => import('@/views/stores/index'),
        meta: { title: '二级门招', noCache: true, parent_module_id: 3, module_id: 22, roles: [3, 22]}
      },
      {
        path: 'module_id/22/create',
        name: '新建二级门招',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建二级门招', noCache: true, parent_module_id: 3, module_id: 22, activeMenu: '/stores/3/module_id/22', roles: [3, 22] },
        hidden: true
      },
      {
        path: 'module_id/22/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑二级门招',
        meta: { title: '编辑二级门招', noCache: true, activeMenu: '/stores/3/module_id/22', roles: [3, 22] },
        hidden: true
      },
      {
        path: 'module_id/22/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '建设案例',
        meta: { title: '建设案例', noCache: true, activeMenu: '/stores/1/module_id/22', roles: [2, 22] },
        hidden: true
      },
      {
        path: 'module_id/22/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/1/module_id/22', roles: [2, 22] },
        hidden: true
      },
      {
        path: 'module_id/23',
        name: '二级货架',
        component: () => import('@/views/stores/index'),
        meta: { title: '二级货架', noCache: true, parent_module_id: 3, module_id: 23, roles: [3, 23]}
      },
      {
        path: 'module_id/23/create',
        name: '新建二级货架',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建二级货架', noCache: true, parent_module_id: 3, module_id: 23, activeMenu: '/stores/3/module_id/23', roles: [3, 23] },
        hidden: true
      },
      {
        path: 'module_id/23/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑二级货架',
        meta: { title: '编辑二级货架', noCache: true, activeMenu: '/stores/3/module_id/23', roles: [3, 23] },
        hidden: true
      },
      {
        path: 'module_id/23/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '建设案例',
        meta: { title: '建设案例', noCache: true, activeMenu: '/stores/1/module_id/23', roles: [2, 23] },
        hidden: true
      },
      {
        path: 'module_id/23/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/1/module_id/23', roles: [2, 23] },
        hidden: true
      }
    ]
  }