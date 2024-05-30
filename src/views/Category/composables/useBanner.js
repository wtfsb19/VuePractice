// 封装轮播图业务相关代码
import {ref, onMounted} from "vue";
import { getBannerAPI } from '@/apis/home'

export function useBanner() {
// Banner处理
    const bannerList = ref([])

    const getBanner = async () => {
        const res = await getBannerAPI(2)
        bannerList.value = res.result
    }

    onMounted(() => getBanner())
    return {
        bannerList
    }
}