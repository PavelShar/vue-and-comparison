<template>

    <div class="vue-compare__header" :style="topPosition">
        <div class="vue-compare__header__container" :style="headerStyle">
            <slot />
        </div>

        <navigation
            v-bind="{offset, gap, itemsNumber, viewWidth, useKeyboard}"
            @scroll="o => this.offset = o">

            <slot name="left" slot="left"></slot>
            <slot name="right" slot="right"></slot>

        </navigation>

    </div>


</template>

<script>

    import slider from './../../mixins/slider'
    import Navigation from './../base/navigation.vue'

    const props = {
        sticky: {
            type: Boolean,
            default: false
        },

        useKeyboard: {
            type: Boolean,
            default: true
        },

        scrollTopMargin: {
            type: Number,
            default: 0
        }
    };


    export default {

        mixins: [slider],
        components: {Navigation},
        props,
        data() {
            return {
                elementTopPosition: null,
                scrollTopPosition: 0
            }
        },

        computed: {


            /**
             * Calculate max header width
             *
             * @returns {*}
             */
            headerWidth() {

                const gapWidth = this.gap * this.items;
                return gapWidth > this.viewWidth ? gapWidth : this.viewWidth;

            },


            /**
             * Calculate header's style
             *
             * @returns {{}}
             */
            headerStyle() {
                return {
                    left: - this.offset + 'px',
                    width: this.headerWidth + 'px'
                }
            },


            /**
             * Get top position
             *
             * @returns {*}
             */
            topPosition() {
                if (this.sticky) {

                    const offset = this.elementTopPosition - this.scrollTopMargin;
                    if (this.scrollTopPosition >= offset) {
                        return {top: this.scrollTopPosition - offset + 'px'}
                    }
                    return null;
                }
            }

        },


        methods: {

            updateScrollTopPosition(e) {
                this.scrollTopPosition = e.target.scrollTop;
            }


        },


        mounted() {

            // Calculate top offset/
            this.$nextTick(() => this.elementTopPosition = this.$el.offsetTop);


            // Listen viewport scroll event
            // Store current top scroll offset
            window.addEventListener('scroll', this.updateScrollTopPosition, true);

        },

        beforeDestroy() {
            window.removeEventListener('scroll', this.updateScrollTopPosition);
        }
    }

</script>

<style scoped lang="scss">

    .vue-compare {
        &__header {
            box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.08);
            position: relative;
            z-index: 10;
            background: #fbfbfb;

            &__container {
                display: flex;
                left: 0;
                position: relative;
                transition: left .5s cubic-bezier(.17, .84, .44, 1);
                background: #fbfbfb;

                &:last-child {
                    padding-bottom: 0
                }
            }



        }

    }

</style>
