import httpInstance from "@/utils/http.js";


// 获取banner图片列表
export function getBannerAPI(type = 1) {

    return httpInstance({
        url: 'home/banner',
        params: {
            distributionSite: type
        }
    })
}


// 获取新品数据
export function getNewAPI() {
    return httpInstance({
        url: '/home/new'
    })
}


// 获取人气推荐商品
export function getHotAPI() {
    return httpInstance({
        url:'home/hot'
    })
}


// 获取产品列表
export function getGoodsAPI() {
    return httpInstance({
        url: '/home/goods'
    })
}