<template>
    <section class="menu">
        <label for="portrait">Portrait</label>
        <input type="radio"
            v-model="dataLayout"
            @change="onSelect"
            name="layout"
            value="portrait"
            id="portrait"
        />
        <label for="landscape">Landscape</label>
        <input type="radio"
            v-model="dataLayout"
            @change="onSelect"
            name="layout"
            value="landscape"
            id="landscape"
        />
        <label for="column">Column</label>
        <input type="radio"
            v-model="dataLayout"
            @change="onSelect"
            name="layout"
            value="column"
            id="column"
        />
        <label for="step">Step</label>
        <input type="radio"
            v-model="dataLayout"
            @change="onSelect"
            name="layout"
            value="step"
            id="step"
        />
    </section>
</template>

<script>
export default {
    name: "Menu",
    data() {
        return {
            dataLayout: "portrait"
        }
    },
    setup() {},
    methods: {
        onSelect: function(object) {
            this.dataLayout = object.target.value
            this.$emit("selected", this.dataLayout)
        }
    }
}
</script>

<style lang="scss">
.menu input {
    margin-right: 15px;
}
</style>