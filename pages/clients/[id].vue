<template>
  <div>
    <Head>
      <Title>Client | {{ Object.values(client.name).join(' ') }}</Title>
    </Head>
    <div class="font-bold">Client page</div>
    <ul>
      <li>Name: {{ Object.values(client.name).join(' ') }}</li>
      <li>Email: {{ client.email }}</li>
      <li>Phone: {{ client.phone }}</li>
    </ul>
  </div>
</template>

<script setup>
  const {id} = useRoute().params
  const client = reactive({})

  const getClientData = async () => {
    const { data } = await useFetch(`/api/client/${id}`, {pick: ['id', 'name', 'email', 'phone']})

    if (data.value) return Object.assign(client, data.value)

    throw new Error()
  }

  try {
    await getClientData()
  } catch(e) {
    throw createError({statusCode: 404, statusMessage: 'Client not found', fatal: true})
  }
</script>

<style scoped>

</style>