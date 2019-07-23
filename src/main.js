import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import ToDoList from './components/ToDoList.vue'
import Main from './components/Main.vue'
import Home from './components/Home.vue'
import Me from './components/Me.vue'

const routes = [
  {path:'/',component:Main},
  // {path:'/ToDoList',component:ToDoList}
  {name:'Home',path:'/Home',component:Home},
  {name:'Me',path:'/Me',component:Me}
]

const router  = new VueRouter({
  routes: routes
})

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

