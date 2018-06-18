<template>

    <div class="vue-comparison">
        <div class="vue-comparison__body" ref="view">
            <slot></slot>
        </div>
    </div>

</template>

<script>

    const props = {
        itemsNumber: {
            type: Number,
            default: 0
        },

        perView: {
            type: Number,
            default: 5
        }
    };

    export default {
        props,
        data() {
            return {
                offset: 0,
                view: null,
            }
        },

        computed: {


            /**
             * Get viewport's width
             *
             * @returns {number}
             */
            viewWidth() {
                return this.view ? this.view.clientWidth : 0
            },


            /**
             * Get real item width
             *
             * @returns {number}
             */
            gap() {
                return parseInt(this.viewWidth / this.perView);
            },

        },

        mounted() {
            this.view = this.$refs.view;
        },

    }
</script>

<style scoped lang="scss">

    .vue-comparison {
        height: 100%;
        overflow-y: hidden;

        &__body {
            height: 100%;
            overflow-y: auto;
            background: white;
            overflow-x: hidden;
        }
    }


    ::-webkit-scrollbar-thumb {
        background-color: #aeb5bb;
        border: 1px solid transparent;
        border-radius: 1px;
    }

    ::-webkit-scrollbar {
        width: 6px;
        background-color: #F5F5F5;
        border-radius: 1px;
    }


</style>
