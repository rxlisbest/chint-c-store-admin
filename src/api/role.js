import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/index/modules/index',
    method: 'get'
  })
}

export function indexRoles() {
  return request({
    url: '/index/roles/index',
    method: 'get'
  })
}

export function getRoleModuleRelations(role_id) {
  return request({
    url: '/index/role_module_relations/index',
    method: 'get',
    params: {
      role_id: role_id
    }
  })
}

export function addRole(data) {
  return request({
    url: '/index/roles/save',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: `/index/roles/update/id/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/role/${id}`,
    method: 'delete'
  })
}
