<template>
    <section class="golf">
        <h3>Golf</h3>
        <div class="hole hole-1" @click="handleHoleClick">1</div>
        <div class="hole hole-2" @click="handleHoleClick">2</div>
        <div class="hole hole-3" @click="handleHoleClick">3</div>
        <div class="hole hole-4" @click="handleHoleClick">4</div>
        <div class="hole hole-5" @click="handleHoleClick">5</div>
        <div class="hole hole-6" @click="handleHoleClick">6</div>
        <div class="hole hole-7" @click="handleHoleClick">7</div>
        <div class="hole hole-8" @click="handleHoleClick">8</div>
        <div class="hole hole-9" @click="handleHoleClick">9</div>
        <div class="panel">
            Yards: {{ displayHoleYards }}<br>
            Putts: {{ displayPutts }}<br>
            <span>Score: {{ displayHoleScore }}</span><br>
            Tee shot club: {{ displayHoleTeeClub }}
        </div>


    </section>
</template>

<script>
import Debug from './common/Debug.vue';

export default {
    components: {
        Debug
    },
    data() {
        return {
            displayHoleScore: 0,
            displayPutts: 0,
            displayHoleYards: 0,
            displayHoleTeeClub: 0,
            holeScores: [
                {score: 6, putts: 2, yards: 92, teeClub: "7i"},
                {score: 8, putts: 4, yards: 98, teeClub: "8i"},
                {score: 5, putts: 2, yards: 121, teeClub: "7i"},
                {score: 4, putts: 1, yards: 104, teeClub: "8i"},
                {score: 4, putts: 1, yards: 129, teeClub: "6i"},
                {score: 5, putts: 2, yards: 110, teeClub: "8i"},
                {score: 3, putts: 2, yards: 100, teeClub: "9i"},
                {score: 5, putts: 2, yards: 130, teeClub: "6i"},
                {score: 4, putts: 2, yards: 108, teeClub: "9i"},
            ]
        }
    },
    setup() {
        
    },
    methods: {
        handleHoleClick(event) {
            console.log('handleHoleClick');
            console.log(event.target.outerText);
            console.log(event);
            this.holeDisplay(event.target.outerText);
        },
        holeDisplay(index) {
            const currentHole = this.holeScores[index - 1];
            console.log(currentHole.score);
            this.displayHoleScore = currentHole.score;
            this.displayPutts = currentHole.putts;
            this.displayHoleYards = currentHole.yards;
            this.displayHoleTeeClub = currentHole.teeClub;
        }
    }
}
</script>

<style lang="scss">
.golf {
    background: no-repeat url("/images/map-maggie-hathaway.png");
    //background-position: top 10% left 10%;
    background-size: 83%;
    //background: rgba(255,255,255,.2);
    width: 350px;
    height: 500px;
    position: relative;

    .hole {
        position: absolute;
        font-size: 2em;
    }

    .hole-1 {bottom:    195px;    right:  105px;}
    .hole-2 {bottom:    185px;    left:   65px;}
    .hole-3 {bottom:    5px;     left:   45px;}
    .hole-4 {bottom:    95px;     left:   5px;}
    .hole-5 {top:       225px;    left:   5px;}
    .hole-6 {top:       25px;     left:   65px;}
    .hole-7 {top:       25px;     right:  60px;}
    .hole-8 {top:       215px;    right:  85px;}
    .hole-9 {top:       200px;    left:   75px;}

    .panel {
        width: 235px;
        height: 180px;
        background-color: black;
        position: absolute;
        bottom: 0;
        right: 0;
    }
}

</style>