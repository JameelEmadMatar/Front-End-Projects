<template>
    <div>
        <div class="flex justify-center gap-1 mt-10">
            <router-link  :to="{name:'byLetter', params : {letter}}" v-for="letter of letters" :key="letter">
                {{letter}}
            </router-link>
        </div>
        <Meals :meals="meals"/>
    </div>
</template>
<script setup>
import { computed, onMounted, watch } from "@vue/runtime-core"
import { useRoute } from "vue-router"
import store from '../Store'
import Meals from '../Compontents/Meals.vue'
const route = useRoute()
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
const meals = computed(() => store.state.mealsByLetter)
function searchMealsByLetter() {
    store.dispatch('searchMealsByLetter',route.params.letter)
}
watch(route,()=>{
    searchMealsByLetter();
});
onMounted(()=>{
    searchMealsByLetter();
})
</script>