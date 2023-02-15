<template>
    <CDropdown>
  <CDropdownToggle color="primary">Dropdown Button</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem v-for="cate of categories" :key="cate.id" @click="showCate(cate.id)">{{cate.name}}</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
  <ProductsView :products="products"/>
</template>
<script setup>
import { CDropdown  , CDropdownToggle , CDropdownMenu , CDropdownItem} from '@coreui/vue';
import axiosClient from '@/axiosClient'
import ProductsView from '@/components/Test/ProductsView'
import { onMounted, ref } from 'vue'
import { useCategoriesStore } from '@/components/Store/categories'
import { useUserStore } from '../Store/user'
const user = useUserStore()
const CategoriesStore = useCategoriesStore()
const categories = ref(null)
const products = ref(null)
onMounted(async() =>{
    await axiosClient.get('user/get-categories', {
        headers: {
          Authorization : `Bearer ${user.getUserToekn}`
        }
      })
    .then(res => {
      categories.value = res.data.data
      CategoriesStore.updateCategories(res.data.data)
    }) 
})
async function showCate(cateId){
    await axiosClient.get(`/user/get-all-products/${cateId}`, {
        headers: {
          Authorization : `Bearer ${user.getUserToekn}`
        }
      })
    .then(res => {
      products.value = res.data.data
    }) 
}
</script>