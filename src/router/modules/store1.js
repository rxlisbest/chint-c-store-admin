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
        path: 'module_id/1/create',
        name: '新建专业市场',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建专业市场', noCache: true, parent_module_id: 0, module_id: 1, activeMenu: '/stores/0/module_id/1', roles: [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
        hidden: true
      },
      {
        path: 'module_id/1/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑专业市场',
        meta: { title: '编辑专业市场', noCache: true, parent_module_id: 0, module_id: 1, activeMenu: '/stores/0/module_id/1', roles: [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
        hidden: true
      },
      {
        path: 'module_id/1/children/:id(\\d+)',
        name: '专业市场',
        component: () => import('@/views/stores/children'),
        meta: { title: '专业市场', icon: 'list', noCache: true, parent_module_id: 0, module_id: 1, activeMenu: '/stores/0/module_id/1', roles: [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
        hidden: true
      },
      {
        path: 'module_id/4',
        name: '一级经销商',
        component: () => import('@/views/stores/index'),
        meta: { title: '一级经销商', noCache: true, parent_module_id: 1, module_id: 4, roles: [1, 4]},
        hidden: true
      },
      {
        path: 'module_id/4/create',
        name: '新建一级经销商',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建一级经销商', noCache: true, parent_module_id: 1, module_id: 4, activeMenu: '/stores/0/module_id/1', roles: [1, 4] },
        hidden: true
      },
      {
        path: 'module_id/4/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑一级经销商',
        meta: { title: '编辑一级经销商', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [1, 4] },
        hidden: true
      },
      {
        path: 'module_id/4/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '品牌形象',
        meta: { title: '品牌形象', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 4] },
        hidden: true
      },
      {
        path: 'module_id/4/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 4] },
        hidden: true
      },
      {
        path: 'index/5',
        name: '二级经销商',
        component: () => import('@/views/stores/index'),
        meta: { title: '二级经销商', noCache: true, parent_module_id: 1, module_id: 5, roles: [1, 5]},
        hidden: true
      },
      {
        path: 'module_id/5/create',
        name: '新建二级经销商',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建二级经销商', noCache: true, parent_module_id: 1, module_id: 5, activeMenu: '/stores/0/module_id/1', roles: [1, 5] },
        hidden: true
      },
      {
        path: 'module_id/5/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑二级经销商',
        meta: { title: '编辑二级经销商', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [1, 5] },
        hidden: true
      },
      {
        path: 'module_id/5/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '品牌形象',
        meta: { title: '品牌形象', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 5] },
        hidden: true
      },
      {
        path: 'module_id/5/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 5] },
        hidden: true
      },
      {
        path: 'index/6',
        name: '户外广告',
        component: () => import('@/views/stores/index'),
        meta: { title: '户外广告', noCache: true, parent_module_id: 1, module_id: 6, roles: [1, 6]},
        hidden: true
      },
      {
        path: 'module_id/6/create',
        name: '新建户外广告',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建户外广告', noCache: true, parent_module_id: 1, module_id: 6, activeMenu: '/stores/0/module_id/1', roles: [1, 6] },
        hidden: true
      },
      {
        path: 'module_id/6/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑户外广告',
        meta: { title: '编辑户外广告', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [1, 6] },
        hidden: true
      },
      {
        path: 'module_id/6/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '品牌形象',
        meta: { title: '品牌形象', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 6] },
        hidden: true
      },
      {
        path: 'module_id/6/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 6] },
        hidden: true
      },
      {
        path: 'index/7',
        name: '正泰岗亭',
        component: () => import('@/views/stores/index'),
        meta: { title: '正泰岗亭', noCache: true, parent_module_id: 1, module_id: 7, roles: [1, 7]},
        hidden: true
      },
      {
        path: 'module_id/7/create',
        name: '新建正泰岗亭',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建正泰岗亭', noCache: true, parent_module_id: 1, module_id: 7, activeMenu: '/stores/0/module_id/1', roles: [1, 7] },
        hidden: true
      },
      {
        path: 'module_id/7/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑正泰岗亭',
        meta: { title: '编辑正泰岗亭', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [1, 7] },
        hidden: true
      },
      {
        path: 'module_id/7/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '品牌形象',
        meta: { title: '品牌形象', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 7] },
        hidden: true
      },
      {
        path: 'module_id/7/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 7] },
        hidden: true
      },
      {
        path: 'index/8',
        name: '品牌体验馆',
        component: () => import('@/views/stores/index'),
        meta: { title: '品牌体验馆', noCache: true, parent_module_id: 1, module_id: 8, roles: [1, 8]},
        hidden: true
      },
      {
        path: 'module_id/8/create',
        name: '新建品牌体验馆',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建品牌体验馆', noCache: true, parent_module_id: 1, module_id: 8, activeMenu: '/stores/0/module_id/1', roles: [1, 8] },
        hidden: true
      },
      {
        path: 'module_id/8/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑品牌体验馆',
        meta: { title: '编辑品牌体验馆', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [1, 8] },
        hidden: true
      },
      {
        path: 'module_id/8/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '品牌形象',
        meta: { title: '品牌形象', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 8] },
        hidden: true
      },
      {
        path: 'module_id/8/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 8] },
        hidden: true
      },
      {
        path: 'index/9',
        name: '工业超市',
        component: () => import('@/views/stores/index'),
        meta: { title: '工业超市', noCache: true, parent_module_id: 1, module_id: 9, roles: [1, 9]},
        hidden: true
      },
      {
        path: 'module_id/9/create',
        name: '新建工业超市',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建工业超市', noCache: true, parent_module_id: 1, module_id: 9, activeMenu: '/stores/0/module_id/1', roles: [1, 9] },
        hidden: true
      },
      {
        path: 'module_id/9/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑工业超市',
        meta: { title: '编辑工业超市', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [1, 9] },
        hidden: true
      },
      {
        path: 'module_id/9/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '品牌形象',
        meta: { title: '品牌形象', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 9] },
        hidden: true
      },
      {
        path: 'module_id/9/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 9] },
        hidden: true
      },
      {
        path: 'index/10',
        name: 'SI专卖店',
        component: () => import('@/views/stores/index'),
        meta: { title: 'SI专卖店', noCache: true, parent_module_id: 1, module_id: 10, roles: [1, 10]},
        hidden: true
      },
      {
        path: 'module_id/10/create',
        name: '新建SI专卖店',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建SI专卖店', noCache: true, parent_module_id: 1, module_id: 10, activeMenu: '/stores/1/module_id/10', roles: [1, 10] },
        hidden: true
      },
      {
        path: 'module_id/10/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑SI专卖店',
        meta: { title: '编辑SI专卖店', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [1, 10] },
        hidden: true
      },
      {
        path: 'module_id/10/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '品牌形象',
        meta: { title: '品牌形象', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 10] },
        hidden: true
      },
      {
        path: 'module_id/10/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 10] },
        hidden: true
      },
      {
        path: 'index/11',
        name: '二级形象店',
        component: () => import('@/views/stores/index'),
        meta: { title: '二级形象店', noCache: true, parent_module_id: 1, module_id: 11, roles: [1, 11]},
        hidden: true
      },
      {
        path: 'module_id/11/create',
        name: '新建二级形象店',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建二级形象店', noCache: true, parent_module_id: 1, module_id: 11, activeMenu: '/stores/1/module_id/11', roles: [1, 11] },
        hidden: true
      },
      {
        path: 'module_id/11/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑二级形象店',
        meta: { title: '编辑二级形象店', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [1, 11] },
        hidden: true
      },
      {
        path: 'module_id/11/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '品牌形象',
        meta: { title: '品牌形象', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 11] },
        hidden: true
      },
      {
        path: 'module_id/11/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 11] },
        hidden: true
      },
      {
        path: 'index/12',
        name: '二级门招',
        component: () => import('@/views/stores/index'),
        meta: { title: '二级门招', noCache: true, parent_module_id: 1, module_id: 12, roles: [1, 12]},
        hidden: true
      },
      {
        path: 'module_id/12/create',
        name: '新建二级门招',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建二级门招', noCache: true, parent_module_id: 1, module_id: 12, activeMenu: '/stores/0/module_id/1', roles: [1, 12] },
        hidden: true
      },
      {
        path: 'module_id/12/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑二级门招',
        meta: { title: '编辑二级门招', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [1, 12] },
        hidden: true
      },
      {
        path: 'module_id/12/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '品牌形象',
        meta: { title: '品牌形象', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 12] },
        hidden: true
      },
      {
        path: 'module_id/12/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 12] },
        hidden: true
      },
      {
        path: 'index/13',
        name: '二级货架',
        component: () => import('@/views/stores/index'),
        meta: { title: '二级货架', noCache: true, parent_module_id: 1, module_id: 13, roles: [1, 13]},
        hidden: true
      },
      {
        path: 'module_id/13/create',
        name: '新建二级货架',
        component: () => import('@/views/stores/create'),
        meta: { title: '新建二级货架', noCache: true, parent_module_id: 1, module_id: 13, activeMenu: '/stores/0/module_id/1', roles: [1, 13] },
        hidden: true
      },
      {
        path: 'module_id/13/edit/:id(\\d+)',
        component: () => import('@/views/stores/edit'),
        name: '编辑二级货架',
        meta: { title: '编辑二级货架', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [1, 13] },
        hidden: true
      },
      {
        path: 'module_id/13/images/:store_id(\\d+)',
        component: () => import('@/views/store-images/index'),
        name: '品牌形象',
        meta: { title: '品牌形象', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 13] },
        hidden: true
      },
      {
        path: 'module_id/13/incomes/:store_id(\\d+)',
        component: () => import('@/views/store-incomes/index'),
        name: '运营状况',
        meta: { title: '运营状况', noCache: true, activeMenu: '/stores/0/module_id/1', roles: [2, 13] },
        hidden: true
      }
    ]
  }