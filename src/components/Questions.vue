/**
* TODOs
* - Update buttons div as navigation
* - Create map of question component names and next component to be viewed.
* - Add submit buttons to Question components.
* - Question components emit their component name on form submit.
* - Question components need to maintain state after set by user.
* - Create Info component to be default view with description of app.
* - Create Final component to display configuration. Default state shows configuration not complete. State status?
*/
<template>
    <section class="questions bg1">
        <div class="panel text-black bg-slate-50/80 border-2 rounded-2xl mt-[10vh] text-center w-96 mx-auto align-middle space-y-4 p-5">
            <h3 class="text-4xl">Questions</h3>
            <div class="p-5"><component :is="liveComponent" @submit="handleSubmit"/></div>
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

let map = new Map();
        map.set('text', 'Select');
        map.set('select', 'Radio');
        map.set('radio', 'Text');

export default defineComponent({
    components: {
        Text,
        Select,
        Radio
    },
    emits: ['handleSubmit'],
    data() {
        return {
            liveComponent: "Text",
            mapViews: map
        };
    },
    setup(props, ctx) {

    },
    methods: {
        handleSubmit(arg: any) {
            console.log('handleSubmit', arg);
            this.liveComponent = this.mapViews.get(arg);
        },
        updateLive(view: string) {
            this.liveComponent = view;
        },
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
        background-image: url('/images/backgrounds/pexels-photo-931018.jpeg');
        background-size: cover;
        background-position: center;
    }
    
    &.bg2 {
        background-image: url('/images/backgrounds/pexels-nout-gons-378570.jpg');
        background-size: cover;
        background-position: center;
    }
    
    &.bg3 {
        background-image: url('/images/backgrounds/pexels-luke-miller-18655633.jpg');
        background-size: cover;
        background-position: center;
    }
    
    &.bg4 {
        background-image: url('/images/backgrounds/pexels-eberhard-grossgasteiger-1366919.jpg');
        background-size: cover;
        background-position: center;
    }
}
</style>