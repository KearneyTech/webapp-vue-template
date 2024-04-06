<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { defineComponent } from 'vue';
import router from './router';

export default defineComponent({
  data() {
        return {
          menuState: "closed",
          menuButtonContent: "fa-bars"
        }
      },
  setup() {
    console.log("setup");
  },
  methods: {
    handleMenuClick(){
      this.menuState = this.menuState == "" ? "closed" : "";
      this.menuButtonContent = this.menuButtonContent == "fa-xmark" ? "fa-bars" : "fa-xmark";
    },
    navReset(){
      this.menuState = "closed";
      this.menuButtonContent = "fa-bars";
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
    <div :class="['nav-links', menuState]">
      <button class="menu-link" @click="handleMenuClick"><i :class="['fa-solid', menuButtonContent]"></i></button>
      <div class="nav-container">
        <router-link to="/" @click="navReset">Home</router-link>
        <router-link to="/golf" @click="navReset">Golf</router-link>
        <router-link to="/spanish-lesson" @click="navReset">Spanish Lesson</router-link>
        <router-link to="/screens" @click="navReset">Screens</router-link>
        <router-link to="/media-player" @click="navReset">Media PLayer</router-link>
        <router-link to="/questions" @click="navReset">Questions</router-link>
        <router-link to="/clock" @click="navReset">Clock</router-link>
      </div>
    </div>
    <router-view />
  </section>
</template>

<style lang="scss">
#app {
  margin: 0 auto;
  text-align: center;

  @include min-width(470px) {
    padding: 2rem;
  }

  button:hover {
    border-color: $normal-accent;
  }

  button:focus {
    outline-color: $normal-accent;
  }
}

.app-vue {
  position: relative;
  padding-top: 10px;
}
.nav-links {
  border: 1px solid $normal-subtle;
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
  z-index: 10;
  background-color: $background-primary;

  .nav-container {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: .4rem;

    .menu-close {
      position: absolute;
      top: .2rem;
      right: .2rem;
      padding: .4rem .6rem;
    }
  }

  &.closed {
    border-style: hidden;
    background-color: transparent;

    .nav-container {
      display: none;
    }
  }
}
</style>
