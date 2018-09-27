<template>
    <div class="comparison__value__data">
        <div class="value" :class="{'no-data': val === null}">{{val !== null ? val : empty}}</div>
        <div class="unit" v-if="unit">{{unit}}</div>
    </div>
</template>

<script>

    import props from './../props/value'

    export default {
        props,
        computed: {


            /**
             * Get right unit name for passed value
             * @returns string|null
             */
            unit() {
                if (this.units && typeof(this.value) === 'number') {
                    if (this.units instanceof Array) {
                        return this.getPlural(this.value, this.units[0], this.units[1], this.units[2]);
                    } else return this.units;
                } else return null;

            },


            /**
             * Get value
             * @returns string|number|null
             */
            val() {
                const value = this.value !== null ? this.value : null;
                return value !== null ? this.formatValue(value) : null;
            }

        },


        methods: {


            /**
             * Get human unit
             * @param number
             * @param one
             * @param two
             * @param five
             * @returns {string}
             */
            getPlural(number, one, two, five) {

                let result = "";
                if ((number - number % 10) % 100 !== 10) {
                    if (number % 10 === 1) {
                        result = one;
                    } else if (number % 10 >= 2 && number % 10 <= 4) {
                        result = two;
                    } else result = five;
                } else result = five;
                return result;
            },




            /**
             * Call custom format function if passed
             * @param value
             * @returns {*}
             */
            formatValue(value) {
                return  typeof this.format === 'function' ? this.format(value) : value;
            }



        }

    }

</script>

<style scoped lang="scss">


    .comparison__value__data {
        display: flex;
        align-items: baseline;

        .value {
            font-size: 16px;

            &.no-data {
                font-size: 12px;
                color: #c7c5c5;
            }
        }

        .unit {
            margin-left: 4px;
            color: #a8a8a8;
            font-size: 9px;
            text-transform: uppercase;

        }

    }

</style>