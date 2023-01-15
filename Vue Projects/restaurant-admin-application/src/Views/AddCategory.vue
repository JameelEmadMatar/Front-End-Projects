<template>
    <form method="post" @submit.prevent="submitForm">
        <div class="main">
            <h1>Add Category</h1>
            <div class="form-details">
                <div class="error">
                    <input type="text" placeholder="Category Name" name="name" v-model="form.categoryName">
                    <span v-for="error in v$.categoryName.$errors" :key="error.$uid">{{error.$message}}</span>
                </div>
                <input type="submit" class="btn" value="Add Category">
            </div>
        </div>
    </form>
</template>
<script setup>
import { onMounted , ref } from 'vue'
import { useRoute } from "vue-router"
import axiosClient from '../axiosClient'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import router from '@/Router/Router'
import { useUserStore } from '@/Store/user'
const userId = useUserStore().getUser.id
const form = ref({
    categoryName : "",
})
const rules = {
    categoryName : { required },
}
const route = useRoute()
const v$ = useVuelidate(rules,form);
const submitForm = async () =>{
    const result = await v$.value.$validate();
    if(result){
        const categoryFound = await (await axiosClient.get(`/categories?categoryName=${form.value.categoryName}&&restaurantName=${route.params.name}`)).data
        if(categoryFound.length > 0){
            alert('Category Found')
        }else{
                await axiosClient.post('/categories',{
                categoryName : form.value.categoryName,
                restaurantName : route.params.name,
            })
            router.push(`/Home/RestaurantMenu/${route.params.name}`)
        }
    }else{
        alert('validation error')
    }
}
onMounted(async() =>{
    const restaurant = await (await axiosClient.get(`/restaurants?name=${route.params.name}&userId=${userId}`)).data
    if(restaurant.length > 0){
        return
    }else{
        router.push('/Home')
    }
})
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