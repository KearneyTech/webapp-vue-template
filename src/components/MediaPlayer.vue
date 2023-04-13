<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MediaPlayer',
    setup() {},
    data() {
        return {
            screenSlideTitle: "",
            screenSlideDescription: ""
        }
    },
    methods: {
        animateIntro() {
            const slideWait = 2000;
            this.screenSlideTitle = "App";
            const schedulePromise = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
            const wait = new Promise((resolve, reject) => {
                setTimeout(()=>resolve("value"), 3000);
            });

            schedulePromise(2000)
                .then((input)=>{
                    this.screenSlideDescription = "Really Cool!";

                });
            schedulePromise(4000)
                .then((input)=>{
                        this.screenSlideTitle = "Info";
                        this.screenSlideDescription = "What it's all about";
                        console.log(slideWait);
                })
                schedulePromise(6000)
                .then(()=>{
                        this.screenSlideTitle = "Control";
                        this.screenSlideDescription = "How to get around";
                        console.log(slideWait);
                })
                schedulePromise(8000)
                .then(()=>{
                        this.screenSlideTitle = "Position";
                        this.screenSlideDescription = "Where we are";
                })
        }
    },
    mounted() {
        this.animateIntro();
    }
})

            /*
playerAction() {
            thumb - image
            start w/ background color
            fade in orbs
            fade in app title
            fade in description
            swap description w/ orb bullet list
            swap app title with module1 title, swap app desc w/ module1 desc
            swap module1 title with module2 title, swap module1 desc w/ module2 desc
            swap module2 title with module3 title, swap module2 desc w/ module3 desc
            swap module3 title with app title, hide module3 desc
            hide app title
            start animation in formation
            rectangle animation
            circle animation
            triangle animation
            rotating triangle animation
            formation

            */
 
</script>

<template>
    <section class="media-player">
        <h3>Media Player</h3>
        <div class="player">
            <div class="screen thumb"></div>
            <div class="screen slides-intro">
                <h3 class="slide-title">{{ screenSlideTitle }}</h3>
                <div class="slide-description">{{ screenSlideDescription }}</div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.media-player {
    .player {
        .screen {
            color: white;
        }

        & .intro {
            & .screen.intro {
                display: block;
            }
            & .screen.thumb {
                display: none;
            }
        }
    }
}
</style>