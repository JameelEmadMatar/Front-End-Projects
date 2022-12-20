import { createRouter , createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        component: import('../Components/DefaultLayout.vue'),
        children : [
            {
                path:'/',
                name:'home',
                component:import('./HomePage.vue'),
                meta : {
                    title : 'Home'
                }
            },
            {
                path:'/Projects',
                name:"Projects",
                component:import('./Product/ProductsCard.vue'),
                meta : {
                    title : 'Projects',

                }
            },
            {
                path: '/About',
                name: 'About',
                component: import('./aboutMe/AboutMe.vue'),
                meta : {
                    title : 'AboutMe',
                }
            },
            {
                path: '/Contact',
                name: 'Contact',
                component: import( './Contact/ContactPage.vue'),
                meta : {
                    title : 'Contact'
                }
            },
        ],
    },
    {
        path: '/:path(.*)*',
        component: import('./NotFound.vue'),
        meta : {
            title : '404 Not Found'
        }
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass : 'active',
});
const defaultTitle = 'Portfolio Project'
router.afterEach((to) => {
    document.title = to.meta.title || defaultTitle;
})
export default router;