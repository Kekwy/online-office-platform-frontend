import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 是否在浏览器控制台提示开发环境
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app') // 手动挂载
