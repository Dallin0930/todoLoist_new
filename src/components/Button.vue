<template>
    <div>
         <ul id="filters">
              <li>
                  <a href="#" data-filter="all" @click="filterList('ALL')">ALL</a>
              </li>
              <li>
                  <a href="#" data-filter="active" @click="filterList('ACTIVE')">Active</a>
              </li>
              <li>
                  <a href="#" data-filter="complete" @click="filterList('COMPLETE')">Complete</a>
              </li>
          </ul>
      
    </div>
</template>
<script>
import axios from 'axios'
    export default {
        name: 'Button',
        data: function () {
            return {}
        },
        methods: {
            filterList(condition) {
                this.$store.commit('show', condition);
            }
        }
    }
</script>

<style>
</style>