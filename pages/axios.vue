<template>
    <section class="axios">
        <h1 class="axios-heading">Axios</h1>
        <div class="axios-content">
            {{ item }}
        </div>
        <div class="axios-controls">
            <button @click='handleClick'>Debug</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            itemData: {}
        }
    },
    computed: {
        item () {
            return this.itemData
        }
    },
    methods: {
        handleClick: function () {
            axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => (this.itemData = response))
        }
    }
}
</script>
<style lang="scss" scoped>
.axios {
    padding: 10px;
}
</style>