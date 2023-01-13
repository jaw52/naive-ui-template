import { defineComponent } from 'vue';
import { RouteRecordRaw, RouteMeta, NavigationGuard } from 'vue-router';

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

export type Component<T = any> =
	| ReturnType<typeof defineComponent>
	// @ts-ignore
	| (() => Promise<typeof import('*.vue')>)
	| (() => Promise<T>);

export type AppRouteRecordRaw = {
	path?: string;
	name?: string | symbol;
	meta?: RouteMeta;
	redirect?: string;
	component?: Component | string;
	children?: AppRouteRecordRaw[];
	alias?: string | string[];
	props?: Record<string, any>;
	beforeEnter?: NavigationGuard | NavigationGuard[];
	fullPath?: string;
};
