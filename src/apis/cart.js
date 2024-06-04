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