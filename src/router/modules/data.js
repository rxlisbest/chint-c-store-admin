import Layout from '@/layout'

export default {
  path: '/data',
  component: Layout,
  name: '数据导入',
  meta: {
    title: '数据导入', icon: 'excel'
  },
  redirect: '/data/region',
  children: [
    {
      path: 'region',
      component: () => import('@/views/data/region'),
      name: '强弱区域对比',
      meta: { title: '强弱区域对比', noCache: true, roles: ['admin'] }
    }
  ]
}