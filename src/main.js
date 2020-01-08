/*  唉，请注意看好了：当前是main.js---所有入口的文件 */
import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
// 引入全局样式
import { Button, Toast, Icon, Uploader, Dialog, Field, Picker, Tab, Tabs } from 'vant'
Vue.use(Button)
  .use(Toast)
  .use(Icon)
  .use(Uploader)
  .use(Dialog)
  .use(Field)
  .use(Picker)
  .use(Tab)
  .use(Tabs)
/* 下面的这名话的意思是：阻止启动生产消息，常用作指令。 */
Vue.config.productionTip = false
// import '@/styles/reset.css'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
