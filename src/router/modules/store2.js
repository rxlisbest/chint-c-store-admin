import Layout from '@/layout'

const rootPath = '/'

// 新建
const storeCreate = (module_id, activeMenu, component) => {
  return {
    path: 'create',
    name: '新建',
    component: () => import(`@/views/stores/${component}.vue`),
    meta: { title: '新建', noCache: true, module_id: module_id, activeMenu: activeMenu, roles: [module_id] },
    hidden: true,
  }
}

// 编辑
const storeEdit = (module_id, activeMenu, component) => {
  return {
    path: 'edit/:store_id(\\d+)',
    name: '编辑',
    component: () => import(`@/views/stores/${component}.vue`),
    meta: { title: '编辑', noCache: true, module_id: module_id, activeMenu: activeMenu, roles: [module_id] },
    hidden: true,
  }
}

// 品牌形象
const storeImages = (module_id, activeMenu) => {
  return {
    path: 'images/:store_id(\\d+)',
    name: '品牌形象',
    component: () => import('@/views/store-images/index'),
    meta: { title: '品牌形象', noCache: true, module_id: module_id, activeMenu: activeMenu, roles: [module_id] },
    hidden: true,
  }
}

// 运营状况
const storeIncomes = (module_id, activeMenu) => {
  return {
    path: 'incomes/:store_id(\\d+)',
    name: '运营状况',
    component: () => import('@/views/store-incomes/index'),
    meta: { title: '运营状况', noCache: true, module_id: module_id, activeMenu: activeMenu, roles: [module_id] },
    hidden: true,
  }
}

// 竞争对手
const storeCompetitors = (module_id, activeMenu) => {
  return {
    path: 'competitors/:store_id(\\d+)',
    name: '竞争对手',
    component: () => import('@/views/store-competitors/index'),
    meta: { title: '竞争对手', noCache: true, module_id: module_id, activeMenu: activeMenu, roles: [module_id] },
    hidden: true,
  }
}

// 门店下级导航的展示
const shop = [
  [
    { id: 4, name: 'SI专卖店', module_id: [2, 3] },
    { id: 5, name: '电器工业超市旗舰店', module_id: [2, 3] },
    { id: 6, name: '电器工业超市标准店', module_id: [2, 3] },
    { id: 7, name: '电器工业超市单体店', module_id: [2, 3] },
    { id: 15, name: '品牌体验馆', module_id: [2, 3] },
  ],
  [
    { id: 9, name: '户外广告', module_id: [2, 8] },
    { id: 10, name: '正泰岗亭', module_id: [2, 8] },
  ],
  [
    { id: 12, name: '二级形象店', module_id: [11] },
    { id: 13, name: '二级门招', module_id: [11] },
    { id: 14, name: '二级货架', module_id: [11] },
  ],
]

let shopArray = []
for (let v of shop) {
  let content = []
  for (let item of v) {
    let activeMenu = rootPath + 'module_id/' + item.module_id.join('/') + '/index/' + item.id + '/list'
    let o = {
      path: 'index/' + item.id,
      name: item.name,
      component: () => import('@/views/stores/empty'),
      children: [
        {
          path: 'list',
          name: item.name,
          component: () => import('@/views/stores/marketShop'),
          meta: { title: item.name, noCache: true, module_id: item.id, roles: [item.id] },
        },
        storeEdit(item.id, activeMenu, 'editMarketShop'),
        storeCreate(item.id, activeMenu, 'createMarketShop'),
        storeImages(item.id, activeMenu),
        storeIncomes(item.id, activeMenu),
        storeCompetitors(item.id, activeMenu),
      ]
    }
    content.push(o)
  }
  shopArray.push(content)
}

// 一级经销商、二级分销商导航展示
const agent = [
  { id: 2, name: '一级经销商', module_id: [2] },
  { id: 11, name: '二级分销商', module_id: [11] }
]
let agentArray = []
for (let item of agent) {
  let activeMenu = rootPath + 'module_id/' + item.module_id.join('/') + '/index/' + item.id + '/list'
  let o = {
    path: 'module_id/' + item.id + '/index/' + item.id,
    name: item.name,
    component: () => import('@/views/stores/empty'),
    hidden: true,
    children: [
      {
        path: 'list',
        name: item.name,
        component: () => import('@/views/stores/marketAgent'),
        meta: { title: item.name, noCache: true, module_id: item.id, roles: [item.id] },
      },
      storeEdit(item.id, activeMenu, 'editMarketAgent'),
      storeCreate(item.id, activeMenu, 'createMarketAgent'),
    ]
  }
  agentArray.push(o)
}

// 专业市场导航展示
const market = [
  { id: 1, name: '专业市场', module_id: [1] },
]
let marketArray = []
for (let item of market) {
  let activeMenu = rootPath + 'module_id/' + item.module_id.join('/') + '/index/' + item.id + '/list'
  console.log(activeMenu)
  let o = {
    path: 'module_id/' + item.id + '/index/' + item.id,
    name: item.name,
    component: () => import('@/views/stores/empty'),
    hidden: true,
    children: [
      {
        path: 'list',
        name: item.name,
        component: () => import('@/views/stores/marketIndex'),
        meta: { title: item.name, noCache: true, module_id: item.id, roles: [item.id] },
      },
      storeEdit(item.id, activeMenu, 'editMarketIndex'),
      storeCreate(item.id, activeMenu, 'createMarketIndex'),
      // storeImages(item.id, activeMenu),
      // storeIncomes(item.id, activeMenu),
      storeCompetitors(item.id, activeMenu),
    ]
  }
  marketArray.push(o)
}

export default {
  path: rootPath,
  component: Layout,
  redirect: rootPath + 'module_id/1/index/1/list',
  redirectAndCollapse: true,
  meta: { title: '专业市场', icon: 'list', noCache: true, roles: [1] },
  children: [
    {
      path: 'module_id/2',
      name: '一级经销商',
      alwaysShow: true,
      redirect: rootPath + 'module_id/2/index/2/list',
      meta: { title: '一级经销商', noCache: true, roles: [2] },
      redirectAndCollapse: true,
      component: () => import('@/views/stores/empty'),
      children: [
        {
          path: '3',
          name: '门店',
          alwaysShow: true,
          redirect: 'noRedirect',
          meta: { title: '门店', noCache: true, roles: [3] },
          component: () => import('@/views/stores/empty'),
          children: shopArray[0]
        },
        {
          path: '8',
          name: '媒体广告',
          alwaysShow: true,
          redirect: 'noRedirect',
          meta: { title: '媒体广告', noCache: true, roles: [8] },
          component: () => import('@/views/stores/empty'),
          children: shopArray[1]
        }
      ]
    },
    {
      path: 'module_id/11',
      name: '二级分销商',
      alwaysShow: true,
      redirect: rootPath + 'module_id/11/index/11/list',
      meta: { title: '二级分销商', noCache: true, roles: [11] },
      redirectAndCollapse: true,
      component: () => import('@/views/stores/empty'),
      children: shopArray[2]
    },
    ...marketArray,
    ...agentArray,
  ]
}