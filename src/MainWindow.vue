<template>
  <Window title="Z-TODO" width="500" height="600" margined @close="exit">
    <Box padded>

      <Box stretchy>
        <Box v-for="item in todolist" :key="item.id">
          <TodoItem :item="item" @delete="deleteTodo" @update="updateTodo"/>
        </Box>
      </Box>

      <Box>
        <TodoInput @add="addTodo"/>
      </Box>
    </Box>
  </Window>
</template>

<script>
import TodoItem from './components/TodoItem'
import TodoInput from './components/TodoInput'

export default {
  components: { TodoItem, TodoInput },
  data () {
    return {
      todolist: this.$db.getAll(),
      newTodo: { todo: '', complete: false }
    }
  },
  methods: {
    /**
     * Adds a new TODO to the todolist
     */
    addTodo (todo) {
      this.$db
        .add(todo)
        .then(this.refreshTodo)
        .catch(this.handleError)
    },

    /**
     * Deletes a todo from the todolist
     * @param todo - a todo that exists (not for long) in the todolist
     */
    deleteTodo (todo) {
      this.$db
        .override(this.todolist.filter(item => item.id !== todo.id))
        .then(this.refreshTodo)
        .catch(this.handleError)
    },

    /**
     *
     */
    updateTodo (todo) {
      this.$db
        .update(todo)
        .then(this.refreshTodo)
        .catch(this.handleError)
    },

    /**
     * Reads the todolist again from the db
     */
    refreshTodo () {
      this.todolist = this.$db.getAll()
    },


    handleError (message) {
      this.$dialogs.msgBoxError('Unexpected Error!', message);
    },
    exit () {
      this.$exit();
    }
  }
}
</script>
