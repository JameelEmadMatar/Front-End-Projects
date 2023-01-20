<template>
    <div class="container">
        <div class="info">
            <div class="info-text">
                <div class="point"></div>
                <div class="we-get">WE GET</div>
            </div>
            <div class="items">
                NEW ITEMS
            </div>
        </div>
    </div>
    <div id="carouselExampleIndicators1" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
    <div class="container">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="row">
                    <div class=" col-sm-6 col-md-3 main">
                        <div>
                            <img src="@/assets/Items/1.jpg" class="img-fluid">
                        </div>
                        <div class="content-text">
                            <p>Bmw</p>
                            <h4>Front LIGHTING</h4>
                            <span>$28.00</span>
                        </div>
                    </div>
                    <div class=" col-sm-6 col-md-3 main">
                        <div>
                            <img src="@/assets/Items/2.jpg" class="img-fluid">
                        </div>
                        <div class="content-text">
                            <p>Opel</p>
                            <h4>Belt Car Engine</h4>
                            <span>$180.00</span>
                        </div>
                    </div>
                    <div class=" col-sm-6 col-md-3 main">
                        <div>
                            <img src="@/assets/Items/3.jpg" class="img-fluid">
                        </div>
                        <div class="content-text">
                            <p>Opel</p>
                            <h4>Brake Discs</h4>
                            <span>$68.00</span>
                        </div>
                    </div>
                    <div class=" col-sm-6 col-md-3 main">
                        <div>
                            <img src="@/assets/Items/4.jpg" class="img-fluid">
                        </div>
                        <div class="content-text">
                            <p>Subaru</p>
                            <h4>OIL FILTER</h4>
                            <span>$40.00</span>
                        </div>
                    </div>
                </div>
        </div>
        <div class="carousel-item">
                <div class="row">
                    <div class=" col-sm-6 col-md-3 main">
                        <div>
                            <img src="@/assets/Items/5.jpg" class="img-fluid">
                        </div>
                        <div class="content-text">
                            <p>Audi</p>
                            <h4>THERMAL FAN</h4>
                            <span>$240.00</span>
                        </div>
                    </div>
                    <div class=" col-sm-6 col-md-3 main">
                        <div>
                            <img src="@/assets/Items/6.jpg" class="img-fluid">
                        </div>
                        <div class="content-text">
                            <p>Toyota</p>
                            <h4>GOLD AIR SYSTEM</h4>
                            <span>$68.00</span>
                        </div>
                    </div>
                    <div class=" col-sm-6 col-md-3 main">
                        <div>
                            <img src="@/assets/Items/3.jpg" class="img-fluid">
                        </div>
                        <div class="content-text">
                            <p>Opel</p>
                            <h4>BRAKE DISCS</h4>
                            <span>$68.00</span>
                        </div>
                    </div>
                    <div class=" col-sm-6 col-md-3 main">
                        <div>
                            <img src="@/assets/Items/4.jpg" class="img-fluid">
                        </div>
                        <div class="content-text">
                            <p>Subaru</p>
                            <h4>OIL FILTER</h4>
                            <span>$40.00</span>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    </div>
</div>
</template>

<style scoped>
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
.carousel{
    margin-bottom: 120px;
}
.carousel-indicators{
    margin-bottom: -60px;
}
.carousel-indicators button{
    background-color: #666666;
    width: 20px;
}
.carousel-indicators .active{
    background-color: #D22E2E;
}
.main{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.content-text{
    margin-top: 20px;
}
.content-text p {
    margin-bottom: 10px;
    font-size: 12px;
    cursor: pointer;
}
.content-text h4{
    cursor: pointer;
}
.content-text span{
    color: #D22E2E;
    font-weight: bold;
}
.content-text p:hover , .content-text h4:hover{
    color: #D22E2E;
}
@media screen and (max-width:575px) {
    .main{
        width: 50%;
        margin-bottom: 30px;
    }
    .info{
        margin-bottom: 40px;
    }
}
</style>