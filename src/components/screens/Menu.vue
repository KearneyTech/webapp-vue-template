<template>
    <section class="menu">
        <label>Portrait</label>
        <input type="radio"
            v-model="dataLayout"
            @change="onSelect"
            name="layout"
            value="portrait"
        />
        <label>Landscape</label>
        <input type="radio"
            v-model="dataLayout"
            @change="onSelect"
            name="layout"
            value="landscape"
        />
        <label>Column</label>
        <input type="radio"
            v-model="dataLayout"
            @change="onSelect"
            name="layout"
            value="column"
        />
        <label>Step</label>
        <input type="radio"
            v-model="dataLayout"
            @change="onSelect"
            name="layout"
            value="step"
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