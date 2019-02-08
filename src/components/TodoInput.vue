<template>
  <Box horizontal padded>
    <Checkbox v-model="item.complete"></Checkbox>

    <Box stretchy>
      <TextInput v-model="item.todo" />
    </Box>

    <Button @click="add">Add</Button>
  </Box>
</template>

<script>
export default {
  name: 'TodoInput',
  data () {
    return {
      item: { todo: '', complete: false }
    }
  },
  methods: {
    add () {
      this.$emit('add', this.item)
      this.item = { todo: '', complete: false }
    }
  }
}
</script>

