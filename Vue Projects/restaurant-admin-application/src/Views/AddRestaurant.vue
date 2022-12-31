<template>
        <form method="post" @submit.prevent="addRestaurant">
        <div class="main">
            <h1>Add Restaurant</h1>
            <div class="form-details">
                <div class="error">
                    <input type="text" placeholder="Restaurant Name" name="name" v-model="form.name">
                    <span v-if="v$.name.$error">{{v$.name.$errors[0].$message}}</span>
                </div>
                <div class="error">
                    <input type="text" placeholder="Phone" name="phone" v-model="form.phone">
                    <span v-if="v$.phone.$error">{{v$.phone.$errors[0].$message}}</span>
                </div>
                <div class="error">
                    <input type="text" placeholder="Address" name="address" v-model="form.address">
                    <span v-if="v$.address.$error">{{v$.address.$errors[0].$message}}</span>
                </div>
                <input type="submit" class="btn" value="Add Restaurant">
            </div>
        </div>
    </form>
</template>
<script setup>
import { ref } from 'vue'
import axiosClient from '../axiosClient'
import { useUserStore } from '../Store/user'
import useVuelidate from '@vuelidate/core'
import { required , minLength } from '@vuelidate/validators'
import router from '@/Router/Router'
const user = useUserStore()
const form = ref({
    name : "",
    phone : "",
    address : "",
})
const rules = {
    name : { required , minLength:minLength(8)},
    phone : { required , minLength:minLength(10)},
    address : { required , minLength:minLength(4)},
}
const v$ = useVuelidate(rules,form);
const addRestaurant = async () =>{
    const result = await v$.value.$validate();
    if(result){
        const returnRestaurants = await axiosClient.get('/restaurants')
        const restaurants = returnRestaurants.data
        const restaurantFound = restaurants.filter((item) => item.name === form.value.name)
        if(restaurantFound.length > 0 ){
            alert('Restaurant Found Please Enter New Name')
        }else{
            await axiosClient.post('/restaurants',{
                name : form.value.name,
                phone : form.value.phone,
                address : form.value.address,
                userId : user.getUser.id,
            })
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
</style>