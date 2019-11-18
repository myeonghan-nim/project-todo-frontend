<template>
  <div class="login">

    <h1>Here is Login</h1>

    <LoginForm/>

  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'

export default {
  name: 'Login',
  
  components: {
    LoginForm
  }
}
</script>

<style>

</style>