<script>

</script>

<template>

<p>Already have an account? Login instead your details.</p>
<hr>
<div class="container">
 <form action="" method="post">

    <label for="email">eMail</label>
    <input class="form-control" type="text" placeholder="@email.com" v-model="ID" />
    
    <label for="password">Password</label>
    <input class="form-control" type="password" placeholder="password" v-model="password" />

    
    <button class="btn btn-success mt-3" type="button" @click="register">Login</button>
    <img src="@/assets/bg1.jpg" class="img mt-3">
</form>
 </div>

</template>