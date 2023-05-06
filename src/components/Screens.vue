<template>
    <section class="screens">
        <h3>Screens</h3>
        <div
            :class="['screen-container', dataScreenLayout]"
        >
            <Screen
                v-for="(screen, index) in dataScreenArray"
                :key="index"
                :content="screen"
            />
        </div>
        <Menu
            @selected="onLayoutSelected"
        />
    </section>
</template>

<script>
import Screen from './screens/Screen.vue';
import Menu from './screens/Menu.vue';

export default {
    components: {
        Screen,
        Menu
    },
    data() {
        return {
            dataScreenArray: [
                {
                    media: "/images/whiteboards/IMG_3157.jpg",
                    title: "First"
                },
                {
                    media: "/images/whiteboards/IMG_3296.jpg",
                    title: "Second"
                },
                {
                    media: "/images/whiteboards/IMG_3298.jpg",
                    title: "Third"
                },
                {
                    media: "/images/whiteboards/IMG_3451.jpg",
                    title: "Fourth"
                },
            ],
            dataScreenLayout: "portrait"
        }
    },
    setup() {
        
    },
    methods: {
        onLayoutSelected(layout) {
            this.dataScreenLayout = layout
        }
    }
}
</script>

<style lang="scss">
body {
    background-position: top 10% left 10%;
    background-size: 150%;
}

.screens {

    h3 {color: $normal-standout}

    .screen-container {
        &.portrait {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            width: 710px;
            height: 550px;
        }
        &.column {
            display: flex;
            flex-direction: column;
        }
        &.landscape {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-evenly;
            width: 900px;
            height: 600px;
            img {
                width: 250px;
                height: 188px;
            }
        }
        &.step {
            display: block;
            position: relative;
            width: 700px;
            height: 750px;

            .screen {
                position: absolute;
                width: 200px;

                &:nth-child(1) {
                    right: 4%;
                    top: 0%;
                }
                &:nth-child(2) {
                    left: 4%;
                    top: 5%;
                }
                &:nth-child(3) {
                    right: 4%;
                    top: 50%;
                }
                &:nth-child(4) {
                    left: 4%;
                    top: 55%;
                }
            }
        }
    }
    
}

</style>