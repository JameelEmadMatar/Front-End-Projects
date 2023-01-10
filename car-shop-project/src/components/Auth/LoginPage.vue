<template>
        <form method="post" @submit.prevent="login">
        <div class="main">
            <h1>Login</h1>
            <div class="form-details">
                <div class="error">
                    <input type="email" placeholder="Email" name="email" v-model="form.email">
                </div>
                <div class="error">
                    <input type="password" placeholder="Password" name="password" v-model="form.password">
                </div>
                <input type="submit" class="btn" value="Login">
            </div>
            <div class="member">
                <p>Not a member ? <router-link to="/signup">SignUp Here</router-link></p>
            </div>
        </div>
    </form>
</template>
<script setup>
import router from '@/router/router'
import {  ref} from 'vue'
import { useUserStore } from '../Store/user'
const user = useUserStore()
// onMounted(() => user.updateUser({"name" : "jameel"}))
const form = ref({
    email : null ,
    password : null,
})
function login(){
    if(form.value.email == 'jameelmatar1@gmail.com' && form.value.password == '123'){
    user.updateUser({"email" : form.value.email , "password" : form.value.password})
    router.push('/')
}}
</script>
<style scoped>
form{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    min-height: 500px;
}
.main{
    width: 350px;
    background-color: #fff;
    border-radius: 15px;
}
.main .form-details{
    display: flex;
    flex-direction: column;
}
h1{
    margin: 20px 0;
    text-align: center;
    font-family: arial;
}
input , .btn{
    border: none;
    margin: 10px 0;
    padding: 10px;
    border-radius: 12px;
    outline: none;
    background-color: #E4E4E4;
    width: 85%;
    margin-left: 25px;
}
.btn{
    background-color: #D22E2E;
    color: #fff;
    font-size: 20px;
    margin-bottom: 25px;
}
.member p{
    color: #5B595C;
    text-align: center;
    margin-bottom: 25px;
    font-family: arial;
    cursor: pointer;
}
.member p a{
    color: #D22E2E;
    text-decoration: none;
}
.member p a:hover{
    opacity: 0.8;
}
.error span{
    margin-left:25px;
    color: red;
}
</style>