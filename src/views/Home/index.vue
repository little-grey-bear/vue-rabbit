<script setup>
 


import HomeBanner from "./components/HomeBanner.vue"
import HomeCategory from "./components/HomeCategory.vue"
import HomeNav from "./components/HomeNav.vue"
import HomeProduct from "./components/HomeProduct.vue"
import HomeHot from "./components/HomeHot.vue"


</script>

<template>
    <RouterView/>

    <div class="conntainer">
        <div>
            <HomeCategory/>
        </div>
       <div>
        <HomeBanner/>
       </div>
        
    </div>
    <HomeNav/>
    
    <HomeProduct/>
    

</template>