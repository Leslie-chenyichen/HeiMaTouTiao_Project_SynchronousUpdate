import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Persona from '@/views/Persona.vue'
import EditPersonal from '@/views/EditPersonal.vue'
import Index from '@/views/Index.vue'
import Register from '@/views/Register.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import MyFollow from '@/views/MyFollow.vue'
import MyStars from '@/views/MyStars.vue'
// 引入路由所映射的组件
Vue.use(VueRouter)

// 创建路由对象
let router = new VueRouter({
  // 配置路由
  routes: [
    {
      name: 'Index',
      path: '/',
      component: Index
    },
    {
      name: 'Register',
      path: '/register',
      component: Register
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'MyFollow',
      path: '/myFollow',
      component: MyFollow
    },
    {
      name: 'MyStars',
      path: '/myStars',
      component: MyStars
    },
    {
      name: 'ArticleDetail',
      path: '/articleDetail/:id',
      component: ArticleDetail
    },
    {
      name: 'Persona',
      path: '/persona/:id',
      component: Persona
    },
    {
      name: 'EditPersonal',
      path: '/editPersonal/:id',
      component: EditPersonal
    }
  ]
})
// 添加导航守卫：前置守卫:在跳转之前进行调用
// 所有路由跳转以前都会经过这个导航守卫
// to：目标路由
// from:源路由
// net:下一步的操作：就是用户当前需要进行的操作
router.beforeEach((to, from, next) => {
  // console.log(to)
  // next()
  // 如果用户登录过，则进行路由的跳转，否则重定向到登录面
  // 伪代码
  if (to.path.indexOf('/parsonal') === 0) {
    let token = localStorage.getItem('toutio_41_tonke')
    if (token) {
      next({})
    } else {
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})
// 暴露
export default router
