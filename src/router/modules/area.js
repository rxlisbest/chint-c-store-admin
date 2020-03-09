import Layout from '@/layout'

export default {
  path: '/areas',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/area/index'),
      name: '区域管理',
      meta: { title: '区域管理', icon: 'map', noCache: true, roles: ['admin'] }
    }
  ]
}