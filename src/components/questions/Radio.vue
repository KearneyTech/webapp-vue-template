<template>
    <fieldset class="text-left flex w-52 flex-col">
        <legend>Which is best?</legend>
        <label for="radioOne"><input v-model="radioValue" value="radioOne" name="radios" type="radio" id="radioOne">Almost Done</label>
        <label for="radioTwo"><input v-model="radioValue" value="radioTwo" name="radios" type="radio" id="radioTwo">Done</label>
    </fieldset>
    <button @click="$emit('submit', 'radio')" class="text-white">Submit</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapWritableState } from 'pinia';
import { useQuestionsStore } from '../../stores/general';

export default defineComponent({
    emits: ['submit'],
    computed: {
        ...mapWritableState(useQuestionsStore, {radioValue: 'radio'})
    }
});
</script>

<style lang="scss">
</style>
