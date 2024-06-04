import {defineStore} from "pinia";
import {ref, computed} from "vue";

export const useCartStore = defineStore('cart', () => {
    // 定义state
    const cartList = ref([])

    // 定义计算属性
    // 1. 计算总数量
    const allTotal = computed(() => cartList.value.reduce((p, c) => p + c.count, 0))
    // 2. 计算总价格
    const allPrice = computed(() => cartList.value.reduce((p, c) => p + c.price * c.count, 0))
    // 3. 是否全选
    const isCheckAll = computed({
        // 全选按钮的状态
        get() {
            return cartList.value.every((item) => item.select)
        },
        // 修改全选按钮的状态
        set(status) {
            cartList.value.forEach((item) => item.select = status)
        },
    })
    // 4. 计算选中数量
    const selectTotal = computed(() => cartList.value.filter( (item) => item.select).reduce( (p, c) => p + c.count, 0))
    // 5. 计算选中价格
    const selectPrice = computed( () => cartList.value.filter( (item) => item.select).reduce( (p, c) => p + c.price * c.count, 0))


    // 定义actions
    // 1. 购物车添加商品
    const addCart = (goods) => {
        console.log('添加', goods)
        //思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
            // 已添加过 - count + 1
            item.count++
        } else {
            // 没有添加过 - 直接push
            cartList.value.push(goods)
        }
    }
    // 2. 购物车删除商品
    const delCart = (skuId) => {
        // 1. 通过filter筛选 | 2. 通过indexOf找到索引 + 通过splice删除
        cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
    }

    // 返回state和action
    return {
        cartList,
        allTotal,
        allPrice,
        isCheckAll,
        selectTotal,
        selectPrice,
        addCart,
        delCart
    }

}, {
    persist: true
})