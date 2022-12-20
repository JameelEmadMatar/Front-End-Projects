<template>
    <div class="brands">
        <div class="container">
            <h2>Some of the brands I have worked with</h2>
            <div class="row">
                <div class="col-6 col-lg-3 inside p-3">
                    <img src="../../photos/brands/amazon.png">
                </div>
                <div class="col-6 col-lg-3 inside p-3">
                    <img src="../../photos/brands/sony.png">
                </div>
                                <div class="col-6 col-lg-3 inside p-3">
                    <img src="../../photos/brands/adidas.png">
                </div>
                <div class="col-6 col-lg-3 inside p-3">
                    <img src="../../photos/brands/fia.png">
                </div>
                                <div class="col-6 col-lg-3 inside p-3">
                    <img src="../../photos/brands/balance.png">
                </div>
                <div class="col-6 col-lg-3 inside p-3">
                    <img src="../../photos/brands/samsung.png">
                </div>
                                <div class="col-6 col-lg-3 inside p-3">
                    <img src="../../photos/brands/canon.png">
                </div>
                <div class="col-6 col-lg-3 inside p-3">
                    <img src="../../photos/brands/puma.png">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.brands{
    padding: 40px;
    text-align: center;
}
h2{
    margin: 0;
    font-size: 30px;
}
.inside{
    border:2px solid #F6F6F6;
    border-radius: 10px;
    margin-top: 20px;
    margin-right: 10px;
}
img{
    width: 80%;
}
@media screen and (max-width: 767px){
    .col-6{
        width: 46%;
    }
}
@media screen and (min-width: 768px){
    .col-lg-3{
        width: 22%;
    }
    .inside{
        margin-right: 19px;
    }
    .row{
        margin-top: 40px;
        margin-bottom: 40px;
    }
}
</style>