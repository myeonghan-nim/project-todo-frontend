<template>
  <div class="home">
    <TodoList/>
  </div>
</template>

<script>
import router from '../router/index.js'
import TodoList from '../components/TodoList.vue'

export default {
  name: "home",

  components: {
    TodoList
  },

  methods: {
    checkLoggedIn() {
      this.$session.start()

      if (!this.$session.has('jwt')) {
        // redirect to login page
        router.push('/login')
      }
    }
  },

  mounted: function() {
    this.checkLoggedIn()
  }
}
</script>

<style>

</style>