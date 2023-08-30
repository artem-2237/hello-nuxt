<template>
  <div class="card flex justify-between">
    <div>
      <div class="font-bold">{{ Object.values(client.name).join(' ') }}</div>
      <div class="text-sm text-gray-400 mb-3">{{ client.email }}</div>
    </div>
    <nuxt-link class="link" :to="{name: 'clients-id', params: {id: client.id}}">Деталі</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ClientListItem',
  props: {
    client: { type: Object }
  },
  setup() {
    return {}
  }
}
</script>

<style scoped>

</style>