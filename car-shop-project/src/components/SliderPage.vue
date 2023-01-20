<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/assets/Slider/1.jpg" class="d-block w-100" alt="...">
      <div class="black"></div>
      <div class="content">
        <div class="content-logo">
          <font-awesome-icon icon="fa-solid fa-gear" />
        </div>
        <div>
          <p> The Best Theme For Auto Shops </p>
          <h2>Say Hello To <span>Car Shop !</span></h2>
          <p class="two-p"> Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages, <br>Automobile Mechanicals, Mechanic Workshops, Auto Painting, Auto Centres. </p>
        </div>
        <div class="btns">
          <button class="one">CHECH IT NOW</button>
          <button>PURCHASE NOW</button>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/Slider/2.jpg" class="d-block w-100" alt="...">
      <div class="black"></div>
      <div class="content">
        <div class="content-logo">
          <font-awesome-icon icon="fa-solid fa-gear" />
        </div>
        <div>
          <p> The Best Theme For Auto Shops </p>
          <h2>Say Hello To <span>Car Shop !</span></h2>
          <p class="two-p"> Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages, <br>Automobile Mechanicals, Mechanic Workshops, Auto Painting, Auto Centres. </p>
        </div>
        <div class="btns">
          <button class="one">CHECH IT NOW</button>
          <button>PURCHASE NOW</button>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/Slider/3.jpg" class="d-block w-100" alt="...">
      <div class="black"></div>
      <div class="content">
        <div class="content-logo">
          <font-awesome-icon icon="fa-solid fa-gear" />
        </div>
        <div>
          <p> The Best Theme For Auto Shops </p>
          <h2>Say Hello To <span>Car Shop !</span></h2>
          <p class="two-p"> Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages, <br>Automobile Mechanicals, Mechanic Workshops, Auto Painting, Auto Centres. </p>
        </div>
        <div class="btns">
          <button class="one">CHECH IT NOW</button>
          <button>PURCHASE NOW</button>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>
<style scoped>
.carousel-indicators .active{
  background-color: #D22E2E;
}
img{
  height: 600px;
}
.carousel-item{
  position: relative;
}
.carousel-item .black{
  position: absolute;
  background-color: black;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}
.content{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 70px;
  text-align: center;
  color: #fff;
}
svg{
  width: 60px;
  height: 60px;
  background-color: #D22E2E;
  padding: 20px;
}
p{
  margin: 30px 0;
}
h2{
  text-transform: uppercase;
  font-size: 55px;
  font-family: arial;
  font-weight: bold;
}
span{
  color: #D22E2E;
}
.btns{
  display: flex;
  justify-content: center;
  margin-top: 70px;
}
.one{
  color: #fff;
  background-color: #D22E2E;
  margin-right: 20px;
}
.btns button{
  outline: none;
  border: none;
  padding: 10px 25px;
  font-weight: bold;
  border-radius: 8px;
}
@media screen and (min-width:768px) and (max-width:991px) {
  h2{
    font-size: 40px;
  }
  .two-p{
    font-size: 12px;
  }
}
@media screen and (min-width:550px) and (max-width:767px) {
  h2{
    font-size: 20px;
  }
    .two-p{
    font-size: 9px;
  }
}
@media screen and (max-width:549px) {
  h2{
    font-size: 20px;
  }
    .two-p{
    font-size: 6px;
  }
  .btns button {
    padding: 10px;
    margin-right: 10px;
  }
}
</style>