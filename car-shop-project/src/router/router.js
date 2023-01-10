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
                component : import('@/components/Shop/ShopProducts.vue'),
                meta : {
                    title : 'Shop'
                }
            },
            {
                path : '/Contact',
                name : 'contact',
                component : import('@/components/contact/ContactPage.vue'),
                meta : {
                    title : 'Contact'
                }
            }, 
            {
                path : '/Blog',
                name : 'blog',
                component : import('@/components/Blog/BlogPage.vue'),
                meta : {
                    title : 'Blog'
                }
            },
            {
                path : '/Login',
                name : 'login',
                component : import('@/components/Auth/LoginPage.vue'),
                meta : {
                    title : 'Login'
                }
            },
            {
                path : '/SignUp',
                name : 'signup',
                component : import('@/components/Auth/SignUp.vue'),
                meta : {
                    title : 'Sign Up'
                }
            },
            {
                path: '/:path(.*)*',
                component: import('@/components/Views/NotFoundPage.vue'),
                meta : {
                    title : '404 Not Found'
                }
            },
        ],
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass : 'router-link-exact-active',
});
const defaultTitle = 'Car Shop'
router.afterEach((to) => {
    document.title = to.meta.title || defaultTitle;
})
export default router;