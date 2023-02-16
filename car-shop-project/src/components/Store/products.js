import { defineStore } from 'pinia'

export const useProductsStore = defineStore({
    id : 'products',
    state : () => ({
        allProducts : null,
        pageCount : 1,
        totalProductsNumber: null,
        filter : null,
    }),
    getters : {
        getProducts : (state) => state.allProducts,
        getpageCount : (state) => state.pageCount,
        getTotalProductsNumber : (state) => state.totalProductsNumber,
        getFilterProducts : (state) => state.filter,
    },
    actions : {
        updateProducts(Products) {
            this.allProducts = Products
        },
        updatePageCount(pageCount) {
            this.pageCount = pageCount
        },
        updateTotalProductsNumber(number){
            this.totalProductsNumber = number
        },
        filterName(productName){         
            const re = new RegExp(productName.toLowerCase(), "gi");   
            const products  = this.allProducts.filter(item => {
                return JSON.parse(item.name).en.toLowerCase().match(re)
            })        
            this.filter = products
        },
        filterCategory(productCategory){
            const re = new RegExp(productCategory.toLowerCase(), "gi");   
            const products  = this.allProducts.filter(item => {
                return JSON.parse(item.category.name).en.toLowerCase().match(re)
            })        
            this.filter = products
        },
        filterByPrice(min,max){
            const products = this.allProducts.filter(item => {
                return item.price >= min && item.price <= max
            })
            this.filter = products
        }
    },
})