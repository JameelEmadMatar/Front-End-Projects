<template>
    <div class="main-div">
        <div class="container">
            <div class="row">
                <CompanyAccordion/>
                <CompanyFeatures/>
            </div>
        </div>
    </div>
</template>
<script setup>
import CompanyAccordion from './CompanyAccordion.vue'
import CompanyFeatures from './CompanyFeatures.vue'
</script>
<style scoped>
.main-div{
    padding: 40px 0;
}
</style>