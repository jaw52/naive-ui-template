import { AppRouteRecordRaw } from '@/router/types';
import { RouteLocationNormalized } from 'vue-router';
import { useUserStore } from '@/store';

export default function usePermission() {
	const userStore = useUserStore();

	// 是否可访问当前路由
	const isAccessRouter = (route: AppRouteRecordRaw) =>
		!route.meta?.roles ||
		route.meta?.roles?.includes('*') ||
		route.meta?.roles?.includes(userStore?.role ?? '*');

	return { isAccessRouter };
}
