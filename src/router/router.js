import { createRouter, createWebHistory } from "vue-router";    
import Main from '@/components/Main/Main.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        }
    ]
})
export default router