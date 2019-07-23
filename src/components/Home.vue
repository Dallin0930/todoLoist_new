<template>
    <div style="height: 100%;background: white;">
        <div style="float: left;">
        <input id="button" type = 'button' value='返回' @click="back"/>
        </div>
        <div style="margin-left: 1107px;">
        <!-- <h1> params.username：{{ this.$route.query.username}}</h1> -->
        <h1> {{ this.$store.state.username}}你好！</h1>
        </div>
       
        <div style="float: left;margin-top: 24px;">
        <ul class="ulClass">
            <li class="liClass"><a href="#">toDoList</a></li>
            <li class="liClass"><a href="#news" >我的<Me/></a></li>
            <!-- <li class="liClass"><router-link to="/Me">我的</router-link></li> -->
        </ul>
        </div>
         <div>
        <ToDoList/>
        </div>
    </div>
</template>
<script>
import ToDoList from './ToDoList.vue'
import Me from './Me.vue'
export default {
    components:{ToDoList,Me},
    methods:{
        back:function(){
           if (confirm("确认返回上一个界面？")){
            window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push('/')
           }
        }
    }
}
</script>
<style>
.ulClass {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
}
 
.liClass a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}
 
.liClass a:hover {
    background-color: #555;
    color: white;
}
</style>


