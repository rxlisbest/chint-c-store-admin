import request from '@/utils/request'

export function indexModule(listQuery) {
  return request({
    url: '/index/modules/index',
    method: 'get',
    params: listQuery
  })
}

export function readStoreIncome(id) {
  return request({
    url: `/index/store_incomes/read/id/${id}`,
    method: 'get'
  })
}

export function saveStoreIncome(data) {
  return request({
    url: '/index/store_incomes/save',
    method: 'post',
    data
  })
}

export function updateStoreIncome(id, data) {
  return request({
    url: `/index/store_incomes/update/id/${id}`,
    method: 'put',
    data
  })
}
