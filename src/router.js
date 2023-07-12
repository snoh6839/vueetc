import { createWebHistory, createRouter } from "vue-router";
import containerComponent from './components/containerComponent.vue'
import postComponent from './components/postComponent.vue'

const routes = [
    {
        path: '/',
        component: containerComponent,
    }, 
    {
        path: '/post',
        component: postComponent,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;