<template>
    <svg role="img" :class="customClasses" class="rounded-full group-hover:stroke-current transform duration-300">
        <use :xlink:href="`./icons/iconSet.svg#${icon}`"></use>
    </svg>
    <span v-if="count" class="font-light text-base">{{ count }}</span>
</template>


<script>
    export default {
        name: 'SvgTimelineIcon',
        props: {
            icon: {
                type: String,
                required: true,
                default: '',
            },
            customClasses: {
                type: String,
                required: false,
                default: ''
            },
            count: {
                type: Number,
                required: false,
            },
        }

    }

</script>


<style scopped>

</style>
