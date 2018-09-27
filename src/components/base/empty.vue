<template>

    <div class="comparison__empty">
        <div class="icon">
            <slot name="icon"/>
        </div>
        <div class="text">
            <slot name="text"/>
        </div>
    </div>

</template>

<script>

    export default {}

</script>

<style scoped lang="scss">

    .comparison__empty {

        height: 160px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .icon {
            height: 75px;
            display: flex;
            align-items: center;
            justify-content: center;

        }

        .text {
            font-size: 12px;
            padding: 10px 0;
        }
    }

</style>