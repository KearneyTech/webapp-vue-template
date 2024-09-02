<template>
    <div class="text-left">
        <label>Choose an option</label>
        <select v-model="selectValue" class="w-72 border border-black bg-transparent" data-testid="select">
            <option>First</option>
            <option>Second</option>
        </select>
        <button @click="$emit('submit', 'select')" class="text-white">Submit</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapWritableState } from 'pinia';
import { useQuestionsStore } from '../../stores/general';

export default defineComponent({
    computed: {
        ...mapWritableState(useQuestionsStore, {selectValue: 'select'})
    }
});
</script>

<style lang="scss"></style>
