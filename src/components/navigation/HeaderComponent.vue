<!-- import { RouterLink, RouterView } from 'vue-router' -->
<template>
  <header class="flex bg-cover bg-center">
    <img class="ml-4 aspect-square" src="@/assets/images/logo.webp" alt="Comic Sans Logo">
    <nav class="mr-4 flex items-center justify-center space-x-6 w-full">
      <RouterLink to="/" class="text-xl font-bold 
        relative w-fit block 
        after:block after:content-[''] 
        after:absolute after:h-[3px] 
        after:bg-black after:w-full 
        after:scale-x-0 after:hover:scale-x-100 
        after:transition after:duration-300 
        after:origin-center">Home</RouterLink>
      <RouterLink to="/menu" class="text-xl font-bold 
        relative w-fit block 
        after:block after:content-[''] 
        after:absolute after:h-[3px] 
        after:bg-black after:w-full 
        after:scale-x-0 after:hover:scale-x-100 
        after:transition after:duration-300 
        after:origin-center">Menu</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  height: var(--header-height);
  background-color: var(--color-background);
  background-image: url('@/assets/images/header-bg.webp');
}
</style>
