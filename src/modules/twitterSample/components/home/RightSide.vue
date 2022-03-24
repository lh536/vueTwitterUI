<template>
    <div class="hidden lg:block md:col-span-1 lg:col-span-3 borde-2 border-yellow-500">
        <div class="col-span-3 pl-3">
            <div class="flex flex-col text-[#D9D9D9] text-xl font-semibold">
                <div class="px-4 py-2 space-y-4">
                    <search-twitter-input />
                    <whats-happening-right />
                    <who-to-follow />
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import { defineAsyncComponent } from "vue"

    export default {
        name: 'RightSide',
        components: {
            SearchTwitterInput: defineAsyncComponent ( () => import ('@/modules/twitterSample/components/home/RightSideComp/SearchTwitterInput.vue') ) ,
            WhatsHappeningRight: defineAsyncComponent ( () => import ('@/modules/twitterSample/components/home/RightSideComp/WhatsHappeningRight.vue') ) ,
            WhoToFollow: defineAsyncComponent ( () => import ('@/modules/twitterSample/components/home/RightSideComp/WhoToFollow.vue') ) ,
        },
    }

</script>


<style></style>
