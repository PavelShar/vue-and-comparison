<template>

    <c-container v-bind="{perView, itemsNumber}">

        <c-header v-bind="{sticky, useKeyboard}">
            <c-item
                v-for="(i,k) in items"
                :key="k"
                :title="i.title"
                :subtitle="i.subtitle">
            </c-item>


            <!--<template slot="left" slot-scope="state">123 - {{state}}</template>
            <template slot="right" slot-scope="{disabled}">123 - {{disabled}}</template>-->

        </c-header>

        <c-group v-for="(g, gi) in parameters" :heading="g.title" :key="gi" v-bind="g.options">
            <c-parameter v-for="(p, pi) in g.parameters" :key="pi" :title="p.title" :hint="p.hint || null"  v-bind="p.options">
                <c-value
                    v-for="(item, i) in items"
                    :key="i"
                    :value="getValue(item.parameters, g.alias, p.alias)"
                    :units="p.units">
                </c-value>
            </c-parameter>
        </c-group>

    </c-container>

</template>

<script>

    import {Container, Header, Item, Group, Parameter, Value} from '@src'

    import get from 'lodash/get'
    import items from './items'
    import parameters from './parameters'

    export default {
        components: {
            CContainer: Container,
            CHeader: Header,
            CItem: Item,
            CGroup: Group,
            CParameter: Parameter,
            CValue: Value
        },


        data() {
            return {

                perView: 4,
                itemsNumber: items.length,
                useKeyboard: true,

                sticky: false,

                items,
                parameters
            }
        },


        methods: {


            /**
             * Get item value
             *
             * @param item
             * @param group
             * @param parameter
             * @returns {string|number|null}
             */
            getValue(item, group, parameter) {
                return get(item, [group,parameter], null);
            },

        }

    }
</script>

<style scoped>

</style>
