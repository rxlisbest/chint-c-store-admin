import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/index/users/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/index/users/read',
    method: 'get',
    params: { token }
  })
}

export function getList(listQuery) {
  return request({
    url: '/index/users/index',
    method: 'get',
    params: listQuery
  })
}

export function updateStatus(data) {
  return request({
    url: '/index/users/updateStatus/id/' + data.id,
    method: 'post',
    data
  })
}

export function updateAuditStatus(data) {
  return request({
    url: '/index/users/updateAuditStatus/id/' + data.id,
    method: 'post',
    data
  })
}

export function updatePassword(data) {
  return request({
    url: '/index/users/updatePassword',
    method: 'put',
    data
  })
}

export function updateHeadimg(data) {
  return request({
    url: '/index/users/updateHeadimg',
    method: 'put',
    data
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function updateAgencyId(data) {
  return request({
    url: '/index/users/updateAgencyId/id/' + data.id,
    method: 'post',
    data
  })
}
