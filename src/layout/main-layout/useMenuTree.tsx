import usePermission from '@/hooks/usePermission';
import { appRoutes } from '@/router/routes/appRoutes';
import { computed } from 'vue';
import { AppRouteRecordRaw } from '@/router/types';
import { MenuOption } from 'naive-ui';
import { renderIcon } from '@/utils/iconUtil';

const useMenuTree = () => {
	const permission = usePermission();

	const menuTree = computed(() => {
		// 递归遍历路由配置,并筛选掉无权访问的路由
		function travel(_routes: AppRouteRecordRaw[]) {
			const collector = _routes.map((item) => {
				if (!permission.isAccessRouter(item)) {
					return false;
				}
				const icon = item.meta?.icon ? renderIcon(item.meta?.icon) : undefined;

				if (Array.isArray(item.children) && item.children.length > 0) {
					return {
						label: item.meta?.title,
						key: item?.name,
						icon,
						children: travel(item.children),
					} as MenuOption;
				}

				return {
					label: () => (
						<router-link to={item.name}>{item.meta?.title}</router-link>
					),
					icon,
					key: item.name,
				};
			});

			return collector.filter(Boolean);
		}

		return travel(appRoutes);
	});

	return { menuTree };
};

export default useMenuTree;
