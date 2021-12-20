# Project: TO-DO frontend server

## user session manage

```vue
<template>
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
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data: function() {
    return {
      credential: {
        username: "",
        password: "",
      },
      loading: false,
    };
  },
  methods: {
    login() {
      axios
        .post("", this.credential)
        .then((r) => {
          console.log(r);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
```
