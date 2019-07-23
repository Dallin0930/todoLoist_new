<template>
    
   
    <div class="container">
         <div>
                <h2>Welcome To Main!</h2>
                <p><em>Please input your username</em></p>
        </div>
        <input class="input-text" id="input" v-model="username" placeholder="name" @on-enter="addUserName"/>
        <Button id="button" type="primary" @click="addUserName">start use</Button>
        <!-- <router-link :to="{path: '/Home',query:{'username':this.username}}" @click="addUserName">Go to the Home</router-link> -->
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
<style>
@import "../assets/css/toDoList.css";
</style>


