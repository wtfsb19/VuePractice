import axios from 'axios'
import {ElMessage} from 'element-plus'
import {useUserStore} from "@/stores/user.js";
import router from "@/router";
import 'element-plus/theme-chalk/el-message.css'

// 创建axios实例
const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    // 获取token
    // 1. 从pinia获取token数据
    const userStore = useUserStore()
    // 2. 按照后端的要求拼接token数据
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    // 统一显示错误
    ElMessage.error(e.response.data.message)
    // 拦截401，处理token失效
    if (e.response.status === 401) {
        const userStore = useUserStore()
        // 1. 清除pinia的数据
        userStore.clearUserInfo()
        // 2. 跳转登录页面
        router.push('/login')
    }

    return Promise.reject(e)
})


export default httpInstance