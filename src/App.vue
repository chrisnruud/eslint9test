<script setup lang="ts">

// this is called from other parts in the code with parameters
function myHandler (
  a?: string,
  b?: string,
  c?: string
) {
  // business logic here
  console.log(a, b, c)
}

// this is called from another part of the template
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function myBusinessLogic () {
  myHandler('a', 'b', 'c')
}

</script>

<template>
  <!-- this looks like the documentation
   ✓ GOOD
  <button v-on:click="handler" />
  <template v-for="e in list">
    <button v-on:click="e" />
    <button v-on:click="() => handler(e)" />
  </template>
  -->
  <button
    @click="() => myHandler(undefined, undefined, undefined)"
  />
</template>
