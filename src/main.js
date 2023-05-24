import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { getCategory } from '@/apis/testApi'

// 引入初始化样式文件
import '@/styles/common.scss'
 
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

getCategory().then(res =>{
    console.log(res)
})

