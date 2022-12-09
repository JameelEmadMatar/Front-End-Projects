<template>
    <div class="product p-4">
        <CartDetails :products="products"/>
    </div>
</template>
<script setup>
import  { onMounted , ref} from 'vue'
import axiosClient from '../../axiosClient.js'
import CartDetails from '../Views/CartDetails.vue'
const products = ref([]);
onMounted(async() => {
    axiosClient.get('/products')
    .then(({data})=>{
        products.value = data
    });
});
</script>