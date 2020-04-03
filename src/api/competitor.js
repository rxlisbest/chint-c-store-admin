import request from '@/utils/request'

export function indexCompetitor(listQuery) {
  return request({
    url: '/index/competitors/index',
    method: 'get',
    params: listQuery
  })
}

export function readCompetitor(id) {
  return request({
    url: `/index/competitors/read/id/${id}`,
    method: 'get'
  })
}

export function saveCompetitor(data) {
  return request({
    url: '/index/competitors/save',
    method: 'post',
    data
  })
}

export function updateCompetitor(id, data) {
  return request({
    url: `/index/competitors/update/id/${id}`,
    method: 'put',
    data
  })
}

export function deleteCompetitor(id) {
  return request({
    url: `/index/competitors/delete/id/${id}`,
    method: 'delete'
  })
}
