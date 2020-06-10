import Layout from '@/layout'

export default {
  path: '/index',
  component: Layout,
  meta: { title: '图片管理', icon: 'guide', noCache: true, roles: ['admin', 85] },
  children: [
    {
      path: 'images',
      component: () => import('@/views/index-image/index'),
      name: '图片管理',
      meta: { title: '图片管理', icon: 'guide', noCache: true, roles: ['admin', 85] }
    }
  ]
}
