import { RouteRecordNormalized } from 'vue-router';
import { RoutePath } from '../../enums/route';
import { AppRouteRecordRaw } from '@/router/types';

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
