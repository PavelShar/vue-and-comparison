<template>
    <div class="compare__group">

        <!-- Heading -->
        <heading v-model="visible" v-bind="$props" />

        <!-- Parameters -->
        <transition name="parameters">
            <div class="parameters" v-show="visible">
                <slot/>
            </div>
        </transition>


    </div>
</template>

<script>


    import Heading from './../base/heading.vue'
    import HeadingProps from './../props/heading'

    import slider from './../../mixins/slider'

    export default {

        props: Object.assign({}, HeadingProps),
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

    .compare__group {

        &:last-child {
            padding-bottom: 30px;
        }

        /* Transition */
        .parameters-enter-active,
        .parameters-leave-active {
            transition: all .2s ease-in-out;
        }

        .parameters-enter,
        .parameters-leave-to{
            opacity: 0;
        }

    }

</style>