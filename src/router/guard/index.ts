import { Router } from 'vue-router';
import { useTitle } from '@vueuse/core';
import { setupLoginInfoGuard } from './setupLoginInfoGuard';
import { useCreateDiscreteApi } from '@/hooks/useCreateDiscreteApi';
import { setupPermissionGuard } from '@/router/guard/setupPermissionGuard';
import { AppMeta } from '@/router/types';

export default function createRouteGuard(router: Router) {
	const { loadingBar } = useCreateDiscreteApi();

	setupLoginInfoGuard(router, loadingBar);
	setupPermissionGuard(router);

	router.afterEach((to: AppMeta) => {
		loadingBar.finish();
		useTitle(to.meta?.title);
	});
}
