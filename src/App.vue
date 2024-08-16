<template>
  <HeaderComponent class="font-serif"/>
  <RouterView class="font-serif"/>
  <FooterComponent class="font-serif"/>
</template>

<script setup lang="ts">
import HeaderComponent from './components/navigation/HeaderComponent.vue'
import FooterComponent from './components/generic/FooterComponent.vue'
</script>
