<template>
    <div class="min-h-screen bg-black">
        <div class="grid grid-cols-8 md:grid-cols-10 w-full md:max-w-3xl lg:max-w-7xl mx-auto bg-transparent text-[#D9D9D9] text-xl font-semibold borde-2">
            <LeftSide />
            <Center />
            <RightSide />
        </div>
    </div>

</template>

<script>
import { defineAsyncComponent } from 'vue'

    export default {
        name: 'TwitterSamplePage',
        components: {
            LeftSide: defineAsyncComponent ( () => import ('@/modules/twitterSample/components/home/LeftSide.vue') ) ,
            Center: defineAsyncComponent ( () => import ('@/modules/twitterSample/components/home/Center.vue') ) ,
            RightSide: defineAsyncComponent ( () => import ('@/modules/twitterSample/components/home/RightSide.vue') ) ,
        },
    }

</script>


<style></style>
