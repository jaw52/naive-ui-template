<template>
	<div class="navbar">
		<n-space align="center">
			<img
				alt="logo"
				src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
			/>
			<n-h3> JoJo Template</n-h3>
		</n-space>

		<n-space align="center" :size="20">
			<tooltip-button content="搜索">
				<n-icon size="16">
					<search />
				</n-icon>
			</tooltip-button>

			<transition name="fade" mode="out-in" appear>
				<tooltip-button
					v-if="themeStore.dark"
					content="点击切换为亮色模式"
					@click="themeStore.toggleTheme()"
				>
					<n-icon size="16">
						<moon />
					</n-icon>
				</tooltip-button>

				<tooltip-button
					v-else
					content="点击切换为暗黑模式"
					@click="themeStore.toggleTheme()"
				>
					<n-icon size="16">
						<sunny />
					</n-icon>
				</tooltip-button>
			</transition>

			<tooltip-button content="页面设置" @click="visible = true">
				<n-icon size="16">
					<settings-outline />
				</n-icon>
			</tooltip-button>

			<avatar-dropdown />
		</n-space>

		<n-drawer v-model:show="visible" :width="300">
			<n-drawer-content title="页面设置" :native-scrollbar="false">
				<page-setting />
			</n-drawer-content>
		</n-drawer>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Moon, Search, Sunny, SettingsOutline } from '@vicons/ionicons5';
import { useThemeStore } from '@/store';
import TooltipButton from '@/layout/main-layout/components/tooltip-button.vue';
import AvatarDropdown from '@/layout/main-layout/navbar/avatar-dropdown.vue';
import PageSetting from '@/layout/main-layout/navbar/page-setting.vue';

const visible = ref(false);
const themeStore = useThemeStore();
</script>

<style scoped lang="less">
.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	padding: 0 20px;
}

h3 {
	margin-bottom: 0;
}
</style>
