<template>
	<div class="navbar">
		<n-space align="center" :size="20">
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
import TooltipButton from '@/layout/main-layout/components/tooltip-button.vue';
import AvatarDropdown from '@/layout/main-layout/navbar/avatar-dropdown.vue';
import PageSetting from '@/layout/main-layout/navbar/page-setting.vue';
import { useThemeStore } from '@/store';
import { Moon, SettingsOutline, Sunny } from '@vicons/ionicons5';
import { ref } from 'vue';

const visible = ref(false);
const themeStore = useThemeStore();
</script>

<style scoped lang="less">
.navbar {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 100%;
	padding: 0 20px;
}
</style>
