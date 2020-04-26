<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <shoppingcart :msg="haha" :datalist="cartlist" :additem="additem" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import shoppingcart from './components/index'
export default {
  name: 'app',
  methods:{
    additem: function(index){
       window.console.log('invoke webapi to add item index:'+index);
    }
  },
  data:function(){
    return {haha:"hello haha",cartlist:[
            {
                id:1,
                name:'iphone',
                price: 6188,
                count:1
            },
            {
                id:2,
                name:'pro ',
                price: 3188,
                count:1
            },
            {
                id:3,
                name:'iwatch',
                price: 4188,
                count:1
            }                        
        ]}
  },
  components: {
    'shoppingcart':shoppingcart
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
