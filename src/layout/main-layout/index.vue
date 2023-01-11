<template>
	<n-layout class="layout">
		<n-layout-header class="layout-navbar">颐和园路</n-layout-header>

		<n-layout has-sider>
			<n-layout-sider
				v-model:collapsed="collapsed"
				content-style="padding: 4px 8px;"
				:native-scrollbar="false"
				collapse-mode="width"
				:width="240"
				:collapsed-width="64"
				default-collapsed
				show-trigger
				bordered
				class="layout-sider"
			>
				<n-menu
					v-model:collapsed="collapsed"
					:collapsed-width="64"
					:collapsed-icon-size="22"
					:options="menuOptions"
					:render-icon="renderMenuIcon"
					:expand-icon="expandIcon"
				/>
			</n-layout-sider>

			<n-layout-content content-style="padding: 24px;" class="layout-content">
				<router-content />
			</n-layout-content>
		</n-layout>
	</n-layout>
</template>

<script setup lang="ts">
import { ref, h } from 'vue';
import RouterContent from '@/layout/main-layout/router-content.vue';
import { MenuOption, NIcon } from 'naive-ui';
import { BookmarkOutline, CaretDownOutline } from '@vicons/ionicons5';

const collapsed = ref(false);

const menuOptions: MenuOption[] = [
	{
		label: '列表',
		key: 'list',
		children: [
			{
				label: '基础列表',
				key: 'basic-list',
			},
			{
				label: '高级列表',
				key: 'senior-list',
			},
		],
	},
];

const renderMenuIcon = (option: MenuOption) => {
	// 渲染图标占位符以保持缩进
	if (option.key === 'sheep-man') return true;
	// 返回 falsy 值，不再渲染图标及占位符
	if (option.key === 'food') return null;
	return h(NIcon, null, { default: () => h(BookmarkOutline) });
};

const expandIcon = () => h(NIcon, null, { default: () => h(CaretDownOutline) });
</script>

<style scoped lang="less">
@nav-size-height: 60px;

.layout {
	width: 100%;
	height: 100%;
}

.layout-sider,
.layout-content {
	height: calc(100vh - @nav-size-height);
	transition: all 0.2s ease-in-out;
}

.layout-navbar {
	height: @nav-size-height;
}
</style>
