import { defineStore } from 'pinia';
import type { RouteLocationNormalized } from 'vue-router';

export interface RouteTabProps {
	title: string;
	name: string;
	query?: any;
	fullPath?: string;
	ignoreCache?: boolean;
}

export interface TabBarState {
	tabList: RouteTabProps[];
}

const formatTag = (route: RouteLocationNormalized): RouteTabProps => {
	const { name, meta, fullPath, query } = route;

	return {
		title: meta?.title || '',
		name: String(name),
		fullPath,
		query,
		ignoreCache: meta?.ignoreKeepAlive,
	};
};

export const useTabBarStore = defineStore('app-tab-bar', {
	state: (): TabBarState => ({
		tabList: [],
	}),
	actions: {
		updateTabList(route: RouteLocationNormalized) {
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
