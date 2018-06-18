<template>

    <div class="heading" v-if="heading" @click="collapsible ? $emit('input', !value) : null">

        <div class="title">{{heading}}</div>
        <div class="chevron" v-if="collapsible">
            <i class="fa" :class="{'fa-chevron-up': value, 'fa-chevron-down': !value}"></i>
        </div>

    </div>

</template>

<script>

    import props from './../props/heading'
    export default {
        props,
    }

</script>

<style scoped lang="scss">

    .heading {

        display: flex;
        align-items: center;
        padding: 20px 25px;
        cursor: pointer;

        .title {
            font-size: 16px;
            color: #1a1a1a;
            font-weight: 500;
        }

        .chevron {
            padding: 5px 10px;
            font-size: 14px;
        }
    }

</style>
