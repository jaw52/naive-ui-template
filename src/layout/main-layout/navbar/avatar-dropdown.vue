<template>
	<n-dropdown :options="options">
		<n-avatar round size="small" :src="userStore.avatar" />
	</n-dropdown>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store';
import { renderIcon } from '@/utils/iconUtil';
import {
	ModeEditOutlined,
	LogOutSharp,
	PersonOutlineFilled,
} from '@vicons/material';
import { DropdownOption, useMessage, useDialog } from 'naive-ui';
import { useRouter } from 'vue-router';
import { RoutePath } from '@/enums/route';

const userStore = useUserStore();
const router = useRouter();
const message = useMessage();
const dialog = useDialog();

const logout = async () => {
	await userStore.logout();
	message.success('登出成功');
	const currentRoute = router.currentRoute.value;

	await router.push({
		name: RoutePath.LoginPath,
		query: {
			...currentRoute.query,
			redirect: currentRoute.name as string,
		},
	});
};

const confirmLogout = () => {
	dialog.info({
		title: '退出登录',
		positiveText: '确定',
		negativeText: '取消',
		onPositiveClick: async () => {
			await logout();
		},
	});
};

const options: DropdownOption[] = [
	{
		label: '用户资料',
		key: 'profile',
		icon: renderIcon(PersonOutlineFilled),
	},
	{
		label: '用户设置',
		key: 'editProfile',
		icon: renderIcon(ModeEditOutlined),
	},
	{
		label: '退出登录',
		key: 'logout',
		icon: renderIcon(LogOutSharp),
		props: {
			onClick: () => confirmLogout(),
		},
	},
];
</script>

<style scoped></style>
