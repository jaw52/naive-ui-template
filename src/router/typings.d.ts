import 'vue-router';

declare module 'vue-router' {
	interface RouteMeta {
		roles?: string[]; // Controls roles that have access to the page
		icon?: any; // The icon show in the side menu
		title?: string; // 路由标题
		ignoreKeepAlive?: boolean; // 该路由忽略keep-alive
	}
}
