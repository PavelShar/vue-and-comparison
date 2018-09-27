<template>

    <item v-bind="{title,subtitle}" :style="itemStyle">

        <slot name="before" slot="before"></slot>
        <slot name="after" slot="after"></slot>

    </item>


</template>

<script>

    const props = {

        title: {
            type: String,
            required: true,
            default: null
        },

        subtitle: {
            type: String,
            required: false,
            default: null
        }
    };

    import Item from './../base/item.vue'
    import slider from './../../mixins/slider'


    export default {
        props,
        mixins: [slider],
        components: {Item},

        computed: {


            /**
             * Calculate item's widths
             *
             * @returns {{}}
             */
            itemStyle() {
                return {
                    minWidth: this.gap + 'px',
                    maxWidth: this.gap + 'px'
                }
            }
        }
    }

</script>
