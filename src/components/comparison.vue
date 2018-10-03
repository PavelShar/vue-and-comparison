<template>

    <c-container v-bind="{itemsNumber, perView}">

        <!-- Header component -->
        <c-header v-bind="{sticky, useKeyboard}">

            <!-- Header's items -->
            <c-item
                v-for="(i,k) in items"
                :key="k"
                :title="title(i, k)"
                :subtitle="subtitle(i, k)">

                <!-- Slots here -->

            </c-item>

            <!-- Slots here -->

        </c-header>


        <c-group v-for="(g, gi) in parameters" :heading="g.title" :key="gi" v-bind="g.options">
            <c-parameter v-for="(p, pi) in g.parameters" :key="pi" :title="p.title" :hint="p.hint || null"  v-bind="p.options">
                <c-value
                    v-for="(item, i) in items"
                    :key="i"
                    :value="value(item.parameters, g.alias, p.alias)"
                    :units="p.units">

                    <!-- Slot here -->

                </c-value>
            </c-parameter>
        </c-group>


    </c-container>

</template>

<script>

    import CContainer from './modules/container'
    import CHeader from './modules/header'
    import CItem from './modules/item'
    import CGroup from './modules/group'
    import CParameter from './modules/parameter'
    import CValue from './modules/value'

    import {getValue} from './../utils'

    const props = {
        items: {
            type: Array,
            default: [],
        },

        parameters: {
            type: Array,
            default: [],
        },

        perView: {
            type: Number,
            default: 3
        },

        sticky: {
            type: Boolean,
            default: true,
        },

        useKeyboard: {
            type: Boolean,
            default: true
        },

        title: {
            type: Function,
            default: null
        },

        subtitle: {
            type: Function,
            default: null
        },

        value: {
            type: Function,
            default: getValue
        }

    };


    export default {
        props,
        components: {
            CContainer,
            CHeader, CItem,
            CGroup, CParameter, CValue
        },

        computed: {


            /**
             * Get items' number
             *
             * @returns {number}
             */
            itemsNumber() {
                return this.items ? this.items.length : 0
            }

        }

    }
</script>

<style scoped>

</style>
