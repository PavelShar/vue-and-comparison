<template>

    <div class="compare__parameter" v-if="title">
        <div>{{title}}</div>
        <div class="hint" v-if="hasHint" @click="$emit('tooltip')">
            <i class="fa fa-question-circle" aria-hidden="true"></i>
        </div>
    </div>

</template>

<script>

    import {base as props} from './../props/parameter'
    export default {
        props,
    }
</script>

<style scoped lang="scss">

    .compare__parameter {
        text-transform: uppercase;
        font-size: 11px;
        color: #a8a8a8;
        padding: 0 25px 12px;
        display: flex;
        align-items: center;

        .hint {
            transition: .2s ease;
            opacity: 0;
            margin-left: 5px;
            cursor: pointer;
        }

        &:hover {
            .hint {
                opacity: 1;
            }
        }
    }

</style>