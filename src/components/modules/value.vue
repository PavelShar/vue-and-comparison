<template>
    <div class="comparison__value" :style="itemStyle">
        <slot>
            <div class="comparison__value__group">
               <value v-bind="$props" />
            </div>
        </slot>
    </div>
</template>

<script>


    import Value from './../base/value.vue'
    import props from './../props/value'
    import slider from './../../mixins/slider'

    export default {

        props,
        mixins: [slider],
        components: {Value},
        computed: {


            /**
             * Get item's style
             */
            itemStyle() {
                return {
                    minWidth: this.gap + 'px',
                    maxWidth: this.gap + 'px'
                }
            },
        },
    }

</script>

<style scoped lang="scss">

    .comparison__value {
        padding: 0 25px;
        box-sizing: border-box;

    }

</style>