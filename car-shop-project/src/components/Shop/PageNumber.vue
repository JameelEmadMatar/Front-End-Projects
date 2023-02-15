<template>
    <div class="numbers">
        <p>1</p>
        <p @click="load">2</p>
        <p>3</p>
        <p>></p>
    </div>
</template>
<script setup>
import axiosClient from '@/axiosClient'
import { useProductsStore } from '@/components/Store/products'
const products = useProductsStore()
const load = async() =>{
    await axiosClient.get("/products?page=2")
    .then( res => products.updateProducts(res.data.Products.data))
}
</script>
<style scoped>
.numbers{
    display: flex;
    margin: 40px 0;
}
.numbers p {
    background-color: #f6f6f6;
    color: #666666;
    padding: 10px 20px;
    margin-right: 2%;
}
.numbers p:first-child{
    color:#fff;
    background-color: #D22E2E;
}
.numbers p:not(:first-child){
    cursor: pointer;
}
.numbers p:not(:first-child):hover{
    background-color: #D22E2E;
    color: #fff;
}
</style>