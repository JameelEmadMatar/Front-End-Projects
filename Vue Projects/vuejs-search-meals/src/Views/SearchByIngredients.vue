<template>
    <Meals :meals="meals"/>
</template>
<script setup>
import { computed, onMounted } from "@vue/runtime-core"
import { useRoute } from "vue-router"
import store from '../Store'
import Meals from '../Compontents/Meals.vue'

const route = useRoute()
const meals = computed(() => store.state.mealsByIngredient)
function searchMealsByIngredient() {
    store.dispatch('searchMealsByIngredient',route.params.ingredients)
}
onMounted(()=>{
    searchMealsByIngredient();
})
</script>