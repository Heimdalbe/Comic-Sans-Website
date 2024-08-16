<template>
  <section class="grid grid-cols-1 sm:grid-cols-2">
    <article class="mx-5 py-16 justify-self-end lg:max-w-md lg:mx-20">
      <h2 class="text-3xl font-bold font-sans">About Us</h2>
      <p>Welcome to Comic Sans, your go-to bar in Gent, Klein Turkije 8. Our mission is to immerse you in a geek haven
        filled with Belgian beers, pinball, and board games. Since opening our doors, we've been dedicated to offering
        top-notch drinks and a lively, entertaining environment. Join us and experience the fun firsthand!</p>
    </article>
    <div class="photo bg-center bg-cover"></div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
section {
  background-color: var(--color-background);
}

.photo {
  background-image: url(@/assets/images/batcave.webp);
}
</style>