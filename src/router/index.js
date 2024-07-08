import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import SuratDetail from '../components/SuratDetail.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/surah',
        name: 'About',
        component: About
    },
    {
        path: '/surat/:id',
        name: 'SuratDetail',
        component: SuratDetail
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router