<template>
    <div>
        <label for="text" class="flex flex-col text-left text-black">
            What do you want to say?
            <input id="text" type="text" v-model="textValue" class="border-1 border-black bg-transparent w-72"/>
        </label>
        <button @click="handleSubmit" class="text-white">Submit</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapWritableState } from 'pinia';
import { useQuestionsStore } from '../../stores/general';

let store;

export default defineComponent({
    name: "Text",
    data() {
        return {
        }
    },
    setup(props, ctx) {
        //store = useQuestionsStore();
    },
    methods: {
        handleSubmit(object: any) {
            console.log(object);
            console.log(this.textValue);
            this.$emit('submit', 'text')
        }
    },
    computed: {
        ...mapWritableState(useQuestionsStore, {textValue: 'text'})
    }
});
</script>

<style lang="scss">
input {
    border: 1px solid black;
}
</style>