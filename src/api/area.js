import request from '@/utils/request'

export function indexArea(listQuery) {
  return request({
    url: '/index/areas/index',
    method: 'get',
    params: listQuery
  })
}
