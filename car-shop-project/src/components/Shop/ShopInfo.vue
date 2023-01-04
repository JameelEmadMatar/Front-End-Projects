<template>
    <div class="product-main">
        <div class="container">
            <div class="product-details">
                <h2>SHOP GRID RIGHT SIDEBAR</h2>
                <div>
                    <router-link to="/">Home</router-link>
                    /
                    <a>Shop</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.product-main{
    background-color: #F6F6F6;
    padding: 40px 0;
}
.product-details{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
h2{
    margin: 0;
    font-size: 35px;
    font-weight: bold;
    font-family: arial;
}
.product-details div , a{
    color: #CFCFD8;
}
a{
    text-decoration: none;
}
a:first-child:hover{
    color: #D22E2E;
}
</style>