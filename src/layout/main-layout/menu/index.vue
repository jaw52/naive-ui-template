<template>
	<n-layout-sider
		v-model:collapsed="collapsed"
		v-bind="siderConfig"
		class="layout-sider"
		:inverted="settingStore.dark"
		style="height: 100vh"
	>
		<n-space align="center" class="logo" :wrap="false">
			<div class="logo-img" />

			<n-h3 v-if="!collapsed" class="logo-title"> JoJo Template</n-h3>
		</n-space>

		<n-menu
			v-model:collapsed="collapsed"
			:inverted="settingStore.dark"
			v-bind="menuConfig"
			:default-value="(route.name as string)"
			:options="menuTree"
			:expand-icon="renderIcon(CaretDownOutline)"
		/>
	</n-layout-sider>
</template>
<script lang="ts" setup>
import { useSettingStore } from '@/store';
import { renderIcon } from '@/utils/iconUtil';
import { CaretDownOutline } from '@vicons/ionicons5';
import { LayoutSiderProps, MenuProps, NLayoutSider, NMenu } from 'naive-ui';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import useMenuTree from './useMenuTree';

const collapsed = ref(false);
const { menuTree } = useMenuTree();
const route = useRoute();

// 侧边栏样式配置
const siderConfig: LayoutSiderProps = {
	collapseMode: 'width',
	collapsedWidth: 48,
	width: 240,
	showTrigger: true,
	bordered: true,
	nativeScrollbar: false,
};

// 菜单样式配置
const menuConfig: MenuProps = {
	indent: 22,
	collapsedIconSize: 16,
	iconSize: 16,
};

const settingStore = useSettingStore();
</script>
<style scoped>
.logo-title {
	margin-bottom: 0;
	font-weight: 600;
	white-space: nowrap;
	color: var(--n-item-text-color);
}

.logo {
	padding-left: 8px;
	padding-top: 8px;
}

.logo-img {
	width: 28px;
	height: 28px;
	background-size: contain;
	background-repeat: no-repeat;
	background-image: url('//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image');
}
</style>
