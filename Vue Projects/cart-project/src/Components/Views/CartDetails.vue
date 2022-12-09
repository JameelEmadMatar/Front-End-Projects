<template>
    <div class="container">
        <div class="row">
            <CartItem v-for="product of products" :product="product" :key="product.id"/>
        </div>
    </div>
</template>
<script setup>
import CartItem from './CartItem.vue'
// eslint-disable-next-line vue/no-setup-props-destructure, no-undef, no-unused-vars
const { product } = defineProps({
    products: {
        required: true,
        type: Array,
    },
})
</script>