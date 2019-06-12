import request from '@/utils/request'
import domain from '@/api/domain'

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
