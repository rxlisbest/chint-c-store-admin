import request from '@/utils/request'
import domain from '@/api/domain'

export function indexStoreIncome(listQuery) {
  return request({
    url: domain + '/index/store_incomes/index',
    method: 'get',
    params: listQuery
  })
}

export function readStoreIncome(id) {
  return request({
    url: domain + `/index/store_incomes/read/id/${id}`,
    method: 'get'
  })
}

export function saveStoreIncome(data) {
  return request({
    url: domain + '/index/store_incomes/save',
    method: 'post',
    data
  })
}

export function updateStoreIncome(id, data) {
  return request({
    url: domain + `/index/store_incomes/update/id/${id}`,
    method: 'put',
    data
  })
}
