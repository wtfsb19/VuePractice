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


// 获取订单列表
/*
params: {
  orderState:0,
  page:1,
  pageSize:2
}
*/
export const getUserOrderAPI = (params) => {
  return httpInstance({
    url:'/member/order',
    method:'GET',
    params
  })
}