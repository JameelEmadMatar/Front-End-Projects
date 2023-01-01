<template>
    <div class="car-view">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-4 main">
                    <div class="img-div">
                        <img src="@/assets/Cars/1.jpg" class="img-fluid" >
                        <div class="black"></div>
                        <div class="content">
                            <div class="point"></div>
                            <div class="content-text">
                                <h2 class="text-light">Car Wheels</h2>
                                <p>Best Metal</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 main">
                    <div class="img-div">
                        <img src="@/assets/Cars/2.jpg" class="img-fluid" >
                        <div class="black"></div>
                        <div class="content">
                            <div class="point"></div>
                            <div class="content-text">
                                <h2 class="text-light">Car Engines</h2>
                                <p>Best Prices</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 main">
                    <div class="img-div">
                        <img src="@/assets/Cars/1.jpg" class="img-fluid" >
                        <div class="black"></div>
                        <div class="content">
                            <div class="point"></div>
                            <div class="content-text">
                                <h2 class="text-light">Car Batteries</h2>
                                <p>Best Quality</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.car-view{
    padding:100px 0;
}
.main{
    display: flex;
    justify-content: center;
}
.col-sm-6{
    margin-bottom: 20px;
}
.img-div{
    position: relative;
}
.img-div .black{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.8
}
.content{
    position: absolute;
    left: 10%;
    top: 50%;
}
.point{
    background-color: #D22E2E;
    width: 10px;
    height: 10px;
}
.content-text{
    margin-top: 10px;
}
.content-text h2{
    margin: 0;
}
.content-text p{
    color: #D22E2E;
}
@media screen and (max-width:575px) {
    .car-view{
        padding: 40px 0;
    }
}
</style>