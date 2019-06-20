import request from '@/utils/request'

export function statisticDay(query) {
  return request({
    url: '/index/login_logs/statisticDay',
    method: 'get',
    params: query
  })
}

export function last(query) {
  return request({
    url: '/index/login_logs/last',
    method: 'get',
    params: query
  })
}
