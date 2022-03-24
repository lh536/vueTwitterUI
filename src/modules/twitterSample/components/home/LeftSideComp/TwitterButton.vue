<template>
    <button class="hidden lg:block bg-[#1DA1F2] hover:bg-[#1A91DA] text-center transform duration-300 text-white text-[0.95rem] font-bold w-11/12 py-2 rounded-full -ml-2">
        <span>Tweet</span>
    </button>
    <div class="lg:hidden bg-[#1DA1F2] hover:bg-[#1A91DA] relative transform duration-300 rounded-full cursor-pointer p-2">
        <span class="text-xl font-semibold -top-0 left-3 absolute">+</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-feather w-9 h-9" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 20l10 -10m0 -5v5h5m-9 -1v5h5m-9 -1v5h5m-5 -5l4 -4l4 -4" />
            <path d="M19 10c.638 -.636 1 -1.515 1 -2.486a3.515 3.515 0 0 0 -3.517 -3.514c-.97 0 -1.847 .367 -2.483 1m-3 13l4 -4l4 -4" />
        </svg>
    </div>
</template>


<script>
    export default {
        name: 'TwitterButton'
    }

</script>


<style>

</style>
