<template>
    <svg role="img" class="w-6 h-6">
        <use :xlink:href="`./icons/iconSet.svg#${icon}`"></use>
    </svg>
    <span :class="position" class="text-xs font-normal text-white bg-slate-500 rounded-sm p-0.5 absolute top-8 invisible group-hover:visible group-hover:delay-300 group-hover:transition-all capitalize">{{ icon }}</span>
</template>


<script>
    export default {
        name: 'SvgIcon',
        props: {
            icon: {
                type: String,
                required: true,
                default: '',
            },
            position: {
                type: String,
                required: false,
                default: '',
            }
        }
    }

</script>


<style scopped>

</style>
