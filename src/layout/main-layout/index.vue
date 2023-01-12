<template>
	<n-layout class="layout">
		<n-layout-header class="layout-navbar" bordered>
			<navbar />
		</n-layout-header>

		<n-layout has-sider>
			<n-layout-sider
				v-model:collapsed="collapsed"
				v-bind="siderConfig"
				class="layout-sider"
			>
				<n-menu
					v-model:collapsed="collapsed"
					v-bind="menuConfig"
					:default-value="(route.name as string)"
					:options="menuTree"
					:expand-icon="renderIcon(CaretDownOutline)"
				/>
			</n-layout-sider>

			<n-layout-content content-style="padding: 24px;" class="layout-content">
				<router-content />
			</n-layout-content>
		</n-layout>
	</n-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import RouterContent from '@/layout/main-layout/router-content.vue';
import { LayoutSiderProps, MenuProps } from 'naive-ui';
import { CaretDownOutline } from '@vicons/ionicons5';
import useMenuTree from '@/layout/main-layout/useMenuTree';
import { useRoute } from 'vue-router';
import Navbar from '@/layout/main-layout/navbar/navbar.vue';
import { renderIcon } from '@/utils/iconUtil';

const collapsed = ref(false);
const { menuTree } = useMenuTree();
const route = useRoute();

// 侧边栏样式配置
const siderConfig: LayoutSiderProps = {
	collapseMode: 'width',
	width: 240,
	showTrigger: true,
	bordered: true,
	nativeScrollbar: false,
	contentStyle: 'padding: 4px 8px;',
};

// 菜单样式配置
const menuConfig: MenuProps = {
	rootIndent: 12,
	indent: 22,
	collapsedIconSize: 15,
	iconSize: 15,
};
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
