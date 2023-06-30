import { getCategoryApi } from '@/apis/category';
import { ref, onMounted, onUpdated } from 'vue';
import { useRoute } from 'vue-router';
import { onBeforeRouteUpdate } from 'vue-router';
export function useCategory() {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryApi(id)
        categoryData.value = res.result
    }
    onMounted(() => {
        getCategory()
    })
    // 在路由更新前调用方法
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })

    return {
        categoryData
    }
}