<template>
    <section class="debugger">
        <div class="console">{{ computedOutput }}</div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDebugStore } from '../../stores/general';

export default defineComponent({
    data() {
        return {
            store: useDebugStore()
        }
    },
    setup() {
    },
    computed: {
        computedOutput() {
            return this.store.output
        }
    }
})
</script>


<style lang="scss">
.debugger {
    position: absolute;
    z-index: 100;
    bottom: 0;
    right: 0;
    width: 200px;
    height: 100px;
    background-color: black;
    color: #0be678;
    opacity: .4;
    overflow-y: hidden;

    .console {
        overflow-y: scroll;
        height: 80px;
    }
}
</style>