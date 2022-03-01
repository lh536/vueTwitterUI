<template>
    <h1>Home Page</h1>
    <demo-form message="Hi!! I'm a message from App.vue" />
</template>


<script>
import { defineAsyncComponent } from "vue" // LAZY LOADING
// import DemoForm from "@/modules/demo/components/DemoForm.vue"
    export default {
        name: 'Home',
        components: {
            DemoForm: defineAsyncComponent ( () => import ('@/modules/demo/components/DemoForm.vue')), // LAZY LOADING
            // DemoForm,
        }
    }

</script>


<style scopped>

</style>
