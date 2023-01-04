<template>
    <div class="news">
        <div class="container">
            <div class="info">
                <div class="info-text">
                    <div class="point"></div>
                    <div class="we-get">IN THE NEWS</div>
                </div>
                <div class="items">
                    LATEST NEWS
                </div>
                <div class="car-info">
                    Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages, Automobile Mechanicals, Mechanic Workshops, Auto Painting, Auto Centres.
                </div>
            </div>
            <div class="row">
                <div class="one">
                    <img src="@/assets/news/1.jpg" >
                    <div class="card-body">
                        <h6>Framing and Insulating Walls In Warehouse and Corporate</h6>
                        <ul>
                            <li>
                                On:
                                <span class="s-1"> Feb 12, 2015</span>
                            </li>
                            <li>
                                By:
                                <span> Begha</span>
                            </li>
                            <li>
                                Comments:
                                <span> 45</span>
                            </li>
                        </ul>
                        <p>Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus elit quis urna adipiscing, Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus elit quis urna adipiscing ...</p>
                    </div>
                </div>
                <div class="one">
                    <img src="@/assets/news/2.jpg" >
                    <div class="card-body">
                        <h6>Framing and Insulating Walls In Warehouse and Corporate</h6>
                        <ul>
                            <li>
                                On:
                                <span class="s-1"> Feb 12, 2015</span>
                            </li>
                            <li>
                                By:
                                <span> Begha</span>
                            </li>
                            <li>
                                Comments:
                                <span> 45</span>
                            </li>
                        </ul>
                        <p>Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus elit quis urna adipiscing, Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus elit quis urna adipiscing ...</p>
                    </div>
                </div>
                <div class="one">
                    <img src="@/assets/news/3.jpg" >
                    <div class="card-body">
                        <h6>Framing and Insulating Walls In Warehouse and Corporate</h6>
                        <ul>
                            <li>
                                On:
                                <span class="s-1"> Feb 12, 2015</span>
                            </li>
                            <li>
                                By:
                                <span> Begha</span>
                            </li>
                            <li>
                                Comments:
                                <span> 45</span>
                            </li>
                        </ul>
                        <p>Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus elit quis urna adipiscing, Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus elit quis urna adipiscing ...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.news{
    background-color: #F9F9F9;
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
.one{
    background-color: #fff;
    padding: 0;
    border-radius: 12px;
    overflow: hidden;
}
.one img{
    width: 100%;
    cursor: pointer;
}
.card-body{
    padding: 15px;
}
.card-body h6{
    margin: 0;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
}
.card-body h6:hover{
    color: #D22E2E;
}
.par{
    border: 1px solid #eee;
    display: flex;
    padding: 5px;
    margin-top: 15px;
}
ul{
    display: flex;
    border: 1px solid #e5e5e5;
    font-size: 11px;
    justify-content: space-between;
    padding: 5px;
    margin: 15px 0;
}
li{
    list-style: none;
    padding: 0 10px;
}
span{
    color: #D22E2E;
}
.s-1{
    color: #b2b2b2;
}
p{
    margin: 10px 0;
    font-size: 13px;
    color: #a6a6a6;
}
.row{
    gap: 20px;
    justify-content: center;
}
@media screen and (min-width:768px) {
    .one{
        width: 30%;
    }
}
</style>