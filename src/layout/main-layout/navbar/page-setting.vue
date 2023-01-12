<template>
	<n-h6 prefix="bar"> 主题色 </n-h6>
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
</template>

<script setup lang="ts">
import { appColorList } from '@/config/theme';
import { useThemeStore } from '@/store';
import { generate } from '@ant-design/colors';
import { useMessage } from 'naive-ui';
import { computed } from 'vue';

const themeStore = useThemeStore();

const message = useMessage();

const changeColor = (color: string) => {
	themeStore.changePrimaryColor(color);
	message.success('设置成功');
};

const lightColor = computed(() => generate(themeStore.themeColor)[3]);
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
</style>
