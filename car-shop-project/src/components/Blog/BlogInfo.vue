<template>
    <div class="about-info">
        <div class="container">
            <div class="about-details">
                <h2>Blog</h2>
                <div>
                    <router-link to="/">Home</router-link>
                    /
                    <a >Blog</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.about-info{
    background-color: #F6F6F6;
    padding: 40px 0;
}
.about-details{
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
.about-details div , a{
    color: #CFCFD8;
}
a{
    text-decoration: none;
}
a:first-child:hover{
    color: #D22E2E;
}
</style>