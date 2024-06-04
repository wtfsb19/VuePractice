import {defineStore} from "pinia";
import {ref} from "vue";
import {loginAPI} from "@/apis/user.js";
import {useCartStore} from "@/stores/cartStore.js";

export const useUserStore = defineStore("user", () => {
    const cartStore = useCartStore()
    // 定义store
    const userInfo = ref({})
    // 定义action
    const getUserInfo = async (account, password) => {
        const res = await loginAPI(account, password)
        userInfo.value = res.result
        await cartStore.updateCartList()
    }

    // 清除数据
    const clearUserInfo = () => {
        userInfo.value = {}
        cartStore.cartList.value = []  // 无效
        cartStore.clearCart()  // 有效
    }

    // 返回store和action
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {persist: true})