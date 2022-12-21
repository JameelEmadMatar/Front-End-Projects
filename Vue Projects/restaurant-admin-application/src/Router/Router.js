import { createRouter , createWebHistory } from 'vue-router';
const routes = [
    {
        path :'/SignUp',
        name : "SignUp",
        component: import('../Auth/SignUp.vue'),
        meta:{
            title:'SignUp',
        }
    },
    {
        path :'/Login',
        name : "Login",
        component: import('../Auth/LoginPage.vue'),
        meta:{
            title:'Login',
        }
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass : 'active',
});
const defaultTitle = 'Resturant Project'
router.afterEach((to) => {
    document.title = to.meta.title || defaultTitle;
})
export default router;