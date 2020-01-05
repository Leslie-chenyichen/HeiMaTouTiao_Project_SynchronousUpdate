import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
// 引入全局样式
import { Button, Toast, Icon, Uploader } from 'vant'

Vue.use(Button)
  .use(Toast)
  .use(Icon)
  .use(Uploader)
Vue.config.productionTip = false
// import '@/styles/reset.css'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
