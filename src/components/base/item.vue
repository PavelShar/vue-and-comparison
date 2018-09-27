<template>

    <div class="vue-compare__item">
        <div class="vue-compare__item__before">
            <slot name="before"/>
        </div>

        <div class="vue-compare__item__title">{{title}}</div>
        <div class="vue-compare__item__subtitle">{{subtitle}}</div>

        <div class="vue-compare__item__after">
            <slot name="after"/>
        </div>
    </div>

</template>

<script>

    const props = {
        title: {
            type: String,
            default: null
        },

        subtitle: {
            type: String,
            default: null
        }
    };

    export default {
        props,
    }

</script>

<style scoped lang="scss">

    .vue-compare {
        &__item {
            padding: 25px;
            box-sizing: border-box;

            &__title {
                font-size: 14px;
            }

            &__subtitle {
                font-size: 12px;
                color: #a8a8a8;
                padding-top: 3px;
            }
        }
    }

</style>
