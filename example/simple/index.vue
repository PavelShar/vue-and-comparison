<template>

    <c-container v-bind="{perView, itemsNumber}">

        <c-header v-bind="{sticky, useKeyboard}">
            <c-item v-for="(i,k) in items"
                    :key="k"
                    :title="i.title"
                    :subtitle="i.subtitle">
            </c-item>
        </c-header>


        <!-- &lt;!&ndash; Comparison group &ndash;&gt;
         <c-group v-for="(g, gi) in parameters" :heading="g.title" :key="gi" v-bind="g.options">


             &lt;!&ndash; Comparison parameter &ndash;&gt;
             <c-parameter v-for="(p, pi) in g.parameters" :key="pi" :title="p.title" :hint="p.hint || null"  v-bind="p.options">


                 <c-value v-for="(item, i) in items"
                          :key="i"
                          :value="getValue(item.parameters, g.alias, p.alias)"
                          :format="getFormattedValue"
                          :units="p.units">


                     &lt;!&ndash; Load custom component &ndash;&gt;
                     <div v-if="(p.type && p.type === 'custom') && (p.parameters && p.parameters.type) ">
                         <component
                             v-bind="getCustomComponentBind(p.parameters, getValue(item.parameters, g.alias, p.alias))"
                             :is="getCustomComponent(p.parameters.type)" />
                     </div>


                 </c-value>

             </c-parameter>
         </c-group>-->

    </c-container>

</template>

<script>

    import {Container, Header, Item} from '@src'
    import items from './items'

    export default {
        components: {
            CContainer: Container,
            CHeader: Header,
            CItem: Item
        },


        data() {
            return {

                perView: 4,
                itemsNumber: items.length,
                useKeyboard: true,

                sticky: true,
                items

            }
        },
    }
</script>

<style scoped>

</style>
