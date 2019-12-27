import request from '@/utils/request'

export function indexStore(listQuery) {
  return request({
    url: '/index/stores/index',
    method: 'get',
    params: listQuery
  })
}

export function readStore(id) {
  return request({
    url: `/index/stores/read/id/${id}`,
    method: 'get'
  })
}

export function saveStore(data) {
  return request({
    url: '/index/stores/save',
    method: 'post',
    data
  })
}

export function updateStore(id, data) {
  return request({
    url: `/index/stores/update/id/${id}`,
    method: 'put',
    data
  })
}

export function deleteStore(id) {
  return request({
    url: `/index/stores/delete/id/${id}`,
    method: 'delete'
  })
}

export function statisticCreate(query) {
  return request({
    url: '/index/stores/statisticCreate',
    method: 'get',
    params: query
  })
}

export function statisticNow(query) {
  return request({
    url: '/index/stores/statisticNow',
    method: 'get',
    params: query
  })
}

export function storeSaveMarket(data) {
  return request({
    url: '/index/stores/saveMarket',
    method: 'post',
    data
  })
}

export function storeUpdateMarket(id, data) {
  return request({
    url: `/index/stores/updateMarket/id/${id}`,
    method: 'put',
    data
  })
}

export function storeUpdateIntroduce(id, data) {
  return request({
    url: `/index/stores/updateIntroduce/id/${id}`,
    method: 'put',
    data
  })
}

export function storeSaveAgent(data) {
  return request({
    url: '/index/stores/saveAgent',
    method: 'post',
    data
  })
}

export function storeUpdateAgent(id, data) {
  return request({
    url: `/index/stores/updateAgent/id/${id}`,
    method: 'put',
    data
  })
}

export function storeAll(listQuery) {
  return request({
    url: '/index/stores/all',
    method: 'get',
    params: listQuery
  })
}

export function storeSaveShop(data) {
  return request({
    url: '/index/stores/saveShop',
    method: 'post',
    data
  })
}

export function storeUpdateShop(id, data) {
  return request({
    url: `/index/stores/updateShop/id/${id}`,
    method: 'put',
    data
  })
}

export function storeSaveChintAgent(data) {
  return request({
    url: '/index/stores/saveChintAgent',
    method: 'post',
    data
  })
}

export function storeUpdateChintAgent(id, data) {
  return request({
    url: `/index/stores/updateChintAgent/id/${id}`,
    method: 'put',
    data
  })
}
