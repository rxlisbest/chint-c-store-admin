import Layout from '@/layout'

export default {
  path: '/stores/21',
  component: Layout,
  redirect: 'noRedirect',
  meta: { title: '正泰门店', icon: 'list', noCache: true, roles: [21] },
  children: [
    {
      path: 'module_id/22',
      name: '一级经销商',
      alwaysShow: true,
      redirect: '/stores/21/module_id/22/index/22',
      meta: { title: '一级经销商', noCache: true, roles: [22] },
      redirectAndCollapse: true,
      children: [
        {
          path: '23',
          name: '门店',
          alwaysShow: true,
          redirect: 'noRedirect',
          component: () => import('@/views/stores/index'),
          meta: { title: '门店', noCache: true, roles: [23] },
          children: [
            {
              path: 'index/24',
              name: 'SI专卖店',
              component: () => import('@/views/stores/index'),
              meta: { title: 'SI专卖店', noCache: true, module_id: 24, roles: [24] }
            },
            {
              path: 'index/25',
              name: '电气工业超市旗舰店',
              component: () => import('@/views/stores/index'),
              meta: { title: '电气工业超市旗舰店', noCache: true, module_id: 25, roles: [25] }
            },
            {
              path: 'index/26',
              name: '电气工业超市标准店',
              component: () => import('@/views/stores/index'),
              meta: { title: '电气工业超市标准店', noCache: true, module_id: 26, roles: [26] }
            },
            {
              path: 'index/27',
              name: '电气工业超市单体店',
              component: () => import('@/views/stores/index'),
              meta: { title: '电气工业超市单体店', noCache: true, module_id: 27, roles: [27] }
            },
            {
              path: 'index/35',
              name: '品牌体验馆',
              component: () => import('@/views/stores/index'),
              meta: { title: '品牌体验馆', noCache: true, module_id: 35, roles: [35] }
            }
          ]
        },
        {
          path: '28',
          name: '媒体广告',
          alwaysShow: true,
          redirect: 'noRedirect',
          component: () => import('@/views/stores/index'),
          meta: { title: '媒体广告', noCache: true, roles: [28] },
          children: [
            {
              path: 'index/29',
              name: '户外广告',
              component: () => import('@/views/stores/index'),
              meta: { title: '户外广告', noCache: true, module_id: 29, roles: [29] }
            },
            {
              path: 'index/10',
              name: '正泰岗亭',
              component: () => import('@/views/stores/index'),
              meta: { title: '正泰岗亭', noCache: true, module_id: 30, roles: [30] }
            }
          ]
        }
      ]
    },
    {
      path: 'module_id/31',
      name: '二级分销商',
      alwaysShow: true,
      redirect: '/stores/21/module_id/31/index/31',
      meta: { title: '二级分销商', noCache: true, roles: [31] },
      redirectAndCollapse: true,
      children: [
        {
          path: 'index/32',
          name: '二级形象店',
          component: () => import('@/views/stores/index'),
          meta: { title: '二级形象店', noCache: true, module_id: 32, roles: [32] },
        },
        {
          path: 'index/33',
          name: '二级门招',
          component: () => import('@/views/stores/index'),
          meta: { title: '二级门招', noCache: true, module_id: 33, roles: [33] },
        },
        {
          path: 'index/34',
          name: '二级货架',
          component: () => import('@/views/stores/index'),
          meta: { title: '二级货架', noCache: true, module_id: 34, roles: [34] },
        }
      ]
    },
    {
      path: 'module_id/21/index/21',
      name: '专业市场',
      component: () => import('@/views/stores/index'),
      meta: { title: '专业市场', noCache: true, module_id: 21, roles: [21] },
      hidden: true,
    },
    {
      path: 'module_id/22/index/22',
      name: '一级经销商',
      component: () => import('@/views/stores/index'),
      meta: { title: '一级经销商', noCache: true, module_id: 22, roles: [22] },
      hidden: true,
    },
    {
      path: 'module_id/31/index/31',
      name: '二级分销商',
      component: () => import('@/views/stores/index'),
      meta: { title: '二级分销商', noCache: true, module_id: 31, roles: [31] },
      hidden: true,
    },
  ]
}