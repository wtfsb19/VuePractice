import httpInstance from "@/utils/http.js";

// 获取最新购物车数据
export const findNewCartAPI = () => {
    return httpInstance({
        url: '/member/cart',
    })
}

// 购物车商品添加
export const insertCartAPI = (skuId, count) => {
    return httpInstance({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

// 购物车商品删除
export const deleteCartAPI = (skuIdList) => {
    return httpInstance({
        url: '/member/cart',
        method: "DELETE",
        data: {
            ids: skuIdList
        }
    })
}

// 合并购物车
// [
//     {
//         "skuId": "3672100",
//         "selected": "true",
//         "count": 10
//     },
// ]
export const mergeCartAPI = (goodsList) => {
    return httpInstance({
        url: '/member/cart/merge',
        method: 'POST',
        data: goodsList
    })
}