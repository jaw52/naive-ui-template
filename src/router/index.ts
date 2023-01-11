import { createRouter, createWebHashHistory } from 'vue-router';
import createRouteGuard from '@/router/guard';
import { routes } from '@/router/routes';

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior() {
		return { top: 0 };
	},
});

createRouteGuard(router);

export default router;
