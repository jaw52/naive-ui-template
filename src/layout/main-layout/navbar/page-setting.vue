<template>
	<n-h6 prefix="bar" class="title"> 暗夜模式 </n-h6>

	<n-space justify="center">
		<n-tooltip placement="bottom">
			<template #trigger>
				<n-switch v-model:value="themeStore.dark">
					<template #checked>
						<n-icon size="14" color="#ffd93b">
							<Sunny />
						</n-icon>
					</template>
					<template #unchecked>
						<n-icon size="14" color="#ffd93b">
							<Moon />
						</n-icon>
					</template>
				</n-switch>
			</template>
			<span v-if="themeStore.dark">点击切换为暗黑模式</span>
			<span v-else>点击切换为亮色模式</span>
		</n-tooltip>
	</n-space>

	<n-h6 prefix="bar" class="title"> 主题色 </n-h6>
	<n-space>
		<div
			v-for="item in appColorList"
			:key="item"
			:style="{ backgroundColor: item }"
			:class="{
				'color-tag': true,
				'color-tag-active': item === themeStore.themeColor,
			}"
			@click="changeColor(item)"
		/>
	</n-space>

	<n-h6 prefix="bar" class="title"> 导航栏风格 </n-h6>
	<n-space justify="center">
		<n-tooltip v-for="item in menuStyle" :key="item.title" placement="top">
			<template #trigger>
				<img
					:class="{ 'color-tag-active': item.dark === settingStore.dark }"
					:src="loadImages(item.path)"
					:alt="item.title"
					@click="settingStore.toggleTheme(item.dark)"
				/>
			</template>
			<span>{{ item.title }}</span>
		</n-tooltip>
	</n-space>
</template>

<script setup lang="ts">
import { appColorList } from '@/config/theme';
import { useThemeStore } from '@/store';
import { useSettingStore } from '@/store/modules/setting';
import { loadImages } from '@/utils/viteUtils';
import { generate } from '@ant-design/colors';
import { Moon, Sunny } from '@vicons/ionicons5';
import { useMessage } from 'naive-ui';
import { computed } from 'vue';

const themeStore = useThemeStore();
const settingStore = useSettingStore();

const message = useMessage();

const changeColor = (color: string) => {
	themeStore.changePrimaryColor(color);
	message.success('设置成功');
};

const lightColor = computed(() => generate(themeStore.themeColor)[2]);

const menuStyle: { title: string; path: string; dark: boolean }[] = [
	{
		title: '暗色侧边栏',
		path: 'nav-theme-dark.svg',
		dark: true,
	},
	{
		title: '白色侧边栏',
		path: 'nav-theme-light.svg',
		dark: false,
	},
];
</script>

<style scoped>
.color-tag {
	width: 20px;
	height: 20px;
	cursor: pointer;
}

.color-tag-active {
	box-shadow: 5px 5px 1px v-bind(lightColor);
}

.title {
	font-weight: 600;
	font-size: 14px;
}
</style>
