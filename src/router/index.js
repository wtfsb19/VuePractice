import {createRouter, createWebHistory} from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import Login from '@/views/Login/index.vue'
import CartList from "@/views/Cart/CartList.vue";
import Checkout from "@/views/Checkout/index.vue";
import Pay from "@/views/Pay/index.vue";
import PayBack from "@/views/Pay/components/PayBack.vue";
import Member from "@/views/Member/index.vue";
import UserInfo from "@/views/Member/components/UserInfo.vue";
import UserOrder from "@/views/Member/components/UserOrder.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'layout',
            component: Layout,
            children: [
                // 一切需要导航条的页面都是该组件的子组件
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
                },
                {
                    path: 'detail/:id',
                    name: 'detail',
                    component: Detail
                },
                {
                    path: 'cart/list',
                    name: 'cartList',
                    component: CartList,
                },
                {
                    path: 'order/checkout',
                    name: 'checkout',
                    component: Checkout
                },
                {
                    path: 'pay',
                    name: 'pay',
                    component: Pay
                },
                {
                    path: 'paycallback',
                    name: 'paycallback',
                    component: PayBack
                },
                {
                    path: 'member',
                    name: 'member',
                    component: Member,
                    children: [
                        {
                            path: '',
                            name: 'userInfo',
                            component: UserInfo
                        },
                        {
                            path: 'order',
                            name: 'userOrder',
                            component: UserOrder
                        }
                    ]

                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },

    ],
    // 滚动行为，回到顶部
    scrollBehavior() {
        return {top: 0}
    }
})

export default router
