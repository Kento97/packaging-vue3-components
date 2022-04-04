import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Container from "@/layout/container/src/index.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Container,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/chooseIcon',
                    name: "chooseIcon",
                    component: () => import('@/views/chooseIcon/index.vue'),
                },
                {
                    path: '/chooseArea',
                    name: "chooseArea",
                    component: () => import('@/views/chooseArea/index.vue'),
                },
                {
                    path: '/trend',
                    name: "trend",
                    component: () => import('@/views/trend/index.vue'),
                },
            ]
        },
    ]
});

export default router;
