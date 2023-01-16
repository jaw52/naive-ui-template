<template>
	<n-space class="nav-tab">
		<tab-item
			v-for="(item, index) in tabBarStore.tabList"
			:key="item.fullPath"
			:item="item"
			:index="index"
		>
			{{ item.title }}
		</tab-item>
	</n-space>
</template>
<script lang="ts" setup>
import { useTabBarStore } from '@/store';
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import TabItem from './tab-item.vue';

const route = useRoute();
const tabBarStore = useTabBarStore();

watch(
	() => route.fullPath,
	() => {
		tabBarStore.updateTabList(route);
	},
	{ immediate: true }
);
</script>
<style scoped>
.nav-tab {
	padding: 4px 20px;
}
</style>
