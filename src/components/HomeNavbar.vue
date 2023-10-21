<script>
import { useRouter } from 'vue-router'
 
 export default {
    setup() {
        const router = useRouter()
        const click = () => {
            router.push({
                path: '/hodlogin'
            })
        }
       
        return {
            click
        }
    }
}

</script>

<template>
<nav class="navbar navbar-light bg-light justify-content-between mb-5">
<div class="container">
<a class="navbar-brand text-danger">Mary'S Institute</a>
<p class="grow"></p>
<button class="btn btn-dark mt-3" type="button" @click="click">HOD Login</button>
<button class="btn btn-dark mt-3"><router-link to="/BursaLogin"  class="text">Bursary Login</router-link></button>
<button class="btn btn-dark mt-3"><router-link to="/StudentsFeesPayment"  class="text">School Fee Payment</router-link></button>

</div>
</nav>
</template>

<style>
.grow{
    flex-grow: 1;
}
.btn{
    margin-right: 5px;
}

.text{
    color: white;
    text-decoration: none;  
}

.text:hover{
    color: white;
}
</style>