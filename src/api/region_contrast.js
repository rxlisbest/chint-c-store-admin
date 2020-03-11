import request from '@/utils/request'

export function saveRegionContrast(data) {
  return request({
    url: '/index/region_contrast/save',
    method: 'post',
    data
  })
}