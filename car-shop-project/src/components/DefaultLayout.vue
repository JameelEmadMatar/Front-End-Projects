<template>
    <div>
        <NavBar/>
        <router-view/>
        <FooterPage/>
    </div>
</template>
<script setup>
import NavBar from  "@/components/NavBar.vue"
import FooterPage from "@/components/FooterPage.vue"
</script>