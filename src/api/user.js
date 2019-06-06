import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'http://localhost/chint/c-store/public/index/users/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: 'http://localhost/chint/c-store/public/index/users/read',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
