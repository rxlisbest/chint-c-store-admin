import request from '@/utils/request'

export function indexTagend(listQuery) {
  return request({
    url: '/index/tagend/index',
    method: 'get',
    params: listQuery
  })
}

export function readTagend(id) {
  return request({
    url: `/index/tagend/read/id/${id}`,
    method: 'get'
  })
}

export function saveTagend(data) {
  return request({
    url: '/index/tagend/save',
    method: 'post',
    data
  })
}

export function updateTagend(id, data) {
  return request({
    url: `/index/tagend/update/id/${id}`,
    method: 'put',
    data
  })
}

export function deleteTagend(id) {
  return request({
    url: `/index/tagend/delete/id/${id}`,
    method: 'delete'
  })
}

export function allTagend(listQuery) {
  return request({
    url: '/index/tagend/all',
    method: 'get',
    params: listQuery
  })
}