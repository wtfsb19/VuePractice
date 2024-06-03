import {defineStore} from "pinia";
import {ref} from "vue";
import {loginAPI} from "@/apis/user.js";

export const useUserStore = defineStore("user", () => {
    // 定义store
    const userInfo = ref({})
    // 定义action
    const getUserInfo = async (account, password) => {
        const res = await loginAPI(account, password)
        userInfo.value = res.result
    }

    // 清除数据
    const clearUserInfo = () => {
        userInfo.value = {}
    }

    // 返回store和action
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {persist: true})