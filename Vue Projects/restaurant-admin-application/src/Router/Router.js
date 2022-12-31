import { createRouter , createWebHistory } from 'vue-router';
import { useUserStore } from '../Store/user'
const routes = [
    {
        path:'/Home',
        name:'Home',
        component : import('../components/HomePage.vue'),
        meta : {
            title : 'Home',
            Loged : true,
        }
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
        path :'/',
        name : "Login",
        component: import('../Auth/LoginPage.vue'),
        meta:{
            title:'Login',
            auth: true,
        }
    },
    {
        path:'/Profile',
        name:'Profile',
        component : import('../Views/ProfilePage.vue'),
        meta : {
            title : 'Profile',
            Loged : true,
        }
    },
    {
        path:'/UpdateRestaurant/:id?',
        name:'UpdateRestaurant',
        component : import('../Views/UpdateRestaurant.vue'),
        meta : {
            title : 'UpdateRestaurant',
            Loged : true,
        }
    },
    {
        path : '/Home/AddRestaurant',
        name : 'AddRestaurant',
        component : import('../Views/AddRestaurant.vue'),
        meta : {
            title : 'AddRestaurant',
            Loged : true,
        }
    },
    {
        path : '/Home/RestaurantMenu/:name?',
        name : 'RestaurantMenu',
        component : import('../Views/RestaurantMenu.vue'),
        meta : {
            title : 'RestaurantMenu',
            Loged : true,
        }
    },
    {
        path : '/Home/RestaurantMenu/:name?/AddItems',
        name : 'AddItems',
        component : import('../Views/AddItems.vue'),
        meta : {
            title : 'AddItems',
            Loged : true,
        }
    },
    {
        path : '/Home/RestaurantMenu/:name?/UpdateItem/:id?',
        name : 'UpdateItem',
        component : import('../Views/UpdateItem.vue'),
        meta : {
            title : 'UpdateItem',
            Loged : true,
        }
    },
    {
        path : '/Home/RestaurantMenu/:name?/ViewCategory',
        name : 'ViewCategory',
        component : import('../Views/ViewCategory.vue'),
        meta : {
            title : 'ViewCategory',
            Loged : true,
        }
    },
    {
        path: '/:path(.*)*',
        component: import('../Views/NotFoundPage.vue'),
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
const defaultTitle = 'Restaurants Project'
router.afterEach((to) => {
    const user = useUserStore().getUser
    if(user != null && to.meta.auth){ 
        document.title = defaultTitle
    }else{
        document.title = to.meta.title || defaultTitle;
    }
})
router.beforeEach((to,from,next) => {
    const user = useUserStore().getUser
    if(user != null && to.meta.auth ){
        router.push('/Home')
    }else if(user == null && to.meta.Loged){ 
        router.push('/')
    }
    next()
})
export default router;