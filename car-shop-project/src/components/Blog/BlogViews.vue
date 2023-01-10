<template>
    <div class="blog-views">
        <div class="container">
            <div class="row">
                <ProductsViews/>
            </div>
        </div>
    </div>
</template>
<script setup>
import ProductsViews from '../about/ProductsViews.vue'
</script>
<style scoped>
.blog-views{
    padding: 80px 0;
}
.row{
    gap: 20px;
    justify-content: center;
}
</style>