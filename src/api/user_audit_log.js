import request from '@/utils/request'
import domain from '@/api/domain'

export function saveUserAuditLog(data) {
  return request({
    url: domain + '/index/user_audit_logs/save',
    method: 'post',
    data
  })
}
