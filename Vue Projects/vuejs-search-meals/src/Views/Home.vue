<template>
    <div class="flex flex-col p-8">
        <h1 class="text-4xl font-bold mb-2 ml-8">Random Meals</h1>
        <Meals :meals="meals"/>
    </div>
</template>

<script setup>
import { onMounted , ref} from 'vue';
import axiosClient from '../axiosClient'
import Meals from '../Compontents/Meals.vue'

const meals = ref([]);
onMounted(async () => {
    for(let i=0 ; i < 25 ; i++){
        axiosClient.get('/random.php')
        .then(({data})=>{
            meals.value.push(data.meals[0])
        });
    }
})
</script>