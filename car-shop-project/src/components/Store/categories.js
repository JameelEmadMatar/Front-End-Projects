import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore({
    id : 'categories',
    state : () => ({
        allCategories : null,

    }),
    getters : {
        getCategories : (state) => state.allCategories,
    },
    actions : {
        updateCategories(Categories) {
            this.allCategories = Categories
        }
    },
})