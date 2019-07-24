<template> 
    <div class="container">
         <div>
            <h2>Welcome！</h2>
        </div>
        <input class="input-text" id="input" v-model="username" placeholder="请输入姓名" @on-enter="addUserName"/>
        <Button id="button" type="primary" @click="addUserName">欢迎进入</Button>

    </div>
</template>

<script> 
export default{
    data: function (){
       return{
           username:''
       } 
    },
    methods:{
        addUserName(){ 
            this.$router.push({name: 'Home', params: {username: this.username}});
            this.$store.commit('addUserName', this.username);   
        }
    }
}
</script>



