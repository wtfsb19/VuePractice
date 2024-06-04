import {ref} from 'vue'
import {defineStore} from 'pinia'
import {getCategoryAPI} from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
    // 导航列表的数据管理
    // state 导航列表数据
    const categoryList = ref([])

    // action 获取导航数据
    const getCategory = async () => {
        // 调用目录接口API
        const res = await getCategoryAPI()
        categoryList.value = res.result
    }

    // 返回数据供外部使用
    return {
        categoryList,
        getCategory
    }
})