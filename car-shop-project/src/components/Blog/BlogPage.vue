<template>
    <BlogInfo/>
    <BlogViews/>
    <div class="number-page">
        <PageNumber/>
    </div>
</template>
<script setup>
import BlogInfo from './BlogInfo.vue'
import BlogViews from './BlogViews.vue'
import PageNumber from '../Shop/PageNumber.vue'
</script>
<style scoped>
.number-page{
    display: flex;
    justify-content: center;
}
</style>