<template>

    <!-- Navigation -->
    <div class="vue-comparison__navigation" v-if="showNavigation">

        <div class="vue-comparison__navigation__arrow" :class="{disabled: !scrollableLeft}" @click="scroll('left')">
            <i class="fa fa-chevron-left"></i>
        </div>


        <div class="vue-comparison__navigation__arrow" :class="{disabled: !scrollableRight}" @click="scroll('right')">
            <i class="fa fa-chevron-right"></i>
        </div>
    </div>

</template>

<script>

    const props = {

        offset: {
            type: Number,
            default: 0
        },

        gap: {
            type: Number,
            default: 0
        },


        itemsNumber: {
            type: Number,
            default: 0
        },


        viewWidth: {
            type: Number,
            default: 0
        },

        useKeyboard: {
            type: Boolean,
            default: true
        }

    };

    export default {
        props,
        computed: {


            /**
             * Should show navigation arrows
             * Detect max width of comparison items
             */
            showNavigation() {
                return (this.itemsNumber * this.gap) >= this.viewWidth;
            },


            /**
             * Check if area can be scrolled left
             * @returns {boolean}
             */
            scrollableLeft() {
                return this.offset > 0;
            },

            /**
             * Check if area can be scrolled right
             * @returns {boolean}
             */
            scrollableRight() {
                return this.offset <= (((this.gap + 1) * this.itemsNumber) - this.viewWidth - this.gap);
            },

        },


        methods: {


            /**
             * Scroll area in direction
             *
             * @param direction
             */
            scroll(direction) {

                let offset = this.offset;
                switch (direction) {
                    case 'left':
                        offset = this.offset - (this.scrollableLeft ? this.gap : 0);
                        break;

                    case 'right':
                        offset = this.offset + (this.scrollableRight ? this.gap : 0);
                        break;

                }

                if (offset !== this.offset) this.$emit('scroll', offset);

            },


            /**
             * Create keyboard listener
             *
             * @param e
             */
            keyboardListener(e) {

                const key = e.which || e.keyCode;

                if (key === 37) this.scroll('left');
                if (key === 39) this.scroll('right');
            }
        },


        mounted() {

            // Listen keyboard events
            // If keyboard was switched in component params
            if (this.useKeyboard) window.addEventListener('keydown', this.keyboardListener);
        },


        beforeDestroy() {

            // Remove keyboard events
            // If keyboard was switched in component params
            if (this.useKeyboard) window.removeEventListener('keydown', this.keyboardListener);

        }

    }
</script>


<style scoped lang="scss">

    .vue-comparison {
        &__navigation {
            display: flex;
            margin-bottom: 5px;

            &__arrow {
                flex: 1;
                width: 100%;
                text-align: center;
                padding: 3px;
                font-size: 11px;
                background: #fbfbfb;
                color: #a8a8a8;
                cursor: pointer;
                transition: .2s ease;
                border-top: 1px solid #efefef;
                border-right: 1px solid #efefef;

                &:last-child {
                    border-right: 0;
                }

                &:hover {
                    background: darken(#fbfbfb, 2);
                }

                &.disabled {
                    background: #f7f7f7;
                    color: #eaeaea;
                    cursor: not-allowed;
                }
            }
        }
    }

</style>
