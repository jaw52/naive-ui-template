import { useUserStore } from '@/store';
import { AppMeta } from '@/router/types';

export default function usePermission() {
	const userStore = useUserStore();

	// 是否可访问当前路由
	const isAccessRouter = (route: AppMeta) =>
		!route.meta?.roles ||
		route.meta?.roles?.includes('*') ||
		route.meta?.roles?.includes(userStore?.role ?? '*');

	return { isAccessRouter };
}
