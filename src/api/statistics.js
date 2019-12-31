import request from '@/utils/request'

export function marketDevelopment(data) {
  return request({
    url: '/index/statistics/marketDevelopment',
    method: 'post',
    data
  })
}

export function newStore(data) {
  return request({
    url: '/index/statistics/newStore',
    method: 'post',
    data
  })
}

export function Sale(data) {
  return request({
    url: '/index/statistics/Sale',
    method: 'post',
    data
  })
}

export function Competitor(data) {
  return request({
    url: '/index/statistics/Competitor',
    method: 'post',
    data
  })
}
