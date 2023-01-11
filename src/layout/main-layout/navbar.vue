<template>
	<div class="navbar">
		<div class="left-side">
			<n-h2>JoJo Template</n-h2>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useThemeVars } from 'naive-ui';

const themeVars = useThemeVars();
const { borderColor } = themeVars.value;
</script>

<style scoped lang="less">
.navbar {
	display: flex;
	justify-content: space-between;
	height: 100%;
	padding: 0 20px;
	border-bottom: 1px solid v-bind(borderColor);
}
</style>
