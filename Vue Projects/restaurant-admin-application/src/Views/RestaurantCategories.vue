<template>
    <div class="cat-info">
        <h3>{{Category.categoryName}}</h3>
        <table class="table table-sm table-striped table-bordered table-hover">
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantities</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                    <tr v-for="item of categoryItems" :key="item.id">
                        <td>{{item.itemName}}</td>
                        <td>${{item.price}}</td>
                        <td>{{item.quantities}}</td>
                        <td>{{item.description}}</td>
                        <td>
                        <button class="mx-1 btn btn-primary" @click="deleteItem(item.id)">Delete</button>
                        <router-link class="mx-1 btn btn-danger"  :to="{name:'UpdateItem', params:{ name : restaurant[0].name , id : item.id }}">Update</router-link>
                        </td>
                    </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import axiosClient from '../axiosClient'
const categoryItems = ref(null)
// eslint-disable-next-line vue/no-setup-props-destructure, no-undef, no-unused-vars
const { Category , restaurant} = defineProps({
    Category: {
        required: true,
    },
    restaurant : {
        required : true,
    }
})
onMounted(async() =>{
    categoryItems.value = await (await axiosClient.get(`/items?categoryName=${Category.categoryName}&restaurantName=${Category.restaurantName}`)).data
})
async function getItems() {
    categoryItems.value = await (await axiosClient.get(`/items?categoryName=${Category.categoryName}&restaurantName=${Category.restaurantName}`)).data
}
async function deleteItem(id) {
    const answer = window.confirm("Delete Item ?")
    if(answer){
        await axiosClient.delete(`/items/${encodeURIComponent(id)}`)
        getItems()
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
}
</style>