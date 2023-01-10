<template>
    <div class="news">
        <div class="container">
            <div class="info">
                <div class="info-text">
                    <div class="point"></div>
                    <div class="we-get">IN THE NEWS</div>
                </div>
                <div class="items">
                    LATEST NEWS
                </div>
                <div class="car-info">
                    Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages, Automobile Mechanicals, Mechanic Workshops, Auto Painting, Auto Centres.
                </div>
            </div>
            <div class="row">
                <ProductsViews/>
            </div>
        </div>
    </div>
</template>
<script setup>
import ProductsViews from './ProductsViews.vue'
</script>
<style scoped>
.news{
    background-color: #F9F9F9;
    padding: 80px 0;
}
.info{
    margin-bottom: 70px;
}
.info-text{
    display: flex;
    align-items: center;
}
.info-text .point{
    width: 10px;
    height: 10px;
    background-color: #D22E2E;
    margin-right: 15px;
}
.info-text .we-get{
    color: #D22E2E;
    font-weight: bold;
}
.items{
    font-weight: bold;
    font-size: 25px;
}
.car-info{
    color: #A6A6A6;
    margin: 30px 0;
}
.row{
    gap: 20px;
    justify-content: center;
}
</style>