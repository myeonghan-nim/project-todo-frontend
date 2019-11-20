<template>
  <div>

    <h1>Todos</h1>

    <div class="card m-1" v-for="todo in todos" :key="todo.id">
      <div class="card-body d-flex justify-content-between m-1">
        <span :class="{completed: todo.completed}" @click="updateTodo(todo)">{{todo.title}}</span>
        <span @click="deleteTodo(todo)">🗑️</span>
      </div>
    </div>

  </div>
</template>

<script>
// import jwtDecode from 'jwt-decode'
import axios from 'axios'

export default {
  name: 'TodoList',

  props: {
    todos: Array
  },

  computed: {
    requestHeader() {
      return this.$store.getters.requestHeader
    },
    userId() {
      return this.$store.getters.userId
    }
  },

  methods: {
    deleteTodo(todo) {
      /*
      this.$session.start()
      const token = this.$session.get('jwt')
      const requestHeader = {
        headers: {
          Authorization: 'JWT ' + token
        }
      }
      */

      axios.delete(`http://localhost:8000/api/v1/todos/${todo.id}/`, this.requestHeader)
        .then(() => {
          const targetTodo = this.todos.find(function(el) {
            return el === todo
          })

          const idx = this.todos.indexOf(targetTodo)

          if (idx > -1) {
            this.todos.splice(idx, 1)
          }
        })
        .catch((e) => {console.log(e)})
    },

    updateTodo(todo) {
      /*
      this.$session.start()
      const token = this.$session.get('jwt')
      const decodedToken = jwtDecode(token)
      const userId = decodedToken.user_id

      const requestHeader = {
        headers: {
          Authorization: 'JWT ' + token
        }
      }
      */

      const requestForm = new FormData()

      requestForm.append('user', this.userId)
      requestForm.append('title', todo.title)
      requestForm.append('completed', !todo.completed)

      axios.put(`http://localhost:8000/api/v1/todos/${todo.id}/`, requestForm, this.requestHeader)
        .then(() => {
          todo.completed = !todo.completed
        })
        .catch((e) => {console.log(e)})
      }
  }
}
</script>

<style>
.completed {
  text-decoration: line-through;
  color: silver;
}
</style>