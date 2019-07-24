import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const state = {
  checkboxes: [],
  condition: 'ALL',
  username:''
}

const actions = {
  addList: ({commit}) =>{
    axios
    .get('http://localhost:3001/todos')
    .then(response => {
        commit('addList',response.data)
        })
    .catch(function (error) { 
      console.log(error)
    })
  },


  add:({commit},item) =>{
    axios.post('http://localhost:3001/todos',item)
        .then(function (response) {
          commit('addList',[response.data])
        })
        .catch(function (error) {
        console.log(error);
        })
  },
  updateItem:({commit},item) =>{
    axios.put('http://localhost:3001/todos'+item.id,item)
        .then(function (response) {
          commit('updateItem',[response.data])
        }) 
        .catch(function (error) {
        console.log(error);
        })
  },

  deleteItem:({commit},item) =>{
    axios.delete('http://localhost:3001/todos/'+item.id)
        .then(function () {
          commit('deleteItem',item.index)  
        })
        .catch(function (error) {
        console.log(error);
        })
  }
}


const mutations = {
  add (state,item) {
  state.checkboxes.push(item);
},
addList (state,items) {
  state.checkboxes.push(...items);
},
updateItem (state,item) {
  const index= state.checkboxes.map(i=>i.id).indexOf(item.id);
  state.checkboxes[index]=item;
},
show (state, condition) {
  state.condition = condition;
},
addUserName(state,username){
  state.username = username;
},
deleteItem(state,index){
  state.checkboxes.splice(index, 1)
}
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})