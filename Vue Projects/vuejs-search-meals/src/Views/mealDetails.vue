<template>
    <div class="max-w-[800px] mx-auto p-8">
        
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-2xl">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold">Category</strong> : {{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold">Area</strong> : {{ meal.strArea }}
            </div>
            <div>
                <strong class="font-bold">Tags</strong> : {{ meal.strTags }}
            </div>
        </div>
        <div class="my-3">
            {{ meal.strInstructions}}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
                <ul>
                    <template v-for="(el,index) of new Array(20)">
                        <li v-if="meal[`strIngredient${index + 1}`]" :key="index">
                           {{index + 1}}. {{ meal[`strIngredient${index +1 }`]}}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-3">Measures</h2>
                <ul>
                    <template v-for="(el,index) of new Array(20)">
                        <li v-if="meal[`strMeasure${index + 1}`]" :key="index">
                           {{index + 1}}. {{ meal[`strMeasure${index +1 }`]}}
                        </li>
                    </template>
                </ul>
            </div>
            <div class="mt-4">
                <a :href ="meal.strYoutube" class="px-3 py-2 mr-4 rounded border-2 border-red-600 text-white bg-red-500 hover:bg-red-600" target="_blank">Youtube</a>

                <a :href ="meal.strSource" class="px-3 py-2 mr-4 rounded border-2 border-indigo-600 text-white bg-indigo-500 hover:bg-indigo-600" target="_blank">View Original Source</a>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

const route = useRoute()
const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`).then(({data}) => {
        meal.value = data.meals[0] || {}
    });
});
</script>