import { RouteRecordRaw } from 'vue-router';

export type AppMeta = {
	meta?: {
		/* 限制用户角色访问 */
		roles?: string[];
		/* 路由标题 */
		title?: string;
		/* 该路由忽略keep-alive */
		ignoreKeepAlive?: boolean;
		/* 图标 */
		icon?: any;
	};
};

export type AppRouteRecordRaw = RouteRecordRaw & AppMeta;
