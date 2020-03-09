import Layout from '@/layout'

export default {
  path: '/agencies',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/agency/index'),
      name: '经销商信息',
      meta: { title: '经销商信息', icon: 'tree-table', noCache: true, roles: ['admin'] }
    }
  ]
}