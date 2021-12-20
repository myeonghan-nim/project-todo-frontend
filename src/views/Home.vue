<template>
  <div class="home">
    <TodoInput @createTodo="createTodo"/>
    <TodoList :todos="todos"/>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router/index.js'
import {mapGetters} from 'vuex'

import TodoList from '../components/TodoList.vue'
import TodoInput from '../components/TodoInput.vue'

export default {
  name: "Home",
  components: {
    TodoList,
    TodoInput
  },
  data() {
    return {
      todos: []
    }
  },
  computed: {
    ...mapGetters([
      'isAuthenticated',
      'requestHeader',
      'userId',
    ])
  },
  methods: {
    checkLoggedIn() {
      if (!this.isAuthenticated) {
        router.push('/login')
      }
    },
    getTodos() {
      axios.get(`http://localhost:8000/api/v1/user/${this.userId}/`, this.requestHeader)
        .then((r) => {
          this.todos = r.data.todo_set
        })
        .catch((e) => {console.log(e)})
    },
    createTodo(title) {
      const requestForm = new FormData()

      requestForm.append('user', this.userId)
      requestForm.append('title', title)

      axios.post('http://localhost:8000/api/v1/todo/', requestForm, this.requestHeader)
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
