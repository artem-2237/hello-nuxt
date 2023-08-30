<template>
  <div>
    <Head>
      <Title>Hello Nuxt</Title>
    </Head>
    <header class="shadow-sm bg-white">
      <nav class="flex justify-between p-4 mx-auto mb-3">
        <nuxt-link to="/" class="font-bold">HOME</nuxt-link>
        <ul class="flex gap-4">
          <li><nuxt-link :to="{name: 'about'}">About</nuxt-link></li>
          <li><nuxt-link :to="{name: 'clients'}">Clients</nuxt-link></li>
          <li><nuxt-link :to="{name: 'auth'}" class="btn">Logout</nuxt-link></li>
        </ul>
      </nav>
    </header>

    <main class="container mx-auto">
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  name: 'default',
  setup() {
    return {}
  }
}
</script>

<style scoped>
.router-link-active {
  color: #dc2626;
}
</style>