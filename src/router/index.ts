import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Container from "@/layout/container/src/index.vue";

const routes = [
    {
        path: '/',
        component: Container,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home,
                meta: {
                    label: '首页',
                    icon: 'IconMenu'
                },
                children: []
            },
            {
                path: '/chooseIcon',
                name: "chooseIcon",
                meta: {
                    label: '图标选择',
                    icon: 'Bell'
                },
                component: () => import('@/views/chooseIcon/index.vue'),
                children: []
            },
            {
                path: '/chooseArea',
                name: "chooseArea",
                meta: {
                    label: '省市区选择',
                    icon: 'Apple'
                },
                component: () => import('@/views/chooseArea/index.vue'),
                children: []
            },
            {
                path: '/trend',
                name: "trend",
                meta: {
                    label: '趋势标记',
                    icon: 'Cherry'
                },
                component: () => import('@/views/trend/index.vue'),
                children: []
            },
            {
                path: '/notification',
                name: "notification",
                meta: {
                    label: '通知菜单',
                    icon: 'Coffee'
                },
                component: () => import('@/views/notification/index.vue'),
                children: []
            },
            {
                path: '/menu',
                name: "menu",
                meta: {
                    label: '导航菜单',
                    icon: 'Food'
                },
                component: () => import('@/views/menu/index.vue'),
                children: []
            },
            {
                path: '/progress',
                name: "progress",
                meta: {
                    label: '进度条',
                    icon: 'ForkSpoon'
                },
                component: () => import('@/views/progress/index.vue'),
                children: []
            },
            {
                path: '/chooseTime',
                name: "chooseTime",
                meta: {
                    label: '时间选择器',
                    icon: 'HotWater'
                },
                component: () => import('@/views/chooseTime/index.vue'),
                children: []
            },
            {
                path: '/chooseDate',
                name: "chooseDate",
                meta: {
                    label: '日期选择器',
                    icon: 'Calendar'
                },
                component: () => import('@/views/chooseDate/index.vue'),
                children: []
            },
            {
                path: '/chooseCity',
                name: "chooseCity",
                meta: {
                    label: '城市选择',
                    icon: 'Eleme'
                },
                component: () => import('@/views/chooseCity/index.vue'),
                children: []
            },
            {
                path: '/form',
                name: "form",
                meta: {
                    label: '表单',
                    icon: 'Setting'
                },
                component: () => import('@/views/form/index.vue'),
                children: []
            },
            {
                path: '/modalForm',
                name: "modalForm",
                meta: {
                    label: '模态框',
                    icon: 'Setting'
                },
                component: () => import('@/views/modalForm/index.vue'),
                children: []
            }, {
                path: '/table',
                name: "table",
                meta: {
                    label: '表格',
                    icon: 'Setting'
                },
                component: () => import('@/views/table/index.vue'),
                children: []
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
