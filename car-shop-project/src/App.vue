<template>
  <router-view/>
</template>
<script setup>
/*
import axiosClient from '@/axiosClient'
import { onMounted } from 'vue'
import { useCategoriesStore } from '@/components/Store/categories'
import { useProductsStore } from '@/components/Store/products'
const categories = useCategoriesStore()
const products = useProductsStore()
onMounted(
  async() => {
    await axiosClient.get("/categories")
    .then( res => categories.updateCategories(res.data))

    await axiosClient.get("/products")
    .then( res => products.updateProducts(res.data.Products.data))
  }
)
*/
</script>
<style>

</style>