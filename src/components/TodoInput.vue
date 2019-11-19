<template>
  <div class="todo-input my-2">
    <div class="input-group">

      <input type="text" class="form-control" v-model="title" @keydown.enter="createTodo">

      <span class="input-group-btn">
        <button class="btn btn-outline-secondary" @click="createTodo">➕</button>
      </span>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',

  data() {
    return {
      title: ''
    }
  },

  methods: {
    createTodo() {
      this.$emit('createTodo', this.title)
      this.title = ''
    }
  }
}
</script>

<style>

</style>