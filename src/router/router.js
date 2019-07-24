import ToDoList from '../components/ToDoList.vue'
import { isMainThread } from 'worker_threads';

const routers = [{path:'/ToDoList',component:ToDoList}]

// const routers = [
//     {
//         path:'/Main',componemt:Main,
//         children: [
//             path: 'file'
//         ]
        
//     }
// ]

const router  = new VueRouter({
    routers
})
const app = new Vue({
    router
}).$mouter('#app')