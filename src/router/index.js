import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/category/:id',  // params参数
          name: 'category',
          component: Category
        },
        {
          path: 'sub/category/:id',  // params参数
          name: 'subCategory',
          component: SubCategory
        }
      ]
    },
  ],
  // 滚动行为，回到顶部
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
