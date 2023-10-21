// 把compents中的所有组件都进行全局化注册
// 通过插件的方式
import ImageView from "@/components/ImageView/index.vue"
import Sku from '@/components/XtxSku/index.vue'
export const compentPlugin =  {
    install (app){
        // app.compent('组件配置对象')
        app.component('XtxImageView',ImageView)
        app.component('XtxSku',Sku)
    }
 }