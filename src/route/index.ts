import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import createRouteGuard from '@/route/guard';
import { RoutePath } from '@/enums/route';

const NOT_FOUND_ROUTE: RouteRecordRaw = {
	path: '/:pathMatch(.*)*',
	name: 'notFound',
	component: () => import('@/views/not-found/index.vue'),
};

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
	{
		path: `/${RoutePath.DefaultPath}`,
		name: RoutePath.DefaultPath,
		component: () => import('@/views/main/index.vue'),
		meta: {
			title: '主页',
			requiresAuth: true,
		},
	},
	NOT_FOUND_ROUTE,
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
