import Layout from '@/layout'

export default {
  path: '/agencies',
  component: Layout,
  meta: { title: '办事处管理', icon: 'Buildings', noCache: true, roles: ['admin', 87] },
  children: [
    {
      path: 'index',
      component: () => import('@/views/agency/index'),
      name: '办事处管理',
      meta: { title: '办事处管理', icon: 'Buildings', noCache: true, roles: ['admin', 87] }
    }
  ]
}
