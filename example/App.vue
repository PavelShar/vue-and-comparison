<template>
    <div class="vue-compare">

        <div class="vue-compare__heading">
            <div class="vue-compare__heading__title">Vue Compare</div>
            <div class="vue-compare__heading__description">
                <div>Vue component for creating nice comparison boards</div>
                <div>Inspired by Yandex.Market comparison tool</div>
            </div>
        </div>

        <div class="vue-compare__types">
            <div
                v-for="(t, k) in types"
                class="vue-compare__types__type"
                :class="{'active' : type === t.alias}"
                :key="k" @click="type = t.alias">
                {{t.title}}
            </div>
        </div>

        <div class="vue-compare__present">
            <component :is="type"/>
        </div>

    </div>
</template>
<script>

    import Simple from './simple'

    export default {
        name: 'VueCompare',
        components: {Simple},
        data() {
            return {
                type: 'Simple',
                types: [
                    {title: 'Simple', alias: 'Simple'},
                    {title: 'Custom', alias: 'Custom'}
                ]
            }
        },
    };

</script>

<style lang="scss">


    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');

    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        min-width: 1200px;
        background: white;
        font-family: 'Roboto', sans-serif;
    }

    body {

        line-height: 1.254;
        font-weight: 400;
        -webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: auto;

        .vue-compare {
            height: 100%;
            width: 100%;

            background: #bdc3c7;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



            display: flex;
            flex-direction: column;
            align-items: center;

            &__heading {
                padding: 40px;
                text-align: center;


                &__title {
                    font-size: 35px;
                    color: white;
                    padding-bottom: 7px;
                }

                &__description {
                    font-weight: 300;
                    font-size: 14px;
                    color: darken(white, 10)
                }


            }

            &__types {
                padding: 5px 0;
                margin-bottom: 20px;
                display: flex;

                &__type {
                    padding: 10px;
                    margin: 0 5px;
                    text-transform: uppercase;
                    font-size: 13px;
                    cursor: pointer;
                    transition: .2s ease;
                    border-bottom: 1px solid transparent;
                    color: darken(white, 15);

                    &:hover {
                        border-color: darken(white, 15);
                    }

                    &.active {
                        color: white;
                        border-color: white;
                    }
                }
            }

            &__present {
                width: 65%;
                min-width: 700px;
                height: 65%;
                min-height: 400px;
                margin: 0 auto;
                background: white;
                border-radius: 3px 3px 0 0;
                padding: 2px;
                box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.51);
            }
        }
    }


</style>
