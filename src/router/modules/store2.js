import Layout from '@/layout'

export default {
  path: '/stores/1',
  component: Layout,
  redirect: '/stores/1/module_id/1/index/1',
  redirectAndCollapse: true,
  meta: { title: '专业市场', icon: 'list', noCache: true, roles: [1] },
  children: [
    {
      path: 'module_id/2',
      name: '一级经销商',
      alwaysShow: true,
      redirect: '/stores/1/module_id/2/index/2',
      meta: { title: '一级经销商', noCache: true, roles: [2] },
      redirectAndCollapse: true,
      children: [
        {
          path: '3',
          name: '门店',
          alwaysShow: true,
          redirect: 'noRedirect',
          component: () => import('@/views/stores/index'),
          meta: { title: '门店', noCache: true, roles: [3] },
          children: [
            {
              path: 'index/4',
              name: 'SI专卖店',
              component: () => import('@/views/stores/index'),
              meta: { title: 'SI专卖店', noCache: true, module_id: 4, roles: [4] }
            },
            {
              path: 'index/5',
              name: '电器工业超市旗舰店',
              component: () => import('@/views/stores/index'),
              meta: { title: '电器工业超市旗舰店', noCache: true, module_id: 5, roles: [5] }
            },
            {
              path: 'index/6',
              name: '电器工业超市标准店',
              component: () => import('@/views/stores/index'),
              meta: { title: '电器工业超市标准店', noCache: true, module_id: 6, roles: [6] }
            },
            {
              path: 'index/7',
              name: '电器工业超市单体店',
              component: () => import('@/views/stores/index'),
              meta: { title: '电器工业超市单体店', noCache: true, module_id: 7, roles: [7] }
            },
            {
              path: 'index/15',
              name: '品牌体验馆',
              component: () => import('@/views/stores/index'),
              meta: { title: '品牌体验馆', noCache: true, module_id: 15, roles: [15] }
            }
          ]
        },
        {
          path: '8',
          name: '媒体广告',
          alwaysShow: true,
          redirect: 'noRedirect',
          component: () => import('@/views/stores/index'),
          meta: { title: '媒体广告', noCache: true, roles: [8] },
          children: [
            {
              path: 'index/9',
              name: '户外广告',
              component: () => import('@/views/stores/index'),
              meta: { title: '户外广告', noCache: true, parent_module_id: 21, module_id: 31, roles: [9] }
            },
            {
              path: 'index/10',
              name: '正泰岗亭',
              component: () => import('@/views/stores/index'),
              meta: { title: '正泰岗亭', noCache: true, parent_module_id: 21, module_id: 31, roles: [10] }
            }
          ]
        }
      ]
    },
    {
      path: 'module_id/11',
      name: '二级分销商',
      alwaysShow: true,
      redirect: '/stores/1/module_id/11/index/11',
      meta: { title: '二级分销商', noCache: true, roles: [11] },
      redirectAndCollapse: true,
      children: [
        {
          path: 'index/12',
          name: '二级形象店',
          component: () => import('@/views/stores/index'),
          meta: { title: '二级形象店', noCache: true, module_id: 12, roles: [12] },
        },
        {
          path: 'index/13',
          name: '二级门招',
          component: () => import('@/views/stores/index'),
          meta: { title: '二级门招', noCache: true, module_id: 13, roles: [13] },
        },
        {
          path: 'index/14',
          name: '二级货架',
          component: () => import('@/views/stores/index'),
          meta: { title: '二级货架', noCache: true, module_id: 14, roles: [14] },
        }
      ]
    },
    {
      path: 'module_id/1/index/1',
      name: '专业市场',
      component: () => import('@/views/stores/index'),
      meta: { title: '专业市场', noCache: true, module_id: 1, roles: [1] },
      hidden: true,
    },
    {
      path: 'module_id/2/index/2',
      name: '一级经销商',
      component: () => import('@/views/stores/index'),
      meta: { title: '一级经销商', noCache: true, module_id: 2, roles: [2] },
      hidden: true,
    },
    {
      path: 'module_id/11/index/11',
      name: '二级分销商',
      component: () => import('@/views/stores/index'),
      meta: { title: '二级分销商', noCache: true, module_id: 11, roles: [11] },
      hidden: true,
    },
  ]
}