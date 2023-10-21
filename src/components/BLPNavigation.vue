<script>
import { useRouter } from 'vue-router'
 
 export default {
    setup() {
        const router = useRouter()
        const click = () => {
            router.push({
                path: '/'
            })
        }
        return {
            click
        }
    }
}
</script>

<template>
<nav class="navbar navbar-light bg-light mt-3 justify-content-between mb-5">
<div class="container">
<p class="navbar-brand text-danger">MARY'S INSTITUTE</p>

<p class="grow"></p>

<button class="btn btn-light bg-dark text-light mr-sm-2" @click="click">HOD</button>
<button class="btn btn-light bg-dark text-light mr-sm-2" @click="click">students page</button>
<button class="btn btn-light bg-dark text-light mr-sm-2" @click="click">Fees payment</button>
<button class="btn btn-light bg-dark text-light mr-sm-2" @click="click">profile</button>
<button class="btn btn-light bg-dark text-light mr-sm-2" @click="click">Sign out</button>

</div>
</nav>

</template>

<style>
.grow{
    flex-grow: 1;
}
.img1{
    position: fixed;
    left: 0;
    top: 0;
}

</style>