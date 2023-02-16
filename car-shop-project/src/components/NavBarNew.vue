<template>
    <div class="nav-2">
        <div class="container-2">
            <div class="nav-menu">
                <div class="nav-content">
                    <div class="logo">
                        <router-link  to = '/'>
                            <img src="@/assets/logo.png">
                        </router-link>
                    </div>
                    <ul class="list">
                        <li>
                            <router-link  to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link  to="/about">About</router-link>
                        </li>
                        <li>
                            <router-link  to="/shop">Shop</router-link>
                        </li>
                        <li>
                            <router-link  to="/blog">Blog</router-link>
                        </li>
                        <li>
                            <router-link  to="/Contact">Contact</router-link>
                        </li>
                        <li v-if="!user.getUserName">
                            <router-link  to="/signup">SignUp</router-link>
                        </li>
                        <li v-if="!user.getUserName">
                            <router-link  to="/login">Login</router-link>
                        </li>
                        <li class="logout" v-if="user.getUserName">
                            <button  @click="logout">LogOut</button>
                        </li>
                    </ul>
                </div>
                <div :class="showMobileMenu ? 'open' : 'closed'" class="menu-bar" @click="toggleShowMenu">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import router from '@/router/router'
import { ref } from 'vue'
import { useUserStore } from '../components/Store/user'
const user = useUserStore()
const showMobileMenu = ref(false)
function logout(){
    user.updateUser(null , null , null)
    router.push('/login')
}
function toggleShowMenu(){
    if(showMobileMenu.value == false){
        showMobileMenu.value = true
        document.getElementsByClassName('list')[0].style.display = 'block'
        document.getElementsByClassName('nav-menu')[0].style.alignItems = 'normal'
    }else{
        showMobileMenu.value = false
        document.getElementsByClassName('list')[0].style.display = 'none'
        document.getElementsByClassName('nav-menu')[0].style.alignItems = 'center'
    }
}
</script>
<style scoped>
.nav-2{
    padding: 20px 0;
}
.nav-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-content .logo{
    padding-top: var(--bs-navbar-brand-padding-y);
    padding-bottom: var(--bs-navbar-brand-padding-y);
    margin-right: var(--bs-navbar-brand-margin-end);
    font-size: var(--bs-navbar-brand-font-size);
    color: var(--bs-navbar-brand-color);
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
}
ul{
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
}
ul li{
    position: relative;
    margin: 0 5px;
}
ul li a{
    text-decoration: none;
    padding: 8px;
    color: #0000008C;
}
ul li .router-link-exact-active{
    color: var(--main-color);
}
li .router-link-exact-active::before{
    content: '';
    position: absolute;
    background-color: #D22E2E;
    width: 20px;
    height: 3px;
    top: -5px;
    left: 35%;
}
li:hover a{
    color: var(--main-color);
}
li:hover::before{
    content: '';
    position: absolute;
    background-color: #D22E2E;
    width: 20px;
    height: 3px;
    top: -5px;
    left: 35%;
}
.menu-bar{
    display: none;
    cursor: pointer;
}
.logout button{
    border: none;
    background-color: transparent;
    color: #0000008C;
}
.logout button:hover{
    color: var(--main-color);
}
@media screen and (max-width:991px) {
    .nav-menu{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-content{
        display: block;
    }
    ul{
        display: none;
        transition: 0.3s;
        margin-top: 30px;
    }
    ul li{
        margin: 20px 0;
    }
    li .router-link-exact-active::before , li:hover::before{
        display: none;
    }
    .logo{
        margin-bottom: 20px;
    }
    .li .router-link-exact-active::before{
        display: none;
    }
    .menu-bar{
        display: inline;
        width: 56px;
        height: 40px;
        padding: 4px 12px;
        border: 2px solid #eee;
    }
    .menu-bar svg{
        width: 30px;
        height: 30px;
        opacity: 0.5;
    }

}
</style>