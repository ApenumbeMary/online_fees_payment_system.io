<script>

</script>

<template>
<h2 class="para bg-info text-light">Welcome to the Mary's Institutes<br> Electronic Suite (eSuite)</h2>
<h3>Authorized Users</h3>
<p class="para bg-light">Login for Students or others who have been granted access.</p>
<hr>
<div class="container">
<label for="id">Matric No</label>
    <input class="form-control" type="text" placeholder="@Matric No.com" v-model="email" />
    <br>
    <label for="password">Password</label>
    <input class="form-control" type="password" placeholder="password" v-model="password" />

    <button class="btn btn-success mt-3" type="button" @click="register">Login</button><br>
     <router-link to="/ForgetPassword"  class="text-danger mt-3">Forget password</router-link><br>
      
      <ul>
<li class="text mt-3">Check Your Balance.</li>
<li>Make a Payments towards your balance.</li>
<li>View your Payment History.</li>
<li>Store your payment methods for quick and easy payment.</li>
<li>As a Student, provide information for others(Parents, employers etc.) to view your bills and make payments.</li>
</ul>
<p><router-link to="/StudentsFeesPayment"  class=" text text-info">marymsen05@gmail.com</router-link></p>

</div>

</template>

<style>
.div{
            margin-left: 450px;
            margin-right: 450px;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.para, .btn{
        text-align: center;
        }
        
</style>
