import request from '@/utils/request'

export function indexArea(listQuery) {
  return request({
    url: '/index/areas/index',
    method: 'get',
    params: listQuery
  })
}

export function provinceArea(listQuery) {
  return request({
    url: '/index/areas/province',
    method: 'get',
    params: listQuery
  })
}

export function updateAgencyId(data) {
  return request({
    url: '/index/areas/updateAgencyId/id/' + data.id,
    method: 'post',
    data
  })
}
