<template>
  <div class="home">
    <h1>Todos</h1>
  </div>
</template>

<script>
import router from '../router/index.js'

export default {
  name: "home",

  components: {

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