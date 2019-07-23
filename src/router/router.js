import ToDoList from '../components/ToDoList.vue'

const routers = [{path:'/ToDoList',component:ToDoList}]

const router  = new VueRouter({
    routers
})
const app = new Vue({
    router
}).$mouter('#app')