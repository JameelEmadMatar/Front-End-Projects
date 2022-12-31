<template>
      <nav class="navbar navbar-expand-lg py-3">
      <div class="container">
        <router-link :to="{name:'home'}" class="navbar-brand" @click="active = null">
          <img src="../photos/brandimg.png">
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto" id="myUl">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" :to="{name:'Projects'}">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'About'}">About Me</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'Contact'}">Contact</router-link>
            </li>
          </ul>
        </div>
        <div class="main" >
          <button id="mainBtn" class="btn">Hire Me</button>
          <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </a>
        </div>
      </div>
    </nav>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue"
const active = ref(null)
let windowWidth = ref(window.innerWidth)
const onWidthChange = () => {
  windowWidth.value = window.innerWidth
  if(windowWidth.value < 992){
    document.getElementsByClassName("navbar-brand")[0].style.order = "-2"
    document.getElementsByClassName("main")[0].style.order = "-1"
    if(document.getElementById("mainBtn")){
        const ele = document.getElementById("mainBtn")
        const clone = ele.cloneNode(true)
        document.getElementById("myUl").appendChild(clone)
        clone.id = "ulBtn"
        ele.remove()
    }
  }else{
    if(document.getElementById("ulBtn")){
        const ele = document.getElementById("ulBtn")
        const clone = ele.cloneNode(true)
        document.getElementsByClassName("main")[0].prepend(clone)
        document.getElementById("myUl").removeChild(document.getElementById("myUl").lastChild)
        clone.id = "mainBtn"
    }
  }
}
onMounted(() => {
  window.addEventListener('resize', onWidthChange)
    if(windowWidth.value < 992){
      document.getElementsByClassName("navbar-brand")[0].style.order = "-2"
      document.getElementsByClassName("main")[0].style.order = "-1"
      if(document.getElementById("mainBtn")){
        const ele = document.getElementById("mainBtn")
        const clone = ele.cloneNode(true)
        document.getElementById("myUl").appendChild(clone)
        clone.id = "ulBtn"
        ele.remove()
      }
  }
})
onUnmounted(() => window.removeEventListener('resize', onWidthChange))
</script>
<style scoped>
img{
    width: 130px;
    cursor: pointer;
}
ul li{
    font-size: 18px;
    cursor: pointer;
    font-family: arial;
    padding-top:10px;
    margin: 10px;
}
ul li:hover a{
  color: #4F46E5;
}
.main{
    display: flex;
}
.btn{
    border: none;
    padding: 10px 20px;
    opacity: 0.8;
    border-radius: 6px;
    background-color: #4F46E5;
    font-weight: bold;
    color: #fff;
    margin: 0 20px;
    cursor: pointer;
    font-size: 16px;
    outline: none;
}
#ulBtn{
  margin: 0 10px;
  width: 110px;
}
.btn:hover{
  opacity: 1;
}
.nav-link{
  color: black;
}
.nav-link.active {
  color: #4F46E5;
}
svg{
    width: 50px;
    height: 40px;
    padding: 0px 10px;
    color: black;
    background-color: #F7F8FC;
    border-radius: 12px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
}
.navbar-collapse {
  flex-grow: 0 !important;
}
.navbar-toggler[aria-expanded="true"]{
  order: 0;
}
.navbar-toggler , .navbar-toggler[aria-expanded="false"]{
  order: 2;
}
@media screen and (max-width:991px) {
  .nav-link{
    border-bottom: 2px solid #eee;
  }
  .main .btn{
    margin-left: 8px;
  }
}
</style>