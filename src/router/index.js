import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由所映射的组件
import Login from '@/views/Login.vue'
Vue.use(VueRouter)

// 创建路由对象
let router = new VueRouter({
  // 配置路由
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login
    }
  ]
})

// 暴露
export default router
