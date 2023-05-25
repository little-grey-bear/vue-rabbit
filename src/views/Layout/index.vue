<script setup>
import LayoutNav from './componements/LayoutNav.vue'
import LayoutHeader from './componements/LayoutHeader.vue'
import LayoutFooter from './componements/LayoutFooter.vue'
import LayoutFixed from './componements/LayoutFixed.vue'
import { useCategoryStore } from '@/stores/category'
import {onMounted} from 'vue'
 const categoryStore= useCategoryStore()

onMounted(() => categoryStore.getCategory())
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  
  <LayoutFooter />
  <RouterView />
</template>