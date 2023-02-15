<template>
   <div class="Products">
    <div v-for="product of products" :key="product.id">
        <router-link :to="{name:'ProductsDetails',params:{id:product.id}}">
            <p>{{product.name}}</p>
        </router-link>
    </div>
  </div>
</template>
<script setup>
// eslint-disable-next-line vue/no-setup-props-destructure, no-undef
const { products } = defineProps({
    products: {
        required: true,
    },
})
</script>