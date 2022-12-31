<template>
    <form method="post" @submit.prevent="submitForm">
        <div class="main">
            <h1>Update Item</h1>
            <div class="form-details">
                <div class="error">
                    <input type="text" placeholder="Item Name" name="name" v-model="form.name">
                    <span v-for="error in v$.name.$errors" :key="error.$uid">{{error.$message}}</span>
                </div>
                <div class="error">
                    <input type="text" placeholder="Price" name="price" v-model="form.price">
                    <span v-for="error in v$.price.$errors" :key="error.$uid">{{error.$message}}</span>
                </div>
                <div class="error">
                    <input type="text" placeholder="Quantities" name="quantities" v-model="form.quantities">
                    <span v-for="error in v$.quantities.$errors" :key="error.$uid">{{error.$message}}</span>
                </div>
                <div class="error">
                    <input type="text" placeholder="Description" name="description" v-model="form.description">
                    <span v-for="error in v$.description.$errors" :key="error.$uid">{{error.$message}}</span>
                </div>
                <div class="error">
                    <input type="text" placeholder="CategoryName" name="categoryName" v-model="form.categoryName">
                    <span v-for="error in v$.categoryName.$errors" :key="error.$uid">{{error.$message}}</span>
                </div>
                <input type="submit" class="btn" value="Update Item">
            </div>
        </div>
    </form>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from "vue-router"
import router from '@/Router/Router'
import axiosClient from '../axiosClient'
import { useUserStore } from '../Store/user'
import useVuelidate from '@vuelidate/core'
import { required , maxLength , numeric} from '@vuelidate/validators'
const itId = ref(null)
const form = ref({
    name : "",
    price : "",
    quantities : "",
    description : "",
    categoryName : "" ,
})
const rules = {
    name : { required  },
    price : { required , numeric , maxLength:maxLength(4)},
    quantities : { required , numeric , maxLength:maxLength(4)},
    description : { required , maxLength:maxLength(150)},
    categoryName : { required },
}
const userId = useUserStore().getUser.id
const route = useRoute()
const restaurant = ref(null)
const v$ = useVuelidate(rules,form);
const submitForm = async () =>{
    const result = await v$.value.$validate();
    if(result){
        const itemFound = await (await axiosClient.get(`/items?itemName=${form.value.name}&restaurantName=${route.params.name}`)).data
        if(itemFound.length > 0){
            alert('Item Is Found In This Restaurant')
        }else{
            const categoryFound = await (await axiosClient.get(`/categories?categoryName=${form.value.categoryName}&&restaurantName=${route.params.name}`)).data
            if(categoryFound.length > 0){
                await axiosClient.put(`/items/${route.params.id}`,{
                    itemName : form.value.name,
                    categoryName : form.value.categoryName,
                    price : form.value.price,
                    quantities : form.value.quantities,
                    description : form.value.description,
                    restaurantName : route.params.name,
                })
                router.push(`/Home/RestaurantMenu/${route.params.name}`)
            }else{
                alert('Category Not Found')
            }
        }
    }else{
        alert('validation error')
    }
}
onMounted(async() =>{
    restaurant.value = await (await axiosClient.get(`/restaurants?name=${route.params.name}&userId=${userId}`)).data
    if(restaurant.value.length > 0){
        itId.value = await (await axiosClient.get(`/items?restaurantName=${route.params.name}&id=${route.params.id}`)).data
        if(itId.value.length > 0){
            return
        }else{
            router.push('/Home')
        }
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