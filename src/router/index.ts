import Game from "@/components/Game.vue";
import Home from "@/components/Home.vue";
import Platform from "@/components/Platform.vue";
import PlayStation from "@/components/PlayStation.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/game",
        component: Game,
    },
    {
        path: "/platform",
        component: Platform,
    },
    {
        path: "/playstation",
        component: PlayStation,
        // component: () => import('@/components/PlayStation.vue')
    },
];

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes,
});

export default router;
