<template>
    <div class="brands">
        <div class="container">
            <div class="info">
                <div class="info-text">
                    <div class="point"></div>
                    <div class="we-get">AWESOME</div>
                </div>
                <div class="items">
                    OUR BRANDS
                </div>
                <div class="car-info">
                    Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages, Automobile Mechanicals, Mechanic Workshops, Auto Painting, Auto Centres.
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-lg-3 brand-info">
                    <img src="@/assets/brands/1.png">
                </div>
                <div class="col-md-4 col-lg-3 brand-info">
                    <img src="@/assets/brands/2.png">
                </div>
                <div class="col-md-4 col-lg-3 brand-info">
                    <img src="@/assets/brands/3.png">
                </div>
                <div class="col-md-4 col-lg-3 brand-info">
                    <img src="@/assets/brands/4.png">
                </div>
                <div class="col-md-4 col-lg-3 brand-info">
                    <img src="@/assets/brands/5.png">
                </div>
                <div class="col-md-4 col-lg-3 brand-info">
                    <img src="@/assets/brands/6.png">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.brands{
    background-color: #F9F9F9;
    padding: 80px 0;
    margin-bottom: 80px;
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
.brand-info{
    padding: 40px;
    border: 1px solid #eee;
    background-color: #fff;
    margin-bottom: 20px;
}
img{
    max-width: 100%;
}
@media screen and (max-width:767px) {
    .brand-info{
        flex: 0 0 auto;
        width: 50%;
        padding: 20px;
    }
}
</style>