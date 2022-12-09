<template>
    <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
      <router-link :to="{name:'home'}" class="inline-flex items-center px-14 h-full">
        Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link :to="{name:'byName'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
            Search Meal
        </router-link>
        <router-link :to="{name:'byLetter'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
            Search By Letter
        </router-link>
        <router-link :to="{name:'ingredients'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
            Search By Ingredients
        </router-link>
        </div>
    </header>
</template>
<script setup>

</script>