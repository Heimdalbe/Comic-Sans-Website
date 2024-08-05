<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<script setup lang="ts">
import HeaderComponent from './components/navigation/HeaderComponent.vue'
import FooterComponent from './components/generic/FooterComponent.vue'
</script>
