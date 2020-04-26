<template>
    <div>
        <div>{{msg}}</div>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>商品名称</th>
                <th>商品单价</th>
                <th>商品数量</th>
                <th>操作</th>
                <th>备注</th>
            </tr>
        </thead> 
        <tbody>
            <tr v-for="(item,index) in list" :key="index">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.count}}</td>
                <td>
                    <!-- <button type="primary"  @click="handleReduce(index)" :disabled="item.count===0">-</button>
                    <button type="primary"  @click="handleAdd(index)" >+</button>
                    <button type="primary"  @click="handleRemove(index)">移除</button>                     -->
                    <el-button type="primary"  @click="handleReduce(index)" :disabled="item.count===0">-</el-button>
                    <el-button type="primary"  @click="handleAdd(index)" >+</el-button>
                    <el-button type="primary"  @click="handleRemove(index)">移除</el-button>
                </td>
                <!-- <td><img src="../assets/favicon.ico" /></td> -->
            </tr>
        </tbody>               
    </table> 
</div>    
</template>
<script >
import { Button as ElButton} from 'element-ui';
export default({
    name:'shoppingchart',
    components:{ElButton},
    props:{
        msg:{type:String,default:function(){return null}},
        datalist:{type:Array,default:function(){return [
                {
                    id:1,
                    name:'iphone',
                    price: 61881,
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
            ] }},
        additem:{type:Function,default:function(){return function(){window.console.log('a empty prop of function type')}}}
    },
    data:function(){
        return {list:this.datalist}
    },
    computed:{
        totalPrice: function(){
            // var total=0;
            return '10';
        }
    },
    methods:{
        handleReduce:function(index){

            this.datalist[index].count--;
        },
        handleAdd:function(index){
            this.additem(index);            
            this.datalist[index].count++;
        },        
        handleRemove:function(index){
            this.datalist.splice(index,1)
        }   
    }        
})
</script>
<style scoped>
    .el-button{
        font-weight: 500;
        padding: 3px 4px;
        font-size: 12px;
        border-radius: 1px;
    }
    table{
    border : lpx solid #e9e9e9 ;
    border-collapse: collapse ;
    border-spacing : 0;
    empty-cells : show ;
    }
    th , td{
    padding : Spx 16px ;
    border : lpx solid #e9e9e9 ;
    text-align : left;
    }
    th{
    background: #f7f7f7 ;
    color : #5c6b77 ;
    font-weight: 600 ;
    white-space:nowrap;
    }
</style>