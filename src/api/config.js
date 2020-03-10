import request from '@/utils/request'

export function indexConfig(listQuery) {
  return request({
    url: '/index/config/index',
    method: 'get',
    params: listQuery
  })
}

export function saveConfig(data) {
  return request({
    url: '/index/config/save',
    method: 'post',
    data
  })
}