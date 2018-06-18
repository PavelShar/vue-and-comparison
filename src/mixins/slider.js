export default  {
    computed: {

        /**
         * Get gap size from container
         *
         * @returns {*}
         */
        gap() {
            return this.$parent.gap ? this.$parent.gap : 0;
        },



        /**
         * Get and set offset from container
         *
         * @returns {number}
         */
        offset:  {

            get() {
                return this.$parent.offset ? this.$parent.offset : 0;
            },

            set(offset) {
                this.$parent.offset = offset;
            }

        },



        /**
         * Get comparing items number
         *
         * @returns {number}
         */
        itemsNumber() {
            return this.$parent.itemsNumber ? this.$parent.itemsNumber : 0;

        },



        /**
         * Get viewport width
         *
         * @returns {*}
         */
        viewWidth() {
            return this.$parent.viewWidth ? this.$parent.viewWidth : 0;

        },


        /**
         * Get container reference
         *
         * @returns {*}
         */
        containerRef() {
            return this.$parent.view || null;
        }

    }
}
