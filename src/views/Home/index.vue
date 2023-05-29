<script setup>
 


import HomeBanner from "./components/HomeBanner.vue"
import HomeCategory from "./components/HomeCategory.vue"
import HomeNav from "./components/HomeNav.vue"
import HomeProduct from "./components/HomeProduct.vue"
import HomeHot from "./components/HomeHot.vue"
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
    

</template>
<style>

</style>