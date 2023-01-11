import { RoutePath } from '@/enums/route';
import { appRoutes } from '@/router/routes/appRoutes';
import { NOT_FOUND_ROUTE } from '@/router/routes/base';
import { AppRouteRecordRaw } from '@/router/types';

export const routes: AppRouteRecordRaw[] = [
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
	NOT_FOUND_ROUTE,
];
