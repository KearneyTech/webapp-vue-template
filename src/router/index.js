import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './../components/HelloWorld.vue';
import Screens from './../components/Screens.vue';
import SpanishLesson from './../components/SpanishLesson.vue';
import Golf from './../components/Golf.vue';
import MediaPlayer from './../components/MediaPlayer.vue';

const routes = [
    {
        path: "/",
        name: "Home",
        component: HelloWorld,
    },
    {
        path: "/screens",
        name: "Screens",
        component: Screens,
    },
    {
        path: "/spanish-lesson",
        name: "Spanish Lesson",
        component: SpanishLesson,
    },
    {
        path: "/golf",
        name: "Golf",
        component: Golf,
    },
    {
        path: "/media-player",
        name: "Media Player",
        component: MediaPlayer,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default router

/*
Vite Default
./components/HelloWorld.vue

Original code
import AllBreweries from "@/views/AllBreweries.vue"
const routes = [
    {
        path: "/",
        name: "AllBreweries",
        component: AllBreweries,
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
*/
