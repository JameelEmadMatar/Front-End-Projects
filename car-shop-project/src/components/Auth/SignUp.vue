<template>
    <form method="post" @submit.prevent="signup">
        <div class="main">
            <h1>Register Form</h1>
            <div class="form-details">
                <div class="error">
                    <input type="text" placeholder="User Name" name="User Name" v-model="form.name" >
                </div>
                <div class="error">
                    <input type="email" placeholder="Email" name="email" v-model="form.email" >
                </div>
                <div class="error">
                    <input type="password" placeholder="Password" name="password" v-model="form.password">
                </div>
                <div class="error">
                    <input type="password" placeholder="password_confirmation" name="password_confirmation" v-model="form.password_confirmation">
                </div>
                <div class="check">
                    <input type="checkbox">
                    <p>I Agree To <span>The Terms Of Use</span></p>
                </div>
                <input type="submit" value="Register" class="submit">
            </div>
            <div class="member">
                <p>Have An Account ? <router-link to="/login">Login Here</router-link></p>
            </div>
        </div>
    </form>
</template>
<script setup>
import router from '@/router/router'
import {  ref } from 'vue'
import axiosClient from '@/axiosClient'
import { useUserStore } from '../Store/user'
const user = useUserStore()
const form = ref({
    name : null,
    email : null ,
    password : null,
    password_confirmation : null,
    device_name : 'Web',
})
const signup = async() => { 
   await axiosClient.post(`/register`,{
        name : form.value.name,
        email : form.value.email,
        password : form.value.password,
        password_confirmation : form.value.password_confirmation,
        device_name : form.value.device_name,
    })
    .then(res => {
        user.updateUser(res.data.user.name , res.data.token , res.data.user.id)
        router.push('/')
    })
}
</script>
<style scoped>
form{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    min-height: 600px;
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
input {
    border: none;
    margin: 10px 0;
    padding: 10px;
    border-radius: 12px;
    outline: none;
    background-color: #E4E4E4;
    width: 85%;
    margin-left: 25px;
}
.member p{
    color: #5B595C;
    text-align: center;
    margin-bottom: 25px;
    font-family: arial;
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
.check{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.check input {
    width: 20px;
}
.check p {
    margin: 0;
    margin-left: 10px;
    color: #666666;
    cursor: pointer;
}
.check p span{
    color: black;
}
.check p span:hover{
    color: #D22E2E;
}
.submit{
    color: #fff;
    background-color: #D22E2E;
    margin-bottom: 20px;
}
</style>