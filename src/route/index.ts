import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import createRouteGuard from '@/route/guard';
import { RoutePath } from '@/enums/route';

const routes: RouteRecordRaw[] = [
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
			requiresAuth: false,
		},
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior() {
		return { top: 0 };
	},
});

createRouteGuard(router);

export default router;
