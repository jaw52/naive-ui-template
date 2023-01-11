import { AppRouteRecordRaw } from '@/router/types';

export const MainLayout = () => import('@/layout/main-layout/index.vue');

export const NOT_FOUND_ROUTE: AppRouteRecordRaw = {
	path: '/:pathMatch(.*)*',
	name: 'notFound',
	component: () => import('@/views/not-found/index.vue'),
};
