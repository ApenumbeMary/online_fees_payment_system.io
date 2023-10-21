<script>

</script>

<template>
<h1 class="text-danger">MARY'S INSTITUTE</h1>
<h1 class="text-info">From THE OFFICE OF BURSAR</h1>
<h3></h3>

<p></p><br>
 <h3 class="txt mt-3">At MARY'S INSTITUTE, we believe in the power of education to transform lives. Thats's why we are proud 
    to offer bursaries to support aspiring students in their educational journey. Our bursary program designed to provide financial assistance to deserving individuals who demonstrate a strong commitment to their academic pursuits.</h3>
    

<div class="container">
 <form action="" method="post">

    <label for="id">ID</label>
    <input class="form-control" type="text" placeholder="@bursar id" v-model="ID" />
    
    <label for="password">Password</label>
    <input class="form-control" type="password" placeholder="password" v-model="password" />
    
    <router-link to="/bursalandingpage" class="btn btn-success mt-3">Login</router-link>
   

    <img src="@/assets/pfs2.png" class="img mt-3">
    
</form>
 </div>

</template>

<style>
body{
background-image: url("file:///C:/Users/USER/Desktop/God/PF12/src/assets/pfs2.png");
background-repeat: no repeat;
}
</style>