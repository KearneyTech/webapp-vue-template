<template>
    <div id="board">
        <div id="cube">
            <div id="topLeft" @click="handleTopLeftClick" class="tile"></div>
            <div id="topRight"> @click="handleTopRight" class="tile"</div>
            <div id="bottomLeft" @click="handleBottomLeft" class="tile"></div>
            <div id="bottomRight" @click="handleBottomRight" class="tile"></div>
        </div>
    </div>
    <p>

    </p>
</template>
<script lang="ts">
import { defineComponent } from "vue";

class Tile {
    id: string;
    color: string;
    style: string;
    clicked: boolean;

    constructor() {
        this.id = '';
        this.color = '';
        this.style = '';
        this.clicked = false;
    }
};

export default defineComponent({
    data(){
        return {
            tiles: []
        }
    },
    methods: {
        initCube(){
            // Randomly choose first tile's color
            // Assign next tile color other than first, to prevent one color for all tiles
            // Assign remaining tiles random colors
        },
        evaluateCube(){
            // If all tiles are the same color, the cube is solved
        },
        handleCubeSolved(){
            // Initialize next cube
            // Remove solved cube
        }
    }
});
</script>
<style lang="scss">
#cube {
    display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 500px;

    .tile {
        width: 200px;
    }
}
</style>