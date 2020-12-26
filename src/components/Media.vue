<template>
    <div class="media">
        <img :src="`${source}`" />
        {{source}}
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Media extends Vue {
    @Prop({default: "hi"}) source!: string
}
</script>

<style lang="scss">
    .media {
        color: $primary;

        img {
            display: block;
            margin: 10px auto 5px;
        }
    }
</style>