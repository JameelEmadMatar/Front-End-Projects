<template>
    <div class="blog-info">
        <div class="container">
            <div class="blog-details">
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
.blog-info{
    background-color: #F6F6F6;
    padding: 40px 0;
}
.blog-details{
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
.blog-details div , a{
    color: #CFCFD8;
}
a{
    text-decoration: none;
}
a:first-child:hover{
    color: #D22E2E;
}
</style>