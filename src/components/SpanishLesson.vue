<template>
    <section class="spanish-lesson">
        <h3>Spanish Lesson</h3>
        <div class="word-container">
  <div class="word" v-for="(word, index) in words" v-bind:key="index">
  {{ word.es }} - {{ word.en }}
  </div>
</div>
    </section>
    <!--

  diez        = ten
  veinte      = twenty
  treinta     = thirty
  cuarenta    = forty
  cincuenta   = fifty
  sesenta     = sixty
  setenta     = seventy
  ochenta     = eighty
  noventa     = ninety
  cien        = hundred
-->

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
    return {
      words: <any>[]
    }
  },
  setup() {
    console.log("setup");
  },
  mounted() {
    this.words = staticData.collection;
    console.log(this.words)
  }
});

const staticData = {
  collection: [
    {
      es: "enojado",
      en: "angry"
    },
    {
      es: "triste",
      en: "sad"
    },
    {
      es: "emocionado",
      en: "excited"
    },
    {
      es: "aburrido",
      en: "bored"
    },
    {
      es: "ocupado",
      en: "busy"
    },
    {
      es: "preocupado",
      en: "worried"
    },
    {
      es: "enfermo",
      en: "sick"
    },
    {
      es: "contento",
      en: "glad"
    },
    {
      es: "feliz",
      en: "happy"
    },
    {
      es: "otra vez",
      en: "again"
    },
    {
      es: "algunos",
      en: "some"
    },
    {
      es: "por supuesto",
      en: "of course"
    },
    {
      es: "sorprendida",
      en: "surprised"
    },
    {
      es: "disfrutar",
      en: "enjoy"
    }
]};
</script>