 <script setup>
import TheWelcome from '../components/TheWelcome.vue'
import HomeNavbar from '../components/HomeNavbar.vue'
import HomeIllustration from '../components/HomeIllustration.vue'
import StudentForm from '../components/StudentForm.vue'





</script>

<template>
  
 
  <main class="bg">
  <HomeNavbar />
    <div class="container">
    <div class="row">

    <div class="col-md-6">
    <HomeIllustration />
    </div>

    <div class="col-md-6">
    <StudentForm />
    </div>


    
    </div>
    </div>
  
  </main>
 
</template>

<style>
.bg{
  background-color: #f2f2f2;
}

</style>

 