<template>
    <div class="border-b border-[#2F3336] px-4 py-4 hover:bg-[#1C1F23] cursor-pointer">
        <div class="flex justify-between items-center">
            <div class="w-11 h-11 shrink-0 rounded-full">
                <img :src="`./img/twitterSample/img/avatarImage/${avatarImage}`" class="rounded-full" :alt="`${name} avatar`">
            </div>
            <div class="flex flex-col pl-3 grow truncate">
                <p class="leading-5 text-base hover:underline truncate">{{name}}</p>
                <p class="text-base font-normal text-[#6E767D] truncate">@{{username}}</p>
            </div>
            <button class="text-[#1DA1F2] text-base font-bold border border-[#1DA1F2] hover:bg-[#1C2C38] transform duration-300 rounded-full px-5 py-1">Follow</button>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'HowToFollowItem',
        props: {
            name: {
                type: String,
                required: true,
                default: 'Name'
            },
            username: {
                type: String,
                required: true,
                default: 'Username'
            },
            avatarImage: {
                type: String,
                required: true,
                default: 'src/assets/avatarImage/sustrato.png'
            },
        }

    }

</script>


<style scopped>

</style>
