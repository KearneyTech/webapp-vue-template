<template>
  <div class="hello">
    <h1 @click="onClick">{{ dataProperty }}</h1>
    <input :value="dataProperty" @input="handleInput($event)"/>
    <Media source="http://lorempixel.com/200/200/technics" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Media from './Media.vue';

@Component({
  components: {
    Media,
  },
})
export default class HelloWorld extends Vue {
  dataProperty: string = 'started';

  mounted() {
    this.dataProperty = 'mounted'
  }
 
  onClick() {
    this.dataProperty = 'clicked'
  }

  displayObject!: string;
  
  handleInput($event: InputEvent) {
    let value;
    if($event != null) {
      value = $event.target.value;
    }
    console.log($event);
    console.log(`value: ${value}`);
    this.dataProperty = value;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
