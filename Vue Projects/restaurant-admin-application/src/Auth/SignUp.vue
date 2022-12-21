<template>
    <form method="post" @submit.prevent="submitForm">
        <div class="main">
            <h1>Sign Up</h1>
            <div class="form-details">
                <div class="error">
                    <input type="text" placeholder="User Name" name="name" v-model="form.name">
                    <span v-for="error in v$.name.$errors" :key="error.$uid">{{error.$message}}</span>
                </div>
                <div class="error">
                    <input type="email" placeholder="Email" name="email" v-model="form.email">
                    <span v-for="error in v$.email.$errors" :key="error.$uid">{{error.$message}}</span>
                </div>
                <div class="error">
                    <input type="password" placeholder="Password" name="password" v-model="form.password">
                    <span v-for="error in v$.password.$errors" :key="error.$uid">{{error.$message}}</span>
                </div>
                <input type="submit" class="btn" value="Sign Up">
            </div>
            <div class="member">
                <p>Already a member ? <router-link to="/Login">Login Here</router-link></p>
            </div>
        </div>
    </form>
</template>
<script setup>
import { ref } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required , email , minLength} from '@vuelidate/validators'
import router from '@/Router/Router'
const form = ref({
    name : "",
    email : "",
    password : "",
})
const rules = {
    name : { required , minLength:minLength(8) },
    email : { required , email },
    password : { required , minLength:minLength(8)},
}
const v$ = useVuelidate(rules,form);
const submitForm = async () =>{
    const result = await v$.value.$validate();
    if(result){
        router.push("/Login")
    }else{
        console.log("No");
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