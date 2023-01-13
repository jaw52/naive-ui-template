<template>
	<n-layout class="layout" has-sider>
		<Menu />

		<n-layout>
			<n-layout-header class="layout-navbar" bordered>
				<navbar />
			</n-layout-header>

			<n-layout-content
				embedded
				content-style="padding: 24px;"
				class="layout-content"
			>
				<TabBar />
				<n-card style="height: 100%">
					<router-content />
				</n-card>
			</n-layout-content>
		</n-layout>
	</n-layout>
</template>

<script setup lang="ts">
import Navbar from '@/layout/main-layout/navbar/navbar.vue';
import RouterContent from '@/layout/main-layout/router-content.vue';
import Menu from './menu/index.vue';
import TabBar from './tab-bar.vue';
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
}

.layout-navbar {
	height: @nav-size-height;
}
</style>
