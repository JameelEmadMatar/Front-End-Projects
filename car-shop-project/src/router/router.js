import { createRouter , createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        component: import("@/components/DefaultLayout.vue"),
        children : [
            {
                path:'/',
                name:'home',
                component:import('@/components/Views/HomePage.vue'),
                meta : {
                    title : 'Home'
                }
            },
            {
                path:'/about',
                name:'about',
                component:import('@/components/about/AboutPage.vue'),
                meta : {
                    title : 'About'
                }
            },
            {
                path : '/shop',
                name : 'shop',
                component : import('@/components/Shop/ShopProducts.vue')
            },
            {
                path : '/Contact',
                name : 'contact',
                component : import('@/components/contact/ContactPage.vue')
            }, 
        ],
    },
    {
        path : '/Login',
        name : 'login',
        component : import('@/components/Auth/LoginPage.vue')
    },
    {
        path : '/SignUp',
        name : 'signup',
        component : import('@/components/Auth/SignUp.vue')
    }, 
];
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass : 'router-link-exact-active',
});
export default router;