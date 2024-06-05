// 封装与订单相关的API
import httpInstance from "@/utils/http.js";


// 生成订单
export const generateOrderAPI = () => {
    return httpInstance({
        url: '/member/order/pre',
    })
}


