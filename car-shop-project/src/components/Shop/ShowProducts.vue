<template>
    <div class="products">
        <div class="container">
            <div class="row first-row">
                <div class="show">
                    <div class="interface">
                        <div class="one">
                            <p>Sort By : </p>
                            <select>
                                <option>Product Name</option>
                                <option>Newest Items</option>
                                <option>oldest Items</option>
                                <option>Higest Price</option>
                                <option>Lowest Price</option>
                            </select>
                        </div>
                        <div class="two">
                            <p>Show : </p>
                            <select>
                                <option>10 Items / Page</option>
                                <option>25 Items / Page</option>
                                <option>50 Items / Page</option>
                                <option>100 Items / Page</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class=" col-sm-6 col-md-3 main">
                            <div>
                                <img src="@/assets/Items/1.jpg" >
                            </div>
                            <div class="content-text">
                                <p>Bmw</p>
                                <h4>Front LIGHTING</h4>
                                <span>$28.00</span>
                            </div>
                        </div>
                        <div class=" col-sm-6 col-md-3 main">
                            <div>
                                <img src="@/assets/Items/2.jpg" >
                            </div>
                            <div class="content-text">
                                <p>Bmw</p>
                                <h4>Front LIGHTING</h4>
                                <span>$28.00</span>
                            </div>
                        </div>
                        <div class=" col-sm-6 col-md-3 main">
                            <div>
                                <img src="@/assets/Items/3.jpg" >
                            </div>
                            <div class="content-text">
                                <p>Bmw</p>
                                <h4>Front LIGHTING</h4>
                                <span>$28.00</span>
                            </div>
                        </div>
                        <div class=" col-sm-6 col-md-3 main">
                            <div>
                                <img src="@/assets/Items/4.jpg" >
                            </div>
                            <div class="content-text">
                                <p>Bmw</p>
                                <h4>Front LIGHTING</h4>
                                <span>$28.00</span>
                            </div>
                        </div>
                                                <div class=" col-sm-6 col-md-3 main">
                            <div>
                                <img src="@/assets/Items/5.jpg" >
                            </div>
                            <div class="content-text">
                                <p>Bmw</p>
                                <h4>Front LIGHTING</h4>
                                <span>$28.00</span>
                            </div>
                        </div>
                        <div class=" col-sm-6 col-md-3 main">
                            <div>
                                <img src="@/assets/Items/6.jpg" >
                            </div>
                            <div class="content-text">
                                <p>Bmw</p>
                                <h4>Front LIGHTING</h4>
                                <span>$28.00</span>
                            </div>
                        </div>
                        <div class=" col-sm-6 col-md-3 main">
                            <div>
                                <img src="@/assets/Items/1.jpg" >
                            </div>
                            <div class="content-text">
                                <p>Bmw</p>
                                <h4>Front LIGHTING</h4>
                                <span>$28.00</span>
                            </div>
                        </div>
                        <div class=" col-sm-6 col-md-3 main">
                            <div>
                                <img src="@/assets/Items/2.jpg" >
                            </div>
                            <div class="content-text">
                                <p>Bmw</p>
                                <h4>Front LIGHTING</h4>
                                <span>$28.00</span>
                            </div>
                        </div>
                                                <div class=" col-sm-6 col-md-3 main">
                            <div>
                                <img src="@/assets/Items/3.jpg" >
                            </div>
                            <div class="content-text">
                                <p>Bmw</p>
                                <h4>Front LIGHTING</h4>
                                <span>$28.00</span>
                            </div>
                        </div>
                        <div class=" col-sm-6 col-md-3 main">
                            <div>
                                <img src="@/assets/Items/4.jpg" >
                            </div>
                            <div class="content-text">
                                <p>Bmw</p>
                                <h4>Front LIGHTING</h4>
                                <span>$28.00</span>
                            </div>
                        </div>
                        <div class=" col-sm-6 col-md-3 main">
                            <div>
                                <img src="@/assets/Items/5.jpg" >
                            </div>
                            <div class="content-text">
                                <p>Bmw</p>
                                <h4>Front LIGHTING</h4>
                                <span>$28.00</span>
                            </div>
                        </div>
                        <div class=" col-sm-6 col-md-3 main">
                            <div>
                                <img src="@/assets/Items/6.jpg" >
                            </div>
                            <div class="content-text">
                                <p>Bmw</p>
                                <h4>Front LIGHTING</h4>
                                <span>$28.00</span>
                            </div>
                        </div>
                    </div>
                    <PageNumber/>
                </div>
                <div class="filters">
                    <div class="categories">
                        <h4>CATEGORIES</h4>
                        <ul>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-angles-right" />
                                <a>opel (5)</a>
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-angles-right" />
                                <a>Subaru (77)</a>
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-angles-right" />
                                <a>Bmw (6)</a>
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-angles-right" />
                                <a>Toyota (11)</a>
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-angles-right" />
                                <a>Audi (54)</a>
                            </li>
                            <li>
                                <font-awesome-icon icon="fa-solid fa-angles-right" />
                                <a>Chevrolet (22)</a>
                            </li>
                        </ul>
                    </div>
                    <div class="filter-price">
                        <h4>FILTER BY PRICE</h4>
                        <div class="range">
                            <p>Min : <input type="number"></p>
                        </div>
                        <div class="range">
                            <p>max : <input type="number"></p>
                        </div>
                        <h5>Price : <span>$50 - $400</span></h5>
                        <button>Filter</button>
                    </div>
                    <div class="brand">
                        <h4>BRANDS</h4>
                        <div>
                            <input type="checkbox">
                            <a>opel (5)</a>
                        </div>
                        <div>
                            <input type="checkbox">
                            <a>Subaru (77)</a>
                        </div>
                        <div>
                            <input type="checkbox">
                            <a>Bmw (6)</a>
                        </div>
                        <div>
                            <input type="checkbox">
                            <a>Toyota (11)</a>
                        </div>
                        <div>
                            <input type="checkbox">
                            <a>Audi (54)</a>
                        </div>
                        <div>
                            <input type="checkbox">
                            <a>Chevrolet (22)</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import PageNumber from './PageNumber.vue'
</script>
<style scoped>
.products{
    padding: 80px 0;
}
.first-row{
    gap: 5%;
}
.show{
    width: 75%;
}
.filters{
    width: 20%
}
.show , .filters {
    padding: 0;
}
.interface{
    display: flex;
    justify-content: space-between;
    border: 1px solid #e5e5e5;
    padding: 15px;
}
.one , .two{
    display: flex;
    align-items: center;
}
.show p{
    margin: 0;
    font-weight: bold;
}
.show select {
    padding: 5px 0px;
    padding-right: 20px;
    padding-left: 10px;
    border: 1px solid #e5e5e5;
    color: #999999;
    margin-left: 10px;
    outline: none;
}
.main{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 30px;
}
.main img{
    width: 100%;
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
.filters .categories h4{
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
}
ul{
    margin: 0;
}
li{
    list-style: none;
    margin-left: -30px;
    cursor: pointer;
    margin-bottom: 15px;
} 
li svg {
    margin-right: 6px;
    font-size: 12px;
    color: #D22E2E;
}
li a{
    color: #666666 !important;
}
li a:hover{
    color: #D22E2E !important;
}
.filter-price h4{
    font-size: 20px;
    font-weight: bold;
    margin: 30px 0;
}
.filter-price .range{
    display: flex;
    align-items: center;
}
.filter-price .range p {
    font-weight: bold;
}
.filter-price input {
    width: 80px;
    height: 20px;
    outline: none;
}
.filter-price h5{
    font-size: 16px;
}
.filter-price h5 span{
    color: #D22E2E;
}
.filter-price button{
    background-color: #D22E2E;
    padding: 10px;
    border-radius: 12px;
    width: 100%;
    outline: none;
    border: none;
    color: #Fff;
    font-weight: bold;
    margin-top: 20px;
}
.brand h4{
    font-size: 20px;
    font-weight: bold;
    margin: 30px 0;
}
.brand div{
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 10px;
}
.brand div a {
    margin-left: 10px;
    color: #666666 !important;
}
@media screen and (max-width:575px) {
    .main{
        width: 50%;
        margin-bottom: 30px;
    }
    .products{
        padding: 50px 0;
    }
    .show,.filters{
        width: 100%;
    }
    .show{
        padding: 20px;
    }
    .filters{
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }
    .filter-price h4 , .brand h4{
        margin-top: -5px;
        margin-bottom: 30px;
    }
}
@media screen and (max-width:767px) {
    .interface{
        display: block;
    }
    .one  {
        margin-bottom: 30px
    }
}
</style>