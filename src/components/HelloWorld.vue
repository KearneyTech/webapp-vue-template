<script lang="ts">
import { defineComponent } from 'vue';
import router from '../router';

export default defineComponent({
  data() {return {}},
  methods: {
    handleBlockClick(path: string){
      router.push(path);
    }
  }
});
</script>

<template>
  <section class="template-glass">
    <div class="title">Gallery of Components</div>
    <div class="text">
      This is a collection of small components I put together. I use this code base for rapid prototyping with VueJS. Click on a component to take a look. Use the menu icon to move around the gallery. Hope you enjoy it.
    </div>
    <div class="header">Components</div>
    <div class="block-container">
      <div class="block link" @click="handleBlockClick('spanish-lesson')">Flash Cards</div>
      <div class="block link" @click="handleBlockClick('golf')">Golf</div>
      <div class="block link" @click="handleBlockClick('screens')">Screens</div>
      <div class="block link" @click="handleBlockClick('media-player')">Media Player</div>
      <div class="block link" @click="handleBlockClick('questions')">Questions</div>
    </div>
    <div class="panel highlight">For the code of this application, visit <a target="_blank" href="https://github.com/KearneyTech/webapp-vue-template">GitHub.com</a></div>
    <div class="panel highlight">For more about me, visit <a href="https://www.kearneytech.com">KearneyTech.com</a></div>
</section>
</template>

<style lang="scss" scoped>
$thickness: 3px;
$bottom-spacing: 1.2em;
body {
    font-family: 'Open Sans', sans-serif;
}
.template-glass {
  margin: 2rem auto;
  width: 60%;
  max-width: 600px;
}
.logo{
  width: 3em;
  height: 3em;
  border: 1px solid #fff;
  margin: 0 auto;
  margin-bottom: .5rem;
}
.title {
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: $bottom-spacing;
}
.header {
  font-size: 1.2rem;
  margin: 1.8rem auto .75rem;
  margin-bottom: .5em;
}
.block-container {
  display: inline-flex;
  justify-content: center;
  width: 100%;
  align-items: stretch;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: .5rem;
}
.block {
  display: inline-flex;
  border: $thickness solid $normal-subtle;
  background-color: $normal-subtle;
  align-items: center;
  justify-content: center;
  margin: .4rem;
  width: 5rem;
  padding: .4rem;

  &.link {
    color: $normal-accent;
    text-decoration: underline;

    &:hover {
      cursor: pointer;
      border-color: $normal-accent;
    }
  }
}
.panel{
  display: inline-block;
  border: $thickness solid #fff;
  width: 100%;
  margin: 1rem auto;
  line-height: 1.3rem;
  padding: .4rem;

}
.text{
  display: inline-block;
  text-align: center;
  margin: 0 auto;
  margin-bottom: $bottom-spacing;
}
.highlight{
  color: #000;
  background-color: #fff;
}
</style>
