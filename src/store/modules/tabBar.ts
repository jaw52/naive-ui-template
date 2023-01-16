import { RoutePath } from '../../enums/route';
import { defineStore } from 'pinia';
import type { RouteLocationNormalized } from 'vue-router';

export interface RouteTabProps {
	title: string;
	name: string;
	query?: any;
	path?: string;
	params?: Record<string, any>;
	fullPath?: string;
	ignoreCache?: boolean;
}

export interface TabBarState {
	tabList: RouteTabProps[];
}

const formatTag = (route: RouteLocationNormalized): RouteTabProps => {
	const { name, meta, fullPath, query, path, params } = route;

	return {
		title: meta?.title || '',
		name: String(name),
		fullPath,
		query,
		path,
		params,
		ignoreCache: meta?.ignoreKeepAlive,
	};
};

const BAN_LIST = [RoutePath.RedirectRouteName];

export const useTabBarStore = defineStore('app-tab-bar', {
	state: (): TabBarState => ({
		tabList: [],
	}),
	actions: {
		updateTabList(route: RouteLocationNormalized) {
			if (BAN_LIST.includes(route.name as RoutePath)) return;

			const nextItem = formatTag(route);

			const isExist = this.tabList
				.map((item) => item.fullPath)
				.includes(nextItem.fullPath);

			if (isExist) return;
			this.tabList.push(nextItem);
		},
		deleteTag(idx: number) {
			this.tabList.splice(idx, 1);
		},
	},
});
