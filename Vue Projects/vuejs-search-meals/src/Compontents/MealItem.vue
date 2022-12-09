<template>
            <div class="bg-white shadow rounded-xl">
            <router-link :to="{name:'mealDetails',params:{id:meal.idMeal}}">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full object-cover h-48">
            </router-link>
            <div class="p-3">
                <h3 class="px-3 py-2 font-bold">{{ meal.strMeal }}</h3>
                <p class="px-3 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ante augue. Donec scelerisque tristique neque ac bibendum</p>
                <div class="px-3 py-2">
                    <a :href ="meal.strYoutube" class="px-3 py-2 rounded text-white border-2 border-red-600 bg-red-500 hover:bg-red-600 " target="_blank">Youtube</a>
                </div>
            </div>
        </div>
</template>
<script setup>
const {meal} = defineProps({
    meal: {
        required: true,
        type: Object,
    },
})
</script>