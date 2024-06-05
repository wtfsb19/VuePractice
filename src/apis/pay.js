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