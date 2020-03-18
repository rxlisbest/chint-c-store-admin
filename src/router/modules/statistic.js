import Layout from '@/layout'

export default {
    path: '/statistics',
    component: Layout,
    name: '开发统计',
    meta: { title: '开发统计', icon: 'chart', noCache: true, roles: [40] },
    children: [
      {
        path: '41',
        name: '市场开发统计',
        component: () => import('@/views/statistics/MarketDevelopment'),
        meta: { title: '市场开发统计', noCache: true, roles: [41]}
      },
      {
        path: '42',
        name: '新增客户数量',
        component: () => import('@/views/statistics/NewStore'),
        meta: { title: '新增客户数量', noCache: true, roles: [42]},
      },
      {
        path: '43',
        name: '销售额统计',
        component: () => import('@/views/statistics/Sale'),
        meta: { title: '销售额统计', noCache: true, roles: [43]}
      },
      {
        path: '44',
        name: '竞争对手统计',
        component: () => import('@/views/statistics/Competitor'),
        meta: { title: '竞争对手统计', noCache: true, roles: [44]},
      }
    ]
  }