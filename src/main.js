// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { getCategory } from '@/apis/testApi'
import {layzPlugin} from '@/directives'
import { compentPlugin } from './components'


// 引入初始化样式文件
import '@/styles/common.scss'
 
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(layzPlugin)
app.use(compentPlugin)
app.mount('#app')

// 定义全局指令



// doto 这里的图片懒加载先不做了
// 引入懒加载注册插件
