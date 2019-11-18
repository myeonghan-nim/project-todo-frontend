# todo-front

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Login logic with Vue

```vue
<template>

  <div class="form-group">
    <label for="id">ID</label>
    <input type="text" class="form-control" id="id" v-model="credential.username">
  </div>

  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" v-model="credential.password">
  </div>

  <button class="btn btn-primary" @click="login">Login</button>

</template>

<script>
import axios from 'axios'

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
      axios.post('', this.credential)
        .then((r) => {
          console.log(r)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>
```