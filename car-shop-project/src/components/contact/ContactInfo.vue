<template>
    <div class="contact-info">
        <div class="container">
            <div class="contact-details">
                <h2>Contact</h2>
                <div>
                    <router-link to="/">Home</router-link>
                    /
                    <a >Contact</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.contact-info{
    background-color: #F6F6F6;
    padding: 40px 0;
}
.contact-details{
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
.contact-details div , a{
    color: #CFCFD8;
}
a{
    text-decoration: none;
}
a:first-child:hover{
    color: #D22E2E;
}
</style>