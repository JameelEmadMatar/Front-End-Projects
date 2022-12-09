import { createRouter , createWebHistory } from 'vue-router';
import DefaultLayout from '../Compontents/DefaultLayout.vue'
import GeustLayout from '../Compontents/GeustLayout.vue'
import Home from '../Views/Home.vue';
import SearchByName from '../Views/SearchByName.vue'
import SearchByLetter from '../Views/SearchByLetter.vue'
import SearchByIngredients from '../Views/SearchByIngredients.vue'
import mealDetails from '../Views/mealDetails.vue'
import Ingredients from '../Views/Ingredients.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children : [
            {path: '/',name: 'home',component: Home},
            {path: '/by-name/:name?',name: 'byName',component: SearchByName},
            {path: '/by-letter/:letter?',name: 'byLetter',component: SearchByLetter},
            {path: '/ingredients',name: 'ingredients',component: Ingredients},
            {path: '/by-ingredients/:ingredients',name: 'byIngredients',component: SearchByIngredients},
            {path: '/meal/:id',name: 'mealDetails',component: mealDetails},
        ],
    },
    {
        path: '/guest',
        component: GeustLayout,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;