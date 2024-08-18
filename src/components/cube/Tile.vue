<template>
    <div :id="configuration.id" :class="configuration.style" @click="handleClick"></div>
</template>
<script lang="ts">
import defineComponent from 'vue';

export default defineComponent({
    props: {
        configuration: Object
    },
    methods: {
        handleClick() {
            // Emit click event
        }
    }
});
</script>