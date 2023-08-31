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
        margin-bottom: 10px;
        
        &.portrait {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 500px;

            .screen {
                width: 200px;

                img {
                    width: 100%;
                }
            }
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
            width: 780px;
            height: 500px;
            img {
                width: 250px;
                height: 188px;
            }
        }
        &.step {
            display: block;
            position: relative;
            width: 540px;
            height: 600px;

            .screen {
                position: absolute;
                width: 200px;

                &:nth-child(1) {
                    right: 4%;
                    top: 0%;
                }
                &:nth-child(2) {
                    left: 4%;
                    top: 10%;
                }
                &:nth-child(3) {
                    right: 4%;
                    top: 40%;
                }
                &:nth-child(4) {
                    left: 4%;
                    bottom: 10%;
                }
            }
        }
    }
    
}

</style>