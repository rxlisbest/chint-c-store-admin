import request from '@/utils/request'

export function saveRegionContrastFee(data) {
  return request({
    url: '/index/region_contrast_fee/save',
    method: 'post',
    data
  })
}