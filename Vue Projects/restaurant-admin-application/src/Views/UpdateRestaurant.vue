<template>
  <form method="post" @submit.prevent="updateRestaurant">
    <div class="main">
      <h1>Update Restaurant</h1>
      <div class="form-details">
        <div class="error">
          <input
            type="text"
            placeholder="Restaurant Name"
            name="name"
            v-model="form.name"
          />
          <span v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</span>
        </div>
        <div class="error">
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            v-model="form.phone"
          />
          <span v-if="v$.phone.$error">{{ v$.phone.$errors[0].$message }}</span>
        </div>
        <div class="error">
          <input
            type="text"
            placeholder="Address"
            name="address"
            v-model="form.address"
          />
          <span v-if="v$.address.$error">{{
            v$.address.$errors[0].$message
          }}</span>
        </div>
        <input type="submit" class="btn" value="Update Restaurant" />
      </div>
    </div>
  </form>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from "vue-router"
import axiosClient from '../axiosClient'
import useVuelidate from '@vuelidate/core'
import { required , minLength } from '@vuelidate/validators'
import router from '@/Router/Router'
import { useUserStore } from '@/Store/user'
const route = useRoute()
const restaurantData = ref(null)
const userId = useUserStore().getUser.id
const restaurantCat = ref(null)
onMounted(async() =>{
    restaurantData.value = await (await axiosClient.get(`/restaurants?id=${route.params.id}&userId=${userId}`)).data
    if(restaurantData.value.length > 0 ){
        form.value.name = restaurantData.value[0].name
        form.value.phone = restaurantData.value[0].phone
        form.value.address = restaurantData.value[0].address
        restaurantCat.value = restaurantData.value[0].categories
    }else{
        router.push('/Home')
    }
})
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
const updateRestaurant = async () =>{
    const result = await v$.value.$validate();
    if(result){
        const returnRestaurants = await axiosClient.get('/restaurants')
        const restaurants = returnRestaurants.data
        const restaurantFound = restaurants.filter((item) => item.name === form.value.name)
        if(restaurantFound.length > 0){
            const formnamechange = restaurantFound.filter(((item) => item.id == route.params.id))
            if(formnamechange.length > 0){
                const phonechange = restaurantFound.filter(((item) => item.phone == form.value.phone))
                const addresschange = restaurantFound.filter(((item) => item.address == form.value.address))
                if(phonechange.length == 0 || addresschange == 0){
                    await axiosClient.put(`/restaurants/${route.params.id}`,{
                        name : form.value.name,
                        phone : form.value.phone,
                        address : form.value.address,
                        userId : userId
                    })
                    alert('Restaurants Updated')
                    router.push('/Home')
                }else{
                    alert('nothing changed')
                }
            }else{
                alert('The Name Is Found')
            }
        }else{
            await axiosClient.put(`/restaurants/${route.params.id}`,{
                name : form.value.name,
                phone : form.value.phone,
                address : form.value.address,
                userId : userId,
                categories : restaurantCat.value,
            })
            alert('Restaurants Updated')
            router.push('/Home')
        }
    }else{
        alert('Validation Error')
    }
}
</script>
<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #dfe9f5;
}
.main {
  width: 350px;
  background-color: #fff;
  border-radius: 15px;
}
.main .form-details {
  display: flex;
  flex-direction: column;
}
h1 {
  margin: 20px 0;
  text-align: center;
  font-family: arial;
}
input,
.btn {
  border: none;
  margin: 10px 0;
  padding: 10px;
  border-radius: 12px;
  outline: none;
  background-color: #e4e4e4;
  width: 85%;
  margin-left: 25px;
}
.btn {
  background-color: #115a76;
  color: #fff;
  font-size: 20px;
  margin-bottom: 25px;
}
</style>
