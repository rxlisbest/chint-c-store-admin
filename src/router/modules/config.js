import Layout from '@/layout'

export default {
  path: '/config',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/config/index'),
      name: '经销商信息',
      meta: { title: '经销商信息', icon: 'data', noCache: true, roles: ['admin'] }
    }
  ]
}