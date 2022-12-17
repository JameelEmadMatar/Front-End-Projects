<template>
    <div class="products text-center">
        <div class="container">
            <h1>Projects Portfolio</h1>
            <p class="p-search">Search projects by title or filter by category</p>
            <div class="d-flex justify-content-between my-4 search">
                <div class="d-flex">
                    <span class="shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search text-ternary-dark dark:text-ternary-light"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </span>
                    <input v-model="searchWord" @input="searchDis" @blur="defaultSearch" class="border" type="text" placeholder="Search Projects">
                </div>
                <div>
                    <select class="border" v-model="optionsellect" @change="options">
                        <option>All Projects</option>
                        <option>Web Application</option>
                        <option>Mobile Application</option>
                        <option>UI/UX Design</option>
                        <option>Branding</option>
                    </select>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <ProductItem :Products="Products"/>
                </div>
                <router-link :to="{name:'Projects'}">
                    <button class="btn">More Projects</button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script setup>
import ProductItem from './ProductItem.vue'
import store from '../../Store'
import { computed, onMounted, ref } from 'vue'
const optionsellect = ref("All Projects");
const searchWord = ref('');
const Products = computed(()=>store.state.ProductSellected)
function defaultSearch(){
    searchWord.value = ''
    store.dispatch('showSearchProducts',searchWord.value);   
}
function options(){
    store.dispatch('showSellectedProducts',optionsellect.value);
}
function searchDis(){
    store.dispatch('showSearchProducts',searchWord.value);
}
onMounted(() => store.dispatch('showSellectedProducts',optionsellect.value))
</script>
<style scoped>
.products{
    margin-top: 50px;
    margin-bottom: 50px;
}
.search{
    border-bottom:2px solid #e5e7eb;
    padding-bottom: 20px;
}
h1{
    font-size: 52px;
    font-weight: bolder;
    color: #1E3851;
    margin-bottom: 40px;
}
p{
    color: #102D44;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: Arial, Helvetica, sans-serif;
}
span{
    background-color: #F7F8FC;
    border-radius: 6px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
svg{
    color: #213B53;
    cursor: pointer;
}
input , select{
    margin-left: 20px;
    border-radius: 10px;
    padding: 10px 20px;
}
.btn{
    padding: 10px 20px;
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: #4F46E5;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    opacity: 0.8;
    cursor: pointer;
    margin-top: 50px;
    margin-bottom: 20px;
}
.btn:hover{
    opacity: 1;
}
@media screen and (max-width:767px){
    h1{
        font-size: 24px;
    }
    .p-search{
        font-size: 16px;
    }
    span{
        display: none;
    }
    input{
        margin: 0;
        padding: 10px;
        width: 185px;
    }
    select{
        width: 150px;
        padding: 10px;
        margin-left: 10px;
    }
}
@media screen and (min-width: 768px) and (max-width:991px){
    .row{
        gap: 20px;
    }
}
@media screen and (min-width:992px){
    .row{
        gap: 20px;
    }
}
</style>