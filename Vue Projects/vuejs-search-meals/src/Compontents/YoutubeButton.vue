<template>
    <a :href ="href" class="px-3 py-2 rounded text-white border-2 border-red-600 bg-red-500 hover:bg-red-600 " target="_blank">Youtube</a>
</template>
<script setup>
const { href } = defineProps({ 
    href: String,
})
</script>