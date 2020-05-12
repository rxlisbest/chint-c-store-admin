import Layout from '@/layout'

export default {
  path: '/config',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/config/index'),
      name: '关键数据',
      meta: { title: '关键数据', icon: 'data', noCache: true, roles: ['admin'] }
    }
  ]
}
