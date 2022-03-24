<template>
    <!-- 3 WHO TO FOLLOW -->
    <div class="bg-[#15181C] rounded-2xl">
        <div class="border-b border-[#2F3336] px-4 py-2 font-extrabold">
            <span>Who to follow</span>
        </div>

        <who-to-follow-item name="Michael Andreuzza" username="Mike_Andreuzza" avatar-image="michael.jpg" />
        <who-to-follow-item name="Himanshu Mishra" username="zicsus" avatar-image="himanshu.png" />
        <who-to-follow-item name="Fernando Herrera" username="Fernando_Her85" avatar-image="fernando.jpg" />
        <who-to-follow-item name="Vue.js" username="vuejs" avatar-image="vuejs.jpg" />
        <who-to-follow-item name="Manz" username="Manz" avatar-image="manz.jpg" />
        <who-to-follow-item name="Adam Wathan" username="adamwathan" avatar-image="adam.jpg" />
        <who-to-follow-item name="Fernando Villaquirán" username="fdovillaquiran" avatar-image="villaquiran.jpg" />
        <who-to-follow-item name="Shruti Balasa" username="shrutibalasa" avatar-image="shruti.jpg" />
        <who-to-follow-item name="Victor" username="vponamariov" avatar-image="victor.jpg" />
        <who-to-follow-item name="Juan Andrés Núñez" username="juanwmedia" avatar-image="juan.jpg" />
        <who-to-follow-item name="Simon Høiberg" username="SimonHoiberg" avatar-image="simon.jpg" />
        <who-to-follow-item name="Pablo Sirera" username="pablosirera" avatar-image="pablo.jpg" />
        <who-to-follow-item name="Nicolás Schürmann" username="_nasch_" avatar-image="nicolas.jpg" />
        <who-to-follow-item name="Sustrato Magenta" username="sustratomagenta" avatar-image="sustrato.png" />

        <div class="font-normal text-[#1DA1F2] text-base px-4 py-2"><span>Show more</span></div>
    </div>
</template>


<script>

import WhoToFollowItem from "./WhoToFollowItem.vue"
    export default {
        name: 'WhoToFollow',
        components: {
            WhoToFollowItem,
        }
    }

</script>


<style scopped>

</style>
