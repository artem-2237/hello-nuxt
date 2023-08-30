<template>
  <input v-bind="$attrs" class="field" v-model="value">
</template>

<script>
export default {
  name: 'Input',
  props: ['modelValue'],
  emits: ['update:model-value'],
  setup(props, {emit}) {
    const value = computed({
      get() { return props.modelValue },
      set(val) { emit('update:modelValue') },
    })

    return {value}
  }
}
</script>

<style scoped>

</style>