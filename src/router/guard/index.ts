import { useCreateDiscreteApi } from '@/hooks/useCreateDiscreteApi';
import { setupPermissionGuard } from '@/router/guard/setupPermissionGuard';
import { useTitle } from '@vueuse/core';
import { Router } from 'vue-router';
import { setupLoginInfoGuard } from './setupLoginInfoGuard';

export default function createRouteGuard(router: Router) {
	const { loadingBar } = useCreateDiscreteApi();

	setupLoginInfoGuard(router, loadingBar);
	setupPermissionGuard(router);

	router.afterEach((to) => {
		loadingBar.finish();
		useTitle(to.meta?.title);
	});
}
