import request from '@/utils/request'

export function saveUserAuditLog(data) {
  return request({
    url: '/index/user_audit_logs/save',
    method: 'post',
    data
  })
}
