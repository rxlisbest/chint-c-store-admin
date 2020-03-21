import request from '@/utils/request'

export function indexIndexImage(listQuery) {
  return request({
    url: '/index/index_images/index',
    method: 'get',
    params: listQuery
  })
}

export function readIndexImage(id) {
  return request({
    url: `/index/index_images/read/id/${id}`,
    method: 'get'
  })
}

export function saveIndexImage(data) {
  return request({
    url: '/index/index_images/save',
    method: 'post',
    data
  })
}

export function updateIndexImage(id, data) {
  return request({
    url: `/index/index_images/update/id/${id}`,
    method: 'put',
    data
  })
}

export function deleteIndexImage(id) {
  return request({
    url: `/index/index_images/delete/id/${id}`,
    method: 'delete'
  })
}
