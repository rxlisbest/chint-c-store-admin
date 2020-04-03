import Layout from '@/layout'

export default {
  path: '/competitor',
  component: Layout,
  name: '数据导入',
  meta: {
    title: '数据导入', icon: 'excel'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/competitor/index'),
      name: '竞品信息',
      meta: { title: '竞品信息', noCache: true, roles: ['admin'] }
    },
  ]
}