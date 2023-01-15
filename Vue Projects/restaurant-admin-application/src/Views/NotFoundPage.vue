<template>
    <div class="error-page">
        <div class="container">
            <h1>404</h1>
            <p>Uh Oh! Page not found!</p>
            <router-link to="/" class="btn btn-primary">BACK TO HOMEPAGE</router-link>
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
@media screen and (max-width:575px) {
    h1{
        font-size: 100px;
    }
}
</style>