// 定义一懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const layzPlugin ={
    install(app){
        app.directive('img-lazy',{
            mounted(el, binding){
                // el ：指的是绑定的那个元素 img
                // binding：binding.value 指的=号后面的表达式的值 图片url
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        console.log(isIntersecting)
                        if (isIntersecting) {
                            // 进入视口区域
                            el.src = binding.value
                            console.log(el.src)
                            stop()
                        }
                     
                    }
                )
            }
        })
        

    }
}