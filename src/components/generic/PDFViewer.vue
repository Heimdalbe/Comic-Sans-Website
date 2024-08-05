<template>
  <object :data="props.pdfUrl" type="application/pdf">
    <p>It appears your browser is unable to display pdf files.
      <a :href="props.pdfUrl">Click here to download themenu</a>
    </p>
  </object>
</template>

<style scoped>
object {
  width: 100%;
  min-height: calc(100dvh - var(--header-height));
}
</style>

<script setup lang="ts">
const props = defineProps<{
  pdfUrl: string
}>()

</script>
