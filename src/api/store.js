import request from '@/utils/request'
import domain from '@/api/domain'

export function indexStore(listQuery) {
  return request({
    url: domain + '/index/stores/index',
    method: 'get',
    params: listQuery
  })
}

export function readStore(id) {
  return request({
    url: domain + `/index/stores/read/id/${id}`,
    method: 'get'
  })
}

export function saveStore(data) {
  return request({
    url: domain + '/index/stores/save',
    method: 'post',
    data
  })
}

export function updateStore(id, data) {
  return request({
    url: domain + `/index/stores/update/id/${id}`,
    method: 'put',
    data
  })
}
