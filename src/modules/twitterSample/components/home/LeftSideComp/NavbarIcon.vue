<template>
    <div class="flex items-center space-x-4 hover:bg-[#161616] relative w-fit transform duration-300 py-3 rounded-full px-3 cursor-pointer">
        <svg role="img" class="w-7 h-7">
            <use :xlink:href="`./icons/iconSet.svg#${iconName}`"></use>
        </svg>

        <notification-dot v-show="notificationIndicator" />
        <notification-counter v-show="notificationCount" :counter="this.notificationCount" />

        <span class="hidden lg:block capitalize">{{ iconName }}</span>
    </div>
</template>


<script>
import NotificationDot from "./NotificationDot.vue";
import NotificationCounter from "./NotificationCounter.vue";

    export default {
    name: "NavbarIcon",
    components: { NotificationDot, NotificationCounter },
    props: {
        iconName: {
            type: String,
            default: 'Icon Name',
            required: false,
        },
        notificationIndicator: {
            type: Boolean,
            default: false,
            required: false,
        },
        notificationCount: {
            type: Number,
            default: null,
            required: false,
        },
    },


    mounted() {
        // console.log(this.notification);
        // console.log(this.notificationCount);
    }

}

</script>


<style>

</style>
