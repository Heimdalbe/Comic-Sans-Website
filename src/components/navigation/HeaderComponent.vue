<!-- import { RouterLink, RouterView } from 'vue-router' -->
<template>
  <header class="flex bg-cover bg-center">
    <img class="ml-4 aspect-square" src="@/assets/images/logo.webp" alt="Comic Sans Logo">
        <nav class="relative flex items-center justify-between w-full p-3">
    <div class="flex space-x-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </div>
    </nav>
  </header>

  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
</template>

<style scoped>
header {
  height: var(--header-height);
  background-color: var(--color-background);
  background-image: url('@/assets/images/header-bg.webp');
}
</style>
