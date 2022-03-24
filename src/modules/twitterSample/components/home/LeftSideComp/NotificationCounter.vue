<template>
    <span
        class="h-4 w-4 bg-[#1A91DA] rounded-full absolute text-xs text-center top-2 left-3 ring-2 ring-black">
        <span>{{ counter }}</span>
    </span>
</template>


<script>
    export default {
        name: 'NotificationCounter',
        props: {
            counter: {
                type: Number,
                default: null,
                required: false,
            }
        },


    }

</script>


<style>

</style>
