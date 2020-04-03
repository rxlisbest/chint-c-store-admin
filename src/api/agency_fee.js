import request from '@/utils/request'

export function saveAgencyFee(data) {
  return request({
    url: '/index/agency_fee/save',
    method: 'post',
    data
  })
}