import { createRouter , createWebHistory } from 'vue-router';
const routes = [
    {
        path :'/SignUp',
        name : "SignUp",
        component: import('../Auth/SignUp.vue')
    },
    {
        path :'/Login',
        name : "Login",
        component: import('../Auth/LoginPage.vue')
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass : 'active',
});
export default router;