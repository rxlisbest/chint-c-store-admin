import request from '@/utils/request'

export function indexStoreKpi(listQuery) {
  return request({
    url: '/index/store_kpi/index',
    method: 'get',
    params: listQuery
  })
}

export function readStoreKpi(id) {
  return request({
    url: `/index/store_kpi/read/id/${id}`,
    method: 'get'
  })
}

export function saveStoreKpi(data) {
  return request({
    url: '/index/store_kpi/save',
    method: 'post',
    data
  })
}

export function updateStoreKpi(id, data) {
  return request({
    url: `/index/store_kpi/update/id/${id}`,
    method: 'put',
    data
  })
}
