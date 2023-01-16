import usePermission from '@/hooks/usePermission';
import { MenuOption } from 'naive-ui';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const useBreadInfo = () => {
	const permission = usePermission();
	const route = useRoute();

	const breadInfo = computed(() => {
		// 递归遍历路由配置,并筛选掉无权访问的路由
		function travel(_routes) {
			const collector = _routes.map((item) => {
				if (!permission.isAccessRouter(item)) {
					return false;
				}

				if (Array.isArray(item.children) && item.children.length > 0) {
					return {
						label: item.meta?.title,
						key: item?.name,
						children: travel(item.children),
					} as MenuOption;
				}

				return {
					label: item.meta?.title,
					key: item.name,
				};
			});

			return collector.filter(Boolean);
		}

		return travel(route.matched);
	});

	return { breadInfo };
};

export default useBreadInfo;
