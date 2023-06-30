<script setup>
import{ getBannerApi } from '@/apis/home'
import { getCategoryApi } from '@/apis/category';
import {ref,onMounted,onUpdated} from 'vue';
import { useRoute } from 'vue-router';
// 获取数据
const categoryDate = ref({})
const route = useRoute()
const getCategory = async () =>{
    // console.log(route.params.id)
    const res = await getCategoryApi(route.params.id)
    categoryDate.value = res.result
    console.log(res.result)
}
onMounted (() =>{
    getCategory()
})
onUpdated (() =>{
  getBanner()
  getCategory()
 })
const bannerList = ref([])
const getBanner = async ()=> {
  const res = await getBannerApi({distributionSite:"2"})
  bannerList.value = res.result;
  console.log(res)
}
 onMounted(() => {
  getBanner()
 })

//  onUnmounted(() => {
//   getBanner()
//  })
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{categoryDate.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 轮播图 -->
      <div class="home-banner">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl"/>
          </el-carousel-item>
        </el-carousel>
      </div>

    </div>
  </div>
</template>


<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}

.home-banner {
  width: 1240px;
  height: 500px;
  margin: 0 auto;
  // position: absolute;
  // left: 0;
  // top: 0;
  // z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>