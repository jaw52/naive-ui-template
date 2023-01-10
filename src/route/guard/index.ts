import { Router } from 'vue-router';
import { useTitle } from '@vueuse/core';
import { setupLoginInfoGuard } from './setupLoginInfoGuard';
import { createDiscreteApiNa } from '@/utils/createDiscreteApiNa';

export default function createRouteGuard(router: Router) {
	const { loadingBar } = createDiscreteApiNa();

	router.beforeEach(async (to, from, next) => {
		loadingBar.start();
		await setupLoginInfoGuard(to, from, next);
	});

	router.afterEach((to) => {
		loadingBar.finish();
		// @ts-ignore
		useTitle(to.meta.title);
	});
}
