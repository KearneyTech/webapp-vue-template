<script setup lang="ts">

</script>

<template>
  <section class="template-glass">
    <div class="logo">logo</div>
    <div class="title">Glass Template</div>
    <div class="header">Blocks</div>
    <div class="block-container">
      <div class="block">
        BL
      </div>
      <div class="block">OC</div>
      <div class="block">KS</div>
    </div>
    <div class="header">Panels</div>
    <div class="panel">
          Edit to test HMR
    </div>
    <div class="panel highlight">Reverse</div>
    <div class="header">Text</div>
    <div class="text">
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
          >create-vue</a
        >, the official Vue + Vite starter
      
        Install
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
        in your IDE for a better DX
      Click on the Vite and Vue logos to learn more
  </div>
</section>
</template>

<style lang="scss" scoped>
$thickness: 3px;
$bottom-spacing: 4em;
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
.link {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.title {
  display: inline;
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
  height: 8rem;
}
.block {
  display: inline-flex;
  border: $thickness solid #333232;
  background-color: #333;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin: .4rem;
}
.panel{
  display: inline-block;
  border: $thickness solid #fff;
  width: 100%;
  margin: 1rem auto;
  line-height: 3rem;
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
