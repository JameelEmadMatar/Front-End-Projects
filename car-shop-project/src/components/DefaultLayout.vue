<template>
    <div>
        <NavBarNew/>
        <router-view/>
        <FooterPage/>
    </div>
</template>
<script setup>
import NavBarNew from "@/components/NavBarNew.vue"
import FooterPage from "@/components/FooterPage.vue"
</script>