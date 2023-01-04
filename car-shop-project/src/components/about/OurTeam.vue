<template>
    <div class="team">
        <div class="container">
            <div class="info">
                <div class="info-text">
                    <div class="point"></div>
                    <div class="we-get">CREATIVES</div>
                </div>
                <div class="items">
                    OUR TEAM
                </div>
                <div class="car-info">
                    Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages, Automobile Mechanicals, Mechanic Workshops, Auto Painting, Auto Centres.
                </div>
            </div>
            <div class="row">
                <div class=" one">
                    <img src="@/assets/team/1.jpg">
                    <div class="person-details">
                        <h3>MAHMOUD BAGHAGHO</h3>
                        <p>Art Director</p>
                    </div>
                </div>
                <div class=" one">
                    <img src="@/assets/team/3.jpg">
                    <div class="person-details">
                        <h3>AHMED ABD - ALHALEEM</h3>
                        <p>Branding</p>
                    </div>
                </div>
                <div class=" one">
                    <img src="@/assets/team/3.jpg">
                    <div class="person-details">
                        <h3>MOSTAFA AMIN</h3>
                        <p>Graphic Design</p>
                    </div>
                </div>
                <div class=" one">
                    <img src="@/assets/team/4.jpg">
                    <div class="person-details">
                        <h3>AHMED HASSAN</h3>
                        <p>Web Developing</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.team{
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
    justify-content: center;
}
.one{
    border: 1px solid #e5e5e5;
    padding: 0;
    background-color: #fff;
}
.one img{
    width: 100%;
}
.one .person-details{
    padding: 15px;
}
.one .person-details h3{
    font-size: 16px;
}
.one .person-details p{
    font-size: 12px;
}
@media screen and (max-width:991px) {
    .one{
        width: 45%;
    }
    .row{
        gap: 20px;
    }
}
@media screen and (min-width:992px) {
    .one{
        width: calc(25% - 60px);
    }
    .row{
        gap: 20px;
    }
}
</style>