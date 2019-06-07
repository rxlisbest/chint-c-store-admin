import request from '@/utils/request'
import domain from '@/api/domain'

export function login(data) {
  return request({
    url: domain + '/index/users/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: domain + '/index/users/read',
    method: 'get',
    params: { token }
  })
}

export function getList(listQuery) {
  return request({
    url: domain + '/index/users/index',
    method: 'get',
    params: listQuery
  })
}

export function updateStatus(data) {
  return request({
    url: domain + '/index/users/updateStatus/id/' + data.id,
    method: 'post',
    data
  })
}

export function updateAuditStatus(data) {
  return request({
    url: domain + '/index/users/updateAuditStatus/id/' + data.id,
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
