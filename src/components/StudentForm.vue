<script setup>
import { useRouter } from 'vue-router'
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const MatricNo = ref("");
const password = ref("");

const router = useRouter() //get a reference to our vue router

const register = () => {
    console.log("hello")
 createUserWithEmailNoAndPassword(getAuth(), MatricNo.value, password.value)
 .then ((data) => {
   console.log("successfully sign up");


 
            router.push({
                path: '/success'
            })
        
 })
 .catch((error) => {
   console.log(error.code);
   alert(error.message);
 })
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
   .then((result) => {
    console.log(result.user);
    router.push({
      path: 'success'
    });

   })
   .catch((error) => {

   });
};
</script>

<template>
 
 <div class="container">
 <form action="" method="post">
 <p>Enter details for Resgistrtion first timers. We'll never share your information with anyone else.</P>
    <label for="id">Matric No</label>
    <input class="form-control" type="text" placeholder="@matric no" v-model="ID" />
    
    <label for="password">Password</label>
    <input class="form-control" type="password" placeholder="password" v-model="password" />

    <label for="password">Repeat Password</label>
    <input class="form-control" type="password" placeholder="password" />

    <button class="btn btn-success mt-3" type="button" @click="register"><router-link to="/SuccessPage"  class="text-light">Sign Up</router-link></button>
    

    <p>Already have an account? <router-link to="/StudentsFeesPayment"  class="text-primary">Login</router-link> instead</p>

</form>
<h3 class="text bg-info">Student Account Center</h3>
<ul>
<li>Check Your Balance.</li>
<li>Make a Payments towards your balance.</li>
<li>View your Payment History.</li>
<li>Store your payment methods for quick and easy payment.</li>
<li>As a Student, provide information for others(Parents, employers etc.) to view your bills and make payments.</li>
</ul>

<h1>FPS</h1>
 </div>
</template>



<style>
body{
    margin-top: 0px;
    padding-top: 0px;
}
img{
    width:;
}
.reg{
    background-color:;
    color: white;
    border-radius: 3px;
    margin-botton: 20px;
    padding: 0px 5px 5px 5px;
}
label{
font-weight: bold;
color: ;
}
</style>