<template>

    <div class="compare__parameter__block" :class="{hoverable}">

        <parameter :title="title" :hasHint="hasHint" @tooltip="tooltip = !tooltip" />


        <!--<tooltip slot="tooltip" :style="{marginLeft: '25px'}" v-model="tooltip" v-if="tooltip && hasHint">
            <div slot="title">{{title}}</div>
            <div slot="text" v-html="hintText"></div>
        </tooltip>-->

        <div class="values" :style="{left: - offset + 'px'}">
            <slot/>
        </div>

    </div>

</template>

<script>

    import {component as props} from './../props/parameter'
    import Parameter from './../base/parameter.vue'

    import slider from './../../mixins/slider'


    export default {

        props,
        mixins: [slider],
        components: {Parameter},

        data() {
            return {
                tooltip: false
            }
        },


        computed: {


            /**
             * Get hint text
             * @returns {any}
             */
            hintText() {
                return this.hint ? this.hint.replace(/\\n+/g, '<br/>') : null;
            },


            /**
             * Check if parameter has hint
             */
            hasHint() {
                return this.hint && this.hint.length > 0
            },

        }

    }

</script>

<style scoped lang="scss">

    .compare__parameter__block {

        border-top: 1px solid #eaeaea;
        padding: 15px 0;
        transition: .2s ease;
        cursor: default;

        &.hoverable {
            &:hover {
                background: #f9f9f9;
            }
        }

        .values {
            font-size: 13px;
            color: #585858;
            display: flex;
            left: 0;
            position: relative;
            transition: left .5s cubic-bezier(.17, .84, .44, 1);
        }
    }



</style>
