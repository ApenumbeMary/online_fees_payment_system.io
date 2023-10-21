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
<nav class="navbar navbar-light bg-light justify-content-between mb-5">
<div class="container">
<p class="navbar-brand"><img src="@/assets/logo3.jpg" class="img1 mt-"></p>

<p class="grow"></p>

<button class="btn btn-light mr-sm-2" @click="click">Home</button>
<button class="btn btn-light mr-sm-2" @click="click">About Me</button>
<button class="btn btn-light mr-sm-2" @click="click">Project</button>
<button class="btn btn-light mr-sm-2" @click="click">Contact Me</button>
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