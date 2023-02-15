<template>
    <div>
        <p>{{product}}</p>
    </div>
</template>
<script setup>
import { onMounted , ref} from 'vue'
import axiosClient from '@/axiosClient'
import { useUserStore } from '../Store/user'
import { useRoute } from 'vue-router'
const product = ref(null)
const user = useUserStore()
const route = useRoute()
onMounted(async() =>{
    await axiosClient.get(`user/get-single-product/${route.params.id}`, {
        headers: {
          Authorization : `Bearer ${user.getUserToekn}`
        }
      })
    .then(res => {
      console.log(res.data.data)
      product.value = res.data.data
    }) 
})
</script>