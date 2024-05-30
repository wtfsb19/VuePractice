import httpInstance from '@/utils/http.js'


// 封装分类相关的网络请求
export function getCategoryAPI(id) {
    return httpInstance({
        url: '/category',
        params: {id}
    })
}