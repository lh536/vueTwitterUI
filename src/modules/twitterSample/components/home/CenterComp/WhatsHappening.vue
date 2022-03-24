<template>
    <div class="flex px-4 py-2 border-b border-[#2F3336]">
            <!-- TWITTER AVATAR -->
            <div class="w-12 h-12 shrink-0 rounded-full">
                <img src="/img/twitterSample/img/avatarImage/fabio.jpeg" class="rounded-full" alt="Twitter Avatar">
            </div>

        <div class="flex flex-col mx-2 px-2 py-3 space-y-6">

            <span class="text-[#6E767D]">What's happening?</span>

            <!-- WHATS HAPPENING ICONS & TWEET BUTTON -->
            <div class="flex space-x-4 items-center text-[#1DA1F2]">

                <!-- MEDIA -->
                <div class="flex flex-col items-center relative group cursor-pointer">
                    <svg-icon icon="media" />
                </div>

                <!-- GIF -->
                <div class="flex flex-col items-center relative group cursor-pointer">
                    <div class="border w-5 h-5 flex justify-center items-center rounded-sm border-[#1DA1F2]">
                        <span class="text-[0.6rem]">GIF</span>
                    </div>
                    <span class="text-xs font-normal text-white bg-slate-500 rounded-sm p-0.5 absolute top-8 invisible group-hover:visible group-hover:delay-300 group-hover:transition-all">GIF</span>
                </div>

                <!-- POLL -->
                <div class="flex flex-col items-center relative group cursor-pointer transform rotate-90">
                    <svg-icon icon="poll" position="transform -rotate-90 left-8 -top-0" />
                </div>

                <!-- EMOJI -->
                <div class="flex flex-col items-center relative group cursor-pointer">
                    <svg-icon icon="emoji" />
                </div>

                <!-- SCHEDULE -->
                <div class="flex flex-col items-center relative group cursor-pointer">
                    <svg-icon icon="schedule" />
                </div>

                <!-- LOCATION -->
                <div class="flex flex-col items-center relative group cursor-pointer text-[#0E4D77]">
                    <svg-icon icon="location" />
                </div>

            </div>
        </div>
        <div class="flex-grow flex p-1 justify-end">
            <button class="text-sm bg-[#0E5078] px-5 py-2 rounded-full self-end text-[#7F7F7F]">Tweet</button>
        </div>
    </div>
</template>


<script>
import SvgIcon from "./SvgIcon.vue"
    export default {
        name: 'WhatsHappening',
        components: {
            SvgIcon,
        }
    }

</script>


<style scopped>

</style>
