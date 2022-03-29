<template>
    <!-- THIS ARTICLE IS DIVIDED IN TWO PARTS LEFT AND RIGHT -->
    <div class="flex text-white px-4 py-2 space-x-3 border-b border-[#2F3336]">
        <!-- LEFT SECTION (LIKE (HEART) & AVATAR IMAGE SECTION) -->
        <section class="flex flex-col">
            <!-- TOP/LEFT LIKE (HEART) ICON -->
            <span class="pb-1 self-end text-[#6E767D]"><svg-timeline-icon icon="like" custom-classes="h-4 w-4" /></span>

            <!-- AVATAR IMAGE -->
            <div class="w-12 h-12 rounded-full">
                <img :src="`./img/twitterSample/img/avatarImage/${avatarImage}`" class="rounded-full" alt="Twitter Avatar">
            </div>
        </section>

        <!-- RIGHT SECTION (NAME, USERNAME, SLOT, TWEET COVER, TWEET COVER DESCRIPTION, LINK URL & OTHERS) -->
        <section class="flex flex-col">
            <!-- WHO LIKE'S NAME -->
            <span class="pb-1 self-start text-sm text-[#6E767D]">{{ whoLike }} liked</span>

            <article class="text-base">
                <!-- NAME, USERNAME, TIME, OPTIONS ICON -->
                <div class="flex justify-betwenn items-center space-x-1">
                    <span class="truncate">{{ name }}</span>
                    <span class="font-normal text-[#6E767D]">@{{ username }} &#183; {{ howMuchTimeAgo }}</span>
                    <span class="text-[#6E767D] grow pr-1">
                        <div class="flex items-center justify-center ml-auto w-10 h-10 rounded-full hover:bg-[#0A1720] hover:text-[#1DA1F2] transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                        </div>
                    </span>
                </div>

                <!-- SLOT (TWEET TEXT), TWEET COVER (IMAGE), TWEET COVER TITLE, TWEET COVER DESCRIPTION & LINK URL/INFO -->
                <div class="font-normal space-y-3">
                    <slot />

                    <div class="rounded-2xl border border-[#2F3336]">

                        <!-- TWEET COVER (IMAGE) -->
                        <img class="rounded-t-2xl" :src="`./img/twitterSample/img/tweetCover/${tweetCover}`" alt="Tweet Image">

                        <div class="py-3 px-4">
                            <!-- TWEET COVER TITTLE -->
                            <span class="font-normal">{{ tweetCoverTitle }}</span>
                            <div class="font-normal text-[#6E767D] leading-tight">
                                <!-- TWEET COVER DESCRIPTION -->
                                <p>{{ tweetCoverDescription }}</p>
                                <div class="flex font-normal text-[#6E767D] pt-1 space-x-1 items-center">
                                    <svg class="w-5 h-5">
                                        <use :xlink:href="`./icons/iconSet.svg#link`"></use>
                                    </svg>
                                    <!-- TWEET LINK URL/INFO -->
                                    <a :href="tweetCoverUrl" target="_blank">{{ tweetCoverUrlText }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <!-- INTERACTIONS ICONS -->
            <div class="flex justify-around items-center text-[#6E767D] pt-2">
                <!-- REPLY ICON -->
                <div class="flex items-center hover:text-[#1DA1F2] space-x-1 cursor-pointer">
                    <svg-timeline-icon icon="reply" custom-classes="hover:bg-[#0A1720] w-10 h-10 p-2" :count="5" />
                </div>
                <!-- RETWEET ICON -->
                <div class="flex items-center hover:text-[#17BF63] space-x-1 cursor-pointer">
                    <svg-timeline-icon icon="retweet" custom-classes="hover:bg-[#091A11] w-10 h-10 p-2" :count="12" />
                </div>
                <!-- LIKE ICON -->
                <div class="flex items-center text-[#E0245E] space-x-1 cursor-pointer">
                    <svg-timeline-icon icon="like" custom-classes="hover:bg-[#1E0B11] w-10 h-10 p-2" :count="1" />
                </div>
                <!-- SHARE ICON -->
                <div class="hover:text-[#1DA1F2] cursor-pointer">
                    <svg-timeline-icon icon="share" custom-classes="hover:bg-[#0A1720] w-10 h-10 p-2" />
                </div>
            </div>
        </section>
    </div>
</template>



<script>

// import timelineData from './timelineData' //OBJECT WITH ALL TWEET CONTENT -NOT IN USE-
import SvgTimelineIcon from './SvgTimelineIcon.vue'
// console.log(timelineData.tweet1.likeNumber);


    export default {
        name: 'TimelineTweet',
        components: {
            SvgTimelineIcon,
        },
        props: {
            avatarImage: {
                type: String,
                required: false,
            },
            whoLike: {
                type: String,
                required: false,
            },
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
            howMuchTimeAgo: {
                type: String,
                required: true,
                default: '1m'
            },
            tweetCover: {
                type: String,
                required: false,
            },
            tweetCoverTitle: {
                type: String,
                required: false,
            },
            tweetCoverDescription: {
                type: String,
                required: false,
            },
            tweetCoverUrl: {
                type: String,
                required: false,
            },
            tweetCoverUrlText: {
                type: String,
                required: false,
            },
        }
    }

</script>


<style scopped>

</style>
