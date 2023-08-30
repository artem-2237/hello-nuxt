<template>
  <div class="flex items-center justify-center h-screen w-screen">
    <div class="card my-auto text-center" style="width: 400px">
      <div class="text-8xl font-bold">{{ error.statusCode }}</div>
      <div class="mt-7">{{ error.message }}</div>
      <button class="btn mt-7" @click="handleClearError">Go Home</button>
    </div>
  </div>
</template>

<script>
import {clearError} from "nuxt/app";

export default {
  name: 'error',
  props: {
    error: { type: Object }
  },
  setup() {
    const handleClearError = () => {
      clearError({ redirect: '/' })
    }

    return { handleClearError }
  }
}
</script>

<style scoped>

</style>