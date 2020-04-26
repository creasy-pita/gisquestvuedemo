# myshoppingcart

### 2020年3月30日

1 完善myshoppingcart ,支持传入属性， 传入自定义函数，包括 删除， 增加等（这样可以与后台交互）

#### 问题

​	myshoppingcart中的props 的 list 数组对象如何传给模板中的v-for
    1 props 中的属性不能像data中的属性一样样用v-for 直接访问
    2 props 可以再data 中通过this.propsname 访问
    this 应该使 Vue 实例 vm,vm.prototype._props.propsname 会被代理到 vm.propsname上，所以可以完成上述的访问
    3 props复制的写法  :propsname='data.attribute'
    传入自定义函数prop
    1 props定义  additem type function
    2 methods 的函数内部调用， 同时可以传入参数
参考： https://stackoverflow.com/questions/42722433/accessing-props-in-vue-component-data-function
https://medium.com/@jariwalamahek/how-to-pass-function-as-a-prop-in-vue-b7b0040260ba
### 2020年1月20日

#### 通过添加的插件 EndWebpackplugin 的 注册方法到 shouldemit钩子函数  来访问 htmlwebpackplugin  修改template 属性（及模板路径） 后并没有改变 lib  方式build的 模板路径即还是原来的 \node_modules\@vue\cli-service\lib\commands\build\demo-lib-js.html

#### vue.config.js 中在加入一个新的htmlwepackplugin， 用新的模板输出新的demo.html 达到预期的效果
            libName: 'gisqshoppingcart',//需要从shell 脚本中获取 name 的参数
            assetsFileName: 'gisqshoppingcart',  //此名称需要是filename ,还需要再琢磨 

### 2020年1月7日

#### vue 实现 shoppingcart 组件的练习
#### 用于熟悉vue2,vue3 -cli 创建project 的过程和 默认产生的工程文件结构
#### 多环境用途的配置方式，本例中增加 预览环境的用途
	'config 中增加 preview.index.js;  增加预览模式的构建 在package.json中script中增加内容，目的是增加打包的环境变量为preview build:preview": "cross-env webpack_config=preview node  
#### library 并publish 到 private repository 的 配置修改

