import { RoutePath } from '@/enums/route';
import { appRoutes } from '@/router/routes/appRoutes';
import { RouteRecordRaw } from 'vue-router';
import { NOT_FOUND_ROUTE, REDIRECT_MAIN } from './base';

export const routes = [
	{
		path: '/',
		redirect: RoutePath.LoginPath,
	},
	{
		path: `/${RoutePath.LoginPath}`,
		name: RoutePath.LoginPath,
		component: () => import('@/views/login/index.vue'),
		meta: {
			title: '登录',
			ignoreKeepAlive: true,
		},
	},
	...appRoutes,
	REDIRECT_MAIN,
	NOT_FOUND_ROUTE,
] as RouteRecordRaw[];
