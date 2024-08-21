/**
* TODOs
* - Fix alignment of all page elements
* - Create Board component
* - Create Cube component
* - Add media background
*/
<template>
    <div id="board" class="flex flex-col justify-center w-64">
        <p class="mb-8">the CUBE</p>
        <div id="cube" :class="['flex', 'flex-wrap', 'justify-center', cubeStyle]">
            <Tile :color="tile1.color" :id="tile1.id" @handleClick="handleTopLeftClick"/>
            <Tile :color="tile2.color" :id="tile2.id" @handleClick="handleTopRight"/>
            <Tile :color="tile3.color" :id="tile3.id" @handleClick="handleBottomLeft"/>
            <Tile :color="tile4.color" :id="tile4.id" @handleClick="handleBottomRight"/>
        </div>
        <p class="mt-8 text-slate-400">Click tiles to change color. Match color of all tiles to solve the Cube.</p>
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
            cubeSolved: false,
            cubeStyle: "fade-in"
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

        this.initCube();
    },
    methods: {
        initCube(){
            this.cubeSolved = false;
            this.cubeStyle = "fade-out";
            this.tile1.color = this.colors[this.randomNumber(4)];
            this.tile2.color = this.colors[this.randomNumber(4)];

            let randomIndex = this.randomNumber(4)
            this.tile3.color = this.colors[randomIndex];

            // Force next color to be different
            randomIndex = (randomIndex === (this.colors.length - 1)) ? 0 : randomIndex + 1;
            this.tile4.color = this.colors[randomIndex];
            setTimeout(this.cubeStyle = "fade-in", 1500);
        },
        evaluateCube(){
            // If all tiles are the same color, the cube is solved
            if(
                this.tile1.color === this.tile2.color &&
                this.tile1.color === this.tile3.color &&
                this.tile1.color === this.tile4.color
            ) {
                this.handleCubeSolved();
            }
        },
        handleCubeSolved(){
            this.cubeStyle = "rotate-center";
            setTimeout(()=>{this.initCube()}, 2500);
        },
        handleTopLeftClick() {
            const newColor = this.nextColor(this.tile1.color);
            this.tile1.color = newColor;
            this.evaluateCube();
        },
        handleTopRight(){
            const newColor = this.nextColor(this.tile2.color);
            this.tile2.color = newColor;
            this.evaluateCube();
        },
        handleBottomLeft(){
            const newColor = this.nextColor(this.tile3.color);
            this.tile3.color = newColor;
            this.evaluateCube();
        },
        handleBottomRight(){
            const newColor = this.nextColor(this.tile4.color);
            this.tile4.color = newColor;
            this.evaluateCube();
        },
        nextColor(color: string){
            let colorIndex = this.colors.indexOf(color);
            colorIndex = (colorIndex === (this.colors.length - 1)) ? 0 : colorIndex + 1;
            return this.colors[colorIndex];
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
.fade-in {
	-webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
.rotate-center {
	-webkit-animation: rotate-center 0.6s ease-in-out both;
	        animation: rotate-center 0.6s ease-in-out both;
}
.fade-out {
	-webkit-animation: fade-out 1s ease-out both;
	        animation: fade-out 1s ease-out both;
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@-webkit-keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

</style>