<template>
    <router-view />
</template>

<script setup lang="ts">
    import { useIbcStatisticsChains } from '@/store';
    import { useDocumentVisibility } from '@/composables';

    const ibcStatisticsChainsStore = useIbcStatisticsChains();
    ibcStatisticsChainsStore.initStateAction();
    useDocumentVisibility();
</script>

<style>
    #app {
        text-align: center;
    }
</style>
