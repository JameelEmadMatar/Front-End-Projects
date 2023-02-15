import { defineStore } from 'pinia'

export const useProductsStore = defineStore({
    id : 'products',
    state : () => ({
        allProducts : null,
    }),
    getters : {
        getProducts : (state) => state.allProducts,
    },
    actions : {
        updateProducts(Products) {
            this.allProducts = Products
        }
    },
})