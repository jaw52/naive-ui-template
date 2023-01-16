<template>
	<n-breadcrumb>
		<n-breadcrumb-item>
			<n-icon :size="16"><logo-xbox /></n-icon>
		</n-breadcrumb-item>
		<template v-for="item in breadInfo" :key="item.key">
			<n-breadcrumb-item v-if="item.label">
				<n-dropdown
					v-if="item?.children?.length"
					:options="item?.children"
					:render-label="renderLink"
				>
					<span>
						{{ item.label }}
					</span>
				</n-dropdown>
				<span v-else>
					{{ item.label }}
				</span>
			</n-breadcrumb-item>
		</template>
	</n-breadcrumb>
</template>
<script lang="tsx" setup>
import { LogoXbox } from '@vicons/ionicons5';
import useBreadInfo from './useBreadInfo';
import { DropdownOption } from 'naive-ui';
import { useRoute } from 'vue-router';

const { breadInfo } = useBreadInfo();
const route = useRoute();

const renderLink = (options: DropdownOption) => {
	if (route.name === options.key) {
		return <span>{options.label}</span>;
	}
	return <router-link to={options.key}>{options.label}</router-link>;
};
</script>
<style scoped></style>
