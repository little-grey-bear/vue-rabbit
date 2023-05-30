<script setup>
 


import HomeBanner from "./components/HomeBanner.vue"
import HomeCategory from "./components/HomeCategory.vue"
import HomeNav from "./components/HomeNav.vue"
import HomeProduct from "./components/HomeProduct.vue"
import HomeHot from "./components/HomeHot.vue"
import HomePanel from "./components/HomePanel.vue"
</script>

<template>
    <RouterView/>

    <div class="container">
        <HomeCategory/>
        <HomeBanner/>
    </div>
    <HomeNav/>
    <HomeHot/>
    <HomeProduct/>
    <HomePanel title="新鲜好物" sub-title="新鲜好物 好多商品">

    </HomePanel>
    <HomePanel title="人气推荐 " sub-title="人气推荐 好多商品">

    </HomePanel>
    

</template>
<style>

</style>