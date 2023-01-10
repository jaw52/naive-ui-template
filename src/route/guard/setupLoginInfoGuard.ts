import { isLogin } from '@/utils/auth';
import { useUserStore } from '@/store';
import { RoutePath } from '@/enums/route';
import {
	LocationQueryRaw,
	NavigationGuardNext,
	RouteLocationNormalized,
} from 'vue-router';

export const setupLoginInfoGuard = async (
	to: RouteLocationNormalized,
	_from: RouteLocationNormalized,
	next: NavigationGuardNext
) => {
	// 已登录的，需要每次查验role
	if (isLogin()) {
		const userStore = useUserStore();

		if (userStore.role) {
			next();
		} else {
			try {
				await userStore.info();
				next();
			} catch (error) {
				await userStore.logout();

				// 将当前路由所携带的信息传到login页面，便于登录后返回
				next({
					name: RoutePath.LoginPath,
					query: {
						redirect: to.name,
						...to.query,
					} as LocationQueryRaw,
				});
			}
		}
	} else {
		// 未登录的，返回登录页
		if (to.name === RoutePath.LoginPath) {
			next();
			return;
		}
		next({
			name: RoutePath.LoginPath,
			query: {
				redirect: to.name,
				...to.query,
			} as LocationQueryRaw,
		});
	}
};