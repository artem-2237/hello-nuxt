<template>
  <div>
    <form @submit.prevent>
      <Input class="mb-2" type="text" placeholder="login" />
      <Input class="mb-2" type="password" placeholder="password" />
      <button type="submit" @click="submit" class="btn">Login</button>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth'
})
const router = useRouter()
const submit = () => {
  router.push('/')
}
</script>

<style scoped>

</style>