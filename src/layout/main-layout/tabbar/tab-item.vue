<template>
	<n-tag
		:closable="!disabledClose"
		:type="isCurrentRoute ? 'info' : undefined"
		@close.stop="closeCurrent()"
		@contextmenu.prevent="handleContextMenu"
	>
		<router-link
			class="tab-item"
			:to="{ path: item.path, params: item.params, query: item.query }"
		>
			{{ item.title }}
		</router-link>
	</n-tag>

	<n-dropdown
		:options="options"
		placement="bottom-start"
		trigger="manual"
		:x="x"
		:y="y"
		:show="showDropdown"
		@select="actionSelect"
		@clickoutside="showDropdown = false"
	/>
</template>
<script lang="ts" setup>
import { RoutePath } from '@/enums/route';
import { RouteTabProps, useTabBarStore } from '@/store/modules/tabBar';
import { renderIcon } from '@/utils/iconUtil';
import {
	CloseOutline,
	ReloadOutline,
	SwapHorizontalOutline,
} from '@vicons/ionicons5';
import { DropdownOption, NTag } from 'naive-ui';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useRightDropdown from './useRightDropdown';

// eslint-disable-next-line no-shadow
enum Eaction {
	reload = 'reload',
	current = 'current',
	left = 'left',
	right = 'right',
	others = 'others',
	all = 'all',
}

const props = defineProps<{
	item: RouteTabProps;
	index: number;
}>();

const router = useRouter();

const route = useRoute();
const tabBarStore = useTabBarStore();

const isCurrentRoute = computed(() => route.fullPath === props.item.fullPath);
const disabledClose = computed(() => tabBarStore.tabList.length === 1);

const options = computed(
	() =>
		[
			{
				key: Eaction.reload,
				label: '重新加载',
				disabled: !isCurrentRoute.value,
				icon: renderIcon(ReloadOutline),
			},
			{
				key: Eaction.current,
				label: '关闭当前标签页',
				disabled: disabledClose.value,
				icon: renderIcon(CloseOutline),
			},
			{
				type: 'divider',
				key: 'd1',
			},
			{
				key: Eaction.others,
				label: '关闭其他标签页',
				disabled: tabBarStore.tabList.length < 2,
				icon: renderIcon(SwapHorizontalOutline),
			},
		] as DropdownOption[]
);

// ==========================Menu Actions=======================================
const { x, y, showDropdown, handleContextMenu } = useRightDropdown();

const closeOther = async () => {
	tabBarStore.tabList = tabBarStore.tabList.filter(
		(_el, idx) => props.index === idx
	);

	if (!isCurrentRoute.value) {
		await router.push({
			name: props.item.name,
			params: props.item.params,
			query: props.item.query,
		});
	}
};

const reloadPage = async () => {
	await router.push({
		name: RoutePath.RedirectRouteName,
		params: {
			name: route.name as string,
		},
		query: route.query,
	});
};

const closeCurrent = () => {
	tabBarStore.deleteTag(props.index);

	// 关闭的标签为当前页面时，跳转到其他页面
	if (route.fullPath === props.item.fullPath) {
		const latest = tabBarStore.tabList[props.index - 1];
		router.push({ name: latest.name });
	}
};

const actionSelect = async (value: Eaction) => {
	showDropdown.value = false;

	if (value === Eaction.current) {
		closeCurrent();
	} else if (value === Eaction.reload) {
		await reloadPage();
	} else {
		await closeOther();
	}
};
</script>
<style scoped>
.tab-item:hover {
	cursor: pointer;
}
</style>
