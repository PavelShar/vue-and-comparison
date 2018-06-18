export default {

    value: {
        type: [String, Number, Array, Object],
        default: null
    },

    units: {
        type: [Array, String],
        default: null
    },

    empty: {
        type: String,
        default: 'Нет данных'
    },


    format: {
        type: Function,
        default: null
    }
}