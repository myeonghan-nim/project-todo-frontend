<template>
  <div>
    <div class="spinner-border text-primary" role="status" v-if="loading">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="login-div col-6 offset-3" v-else>
      <div class="error-list alert alert-danger" v-if="errors.length">
        <div class="my-1" v-for="(error, idx) in errors" :key="idx">
          {{ error }}
        </div>
      </div>
      <div class="form-group">
        <label for="id">ID</label>
        <input
          type="text"
          class="form-control"
          id="id"
          v-model="credential.username"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="credential.password"
        />
      </div>
      <button class="btn btn-primary" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router/index.js";

export default {
  name: "LoginForm",
  data: function () {
    return {
      credential: {
        username: "",
        password: "",
      },
      loading: false,
      errors: [],
    };
  },
  methods: {
    login() {
      if (this.checkForm()) {
        axios
          .post("http://localhost:8000/api-token-auth/", this.credential)
          .then((r) => {
            this.loading = true;
            this.$store.dispatch("login", r.data.access);
            router.push("/");
          })
          .catch((e) => {
            this.loading = true;
            if (e.response.status == 401) {
              this.errors.push('Uncorrect ID/PW.')
            } else {
              console.log(e.response)
            }
            this.loading = false;
          });
      }
    },
    checkForm() {
      this.errors = [];
      if (this.credential.password.length < 8) {
        this.errors.push("Password length must be more than 8 letters.");
      }
      if (!this.credential.username) {
        this.errors.push("Enter ID.");
      }
      if (this.errors.length === 0) {
        return true;
      }
    },
  },
};
</script>

<style>
</style>
