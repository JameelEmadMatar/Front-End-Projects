<template>
  <router-view/>
</template>
<script setup>
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
    .then( res => {
      const pageCount  = + (res.data.Products.total / 15).toFixed()
      if(pageCount > 0){
        products.updatePageCount(pageCount + 1)
      }
      products.updateTotalProductsNumber(res.data.Products.total)
      products.updateProducts(res.data.Products.data)
    })
  }
)
</script>
<style>

</style>