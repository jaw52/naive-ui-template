import { MainLayout } from '@/router/routes/base';
import { AppRouteRecordRaw } from '@/router/types';
import { BackupTableFilled } from '@vicons/material';

const LIST: AppRouteRecordRaw = {
	path: '/list',
	name: 'list',
	redirect: '/list/basic-list',
	component: MainLayout,
	meta: {
		title: '表格',
		icon: BackupTableFilled,
	},
	children: [
		{
			path: 'basic-list',
			name: 'basic-list',
			meta: {
				title: '基础列表',
			},
			component: () => import('@/views/base-list/index.vue'),
		},
		{
			path: 'senior-list',
			name: 'senior-list',
			meta: {
				title: '高级列表',
				roles: ['admin'],
			},
			component: () => import('@/views/senior-list/index.vue'),
		},
	],
};

export default LIST;
