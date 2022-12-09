import { createRouter , createWebHistory } from 'vue-router';
import DefaultLayout from '../Components/DefaultLayout.vue'
import CartPageVue from '../Components/CardPage.vue'
import HomePageVue from './Views/HomePage.vue';
import productDetails from './Views/productDetails.vue'
const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children : [
            {path: '/', name: 'home',component: HomePageVue},
            {path:'/product/:id?',name:"productDetails",component:productDetails},
            {path: '/cart',name: 'cart',component: CartPageVue},
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;