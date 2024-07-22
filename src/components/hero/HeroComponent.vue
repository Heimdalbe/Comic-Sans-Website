<template>
  <section id="hero">
    <div class="hero-content">
      <h1 class="text-4xl">All about heroes</h1>
      <h2 class="text-xl">Belgium's Geek Bar</h2>
      <p class="text-base">Take a seat at one of the Superhero tables, play games in the Gameroom or play some boardgames!</p>
    </div>
  </section>
</template>

<style scoped>
#hero {
  height: 100%;
  background: #303030;
  background-image: image-set(
    url("../../assets/images/hero.webp") 1x,
    url("../../assets/images/hero-small.webp") 2x
  );
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

#hero::after {
  content: '';
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5046218316428134) 50%, rgba(255,255,255,0) 100%);
}
</style>