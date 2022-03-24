<template>
    <!-- 4 USER -->
    <div class="flex space-x-4 items-end grow lg:-ml-2 p-2">
        <button class="flex space-x-4 items-center grow rounded-full lg:-ml-2 p-2 px3 hover:bg-gray-900 transform duration-300">
            <div class="w-10 h-10 rounded-full">
                <!-- <img src="https://pbs.twimg.com/profile_images/458965238004453377/KxtxcGCE.jpeg" class="rounded-full" alt="Twitter User Avatar"> -->
                <img src="/img/twitterSample/img/avatarImage/fabio.jpeg" class="rounded-full" alt="Twitter User Avatar">
            </div>
            <div class="hidden lg:flex flex-col text-base text-left items-start leading-tight">
                <span class="lg:whitespace-nowrap">Fabio Duarte</span>
                <span class="text-[#6E767D] font-normal">@lh536</span>
            </div>
            <div class="hidden lg:flex grow ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
            </div>
        </button>
    </div>

</template>


<script>
    export default {
        name: 'User'
    }

</script>


<style>

</style>
