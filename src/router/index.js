// createRouter：创router实例对象
// createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Category from '@/views/Category/index.vue'
import  Home from '@/views/Home/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',

      component: Login
    },
    {
      path: '/',
      name: '退出',
      component: Layout,
      children: [
        {
          path: '',
          component: Category
        },
        {
          path: 'home',
          component: Home
        }
      ]
    },
    
  ]
})

export default router
