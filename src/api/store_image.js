import request from '@/utils/request'
import domain from '@/api/domain'

export function indexStoreImage(listQuery) {
  return request({
    url: domain + '/index/store_images/index',
    method: 'get',
    params: listQuery
  })
}

export function readStoreImage(id) {
  return request({
    url: domain + `/index/store_images/read/id/${id}`,
    method: 'get'
  })
}

export function saveStoreImage(data) {
  return request({
    url: domain + '/index/store_images/save',
    method: 'post',
    data
  })
}

export function updateStoreImage(id, data) {
  return request({
    url: domain + `/index/store_images/update/id/${id}`,
    method: 'put',
    data
  })
}
