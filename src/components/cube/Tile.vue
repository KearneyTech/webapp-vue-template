<template>
    <div 
        :id="id"
        @click="handleClick"
        :class="[
            'border',
            'border-slate-600',
            'w-24',
            'h-24',
            'cursor-pointer',
            color
        ]"
    >
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
    name: 'Tile',
    props: {
        id: String,
        color: String,
    },
    methods: {
        handleClick() {
            // Emit click event
            this.$emit('handleClick');
        }
    }
});
</script>