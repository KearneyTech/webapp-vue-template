<template>
    <section class="questions bg1">
        <div class="panel text-black bg-slate-50/80 border-2 rounded-2xl mt-[10vh] text-center w-96 mx-auto align-middle space-y-4 p-5">
            <h3 class="text-4xl">Questions</h3>
            <div class="p-5"><component :is="liveComponent"/></div>
            <div>
                <button @click="doText" class="text-white">Text</button>
                <button @click="doSelect" class="text-white">Select</button>
                <button @click="doRadio" class="text-white">Radio</button>
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
        width: 90vw;
        height: 80vh;
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