<template>

    <div class="c-hero-comparison">
        <comparison
            v-bind="{items, parameters, perView, sticky, useKeyboard}"
            :title="(i) => i.name"
            :subtitle="(i) => `${i.city} / ${i.address}`">
        </comparison>
    </div>

</template>

<script>

    import Comparison from '../../../src'
    import items from './../mocks/people/data'
    import parameters from './../mocks/people/parameters'

    export default {
        name: 'HeroComparison',
        components: {Comparison},

        data() {
            return {
                items,
                parameters,
                perView: 3,
                sticky: true,
                useKeyboard: true,
            }
        }

    }
</script>

<style scoped lang="scss">

    .c-hero-comparison {
        border: 1px solid #eaeaea;
        border-radius: 3px;
    }

</style>
