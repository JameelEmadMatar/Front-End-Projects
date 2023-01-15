<template>
    <div class="container">
        <div class="main">
            <router-link class="btn btn-primary" :to="{name:'AddCategory', params:{name:route.params.name}}">Add Categories</router-link>
            <router-link class="btn btn-success" :to="{name:'RestaurantMenu', params:{name:route.params.name}}">Back To Menu</router-link>
        </div>
        <div class="info" v-for="rest of restaurant" :key="rest.id">
            <h3>{{rest.name}}</h3>
            <p>{{rest.address}}</p>
        </div>
        <div class="delete">
            <button class="btn btn-danger" v-if="restaurantCategories != ''" @click="deleteAllItems">Delete All Categories</button>
        </div>
        <div class="float-fix"></div>
        <ViewCategoryTabel :restaurantCategories="restaurantCategories" :restaurantName="route.params.name" />
        <div v-if="restaurantCategories == ''" class="alert alert-warning">
            <h2>No Categories Added Yet</h2>
        </div>
    </div>
</template>
<script setup>
import ViewCategoryTabel from './ViewCategoryTabel.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from "vue-router"
import router from '@/Router/Router'
import axiosClient from '../axiosClient'
import { useUserStore } from '../Store/user'
const userId = useUserStore().getUser.id
const route = useRoute()
const restaurant = ref(null)
const restaurantCategories  = ref('');
onMounted(async() =>{
    restaurant.value = await (await axiosClient.get(`/restaurants?name=${route.params.name}&userId=${userId}`)).data
    if(restaurant.value.length > 0){
        await axiosClient.get(`/categories?restaurantName=${restaurant.value[0].name}`)
        .then((res) => restaurantCategories.value = res.data)
        .catch(() => restaurantCategories.value = '')
    }else{
        router.push('/Home')
    }
})
const deleteAllItems = async() =>{
    const answer = window.confirm("Delete All Categories ?")
    if(answer){
        for(let i = 0 ; i < restaurantCategories.value.length ; i++ ){
            await axiosClient.delete(`/categories/${encodeURIComponent(restaurantCategories.value[i].id)}`)
            await axiosClient.get(`/items?restaurantName=${restaurant.value[0].name}`).then(res =>{
                const items = res.data
                for(let j = 0 ; j < items.length ; j++){
                    axiosClient.delete(`/items/${encodeURIComponent(items[j].id)}`)
                }
            })
        }
        restaurantCategories.value = ''
    }
}
</script>
<style scoped>
.main{
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
}
.main button{
    margin-right: 10px;
}
.info{
    margin: 30px 0;
    text-align: center;
}
.info p{
    font-size: 12px;
    opacity: 0.7;
}
.delete{
    margin: 20px 0;
}
.delete button{
    float: right;
}
.float-fix{
    clear: both;;
}
</style>