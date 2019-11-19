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

### CRUD logic in Front-end

```vue
// Create
createTodo(title) {
  this.$session.start()
  const token = this.$session.get('jwt')
  const decodedToken = jwtDecode(token)
  const userId = decodedToken.user_id

  const requestHeader = {
    headers: {
      Authorization: 'JWT ' + token
    }
  }

  const requestForm = new FormData()

  requestForm.append('user', userId)
  requestForm.append('title', title)

  axios.post('http://localhost:8000/api/v1/todos/', requestForm, requestHeader)
    .then((r) => {
      this.todos.push(r.data)
    })
    .catch((e) => {console.log(e)})
}

// Read
getTodos() {
  this.$session.start()
  const token = this.$session.get('jwt')
  const decodedToken = jwtDecode(token)
  const userId = decodedToken.user_id

  const requestHeader = {
    headers: {
      Authorization: 'JWT ' + token
    }
  }

  axios.get(`http://localhost:8000/api/v1/users/${userId}/`, requestHeader)
    .then((r) => {
      this.todos = r.data.todo_set
    })
    .catch((e) => {console.log(e)})
}
```

> Update and Delete logic is similar with Create
>
> so, make them yourselves ^^7