import Layout from '@/layout'

export default {
  path: '/tagend',
  component: Layout,
  meta: { title: '终端管理', icon: 'Buildings', noCache: true, roles: ['admin', 86] },
  children: [
    {
      path: 'index',
      component: () => import('@/views/tagend/index'),
      name: '终端管理',
      meta: { title: '终端管理', icon: 'Buildings', noCache: true, roles: ['admin', 86] }
    }
  ]
}
