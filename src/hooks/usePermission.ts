import { useUserStore } from '@/store';
import { AppMeta } from '@/router/types';

export default function usePermission() {
	const userStore = useUserStore();

	// 是否为权限路由
	const isAuthRouter = (to: AppMeta) =>
		!to.meta?.requiresAuth ||
		!to.meta?.roles ||
		to.meta?.roles?.includes('*') ||
		to.meta?.roles?.includes(userStore?.role ?? '*');

	return { isAuthRouter };
}
