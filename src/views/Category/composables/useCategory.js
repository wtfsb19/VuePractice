// 封装分类数据业务相关代码
import {onMounted, ref} from 'vue'
import {getCategoryAPI} from '@/apis/category'
import {useRoute} from 'vue-router'
import {onBeforeRouteUpdate} from 'vue-router'

export function useCategory() {
    // 分类数据处理
    const categoryData = ref({})
    // 创建route对象
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }
    // 面包屑组件挂载后发送请求(刷新页面时，路由未变化，需要onMounted来发请求)
    onMounted(() => getCategory())
    // 当路由变化时，重新获取数据(由于路由缓存，组件不会重新加载并触发onMounted)
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
        console.log(categoryData.value)
    })
    return {
        categoryData
    }
}