import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getCategoryApi} from '@/apis/layout'
export const useCategoryStore = defineStore('category', () => {
    const categoryList = ref([])
    const getCategory = async ()=>{
        const res= await getCategoryApi()
        categoryList.value = res.result
        // 后端代码测试接口
        // categoryList.value = res.data
      }
    return { 
      categoryList, 
      getCategory 
    }
  })
  