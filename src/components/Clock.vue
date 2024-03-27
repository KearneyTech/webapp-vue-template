<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Clock',
    data() {
        return {
            time: ""
        }
    },
    methods: {
        generateTime() {
            const dateObject = new Date();
            let hours = dateObject.getHours() < 12 ? dateObject.getHours() : dateObject.getHours() -12;
            let minutes = dateObject.getMinutes() < 10 ? "0" + dateObject.getMinutes() : dateObject.getMinutes();
            this.time = hours + ":" + minutes;
        }
    },
    mounted() {
        setInterval(()=>{this.generateTime()}, 1000);
    }
})
</script>
<template>
    <section class="media-player bg-center bg-cover h-80 p-20">
        <div class="wrapper border-2 rounded-2xl text-center w-96 h-44 mx-auto align-middle">
            <h3>Clock</h3>
            <div class="text-9xl">{{ time }}</div>
        </div>
    </section>
</template>
<style lang="scss">
section.media-player {
    background-image: url('/images/pch.jpeg');

    .wrapper {
        background-color: rgb(226 232 240 / 60%);
    }
}
</style>