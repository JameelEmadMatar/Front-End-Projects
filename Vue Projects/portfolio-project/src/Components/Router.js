import { createRouter , createWebHistory } from 'vue-router';
import DefaultLayout from '../Components/DefaultLayout.vue'
import ProductsCardVue from './Product/ProductsCard.vue';
import AboutMe from './aboutMe/AboutMe.vue';
import ContactPage from './Contact/ContactPage.vue';
import HomePage from './HomePage.vue'
const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children : [
            {path:'/',name:'home',component:HomePage},
            {path:'/Projects',name:"Projects",component:ProductsCardVue},
            {path: '/About',name: 'About',component: AboutMe},
            {path: '/Contact',name: 'Contact',component: ContactPage},
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;