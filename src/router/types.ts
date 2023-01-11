import { RouteRecordRaw } from 'vue-router';

export type AppMeta = {
	meta?: {
		/* 是否需要权限验证 */
		requiresAuth?: boolean;
		/* 用户角色 */
		roles?: string[];
		/* 路由标题 */
		title?: string;
		/* 该路由忽略keep-alive */
		ignoreKeepAlive?: boolean;
	};
};

export type AppRouteRecordRaw = RouteRecordRaw & AppMeta;
