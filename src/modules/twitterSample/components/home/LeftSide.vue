<template>

    <div class="col-span-1 lg:col-span-2">
        <div class="flex flex-col items-center lg:items-stretch space-y-2 py-2 lg:px-2 min-h-screen sticky top-0">
            <twitter-nav-icon />
            <navbar-icon icon-name="home" :notification-indicator="true" />
            <navbar-icon icon-name="explore" />
            <navbar-icon icon-name="notifications" :notification-count="2" />
            <navbar-icon icon-name="messages" />
            <navbar-icon icon-name="bookmarks" />
            <navbar-icon icon-name="lists" />
            <navbar-icon icon-name="profile" />
            <navbar-icon icon-name="more" />
            <twitter-button />
            <user />
        </div>
    </div>

</template>

<script>
import { defineAsyncComponent } from "vue"

    export default {
        name: 'LeftSide',
        components: {
            TwitterNavIcon: defineAsyncComponent ( () => import ('@/modules/twitterSample/components/home/LeftSideComp/TwitterNavIcon.vue') ) ,
            NavbarIcon: defineAsyncComponent ( () => import ('@/modules/twitterSample/components/home/LeftSideComp/NavbarIcon.vue') ) ,
            TwitterButton: defineAsyncComponent ( () => import ('@/modules/twitterSample/components/home/LeftSideComp/TwitterButton.vue') ) ,
            User: defineAsyncComponent ( () => import ('@/modules/twitterSample/components/home/LeftSideComp/User.vue') ) ,
        },
    }

</script>

<style></style>
