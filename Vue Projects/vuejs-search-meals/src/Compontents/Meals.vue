<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :meal="meal" :key="meal.idMeal"/>
    </div>
    <div v-if="!meals" class="flex justify-center text-gray-600">
        <h2>There Are No Meals</h2>
    </div>
</template>
<script setup>
import MealItem from './MealItem.vue'
const {meals} = defineProps({
    meals: {
        required: true,
    },
})
</script>