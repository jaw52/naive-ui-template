import { LocationQueryRaw, Router } from 'vue-router';
import { createDiscreteApi } from '@/utils/createDiscreteApi';
import { isLogin } from '@/utils/auth';
import { useTitle } from '@vueuse/core';
import { RoutePath } from '@/configs/constant';

export default function createRouteGuard(router: Router) {
	const { loadingBar } = createDiscreteApi();

	router.beforeEach(async (to, from, next) => {
		loadingBar.start();
		if (isLogin()) {
			next();
		} else {
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
	});

	router.afterEach((to) => {
		loadingBar.finish();
		// @ts-ignore
		useTitle(to.meta.title);
	});
}
