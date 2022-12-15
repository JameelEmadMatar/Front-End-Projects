<template>
    <div>
        <NavBar/>
        <router-view/>
        <AppFooter/>
    </div>
</template>
<script setup>
import NavBar from './NavBar.vue'
import AppFooter from '../Components/AppFooter.vue'
</script>