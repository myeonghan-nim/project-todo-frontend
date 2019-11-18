<template>
  <div class="login-div col-6 offset-3">

    <div class="form-group">
      <label for="id">ID</label>
      <input type="text" class="form-control" id="id">
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password">
    </div>

    <button class="btn btn-primary">Login</button>

  </div>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>

<style>

</style>