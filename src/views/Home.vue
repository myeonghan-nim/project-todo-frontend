<template>
  <div class="home">
    <TodoInput @createTodo="createTodo"/>
    <TodoList :todos="todos"/>
  </div>
</template>

<script>
import router from '../router/index.js'

import TodoList from '../components/TodoList.vue'
import TodoInput from '../components/TodoInput.vue'

import jwtDecode from 'jwt-decode'
import axios from 'axios'

export default {
  name: "home",

  components: {
    TodoList,
    TodoInput
  },

  data() {
    return {
      todos: []
    }
  },

  methods: {
    checkLoggedIn() {
      this.$session.start()

      if (!this.$session.has('jwt')) {
        // redirect to login page
        router.push('/login')
      }
    },

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
    },

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
  },

  mounted: function() {
    this.checkLoggedIn()
    this.getTodos()
  }
}
</script>

<style>

</style>