<template>
    <div style="height: 100%;background: white;">
        <div style="float: left;">
        <input id="button" type = 'button' value='返回' @click="back"/>
        </div>
        <div style="margin-left: 1107px;">
        <!-- <h1> params.username：{{ this.$route.query.username}}</h1> -->
        <h1> {{ this.$store.state.username}}</h1>
        </div>
       
        <div style="float: left;margin-top: 24px;">
        <ul class="ulClass">
            <li class="liClass"><a href="#news" >关于我<Me/></a></li>
          
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
        // back:function(){
        //    if (confirm("确认返回界面？")){
        //     window.history.length > 1
        //     ? this.$router.go(-1)
        //     : this.$router.push('/')
        //    }
        // }
        back (to, from, next) {
        const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
        if (answer) {
            next(function(){
                if(confirm("go back?"))
                {
                    window.history.length> 1
                    ? this.$router.go(-1)
                    :this.$router.push('/')  
                }
            })
        } else {
            next(false)
        }
}
    }
}
</script>



