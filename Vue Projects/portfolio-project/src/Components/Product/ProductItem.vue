<template>
    <div class="card shadow rounded mt-2 border-0 p-0" v-for="product in Products " :key="product.id">
        <img :src="getImgUrl(product.id)" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{product.title}}</h5>
            <p class="card-text">{{product.text}}</p>
        </div>
    </div>
</template>
<script setup>
// eslint-disable-next-line vue/no-setup-props-destructure, no-undef
const { Products } = defineProps({
    Products: {
        required: true,
        type: Array,
    },
})
function getImgUrl(id) {
    return require("../../photos/Products/" + id + ".jpg")
}
</script>
<style scoped>
.card{
    border-radius: 10px;
    overflow: hidden;
}
.card-title{
    color:#1E3851;
    font-weight: bold;
}
.card-text{
    color:#1E3851;
    font-size: 18px;
    font-weight: 500;
}
@media screen and (max-width:767px){
    h1{
        font-size: 24px;
    }
    .p-search{
        font-size: 16px;
    }
    span{
        display: none;
    }
    input{
        margin: 0;
        padding: 10px;
        width: 185px;
    }
    select{
        width: 150px;
        padding: 10px;
        margin-left: 10px;
    }
    .card{
        margin-bottom: 25px;
    }
}
@media screen and (min-width: 768px) and (max-width:991px){
    .card{
        width: 45%;
        margin: auto;
    }
    .row{
        gap: 20px;
    }
}
@media screen and (min-width:992px){
    .card{
        width: 30%;
        margin: 0 8px;
    }
    .row{
        gap: 20px;
    }
}
</style>