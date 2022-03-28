<template>
  <home-twitter-sample-page />


</template>


<script>
import { defineAsyncComponent } from "vue"

  export default {
    name: 'App',
    components: {
      HomeTwitterSamplePage: defineAsyncComponent ( () => import ('@/modules/twitterSample/pages/HomeTwitterSamplePage.vue'))
    },
  }

</script>


<style scopped>

</style>
