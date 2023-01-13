<template>
	<n-space>
		<n-tag
			v-for="(item, index) in tabBarStore.tabList"
			:key="item.fullPath"
			size="large"
			closable
			@click="goTo(item)"
			@close="closeCurrentRoute(item, index)"
		>
			{{ item.title }}
		</n-tag>
	</n-space>
</template>
<script lang="ts" setup>
import { useTabBarStore } from '@/store';
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { RouteTabProps } from '@/store/modules/tabBar';

const route = useRoute();
const router = useRouter();
const tabBarStore = useTabBarStore();

const closeCurrentRoute = (tab: RouteTabProps, idx: number) => {
	tabBarStore.deleteTag(idx);

	// 关闭的标签为当前页面时，跳转到其他页面
	if (route.fullPath === tab.fullPath) {
		const latest = tabBarStore.tabList[idx - 1];
		router.push({ name: latest.name });
	}
};

const goTo = (tab: RouteTabProps) => {
	router.push(tab);
};

watch(
	() => route.fullPath,
	() => {
		tabBarStore.updateTabList(route);
	},
	{ immediate: true }
);
</script>
<style scoped></style>
