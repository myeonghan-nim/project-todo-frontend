<template>
  <div>

    <h1>Todos</h1>

    <div class="card m-1" v-for="todo in todos" :key="todo.id">
      <div class="card-body d-flex justify-content-between m-1">
        <span>{{todo.title}}</span>
        <span>🗑️</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TodoList',

  props: {
    todos: Array
  }
}
</script>

<style>

</style>