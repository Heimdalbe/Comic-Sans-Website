<template>
  <footer class="text-white text-lg
    py-5 px-5 lg:px-48
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
    <section id="form" class="col-span-full lg:col-span-1 lg:place-self-start">
      <h2 class="font-semibold text-xl mb-2">Contact Us</h2>
      <a href="mailto:jeroen.baert@hotmail.be">jeroen.baert@hotmail.com</a>
      <!-- <form action="">
        this is a form
      </form> -->
    </section>
    <section id="contact" class="place-self-center">
      <h2 class="font-semibold text-xl mb-2">Address</h2>
      <address>
        <p>Klein Turkije 8</p>
        <p>Ghent, Belgium</p>
      </address>
    </section>
    <section id="social-media" class="place-self-center">
      <h2 class="font-semibold text-xl mb-2">Follow Us!</h2>
      <a href="https://www.instagram.com/cafecomicsans/" target="_blank"
        class="inline-block size-10">
        <InstagramIcon />
      </a>
      <a href="https://www.facebook.com/cafecomicsans/" target="_blank"
        class="inline-block size-10 ml-2">
        <FacebookIcon />
      </a>
    </section>
    <section id="copyright" class="col-span-full place-self-center
      flex flex-col items-center text-sm">
      <p>&#169; Comic Sans {{ copyrightYear }} - Made by student organisation 
        <a href="https://heimdal.be/" target="_blank">Heimdal</a>
      </p>
    </section>
  </footer>
</template>

<script setup lang="ts">
import InstagramIcon from '../icons/InstagramIcon.vue';
import FacebookIcon from '../icons/FacebookIcon.vue';

import { ref } from 'vue';

const copyrightYear = ref(new Date().getFullYear())

</script>

<style scoped>
section {
  margin: 5px 0px 22px 0;
}
</style>