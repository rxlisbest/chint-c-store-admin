import request from '@/utils/request'
import domain from '@/api/domain'

export function indexArea(listQuery) {
  return request({
    url: domain + '/index/areas/index',
    method: 'get',
    params: listQuery
  })
}
