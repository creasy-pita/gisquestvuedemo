// 导入组件，组件必须声明 name属性
import shoppingcart from './ShoppingCart.vue'
import 'element-ui/lib/theme-chalk/index.css';
// import Vue from 'vue'
// import { Button } from 'element-ui';
// Vue.use(Button)
// 为组件提供 install 安装方法，供按需引入
shoppingcart.install = function (Vue) {
  Vue.component(shoppingcart.name,shoppingcart)
}

// 默认导出组件
export default shoppingcart
