import { createRouter , createWebHistory } from 'vue-router';
import { useUserStore } from '../Store/user'
const routes = [
    {
        path:'/',
        name:'Home',
        component : import('../components/HomePage.vue'),
    },
    {
        path :'/SignUp',
        name : "SignUp",
        component: import('../Auth/SignUp.vue'),
        meta:{
            title:'SignUp',
            auth : true,
        }
    },
    {
        path :'/Login',
        name : "Login",
        component: import('../Auth/LoginPage.vue'),
        meta:{
            title:'Login',
            auth: true,
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
router.beforeEach((to,from,next) => {
    const user = useUserStore().getUser
    if(user != null && to.meta.auth){ 
        router.push('/')
    }
    next()
})
export default router;