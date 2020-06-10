import Layout from '@/layout'

export default {
  path: '/data',
  component: Layout,
  name: '数据导入',
  meta: {
    title: '数据导入', icon: 'excel', roles: ['admin', 89]
  },
  children: [
    {
      path: 'region',
      component: () => import('@/views/data/region'),
      name: '强弱区域对比',
      meta: { title: '强弱区域对比', noCache: true, roles: ['admin', 89] }
    },
    {
      path: 'agency-fee',
      component: () => import('@/views/data/agencyFee'),
      name: '办事处历年费用',
      meta: { title: '办事处历年费用', noCache: true, roles: ['admin', 89] }
    },
    {
      path: 'region-contrast-fee',
      component: () => import('@/views/data/regionContrastFee'),
      name: '强弱区域建设费用',
      meta: { title: '强弱区域建设费用', noCache: true, roles: ['admin', 89] }
    }
  ]
}
