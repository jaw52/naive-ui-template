<template>
	<div></div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const { params, query } = route;

router.replace({ name: params.name as string, query });
</script>

<style scoped lang="less"></style>
