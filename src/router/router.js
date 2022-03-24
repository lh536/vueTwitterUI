import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {path: '/', component: () => import ('@/modules/twitterSample/pages/HomeTwitterSamplePage.vue')},
    // {path: '/about', component: () => import ('@/modules/demo/pages/About.vue')},
    // {path: '/option', component: () => import ('@/modules/demo/pages/Option.vue')},
    {path: '/:pathMatch(.*)*', component: () => import ('@/modules/twitterSample/pages/HomeTwitterSamplePage.vue')},
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes,
})

export default router
