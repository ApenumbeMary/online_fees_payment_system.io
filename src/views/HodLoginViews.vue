<script setup>
import HodLoginNav from '../components/HodLoginNav.vue'
import HodLoginPage from '../components/HodLoginPage.vue'
import HodLoginPage2 from '../components/HodLoginPage2.vue'
</script>

<template>
<main class="bg">
  <HodLoginNav />
    <div class="container">
    <div class="row">

    <div class="col-md-6">
   <HodLoginPage />
    </div>


    <div class="col-md-6">
   <HodLoginPage2 />
    </div>

    </div>
    </div>
    </main>
</template>