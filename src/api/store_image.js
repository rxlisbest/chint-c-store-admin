import request from '@/utils/request'

export function indexStoreImage(listQuery) {
  return request({
    url: '/index/store_images/index',
    method: 'get',
    params: listQuery
  })
}

export function readStoreImage(id) {
  return request({
    url: `/index/store_images/read/id/${id}`,
    method: 'get'
  })
}

export function saveStoreImage(data) {
  return request({
    url: '/index/store_images/save',
    method: 'post',
    data
  })
}

export function updateStoreImage(id, data) {
  return request({
    url: `/index/store_images/update/id/${id}`,
    method: 'put',
    data
  })
}

export function deleteStoreImage(id) {
  return request({
    url: `/index/store_images/delete/id/${id}`,
    method: 'delete'
  })
}
