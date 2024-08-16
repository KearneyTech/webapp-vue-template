<template>
    <div class="text-left">
        <p>This is the end.</p>
        <p>Text: {{ text }}</p>
        <button @click="$emit('submit', 'final')" class="text-white">Start over</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useQuestionsStore } from '../../stores/general';
import { mapState } from 'pinia';

export default defineComponent({
    computed: {
        ...mapState(useQuestionsStore, ['text'])
    }
});
</script>
<style lang="scss"></style>