<template>
    <div className='container py-5'>
        <h1>Welcome To Cart</h1>
        <button class="my-2 btn btn-primary" @click="clearCart">Clear Cart</button>
        <h4>Total Price : {{totalPrice.toFixed(2)}} $</h4>
        <table class="table table-sm table-striped table-bordered table-hover">
            <thead>
            <tr>
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                    <tr v-for="product of products" :key="product.id">
                        <td>{{product.title}}</td>
                        <td><img :src="product.image" alt=""></td>
                        <td>{{product.price}}</td>
                        <td>{{product.quantity}}</td>
                        <td>
                        <button class="mx-1 btn btn-danger" @click.prevent="deleteFromCart(product)">Delete</button>
                        </td>
                    </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { computed } from "vue"
import store from '../Store'
const products = computed(() => store.state.cart)
const totalPrice = computed(()=> store.getters.totalPrice)
function deleteFromCart(product) {
    store.dispatch('deleteFromCart',product)
}
function clearCart() {
    store.dispatch('clear')
}
</script>
<style scoped>
img{
    width: 100px;
    height: 100px;
}
</style>