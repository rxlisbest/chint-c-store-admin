import request from '@/utils/request'
import domain from '@/api/domain'

export function saveFile(data) {
  return request({
    url: domain + '/index/files/save',
    method: 'post',
    data
  })
}

export function getInfo(id) {
  return request({
    url: domain + '/index/files/read/id/' + id,
    method: 'get'
  })
}
