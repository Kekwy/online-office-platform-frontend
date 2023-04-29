import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Test1 from "@/views/Test1.vue";
import Test2 from "@/views/Test2.vue";

// 安装路由
Vue.use(VueRouter)

// 定义路由
const routes = [
    {
        path: '/',
        name: 'Login',
        // 路由的组件
        component: Login,
        hidden: true
    },
    {
        path: '/home',
        name: '导航一',
        // 路由的组件
        component: Home,
        // 设置子路由
        children: [
            {
                path: '/test1',
                name: '选项1',
                // 路由的组件
                component: Test1
            },
            {
                path: '/test2',
                name: '选项2',
                // 路由的组件
                component: Test2
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
