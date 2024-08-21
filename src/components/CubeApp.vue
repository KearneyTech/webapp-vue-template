/**
* TODOs
* - Fix alignment of all page elements
* - Create Board component
* - Create Cube component
* - Add photo background
* - Create CSS animations
* - Scene? location
*/
<template>
    <div id="board" class="flex flex-col justify-center w-64">
        <div id="cube" class="flex flex-wrap justify-center">
            <Tile :configuration="tile1" @handleClick="handleTopLeftClick"/>
            <Tile :configuration="tile2" @handleClick="handleTopRight"/>
            <Tile :configuration="tile3" @handleClick="handleBottomLeft"/>
            <Tile :configuration="tile4" @handleClick="handleBottomRight"/>
        </div>
        <p>Click tiles to change color. Match color of all tiles to solve the Cube.</p>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Tile from "./cube/Tile.vue";

type TileObject = {
    id: string;
    color: string;
    style: string;
    content: string;
    clicked: boolean;
};

export default defineComponent({
    name: 'CubeApp',
    components: {Tile},
    data(){
        return {
            colors: ['red', 'blue', 'green', 'white'],
            tile1: {} as TileObject,
            tile2: {} as TileObject,
            tile3: {} as TileObject,
            tile4: {} as TileObject,
        }
    },
    mounted() {
        this.tile1 = {
            id: 'tile1',
            color: '',
            style: 'tile',
            content: '',
            clicked: false
        } as TileObject;

        this.tile2 = {
            id: 'tile2',
            color: '',
            style: 'tile',
            content: '',
            clicked: false
        } as TileObject;

        this.tile3 = {
            id: 'tile3',
            color: '',
            style: 'tile',
            content: '',
            clicked: false
        } as TileObject;

        this.tile4 = {
            id: 'tile4',
            color: '',
            style: 'tile',
            content: '',
            clicked: false
        } as TileObject;

        this.tile1.color = this.colors[this.randomNumber(4)];
        this.tile2.color = this.colors[this.randomNumber(4)];

        let randomIndex = this.randomNumber(4)
        this.tile3.color = this.colors[randomIndex];

        // Force next color to be different
        randomIndex = (randomIndex === (this.colors.length - 1)) ? 0 : randomIndex + 1;
        this.tile4.color = this.colors[randomIndex];
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
        },
        handleTopLeftClick() {
            const newColor = this.nextColor(this.tile1.color);
            this.tile1.color = newColor;
        },
        nextColor(color: string){
            let colorIndex = this.colors.indexOf(color);
            colorIndex = (colorIndex === (this.colors.length - 1)) ? 0 : colorIndex + 1;
            return this.colors[colorIndex];
        },
        handleTopRight(){
            const newColor = this.nextColor(this.tile2.color);
            this.tile2.color = newColor;
        },
        handleBottomLeft(){
            const newColor = this.nextColor(this.tile3.color);
            this.tile3.color = newColor;
        },
        handleBottomRight(){
            const newColor = this.nextColor(this.tile4.color);
            this.tile4.color = newColor;
        },
        randomNumber(max: number){
            return Math.floor(Math.random() * max);
        },
    }
});
</script>
<style lang="scss">
section.app-vue {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 320px;
    padding-top: 4em;
}
#cube {
    .red {
        background-color: red;
    }
    .blue {
        background-color: blue;
    }
    .green {
        background-color: green;
    }
    .white {
        background-color: white;
    }
}
</style>