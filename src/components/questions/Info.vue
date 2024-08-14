<template>
    <div class="text-left">
        <p>Create a system design. Design your own enterprise system. Choose the user, the process and the storage. Move between views with the navigation. Change the appearance with the Dark Mode toggle.</p>
        <button @click="$emit('submit', 'info')" class="text-white">Begin</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>
<style lang="scss"></style>