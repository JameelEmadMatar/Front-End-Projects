<template>
    <h1>Home Page</h1>
    <button class="btn btn-primary" @click="logout">Log Out</button>
    <router-link to="/Home/AddRestaurant">
        Add New Restaurant
    </router-link>
    <br>
    <div class="main">
        <p>Welcome <span>{{name}}</span></p>
        <router-link to='Profile'>Profile</router-link>
    </div>
    <UserRestaurants/>
</template>
<script setup>
import UserRestaurants from '../Views/UserRestaurant.vue'
import { useUserStore } from '../Store/user'
import router from '@/Router/Router'
const user = useUserStore()
const name =  user.getUser.name
function logout(){
    user.updateUser(null)
    router.push('/')
}
</script>
<style scoped>
.main{
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    align-items: center;
}
p{
    padding: 10px 20px;
}
span{
    color:blue
}
a{
    text-decoration: none;
    background-color: blue;
    padding: 10px 20px;
    color: #fff;
    border-radius: 8px;
}
</style>