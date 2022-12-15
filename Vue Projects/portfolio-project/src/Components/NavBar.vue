<template>
      <nav class="navbar navbar-expand-lg py-3">
      <div class="container">
        <a href="#" class="navbar-brand">
          <img src="../photos/brandimg.png">
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" @click="active = 'Projects'" :class="{active:active === 'Projects'}">
              <a class="nav-link" aria-current="page" href="#">Projects</a>
            </li>
            <li class="nav-item" @click="active = 'About'" :class="{active:active === 'About'}">
              <a class="nav-link" href="#">About Me</a>
            </li>
            <li class="nav-item" @click="active = 'Contact'" :class="{active:active === 'Contact'}">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div class="main">
          <button class="btn">Hire Me</button>
          <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </a>
        </div>
      </div>
    </nav>
</template>
<script setup>
import { ref } from 'vue'
const active = ref("Projects")
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
.main{
    display: flex;
}
.btn{
    border: none;
    padding: 10px 25px;
    border-radius: 6px;
    background-color: #4F46E5;
    font-weight: bold;
    color: #fff;
    margin: 0 20px;
    cursor: pointer;
    font-size: 16px;
    outline: none;
}
.nav-link{
  color: black;
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
</style>