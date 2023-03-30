<template>
    <section class="spanish-lesson">
        <h3>Spanish Lesson</h3>
        <div class="word-container">
          <button @click="handleButtonLastClick">&lt; &lt; &lt;</button>
          <div class="word" @click="handleWordClick">
            {{ displayWord }}
          </div>
          <button @click="handleButtonNextClick">&gt; &gt; &gt;</button>   
        </div>
    </section>
</template>

<style lang="scss">
.word-container {
  display: flex;
  align-items: center;

  .word {
    border: 1px solid white;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 4em;
    line-height: 4.1em;
    width: 30vw;
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
    return {
      displayWord: "",
      wordsDisplayIndex: 0,
      words: <any>[]
    }
  },
  setup() {
    console.log("setup");
  },
  methods: {
    handleWordClick(event) {
      if(this.displayWord === this.words[this.wordsDisplayIndex].en) {
        this.displayWord = this.words[this.wordsDisplayIndex].es;
      } else {
        this.displayWord = this.words[this.wordsDisplayIndex].en;
      }
    },
    handleButtonLastClick() {
      this.updateWord(-1);
    },
    handleButtonNextClick() {
      this.updateWord(1);
    },
    updateWord(change) {
      const newIndex = this.wordsDisplayIndex + change;
      const wordCount = this.words.length;

      if(newIndex < 0) {
        this.wordsDisplayIndex = wordCount - 1;
      } else if(newIndex >= wordCount) {
        this.wordsDisplayIndex = 0;
      } else {
        this.wordsDisplayIndex = newIndex;
      }

      this.displayWord = this.words[this.wordsDisplayIndex].es;
    }
  },
  mounted() {
    this.words = staticData.collection;
    this.displayWord = this.words[this.wordsDisplayIndex].es;
    console.log('mounted');
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
      en: "happy"
    },
    {
      es: "feliz",
      en: "happy"
    },
    {
      es: "a veces",
      en: "sometimes"
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
    },
    {
      es: "diez",
      en: "ten"
    },
    {
      es: "veinte",
      en: "twenty"
    },
    {
      es: "treinta",
      en: "thirty"
    },
    {
      es: "cuarenta",
      en: "forty"
    },
    {
      es: "cincuenta",
      en: "fifty"
    },
    {
      es: "sesenta",
      en: "sixty"
    },
    {
      es: "setenta",
      en: "seventy"
    },
    {
      es: "ochenta",
      en: "eighty"
    },
    {
      es: "noventa",
      en: "ninety"
    },
    {
      es: "cien",
      en: "hundred"
    }
]};
</script>