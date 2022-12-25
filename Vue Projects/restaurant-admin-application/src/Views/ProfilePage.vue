<template>
    <form method="post" @submit.prevent="submitForm">
        <div class="main">
            <h1>Update Account</h1>
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
                <input type="submit" class="btn" value="Update Account">
            </div>
        </div>
    </form>
</template>
<script setup>
import { ref } from 'vue'
import axiosClient from '../axiosClient'
import { useUserStore } from '../Store/user'
import useVuelidate from '@vuelidate/core'
import { required , email , minLength} from '@vuelidate/validators'
import router from '@/Router/Router'
const user = useUserStore().getUser
const form = ref({
    name : user.name,
    email : user.email,
    password : user.password,
    id : user.id,
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
        const emailFound = await (await axiosClient.get(`/users?email=${form.value.email}`)).data
        const nameFound = await (await axiosClient.get(`/users?name=${form.value.name}`)).data
        const passFound = await (await axiosClient.get(`/users?password=${form.value.password}`)).data
        if(emailFound.length > 0){
            const emailchange = emailFound.filter((item) => item.email === user.email)
            if(emailchange.length > 0){
                if(nameFound.length > 0){
                    const namechange = nameFound.filter((item) => item.name === user.name)
                    if(namechange.length > 0){
                        const passchange = passFound.filter((item) => item.password === user.password)
                        if(passchange.length > 0){
                            alert('nothing changed')
                        }else{
                            await axiosClient.put(`/users/${form.value.id}`,{
                                name : form.value.name,
                                email : form.value.email,
                                password : form.value.password
                            })
                            useUserStore().updateUser(form.value)
                            alert('Profile Updated')
                            router.push('/Home')
                        }
                    }else{
                        alert('Name Is Found')
                    }
                }else{
                    await axiosClient.put(`/users/${form.value.id}`,{
                        name : form.value.name,
                        email : form.value.email,
                        password : form.value.password
                    })
                    useUserStore().updateUser(form.value)
                    alert('Profile Updated')
                    router.push('/Home')
                }
            }else{
                alert('Email Is Found')
            }
        }else{
            await axiosClient.put(`/users/${form.value.id}`,{
                name : form.value.name,
                email : form.value.email,
                password : form.value.password
            })
            useUserStore().updateUser(form.value)
            alert('Profile Updated')
            router.push('/Home')
        }
    }else{
        alert('Validation Error')
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