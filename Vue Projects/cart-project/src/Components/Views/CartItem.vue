<template>
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 main p-2">
        <div class="card h-100 text-center p-4 border-0 shadow rounded">
            <div>
                <router-link :to="{name:'productDetails',params:{id:product.id}}">
                    <img :src="product.image" class="card-img-top" :alt="product.title" >
                </router-link>
            </div>
            <div class="card-body">
                <h5 class="card-title mb-0 p-2">{{product.title.substring(0,12)}}...</h5>
                <p class="card-text lead fw-bold">${{product.price}}</p>
                <button class="btn btn-primary" @click="addProduct">Add To Cart</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import store from '../../Store'
// eslint-disable-next-line vue/no-setup-props-destructure, no-undef
const { product } = defineProps({
    product: {
        required: true,
        type: Object,
    },
})
function addProduct() {
    store.dispatch('addToCart',product.id)
}
</script>
<style scoped>
.card-title{
    font-size:18px
}
img{
    height: 250px;
}
</style>