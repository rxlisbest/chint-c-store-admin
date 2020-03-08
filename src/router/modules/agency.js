import Layout from '@/layout'

export default {
  path: '/agencies',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/agency/index'),
      name: '办事处管理',
      meta: { title: '办事处管理', icon: 'tree-table', noCache: true, roles: ['admin'] }
    }
  ]
}