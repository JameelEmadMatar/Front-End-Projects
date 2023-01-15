<template>
    <div class="cat-info" v-if="restaurantCategories != ''">
        <table class="table table-sm table-striped table-bordered table-hover">
            <thead>
            <tr>
                <th>Name</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="category of restaurantCategories" :key="category.id">
                    <td>{{category.categoryName}}</td>
                    <td>
                        <button class="mx-1 btn btn-primary" @click="deleteCategory(category.categoryName,category.id)">Delete</button>
                        <router-link :to="{name:'UpdateCategory', params:{name:restaurantName , id : category.id}}" class="mx-1 btn btn-danger">Update</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import router from '@/Router/Router'
import axiosClient from '../axiosClient'
// eslint-disable-next-line vue/no-setup-props-destructure, no-undef, no-unused-vars
const { restaurantName  , restaurantCategories} = defineProps({
    restaurantName : {
        required : true,
    },
    restaurantCategories : {
        required : true,
    }
})
async function deleteCategory(name,id) {
    const answer = window.confirm("Delete Category ?")
    if(answer){
        await axiosClient.delete(`/categories/${encodeURIComponent(id)}`)
        const categoryItem = await (await axiosClient.get(`/items?categoryName=${name}&restaurantName=${restaurantName}`)).data
        for(let i = 0 ; i < categoryItem.length ; i++){
            await axiosClient.delete(`/items/${encodeURIComponent(categoryItem[i].id)}`)
        }
        router.push(`/Home/RestaurantMenu/${restaurantName}`)
    }
}
</script>
<style scoped>
.cat-info{
    text-align: center;
    margin: 30px 0;
}
.cat-info h3{
    padding: 10px 0;
    background-color: #eee;
}
.table{
    margin: 20px 0;
    text-align: start;
}
th{
    padding-left: 20px;
}
td{
    padding-left: 20px;
}
</style>