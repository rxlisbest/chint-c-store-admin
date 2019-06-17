import request from '@/utils/request'

export function saveFile(data) {
  return request({
    url: '/index/files/save',
    method: 'post',
    data
  })
}

export function getInfo(id) {
  return request({
    url: '/index/files/read/id/' + id,
    method: 'get'
  })
}
