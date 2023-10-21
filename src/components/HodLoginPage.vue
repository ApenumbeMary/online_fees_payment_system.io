<script>

</script>

<template>
<div class="text bg-info">
<h1>HEAD's OF DEPARTMENTS</h1>
<h2></h2>
</div>
<p>First Timers Login here your details, your informations are secure on this platform</p>
<hr>

<div class="container">
 <form action="" method="post">

    <label for="email">eMail</label>
    <input class="form-control" type="text" placeholder="@eMail" v-model="ID" />
    
    <label for="password">Password</label>
    <input class="form-control" type="password" placeholder="password" v-model="password" />

    <label for="password">Repeat Password</label>
    <input class="form-control" type="password" placeholder="password" />

    <button class="btn btn-success mt-3" type="button" @click="register">Sign Up</button>

    <img src="@/assets/bg.png" class="img mt-3">
    
</form>
 </div>

</template>

<style>
.text{
    text-align: center;
}
 </style>