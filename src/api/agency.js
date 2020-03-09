import request from '@/utils/request'

export function indexAgency(listQuery) {
  return request({
    url: '/index/agencies/index',
    method: 'get',
    params: listQuery
  })
}

export function readAgency(id) {
  return request({
    url: `/index/agencies/read/id/${id}`,
    method: 'get'
  })
}

export function saveAgency(data) {
  return request({
    url: '/index/agencies/save',
    method: 'post',
    data
  })
}

export function updateAgency(id, data) {
  return request({
    url: `/index/agencies/update/id/${id}`,
    method: 'put',
    data
  })
}

export function deleteAgency(id) {
  return request({
    url: `/index/agencies/delete/id/${id}`,
    method: 'delete'
  })
}

export function allAgency(listQuery) {
  return request({
    url: '/index/agencies/all',
    method: 'get',
    params: listQuery
  })
}