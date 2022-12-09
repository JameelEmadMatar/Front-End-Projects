<template>
    <div class="main mx-auto p-4">
        <h1 class="text-5xl font-bold mb-5">{{product.title}}</h1>
        <div class="d-flex justify-content-center my-4">
            <img :src="product.image" :alt="product.title">
        </div>
        <h4 class="my-3">Description : {{product.description}}</h4>
        <p class="fw-bold">Price : ${{product.price}}</p>
        <p>Category : {{product.category}}</p>
    </div>
</template>
<script setup>
import { ref , onMounted} from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../../axiosClient";
const route = useRoute()
const product = ref({})

onMounted(() => {
    axiosClient.get(`/products/${route.params.id}`).then(({data}) => {
        product.value = data || {};
    });
});
</script>
<style scoped>
.main{
max-width: 800px;
}
img{
    width: 300px;
    height: 300px;
}
</style>