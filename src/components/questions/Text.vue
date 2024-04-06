<template>
    <div>
        <label for="text" class="flex flex-col text-left text-black">
            What do you want to say?
            <input id="text" type="text" class="border-1 border-black bg-transparent w-72"/>
        </label>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Text"
});
</script>

<style lang="scss">
input {
    border: 1px solid black;
}
</style>