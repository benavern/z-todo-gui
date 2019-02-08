<template>
  <Box horizontal padded>
    <Checkbox v-model="item.complete" @toggle="$emit('update', item)"></Checkbox>

    <Box stretchy>
      <TextInput v-model="item.todo" v-if="editMode"/>
      <Text v-else>{{ item.todo }}</Text>
    </Box>

    <Button @click="editMode = true" v-if="!editMode">&#128395;</Button>
    <Button @click="$emit('delete', item)" v-if="!editMode">&times;</Button>

    <Button @click="update" v-if="editMode">&#10003;</Button>
  </Box>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['item'],
  data () {
    return {
      editMode: false
    }
  },
  methods: {
    update() {
      this.$emit('update', this.item)
      this.editMode = false
    }
  }
}
</script>
