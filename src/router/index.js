import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './../components/HelloWorld.vue';
import Screens from './../components/Screens.vue';

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
