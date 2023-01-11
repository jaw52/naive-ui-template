import { MainLayout } from '@/router/routes/base';
import { AppRouteRecordRaw } from '@/router/types';

const LIST: AppRouteRecordRaw = {
	path: '/list',
	name: 'list',
	redirect: '/list/basic-list',
	component: MainLayout,
	meta: {
		title: '主页',
		requiresAuth: true,
	},
	children: [
		{
			path: 'basic-list',
			name: 'basic-list',
			meta: {
				title: '基础列表',
				ignoreKeepAlive: true,
			},
			component: () => import('@/views/base-list/index.vue'),
		},
		{
			path: 'senior-list',
			name: 'senior',
			meta: {
				title: '高级列表',
				roles: ['admin'],
			},
			component: () => import('@/views/senior-list/index.vue'),
		},
	],
};

export default LIST;
