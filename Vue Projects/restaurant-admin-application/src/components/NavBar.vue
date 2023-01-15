<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container">
        <router-link  to = '/' class="navbar-brand">
            <p>{{name}}</p>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/Home/AddRestaurant">Add New Restaurant</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to='/Profile'>Profile</router-link>
            </li>
            <li class="nav-item">
                <button class="nav-link" @click="logout">LogOut</button>
            </li>
        </ul>
        </div>
        </div>
    </nav>
</template>
<script setup>
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
nav{
    padding: 20px 0;
}
.navbar-brand{
    cursor: pointer;
}
.nav-item{
    margin: 0 5px;
}
.nav-item .router-link-exact-active {
    color: #115A76;
}
button{
    border: none;
    background-color: transparent;
}
</style>