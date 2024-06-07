import httpInstance from '@/utils/http.js'

// 获取猜你喜欢列表
export const getLikeListAPI = ({ limit = 4 }) => {
  return httpInstance({
    url:'/goods/relevant',
    params: {
      limit
    }
  })
}