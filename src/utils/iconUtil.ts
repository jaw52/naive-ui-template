import { h } from 'vue';
import { NIcon } from 'naive-ui';

export const renderIcon = (icon) => () =>
	h(NIcon, null, { default: () => h(icon) });
