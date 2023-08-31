<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { defineComponent } from 'vue';
import router from './router';

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
    },
    navReset(){
      this.menuState = "hidden";
    }
  },
  mounted() {
    console.log(router.currentRoute.value.fullPath);
    console.log(router.getRoutes());
    if(!router.hasRoute(router.currentRoute.value.fullPath)) {
      console.log(`route not found`);
    }
    router.push('/');
  },
});
</script>

<template>
  <section class="app-vue">
    <a class="menu-link" @click="handleMenuClick"><i class="fa-solid fa-bars"></i></a>
    <div
      :class="['nav-links', menuState]"
    >
      <router-link to="/" @click="navReset">Home</router-link>
      <router-link to="/golf" @click="navReset">Golf</router-link>
      <router-link to="/spanish-lesson" @click="navReset">Spanish Lesson</router-link>
      <router-link to="/screens" @click="navReset">Screens</router-link>
      <router-link to="/media-player" @click="navReset">Media PLayer</router-link>
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

.menu-link {
  position: absolute;
  top: 0;
}

.app-vue {
  position: relative;
  padding-top: 10px;
}
.nav-links {
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
  z-index: 10;
  background-color: $background-primary;

  &.hidden {
    display: none;
  }
}
</style>
