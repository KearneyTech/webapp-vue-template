import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './../components/HelloWorld.vue';
import Screens from './../components/Screens.vue';
import SpanishLesson from './../components/SpanishLesson.vue';
import Golf from './../components/Golf.vue';
import MediaPlayer from './../components/MediaPlayer.vue';

const routes = [
    {
        path: '/',
        name: "Home",
        component: HelloWorld,
        alias: ["", "/index.html"],
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