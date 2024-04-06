<template>
    <div class="text-left">
        <label>Choose an option</label>
        <select class="w-72 border-1 border-black bg-transparent">
            <option>First</option>
            <option>Second</option>
        </select>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style lang="scss">
select {
    border: 1px solid black;
}
</style>