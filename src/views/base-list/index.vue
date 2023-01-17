<template>
	<div>
		<div class="handle-area">
			<n-dropdown
				v-model:value="size"
				trigger="click"
				:options="densityOptions"
				@select="(v) => (size = v)"
			>
				<n-icon size="16">
					<ColumnHeightOutlined />
				</n-icon>
			</n-dropdown>

			<n-popover placement="bottom" trigger="click">
				<template #trigger>
					<n-icon size="16">
						<SettingOutlined />
					</n-icon>
				</template>

				<draggable
					v-model="columnsSetting"
					item-key="key"
					class="list-group"
					ghost-class="ghost"
					:animation="200"
					handle=".darg-handle"
					@start="dragging = true"
					@end="dragging = false"
				>
					<template #item="{ element }">
						<div class="list-group-item">
							<n-icon class="darg-handle" :color="themeVars.primaryColor">
								<DragIndicatorOutlined />
							</n-icon>

							<n-checkbox v-model:checked="element.show" size="small" />

							<span class="drag-title"> {{ element.title }}</span>
						</div>
					</template>
				</draggable>
			</n-popover>
		</div>

		<n-data-table
			:columns="columns"
			:data="data"
			:pagination="false"
			:bordered="false"
			:size="size"
		/>
	</div>
</template>

<script lang="ts" setup>
import { DragIndicatorOutlined } from '@vicons/material';
import { ColumnHeightOutlined, SettingOutlined } from '@vicons/antd';
import { DataTableColumns, useThemeVars } from 'naive-ui';
import { computed, ref } from 'vue';
import draggable from 'vuedraggable';

const defaultColumns: DataTableColumns<any> = [
	{
		title: 'No',
		key: 'no',
	},
	{
		title: 'Title',
		key: 'title',
	},
	{
		title: 'Length',
		key: 'length',
	},
];

const columnsSetting = ref(defaultColumns.map((el) => ({ ...el, show: true })));

const columns = computed(() => columnsSetting.value.filter((el) => el.show));

const data = [
	{ no: 3, title: 'Wonderwall', length: '4:18' },
	{ no: 4, title: "Don't Look Back in Anger", length: '4:48' },
	{ no: 12, title: 'Champagne Supernova', length: '7:27' },
];

const dragging = ref(false);
const themeVars = useThemeVars();

const size = ref<'small' | 'medium' | 'large'>('medium');

const densityOptions = [
	{
		label: '紧凑',
		key: 'small',
	},
	{
		label: '默认',
		key: 'medium',
	},
	{
		label: '宽松',
		key: 'large',
	},
];
</script>

<style lang="less" scoped>
.list-group {
	max-height: 300px;
	padding: 0 8px;
	overflow-y: auto;
}

.drag-title {
	font-size: 12px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	width: 80%;
}

.ghost {
	opacity: 0.5;
	background: #c6e2ff;
}

.handle-area {
	display: flex;
	justify-content: flex-end;
	margin-bottom: 16px;
	gap: 16px;
}

.darg-handle:hover {
	cursor: move;
}

.list-group-item {
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 3px 0;
}
</style>
