import { Router } from 'vue-router';
import usePermission from '@/hooks/usePermission';
import { RoutePath } from '@/enums/route';
import { AppRouteRecordRaw } from '../types';

// 守卫权限路由
export const setupPermissionGuard = (router: Router) => {
	router.beforeEach(async (to, from, next) => {
		const permission = usePermission();

		if (permission.isAccessRouter(to as AppRouteRecordRaw)) {
			next();
		} else {
			next({ name: RoutePath.DefaultPath });
		}
	});
};
