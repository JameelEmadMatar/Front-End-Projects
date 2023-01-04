<template>
    <div class="col-lg-6">
        <div class="info">
            <div class="info-text">
                <div class="point"></div>
                <div class="history">HISTORY</div>
            </div>
            <div class="comp">
                THE COMPANY
            </div>
        </div>
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    ABOUT COMPANY
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Duis dapibus aliquam mi, Curabitur vitae velit in neque dictum blansadit. Duis dapibus aliquam mi, eget euismod sceler ut.Duis dapibus aliquam mi, eget euismod scelseerisque at elit quis urna adipiscing , Curabitur vitae velit in neque dictum blandit. Duis dapibus aliqiuam mi, egeet euismod sceler ut.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    OUR MISSION
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Duis dapibus aliquam mi, eget euismod scelerisque ut. Vivamus at elit quis urna adipiscing , Curabitur vitae velit in neque dictum blansadit. Duis dapibus aliquam mi, eget euismod sceler ut.Duis dapibus aliquam mi, eget euismod scelseerisque at elit quis urna adipiscing , Curabitur vitae velit in neque dictum blandit. Duis dapibus aliqiuam mi, egeet euismod sceler ut. Duis dapibus aliquam mi, eget euismod scelerisque ut. Vivamus at elit quis urna adipiscing , Curabitur vitae velit in neque dictum blansadit. Duis dapibus aliquam mi, eget euismod sceler ut.Duis dapibus aliquam mi, eget euismod scelseerisque at elit quis urna adipiscing , Curabitur vitae velit in neque dictum blandit. egeet euismod sceler ut.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    OUR VISION
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Duis dapibus aliquam mi, eget euismod scelerisque ut. Vivamus at elit quis urna adipiscing , Curabitur vitae velit in neque dictum blansadit. Duis dapibus aliquam mi, eget euismod sceler ut.Duis dapibus aliquam mi, eget euismod scelseerisque at elit quis urna adipiscing , Curabitur vitae velit in neque dictum blandit. Duis dapibus aliqiuam mi, egeet euismod sceler ut. Duis dapibus aliquam mi, eget euismod scelerisque ut. Vivamus at elit quis urna adipiscing , Curabitur vitae velit in neque dictum blansadit. Duis dapibus aliquam mi, eget euismod sceler ut.Duis dapibus aliquam mi, eget euismod scelseerisque at elit quis urna adipiscing , Curabitur vitae velit in neque dictum blandit. egeet euismod sceler ut.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    OUR VISION
                </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Duis dapibus aliquam mi, eget euismod scelerisque ut. Vivamus at elit quis urna adipiscing , Curabitur vitae velit in neque dictum blansadit. Duis dapibus aliquam mi, eget euismod sceler ut.Duis dapibus aliquam mi, eget euismod scelseerisque at elit quis urna adipiscing , Curabitur vitae velit in neque dictum blandit. Duis dapibus aliqiuam mi, egeet euismod sceler ut. Duis dapibus aliquam mi, eget euismod scelerisque ut. Vivamus at elit quis urna adipiscing , Curabitur vitae velit in neque dictum blansadit. Duis dapibus aliquam mi, eget euismod sceler ut.Duis dapibus aliquam mi, eget euismod scelseerisque at elit quis urna adipiscing , Curabitur vitae velit in neque dictum blandit. egeet euismod sceler ut.
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
.info-text .history{
    color: #D22E2E;
    font-weight: bold;
}
.comp{
    font-weight: bold;
    font-size: 25px;
}
.accordion-button{
    font-weight: bold;
    background-color: #fff;
    color: black;
    box-shadow: none;
}
.accordion-button::after{
    content: '+';
    color: #D22E2E;
    width: 15px;
    height: 2px;
    position: absolute;
    right: 20px;
    top: 15px;
}
.accordion-button[aria-expanded = "true"]::after{
    content: '-';
    top: 30px;
}
.accordion-body{
    color: #A6A6A6;
}
@media screen and (max-width:991px) {
    .info{
        text-align: center;
    }
    .info-text{
        margin: auto 40%;
    }
    .col-lg-6{
        margin-bottom: 60px;
    }
}
@media screen and (max-width:575px){
    .point{
        display: none;
    }
}
</style>