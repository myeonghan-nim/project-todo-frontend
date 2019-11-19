<template>
  <div>

    <div class="spinner-border text-primary" role="status" v-if="loading">
      <span class="sr-only">Loading...</span>
    </div>

    <div class="login-div col-6 offset-3" v-else>

      <div class="form-group">
        <label for="id">ID</label>
        <input type="text" class="form-control" id="id" v-model="credential.username">
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="credential.password">
      </div>

      <button class="btn btn-primary" @click="login">Login</button>

    </div>

  </div>
</template>

<script>
import axios from 'axios'
import router from '../router/index.js'

export default {
  name: 'LoginForm',

  data: function() {
    return {
      credential: {
        username: '',
        password: ''
      },
      loading: false
    }
  },

  methods: {
    login() {
      axios.post('http://localhost:8000/api-token-auth/', this.credential)
        .then((r) => {
          this.loading = true

          this.$session.start()
          this.$session.set('jwt', r.data.token)

          router.push('/')
        })
        .catch((e) => {
          this.loading = true

          console.log(e)
        })
    }
  }
}
</script>

<style>

</style>