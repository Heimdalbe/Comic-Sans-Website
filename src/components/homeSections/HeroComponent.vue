<template>
  <section id="hero" class="flex justify-center items-center">
    <div class="hero-content p-8">
      <h1 class="text-4xl font-bold font-sans text-slate-50 sm:text-8xl">All about heroes</h1>
      <h2 class="text-2xl font-semibold font-sans text-slate-100 sm:text-4xl
      mb-5">Comic Sans</h2>
      <p class="text-base text-white sm:text-lg">Discover Belgium's Geek Bar: Play games in the Gameroom, conquer boardgames or Take a seat at one of the Superhero tables!</p>
    </div>
  </section>
</template>

<style scoped>
#hero {
  height: calc(100dvh - var(--header-height));
  background: #303030;
  background-image: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(255,255,255,0) 100%), image-set(
    url("@/assets/images/hero.webp") 1x,
    url("@/assets/images/hero-small.webp") 2x
  );
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
