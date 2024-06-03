import httpInstance from "@/utils/http.js";

// 用户登录(账号密码)
export const loginAPI = (account, password) => {
    return httpInstance({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}
