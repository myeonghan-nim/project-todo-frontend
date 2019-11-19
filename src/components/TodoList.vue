<template>
  <div>

    <h1>Todos</h1>

    <div class="card m-1" v-for="todo in todos" :key="todo.id">
      <div class="card-body d-flex justify-content-between m-1">
        <span>{{todo.title}}</span>
        <span @click="deleteTodo(todo)">🗑️</span>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TodoList',

  props: {
    todos: Array
  },

  methods: {
    deleteTodo(todo) {
      this.$session.start()
      const token = this.$session.get('jwt')
      const requestHeader = {
        headers: {
          Authorization: 'JWT ' + token
        }
      }

      axios.delete(`http://localhost:8000/api/v1/todos/${todo.id}/`, requestHeader)
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
    }
  }
}
</script>

<style>

</style>