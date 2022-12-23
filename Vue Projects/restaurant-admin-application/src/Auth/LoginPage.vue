<template>
        <form method="get" @submit.prevent="login">
        <div class="main">
            <h1>Login</h1>
            <div class="form-details">
                <div class="error">
                    <input type="email" placeholder="Email" name="email" v-model="form.email">
                    <span v-for="error in v$.email.$errors" :key="error.$uid">{{error.$message}}</span>
                </div>
                <div class="error">
                    <input type="password" placeholder="Password" name="password" v-model="form.password">
                    <span v-for="error in v$.password.$errors" :key="error.$uid">{{error.$message}}</span>
                </div>
                <input type="submit" class="btn" value="Login">
            </div>
            <div class="member">
                <p>Not a member ? <router-link to="/SignUp">SignUp Here</router-link></p>
            </div>
        </div>
    </form>
</template>
<script setup>
import { ref } from 'vue'
import axiosClient from '../axiosClient'
import { useUserStore } from '../Store/user'
import useVuelidate from '@vuelidate/core'
import { required , email , minLength } from '@vuelidate/validators'
import router from '@/Router/Router'
const user = useUserStore()
const form = ref({
    email : null,
    password : null,
})
const rules = {
    email : { required , email },
    password: { required , minLength : minLength(8)},
}
const v$ = useVuelidate(rules,form);
const login = async () =>{
    const result = await v$.value.$validate();
    if(result){
        const returnUsers = await axiosClient.get(`/users?email=${form.value.email}&password=${form.value.password}`)
        const users = returnUsers.data
        if(users.length > 0){
            // send login request and data exist and correct
            user.updateUser(users[0])
            router.push('/')
        }else{
            const returnAllUsers = await axiosClient.get('/users')
            const allUsers = returnAllUsers.data
            const emailFound = allUsers.filter((item) => item.email === form.value.email)
            if(emailFound.length > 0){
                alert('password wrong')
            }else{
                alert('email wrong')
            }
        }
    }else{
        console.log('validation error')
    }
}
</script>
<style scoped>
form{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #DFE9F5;
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
    background-color: #115A76;
    color: #fff;
    font-size: 20px;
    margin-bottom: 25px;
}
.member p{
    color: #5B595C;
    text-align: center;
    margin-bottom: 25px;
    font-family: arial;
}
.member p a{
    color: #1780a8;
    text-decoration: none;
}
.error span{
    margin-left:25px;
    color: red;
}
</style>