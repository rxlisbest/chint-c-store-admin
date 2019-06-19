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

export function statisticCreate(query) {
  return request({
    url: '/index/stores/statisticCreate',
    method: 'get',
    params: query
  })
}
