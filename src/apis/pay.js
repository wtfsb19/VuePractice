import httpInstance from "@/utils/http.js";

// 提交订单
// data = {
//   "deliveryTimeType": 1,
//   "payType": 1,
//   "payChannel": 1,
//   "buyerMessage": "",
//   "goods": [
//     {
//       "skuId": "3664094",
//       "count": 2
//     },
//   ],
//   "addressId": "1527553797373562882"
// }
export const submitOrderAPI = (data) => {
    return httpInstance({
        url: '/member/order',
        method: 'POST',
        data
    })
}

// 获取订单详情与支付结果
import request from '@/utils/http'

export const getOrderAPI = (id) => {
  return request({
    url: `/member/order/${id}`
  })
}