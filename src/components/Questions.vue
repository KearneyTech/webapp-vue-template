<template>
    <section class="questions bg1">
        <div class="panel bg-slate-50/50 border-2 rounded-2xl mt-[10vh] text-center w-96 h-44 mx-auto align-middle space-y-4">
            <h3 class="text-xl">Questions</h3>
            <div><component :is="liveComponent"/></div>
            <div>
                <button @click="doText">Text</button>
                <button @click="doSelect">Select</button>
                <button @click="doRadio">Radio</button>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Text from './questions/Text.vue';
import Select from './questions/Select.vue';
import Radio from './questions/Radio.vue';

export default defineComponent({
    components: {
        Text,
        Select,
        Radio
    },
    data() {
        return {
            liveComponent: "Text"
        };
    },
    methods: {
        doText() {
            this.liveComponent = "Text";
        },
        doSelect() {
            this.liveComponent = "Select";
        },
        doRadio() {
            this.liveComponent = "Radio";
        }
    }
});
</script>

<style lang="scss">
/*
pexels-eberhard-grossgasteiger-1366919.jpg
pexels-luke-miller-18655633.jpg
pexels-nout-gons-378570.jpg
pexels-photo-931018.jpeg
*/

section.questions {
    width: 85vw;
    height: 90vh;
    margin-top: -15px;
    padding-top: 2rem;

    @include min-width(900px) {
        width: 900px;
        height: 900px;
    }

    @include min-width(1000px) {
        height: 50vh;
    }
    
    &.bg1 {
        background-image: url('images/backgrounds/pexels-photo-931018.jpeg');
        background-size: cover;
        background-position: center;
    }
    
    &.bg2 {
        background-image: url('images/backgrounds/pexels-nout-gons-378570.jpg');
        background-size: cover;
        background-position: center;
    }
    
    &.bg3 {
        background-image: url('images/backgrounds/pexels-luke-miller-18655633.jpg');
        background-size: cover;
        background-position: center;
    }
    
    &.bg4 {
        background-image: url('images/backgrounds/pexels-eberhard-grossgasteiger-1366919.jpg');
        background-size: cover;
        background-position: center;
    }
}
</style>