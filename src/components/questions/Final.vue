<template>
    <div class="text-left">
        <p>This is the end.</p>
        <button @click="$emit('submit', 'final')" class="text-white">Start over</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>
<style lang="scss"></style>