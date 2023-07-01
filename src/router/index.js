// createRouter：创router实例对象
// createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Category from '@/views/Category/index.vue'
import  Home from '@/views/Home/index.vue'
import subCategory from '@/views/subCategory/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',

      component: Login
    },

    {
      path: '/',
      name: '',
      component: Layout,
      children: [
        {
          path: 'category/:id',//这里少加了一个/导致路径找不到
          component: Category
        },
        {
          path: '',
          component: Home
        },
        {
          path: 'category/sub/:id',//这里少加了一个/导致路径找不到
          component: subCategory
        },
      ]
    },
   
  ]
})

export default router
