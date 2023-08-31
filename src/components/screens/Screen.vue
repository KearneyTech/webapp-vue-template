<template>
    <div class="screen">
        <img :src="content.media" />
        <h5>{{ content.title }}</h5>
    </div>
</template>

<script>
export default {
    name: "Screen",
    props: {
        content: Object,
    }
}
</script>

<style lang="scss">
.screen {
    h5 {
        color: $bright-green;
        margin-bottom: 0;
    }

    img {
        width: 190px;
    }
}
</style>