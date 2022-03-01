import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {path: '/', component: () => import ('@/modules/demo/pages/Home.vue')},
    {path: '/about', component: () => import ('@/modules/demo/pages/About.vue')},
    {path: '/option', component: () => import ('@/modules/demo/pages/Option.vue')},
    {path: '/:pathMatch(.*)*', component: () => import ('@/modules/shared/pages/NoFoundPage.vue')},
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes,
})

export default router
