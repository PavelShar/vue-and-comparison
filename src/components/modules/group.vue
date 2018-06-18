<template>
    <div class="vue-compare__group">

        <!-- Heading -->
        <heading v-model="visible" v-bind="$props" />

        <!-- Parameters -->
        <transition name="fade">
            <div class="parameters" v-show="visible">
                <slot/>
            </div>
        </transition>


    </div>
</template>

<script>


    import Heading from './../base/heading.vue'

    import props from './../props/heading'
    import slider from './../../mixins/slider'


    export default {
        props,
        mixins: [slider],
        components: {Heading},

        data() {
            return {
                visible: !this.minimized
            }
        },

    }
</script>

<style scoped lang="scss">

    .vue-compare__group {

        &:last-child {
            padding-bottom: 30px;
        }

        .fade-enter-active,
        .fade-leave-active {
            transition: all .2s ease-in-out;
        }

        .fade-enter,
        .fade-leave-to{
            opacity: 0;
        }

    }

</style>
