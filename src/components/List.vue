<template>
    <div>
        <ol>
            <li v-for="(item,index) in checkboxes" v-bind:key="index" v-bind:class="{checked:item.isChecked}">
                <input v-model="item.isChecked" type="checkbox"/>
                <span @dblclick="edit(item,index)">
                        <span v-if="!item.isEdited">{{item.content}}</span>
                        <input v-model="item.content" @blur="save(item,index)" v-else/>
                </span>
                <button @click="remove(item,index)">Remove</button>
            </li>
        </ol>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'List',
        data: function () {
            return {
            }
        },
        methods: {
            remove:function(item){
                this.$store.dispatch('deleteItem',item);
            },
            
            edit: function (item) {
                item.isEdited = true;
                // this.$store.commit('updateItem',{item:item});
                this.$store.dispatch('updateItem',item);
            },
           
            save: function (item) {
                item.isEdited = false; 
                this.$store.dispatch('updateItem',item);
                
            //     axios
            //     .put('http://localhost:3001/todos/'+item.id,{item:item})
            //     .then(response => {
            //         this.$store.commit('updateItem',[response.data])
            //         })
            //     .catch(function (error) { // 请求失败处理
            //         console.log(error)
            //     })
                // this.$store.commit('updateItem',{item:item});
            }
        },
        computed: {
            checkboxes: function () {
                if(this.$store.state.condition==='ALL'){
                    return this.$store.state.checkboxes;
                }else if (this.$store.state.condition==='ACTIVE'){
                    return this.$store.state.checkboxes.filter(item=>item.isChecked===false)
                } else {
                    return this.$store.state.checkboxes.filter(item=>item.isChecked===true)
                }
            }
        },
          mounted () {
            // axios
            //     .get('http://localhost:3001/todos')
            //     .then(response => {
            //         this.$store.commit('addList',response.data)
            //         })
            //     .catch(function (error) { // 请求失败处理
            //         console.log(error)
            //     })
            this.$store.dispatch('addList')
    }
    }
</script>
<style>
</style>