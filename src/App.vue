<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <section class="app-vue">
    <i class="fa-solid fa-bars"></i>
    <div class="nav-links">
      <router-link to="/">Go to Home</router-link>
    </div>
    <router-view />
  </section>
</template>

<style lang="scss">
#app {
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;

  @include min-width(470px) {
    padding: 2rem;
  }
}
</style>
