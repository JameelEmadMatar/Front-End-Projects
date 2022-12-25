<template>
    <div className='container py-5'>
        <div v-if="restaurants.length > 0">
            <div class="info">
                <h4>List Of Restaurants ({{restaurants.length}})</h4>
                <button class="btn btn-primary" @click="deleteAll">Delete All Restaurants</button>
            </div>
            <table class="table table-sm table-striped table-bordered table-hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                        <tr v-for="restaurant of restaurants" :key="restaurant.id">
                            <td>{{restaurant.name}}</td>
                            <td>{{restaurant.phone}}</td>
                            <td>{{restaurant.address}}</td>
                            <td>
                            <button class="mx-1 btn btn-danger" v-on:click="deleteRestaurant(restaurant.id)">Delete</button>
                            <router-link :to="{name:'UpdateRestaurant', params:{id:restaurant.id}}" class="mx-1 btn btn-danger">Update</router-link>
                            <button class="mx-1 btn btn-danger">View</button>
                            </td>
                        </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <h2>You Dont Have Any Restaurant Yet</h2>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import axiosClient from '../axiosClient'
import { useUserStore } from '../Store/user'
const userId = useUserStore().getUser.id
const  restaurants = ref([])
onMounted(async() =>{
    restaurants.value = await (await axiosClient.get(`/restaurants?userId=${userId}`)).data
})
async function getRestaurants() {
    restaurants.value = await (await axiosClient.get(`/restaurants?userId=${userId}`)).data
}
const deleteRestaurant = async(id) =>{
    const answer = window.confirm("Delete Restaurant ?")
    if(answer){
        await axiosClient.delete(`/restaurants/${encodeURIComponent(id)}`)
        getRestaurants()
    }
}
const deleteAll = async() =>{
    const answer = window.confirm("Delete All Restaurant ?")
    if(answer){
        for(let i = 0 ; i<restaurants.value.length ; i++){
            await axiosClient.delete(`/restaurants/${encodeURIComponent(restaurants.value[i].id)}`)
        }
        getRestaurants()
    }
}
</script>
<style scoped>
.info{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

</style>