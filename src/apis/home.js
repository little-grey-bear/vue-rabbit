import  httpInstance from '@/utils/http'
export function getBannerApi(params = {}){
    const {distributionSite = "1"}=params
    return httpInstance({
        url: "/home/banner",
        params:{
          distributionSite
        }

    })
}
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
    return httpInstance({
      url:'/home/new'
    })
  }

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return httpInstance({
        url:'home/hot'
    })
    // return  httpInstance('home/hot', 'get', {})
  }

  // 获得货品数据
export const getGoodsApi = ()=>{
  return httpInstance({
    url:'/home/goods'
  })
}