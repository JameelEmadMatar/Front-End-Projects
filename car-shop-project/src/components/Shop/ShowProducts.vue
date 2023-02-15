<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="products">
        <div class="container">
            <div class="row first-row">
                <div class="show">
                    <div class="interface">
                        <div class="one">
                            <input type="text" placeholder="Filter By Name">
                        </div>
                        <div class="two">
                            <input type="text" placeholder="Filter By Category">
                        </div>
                    </div>
                    <div class="row">
                        <div class=" col-sm-6 col-md-3 main" v-for="product of products" :key="product.id">
                            <div>
                                <img :src ="'http://127.0.0.1:8000/storage/' + product.image.path">
                            </div>
                            <div class="content-text">
                                <p>{{JSON.parse(product.category.name).en}}</p>
                                <h4>{{JSON.parse(product.name).en}}</h4>
                                <span>${{product.price}}</span>
                            </div>
                        </div>
                    </div>
                    <PageNumber/>
                    <div class="pag">
                        <paginate
                            :page-count="20"
                            :page-range="3"
                            :margin-pages="2"
                            :click-handler="clickCallback"
                            :prev-text="'Prev'"
                            :next-text="'Next'"
                            :container-class="'pagination'"
                            :page-class="'page-item'"
                        >
                        </paginate>
                    </div>
                </div>
                <div class="filters">
                    <div class="categories">
                        <h4>CATEGORIES</h4>
                        <ul>
                            <li v-for="cate of categories" :key="cate.id">
                                <font-awesome-icon icon="fa-solid fa-angles-right" />
                                <a>{{JSON.parse(cate.name).en}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="filter-price">
                        <h4>FILTER BY PRICE</h4>
                        <div class="range">
                            <p>Min : <input type="number"></p>
                        </div>
                        <div class="range">
                            <p>max : <input type="number"></p>
                        </div>
                        <h5>Price : <span>$50 - $400</span></h5>
                        <button>Filter</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
// import axiosClient from '@/axiosClient'
import Paginate from 'vuejs-paginate-next';
import { useCategoriesStore } from '@/components/Store/categories'
import { useProductsStore } from '@/components/Store/products'
import { onMounted, ref } from 'vue'
import PageNumber from './PageNumber.vue'
const categories = useCategoriesStore().getCategories
const products = ref(null)
onMounted(() => {
    products.value = useProductsStore().getProducts
})
/*
const load = async() =>{
    await axiosClient.get("/products?page=2")
    .then( res => useProductsStore().updateProducts(res.data.Products.data))
    products.value = useProductsStore().getProducts
  }
*/
</script>
<style scoped>
.products{
    padding: 80px 0;
}
.first-row{
    gap: 5%;
}
.show{
    width: 75%;
}
.filters{
    width: 20%
}
.show , .filters {
    padding: 0;
}
.interface{
    display: flex;
    justify-content: space-between;
    border: 1px solid #e5e5e5;
    padding: 15px;
}
.show p{
    margin: 0;
    font-weight: bold;
}
.show select {
    padding: 5px 0px;
    padding-right: 20px;
    padding-left: 10px;
    border: 1px solid #e5e5e5;
    color: #999999;
    margin-left: 10px;
    outline: none;
}
.main{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 30px;
}
.main img{
    width: 100%;
    height: 200px;
}
.content-text{
    margin-top: 20px;
}
.content-text p {
    margin-bottom: 10px;
    font-size: 12px;
    cursor: pointer;
}
.content-text h4{
    cursor: pointer;
}
.content-text span{
    color: #D22E2E;
    font-weight: bold;
}
.content-text p:hover , .content-text h4:hover{
    color: #D22E2E;
}
.filters .categories h4{
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
}
ul{
    margin: 0;
}
li{
    list-style: none;
    margin-left: -30px;
    cursor: pointer;
    margin-bottom: 15px;
} 
li svg {
    margin-right: 6px;
    font-size: 12px;
    color: #D22E2E;
}
li a{
    color: #666666 !important;
}
li a:hover{
    color: #D22E2E !important;
}
.filter-price h4{
    font-size: 20px;
    font-weight: bold;
    margin: 30px 0;
}
.filter-price .range{
    display: flex;
    align-items: center;
}
.filter-price .range p {
    font-weight: bold;
}
.filter-price input {
    width: 80px;
    height: 20px;
    outline: none;
}
.filter-price h5{
    font-size: 16px;
}
.filter-price h5 span{
    color: #D22E2E;
}
.filter-price button{
    background-color: #D22E2E;
    padding: 10px;
    border-radius: 12px;
    width: 100%;
    outline: none;
    border: none;
    color: #Fff;
    font-weight: bold;
    margin-top: 20px;
}
.one input , .two input{
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid #eee;
}
@media screen and (max-width:575px) {
    .main{
        width: 50%;
        margin-bottom: 30px;
    }
    .products{
        padding: 50px 0;
    }
    .show,.filters{
        width: 100%;
    }
    .show{
        padding: 20px;
    }
    .filters{
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }
    .filter-price h4{
        margin-top: -5px;
        margin-bottom: 30px;
    }
}
@media screen and (max-width:767px) {
    .interface{
        display: block;
    }
}
</style>