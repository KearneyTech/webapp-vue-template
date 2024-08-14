<template>
    <div class="text-left">
        <label>Choose an option</label>
        <select class="w-72 border border-black bg-transparent">
            <option>First</option>
            <option>Second</option>
        </select>
        <button @click="$emit('submit', 'select')" class="text-white">Submit</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style lang="scss"></style>