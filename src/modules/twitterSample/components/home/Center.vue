<template>

    <div class="col-span-7 md:col-span-8 lg:col-span-5">
         <div class="col-span-5 border border-t-0 border-[#2F3336]">
            <home />
            <whats-happening />

            <timeline-tweet
                avatar-image="fabio.jpeg"
                who-like="Somebody"
                name="Fabio Duarte"
                username="lh536"
                how-much-time-ago="2m"
                tweet-cover="fabioTweetCover.jpg"
                tweet-cover-title="Junior Frontend Developer - Tailwind CSS & VueJS"
                tweet-cover-description="Currently I feel very comfortable using Tailwind CSS and VueJS as development tools. Working on a real project would allow me to put my skills into practice and learn more in order to improve myself every day."
                tweet-cover-url="https://lh536.github.io"
                tweet-cover-url-text="lh536.github.io">
                <p>Hi! 👋 My name is Fabio Duarte. I'm junior frontend developer. I started studying web development on my own 💪 since mid-2020 with paid and free courses, books and of course official documentation of technologies I've learned.</p>
            </timeline-tweet>

            <timeline-tweet
                avatar-image="tailwind.jpg"
                who-like="Fabio Duarte"
                name="Tailwind CSS"
                username="tailwindcss"
                how-much-time-ago="7m"
                tweet-cover="tailwindTweetCover.jpg"
                tweet-cover-title="Tailwind CSS v3.0 - Tailwind CSS"
                tweet-cover-description="Tailwind CSS v3.0 is here — bringing incredible performance gains, huge workflow improvements, and a seriously ridiculous number of new features."
                tweetCoverUrl="https://www.tailwindcss.com/"
                tweetCoverUrlText="tailwindcss.com">
                <p class="leading-snug">Tailwind CSS v3.0 is here — bringing incredible performance gains, huge workflow improvements, and a seriously ridiculous number of new features.</p>
                <p class="leading-snug">Read the announcement post for all the details 👉</p>
            </timeline-tweet>

         </div>
    </div>

</template>

<script>
import { defineAsyncComponent } from "vue"

    export default {
        name: 'Center',
        components: {
            Home: defineAsyncComponent ( () => import ('@/modules/twitterSample/components/home/CenterComp/Home.vue') ) ,
            WhatsHappening: defineAsyncComponent ( () => import ('@/modules/twitterSample/components/home/CenterComp/WhatsHappening.vue') ) ,
            TimelineTweet: defineAsyncComponent ( () => import ('@/modules/twitterSample/components/home/CenterComp/TimelineTweet.vue') ) ,
        },
    }

</script>


<style></style>
