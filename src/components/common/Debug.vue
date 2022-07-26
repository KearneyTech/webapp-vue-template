<template>
    <section class="debug">
        {{dataLayout}}
        <input type="radio"
            v-model="dataLayout"
            @change="onSelect"
            name="layout"
            value="portrait"
        />
        <input type="radio"
            v-model="dataLayout"
            @change="onSelect"
            name="layout"
            value="landscape"
        />
    </section>
</template>

<script>
export default {
    name: "Debug",
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