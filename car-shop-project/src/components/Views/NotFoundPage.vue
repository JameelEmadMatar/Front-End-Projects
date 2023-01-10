<template>
    <div class="error-page">
        <div class="container">
            <h1>404</h1>
            <p>Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages, Automobile Mechanicals, Mechanic Workshops, Auto Painting, Auto Centres.</p>
            <router-link to="/" class="main-btn">BACK TO HOMEPAGE</router-link>
        </div>
    </div>
</template>
<style scoped>
.error-page{
    text-align: center;
    padding: 80px 0;
    min-height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
h1{
    font-size: 250px;
    font-weight: bold;
    color: #000000;
}
p{
    color: #a6a6a6;
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 50px;
}
.main-btn{
    border: none;
    padding: 10px;
    color: #fff;
    background-color: #D22E2E;
    text-decoration: none;
}
@media screen and (max-width:575px) {
    h1{
        font-size: 100px;
    }
}
</style>