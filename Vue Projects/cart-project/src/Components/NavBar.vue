<template>
    <nav class="navbar navbar-expand bg-light">
      <div class="container">
        <router-link class="navbar-brand" :to="{name:'home'}">Cart App</router-link>
        <div>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" :to="{name:'home'}">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'cart'}">Cart - {{cartItemCount}}</router-link>
            </li>
          </ul>
        </div>
      </div>
  </nav>
</template>
<script setup>
import { computed } from "vue"
import store from '../Store'
const cartItemCount = computed(() => store.getters.cartItemCount)
</script>