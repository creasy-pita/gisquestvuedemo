// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
// import { Button } from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(Button)
new Vue({
  el: '#app',
  render: h => h(App)
})