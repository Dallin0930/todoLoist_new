<template>
    <div id="app">
        <div class="container" style=" margin-left: 500px;">
           
            <Header/>
            <List/>
            <Button/>
            <!-- <test/> -->

        </div>
    </div>
</template>
<script>
    import Header from "./Header";
    import List from "./List";
    import Button from './Button'
// import { constants } from 'buffer';
    export default {
        name: 'ToDoList',
        components: {Header,List,Button},
    }

</script>
<style>
 @import "../assets/css/toDoList.css";
</style>
