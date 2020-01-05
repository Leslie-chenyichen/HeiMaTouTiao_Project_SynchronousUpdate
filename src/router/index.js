import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Persona from '@/views/Persona.vue'
// 引入路由所映射的组件
Vue.use(VueRouter)

// 创建路由对象
let router = new VueRouter({
  // 配置路由
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Persona',
      path: '/persona',
      component: Persona
    }
  ]
})

// 暴露
export default router
