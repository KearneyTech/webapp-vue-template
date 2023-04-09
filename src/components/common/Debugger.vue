<template>
    <section class="debugger">
        <div class="console">{{ output }}</div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        output: { type: String},
    },
    setup() {
        
    },
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