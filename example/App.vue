<template>
    <div id="vue-compare">


        <simple>

        </simple>

    </div>
</template>
<script>

    import Simple from './simple'

    export default {
        name: 'VueCompare',
        components: {Simple}
    };

</script>

<style lang="scss">



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


    }

    body {

        line-height: 1.254;
        font-weight: 400;
        -webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: auto;

        #vue-compare {
            height: 100%;
            width: 100%;
        }
    }



</style>
