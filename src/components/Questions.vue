<template>
    <section class="questions">
        <h3>Questions</h3>
        <div><component :is="liveComponent"/></div>
        <div>
            <button @click="doText">Text</button>
            <button @click="doSelect">Select</button>
            <button @click="doRadio">Radio</button>
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

<style>
section.questions {
    margin-top: 2rem;
}
</style>