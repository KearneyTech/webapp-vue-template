<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
        return {
          menuState: "hidden"
        }
      },
  setup() {
    console.log("setup");
  },
  methods: {
    handleMenuClick(){
      this.menuState = this.menuState == "" ? "hidden" : "";
    }
  }
});
</script>

<template>
  <section class="app-vue">
    <a @click="handleMenuClick"><i class="fa-solid fa-bars"></i></a>
    <div
      :class="['nav-links', menuState]"
    >
      <router-link to="/">Home</router-link>
      <router-link to="/golf">Golf</router-link>
      <router-link to="/spanish-lesson">Spanish Lesson</router-link>
      <router-link to="/screens">Screens</router-link>
      <router-link to="/media-player">Media PLayer</router-link>
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
.app-vue {
  position: relative;
}
.nav-links {
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;

  &.hidden {
    display: none;
  }
}
</style>
