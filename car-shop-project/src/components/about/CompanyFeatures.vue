<template>
    <div class="col-lg-6">
        <div class="info">
            <div class="info-text">
                <div class="point"></div>
                <div class="history">WE ARE GOOD</div>
            </div>
            <div class="comp">
                OUR FEATURES
            </div>
        </div>
        <div class="row">
            <div class="col-5 one">
                <font-awesome-icon icon="fa-solid fa-clock" />
                <h4>Always Available</h4>
                <p>Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus elit quis urna adipiscing ...</p>
            </div>
            <div class="col-5 one">
                <font-awesome-icon icon="fa-solid fa-clock" />
                <h4>Always Available</h4>
                <p>Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus elit quis urna adipiscing ...</p>
            </div>
            <div class="col-5 one">
                <font-awesome-icon icon="fa-solid fa-clock" />
                <h4>Always Available</h4>
                <p>Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus elit quis urna adipiscing ...</p>
            </div>
            <div class="col-5 one">
                <font-awesome-icon icon="fa-solid fa-clock" />
                <h4>Always Available</h4>
                <p>Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus elit quis urna adipiscing ...</p>
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
.info-text .history{
    color: #D22E2E;
    font-weight: bold;
}
.comp{
    font-weight: bold;
    font-size: 25px;
}
.row{
    gap: 20px;
    justify-content: center;
}
.one{
    background-color: #FAFAFA;
    padding: 30px 20px;
    border: 1px solid #eee;
}
.one h4{
    margin: 15px 0;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
}
.one p{
    color: #A6A6A6;
    margin: 0;
    line-height: 1.6;
    font-size: 13px;
}
svg{
    width: 40px;
    height: 40px;
    color: #D22E2E;
}
@media screen and (max-width:991px) {
    .info{
        text-align: center;
    }
    .info-text{
        margin: auto 40%;
    }
}
@media screen and (max-width:575px){
    .point{
        display: none;
    }
    .history{
        font-size: 10px;
    }
}
</style>