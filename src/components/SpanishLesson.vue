<template>
    <section class="spanish-lesson">
        <h3>Spanish Flash Cards</h3>
        <div class="word-container">
          <button @click="handleButtonLastClick" class="px-2 text-2xl fa-solid fa-circle-chevron-left"></button>
          <div class="word-card" @click="handleWordClick">
            <div class="word">
              {{ displayWord }}
            </div>
          </div>
          <button @click="handleButtonNextClick" class="px-2 text-2xl fa-solid fa-circle-chevron-right"></button>   
        </div>
        <div class="description">Click on a word to see it's translation. Use the buttons to change the cards.</div>
        <!-- Debugger/ -->
    </section>
</template>

<style lang="scss">
.word-container {
  display: inline-flex;
  align-items: stretch;
  height: 200px;

  .word-card{
    width: 260px;
    border: 1px solid white;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 2.7em;
    cursor: pointer;

    @include min-width(500px) {
        font-size: 3.6em;
        width: 330px;
    }

    .word {
      line-height: 1.5em;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDebugStore } from '../stores/general';
import Debugger from './common/Debugger.vue';

export default defineComponent({
  components: {Debugger},
  data(){
    return {
      displayWord: "",
      wordsDisplayIndex: 0,
      words: <any>[],
      randomOrder: true,
      store: useDebugStore()
    }
  },
  setup() {
    console.log("setup");
  },
  methods: {
    /**
     * 
     * no last/previous/back
     * onNext => last = current
     * 
     */
    handleWordClick() {
      this.logger('clicked');
      if(this.displayWord === this.words[this.wordsDisplayIndex].en) {
        this.displayWord = this.words[this.wordsDisplayIndex].es;
      } else {
        this.displayWord = this.words[this.wordsDisplayIndex].en;
      }
    },
    handleButtonLastClick() {
      this.advanceWord(-1);
    },
    handleButtonNextClick() {
      this.advanceWord(1);
    },
    advanceWord(change: number) {
      const newIndex = this.wordsDisplayIndex + change;
      const wordCount = this.words.length;

      console.log(`advanceWord wordsDisplayIndex: ${this.wordsDisplayIndex}`);
      console.log(`advanceWord newIndex: ${newIndex}`);

      if(newIndex < 0) {
        this.wordsDisplayIndex = wordCount - 1;
      } else if(newIndex >= wordCount) {
        this.wordsDisplayIndex = 0;
      } else {
        this.wordsDisplayIndex = newIndex;
      }

      this.updateWord(this.wordsDisplayIndex);
    },
    updateWord(index: number){
      console.log(`update index: ${index}`);
      this.wordsDisplayIndex = index;
      this.displayWord = this.words[index].es;
    },
    autoAdvance(){
      setInterval(() =>{this.advanceWord(1)}, 4500)
    },
    createPlaylist(){
      if(this.randomOrder) {
        let tempWords = staticData.collection;
        this.words = new Array();

        while(tempWords.length > 0) {
          let index = this.randomNumber(tempWords.length);
          this.words.push(tempWords[index]);
          tempWords.splice(index, 1);
        }
      } else {
        this.words = staticData.collection;
      }
    },
    randomNumber(max: number){
      return Math.floor(Math.random() * max);
    },
    logger(input: string) {
      this.store.log(input);
    }
  },
  mounted() {
    this.createPlaylist();
    this.advanceWord(0);
    this.autoAdvance();
  }
});

const staticData = {
  collection: [
    {
      es: "tenedora",
      en: "fork"
    },
    {
      es: "cuchara",
      en: "spoon"
    },
    {
      es: "cuchillo",
      en: "knife"
    },
    {
      es: "desayuno",
      en: "breakfast"
    },
    {
      es: "almuerzo",
      en: "lunch"
    },
    {
      es: "cena",
      en: "dinner"
    },
    {
      es: "este",
      en: "this"
    },
    {
      es: "ese",
      en: "that"
    },
    {
      es: "antes",
      en: "before"
    },
    {
      es: "despues",
      en: "after"
    },
    {
      es: "sobre",
      en: "on top of"
    },
    {
      es: "debaja",
      en: "under"
    },
    {
      es: "llorar",
      en: "to cry"
    },
    {
      es: "sonreír",
      en: "to smile"
    },
    {
      es: "poner",
      en: "to put"
    },
    {
      es: "poder",
      en: "able to"
    },
    {
      es: "perder",
      en: "to lose"
    },
    {
      es: "probar",
      en: "to try"
    },
    {
      es: "empezar",
      en: "to start"
    },
    {
      es: "esperar",
      en: "to wait"
    },
    {
      es: "esperanza",
      en: "hope"
    },
    {
      es: "entender",
      en: "to understand"
    },
    {
      es: "abrir",
      en: "to open"
    },
    {
      es: "cerrar",
      en: "to close"
    },
    {
      es: "volver",
      en: "to return"
    },
    {
      es: "levantar",
      en: "to get up"
    },
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
      es: "sorprendida",
      en: "surprised"
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
      es: "a veces",
      en: "sometimes"
    },
    {
      es: "a menudo",
      en: "often"
    },
    {
      es: "otra vez",
      en: "again"
    },
    {
      es: "algo",
      en: "something"
    },
    {
      es: "algo mas",
      en: "anything else"
    },
    {
      es: "algunos",
      en: "some"
    },
    {
      es: "unos",
      en: "some"
    },
    {
      es: "alguien",
      en: "someone"
    },
    {
      es: "nadie",
      en: "nobody"
    },
    {
      es: "todos",
      en: "everyone"
    },
    {
      es: "nunca",
      en: "never"
    },
    {
      es: "siempre",
      en: "always"
    },
    {
      es: "casi",
      en: "almost"
    },
    {
      es: "primavera",
      en: "spring"
    },
    {
      es: "verano",
      en: "summer"
    },
    {
      es: "ontoño",
      en: "fall"
    },
    {
      es: "invierno",
      en: "winter"
    },
    {
      es: "rio",
      en: "river"
    },
    {
      es: "playa",
      en: "beach"
    },
    {
      es: "lago",
      en: "lake"
    },
    {
      es: "piscina",
      en: "pool"
    },
    {
      es: "mar",
      en: "sea"
    },
    {
      es: "océano",
      en: "ocean"
    },
    {
      es: "ensenada",
      en: "cove"
    },
    {
      es: "arroyo",
      en: "creek"
    },
    {
      es: "primero",
      en: "first"
    },
    {
      es: "próximo",
      en: "next"
    },
    {
      es: "último",
      en: "last"
    },
    {
      es: "antigua",
      en: "ancient"
    },
    {
      es: "joven",
      en: "young"
    },
    {
      es: "vieja",
      en: "old"
    },
    {
      es: "nueva",
      en: "new"
    },
    {
      es: "por supuesto",
      en: "of course"
    },
    {
      es: "disfrutar",
      en: "to enjoy"
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