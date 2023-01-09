<script setup lang="ts">
import { darkTheme } from 'naive-ui';
import MsgProvider from '@/components/msg-provider.vue';
import { useThemeStore } from './store';

const themeStore = useThemeStore();

const theme = themeStore.darkTheme ? darkTheme : undefined;
</script>

<template>
	<n-config-provider
		:theme="theme"
		:theme-overrides="themeStore.getThemeOverrides"
	>
		<msg-provider>
			<router-view />
		</msg-provider>
	</n-config-provider>
</template>

<style scoped></style>
