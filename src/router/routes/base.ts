import { AppRouteRecordRaw } from '@/router/types';
import { RoutePath } from '../../enums/route';

export const MainLayout = () => import('@/layout/main-layout/index.vue');

export const NOT_FOUND_ROUTE: AppRouteRecordRaw = {
	path: '/:pathMatch(.*)*',
	name: 'notFound',
	component: () => import('@/views/not-found/index.vue'),
};

export const DEFAULT_ROUTE: AppRouteRecordRaw = {
	meta: {
		title: '基础列表',
		ignoreKeepAlive: true,
	},
	name: RoutePath.DefaultPath,
};

export const REDIRECT_MAIN: AppRouteRecordRaw = {
	path: `/${RoutePath.RedirectRouteName}`,
	name: 'redirectWrapper',
	component: MainLayout,
	meta: {
		ignoreKeepAlive: true,
	},
	children: [
		{
			path: `/${RoutePath.RedirectRouteName}/:name`,
			name: RoutePath.RedirectRouteName,
			component: () => import('@/views/redirect/index.vue'),
			meta: {
				title: '刷新中...',
			},
		},
	],
};
