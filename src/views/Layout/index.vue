<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutSticky from './components/LayoutSticky.vue'

//触发获取导航栏列表的action
import { useCategoryStore } from '@/stores/categoryStore.js'
import { onMounted } from "vue";

const categoryStore = useCategoryStore()
onMounted(()=>{
  // 父组件挂载完毕，发送请求获取数据
  categoryStore.getCategory()
})
</script>
<template>
  <LayoutNav />
  <LayoutHeader />
  <LayoutSticky />

  <!-- 二级路由 -->
  <RouterView />
  <LayoutFooter />
</template>

<style lang="scss" scoped>
</style>