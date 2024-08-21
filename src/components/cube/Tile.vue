<template>
    <div 
        :id="configuration?.id" 
        @click="handleClick"
        :class="[
            'border',
            'border-slate-600',
            'w-24',
            'h-24',
            configuration?.color
        ]"
    >
        {{ configuration?.content }}
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import type { PropType } from 'vue';

type TileObject = {
    id: string;
    color: string;
    style: string;
    content: string;
    clicked: boolean;
};

export default defineComponent({
    name: 'Tile',
    props: {
        configuration: Object as PropType<TileObject>
    },
    methods: {
        handleClick() {
            // Emit click event
            this.$emit('handleClick', this.configuration?.color);
        }
    }
});
</script>