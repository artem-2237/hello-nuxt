export default defineEventHandler(async event => {
  const { clientId } = event.context.params

  return await $fetch(`https://fakestoreapi.com/users/${clientId}`)
})