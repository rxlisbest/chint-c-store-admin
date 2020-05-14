import Layout from '@/layout'

const rootPath = '/store/21'

// 新建
const storeCreate = (module_id, activeMenu, component, parent_module_id) => {
  return {
    path: 'create',
    name: '新建',
    component: () => import(`@/views/stores/${component}.vue`),
    meta: { title: '新建', noCache: true, module_id: module_id, parent_module_id: parent_module_id, activeMenu: activeMenu, roles: [module_id] },
    hidden: true,
  }
}

// 编辑
const storeEdit = (module_id, activeMenu, component, parent_module_id) => {
  return {
    path: 'edit/:store_id(\\d+)',
    name: '编辑',
    component: () => import(`@/views/stores/${component}.vue`),
    meta: { title: '编辑', noCache: true, module_id: module_id, parent_module_id: parent_module_id, activeMenu: activeMenu, roles: [module_id] },
    hidden: true,
  }
}

// 建设案例
const storeImages = (module_id, activeMenu) => {
  return {
    path: 'images/:store_id(\\d+)',
    name: '建设案例',
    component: () => import('@/views/store-images/index'),
    meta: { title: '建设案例', noCache: true, module_id: module_id, activeMenu: activeMenu, roles: [module_id] },
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

// 业绩指标
const storeKpi = (module_id, activeMenu) => {
  return {
    path: 'kpi/:store_id(\\d+)',
    name: '业绩指标',
    component: () => import('@/views/store-kpi/index'),
    meta: { title: '业绩指标', noCache: true, module_id: module_id, activeMenu: activeMenu, roles: [module_id] },
    hidden: true,
  }
}

// 门店下级导航的展示
const shop = [
  [
    { id: 35, name: '品牌体验馆', module_id: [22, 23] },
    { id: 26, name: '电气工业超市标准店', module_id: [22, 23] },
    { id: 25, name: '电气工业超市旗舰店', module_id: [22, 23] },
    { id: 24, name: 'SI专卖店', module_id: [22, 23] },
    // { id: 27, name: '电气工业超市单体店', module_id: [22, 23] },
  ],
  [
    { id: 29, name: '户外广告', module_id: [22, 28] },
    { id: 30, name: '正泰岗亭', module_id: [22, 28] },
  ],
  [
    { id: 32, name: '二级形象店', module_id: [31] },
    { id: 33, name: '二级门招', module_id: [31] },
    { id: 34, name: '二级货架', module_id: [31] },
  ],
]

let shopArray = []
for (let v of shop) {
  let content = []
  for (let item of v) {
    let activeMenu = rootPath + '/module_id/' + item.module_id.join('/') + '/index/' + item.id + '/list'
    let o = {
      path: 'index/' + item.id,
      name: item.name,
      component: () => import('@/views/stores/empty'),
      children: [
        {
          path: 'list',
          name: item.name,
          component: () => import('@/views/stores/storeShop'),
          meta: { title: item.name, noCache: true, module_id: item.id, parent_module_id: item.module_id[0], roles: [item.id] },
        },
        storeEdit(item.id, activeMenu, 'editStoreShop', item.module_id[0]),
        storeCreate(item.id, activeMenu, 'createStoreShop', item.module_id[0]),
        storeImages(item.id, activeMenu),
        storeIncomes(item.id, activeMenu),
        storeKpi(item.id, activeMenu),
      ]
    }
    content.push(o)
  }
  shopArray.push(content)
}

// 一级经销商、二级分销商导航展示
const agent = [
  { id: 22, name: '一级经销商', module_id: [22] },
  { id: 31, name: '二级分销商', module_id: [31] }
]
let agentArray = []
for (let item of agent) {
  let activeMenu = rootPath + '/module_id/' + item.module_id.join('/') + '/index/' + item.id + '/list'
  let o = {
    path: 'module_id/' + item.id + '/index/' + item.id,
    name: item.name,
    component: () => import('@/views/stores/empty'),
    hidden: true,
    children: [
      {
        path: 'list',
        name: item.name,
        component: () => import('@/views/stores/storeAgent'),
        meta: { title: item.name, noCache: true, module_id: item.id, roles: [item.id] },
      },
      storeEdit(item.id, activeMenu, 'editStoreAgent'),
      storeCreate(item.id, activeMenu, 'createStoreAgent'),
    ]
  }
  agentArray.push(o)
}

// 正泰门店导航展示
// const store = [
//   { id: 21, name: '正泰门店', module_id: [21] },
// ]
// let storeArray = []
// for (let item of store) {
//   let activeMenu = rootPath + '/module_id/' + item.module_id.join('/') + '/index/' + item.id + '/list'
//   let o = {
//     path: 'module_id/' + item.id + '/index/' + item.id,
//     name: item.name,
//     component: () => import('@/views/stores/empty'),
//     hidden: true,
//     children: [
//       {
//         path: 'list',
//         name: item.name,
//         component: () => import('@/views/stores/storeIndex'),
//         meta: { title: item.name, noCache: true, module_id: item.id, roles: [item.id] },
//       },
//       storeEdit(item.id, activeMenu, 'editStoreIndex'),
//       storeCreate(item.id, activeMenu, 'createStoreIndex'),
//       // storeImages(item.id, activeMenu),
//       // storeIncomes(item.id, activeMenu),
//     ]
//   }
//   storeArray.push(o)
// }

export default {
  path: rootPath,
  component: Layout,
  // redirect: rootPath + '/module_id/1/index/1/list',
  // redirectAndCollapse: true,
  redirect: 'noRedirect',
  meta: { title: '专业市场外门店', icon: 'shop', noCache: true, roles: [21] },
  children: [
    {
      path: 'module_id/22',
      name: '一级经销商',
      alwaysShow: true,
      redirect: rootPath + '/module_id/22/index/22/list',
      meta: { title: '一级经销商', noCache: true, roles: [22] },
      redirectAndCollapse: true,
      component: () => import('@/views/stores/empty'),
      children: [
        {
          path: '23',
          name: '门店',
          alwaysShow: true,
          redirect: 'noRedirect',
          meta: { title: '门店', noCache: true, roles: [23] },
          component: () => import('@/views/stores/empty'),
          children: shopArray[0]
        },
        {
          path: '28',
          name: '媒体广告',
          alwaysShow: true,
          redirect: 'noRedirect',
          meta: { title: '媒体广告', noCache: true, roles: [28] },
          component: () => import('@/views/stores/empty'),
          children: shopArray[1]
        }
      ]
    },
    {
      path: 'module_id/31',
      name: '二级分销商',
      alwaysShow: true,
      redirect: rootPath + '/module_id/31/index/31/list',
      meta: { title: '二级分销商', noCache: true, roles: [31] },
      redirectAndCollapse: true,
      component: () => import('@/views/stores/empty'),
      children: shopArray[2]
    },
    // ...storeArray,
    ...agentArray,
  ]
}
