<template>

    <div class="comparison__loader">
        <div class="loader">
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

    .comparison__loader {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 160px;

        .loader {
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
