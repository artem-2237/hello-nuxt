<template>
  <div>
    <ClientListItem v-for="client in clientList" :key="client.id" :client="client" class="mb-4" />
  </div>
</template>

<script>
export default {
  async setup() {
    const {data : clientList} = await useFetch('https://fakestoreapi.com/users')
    return { clientList }
  }
}
</script>

<style scoped>

</style>