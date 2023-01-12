<script setup lang="ts">
import MsgProvider from '@/components/msg-provider.vue';
import { useThemeStore } from './store';

const themeStore = useThemeStore();
</script>

<template>
	<n-config-provider
		:theme="themeStore.getDarkTheme"
		:theme-overrides="themeStore.getThemeOverrides"
	>
		<msg-provider>
			<router-view />
		</msg-provider>
	</n-config-provider>
</template>

<style scoped></style>
